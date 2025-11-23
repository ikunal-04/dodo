import { useState, useCallback, useRef } from "react";

type QueueItem = {
  id: string;
  payload: any;
  message: string;
  timestamp: number;
};

type ApiResult = {
  id: string;
  status: "success" | "error" | "rate_limited";
  data?: any;
  error?: string;
  timestamp: number;
};

export function useApiQueue() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [results, setResults] = useState<ApiResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProcessingId, setCurrentProcessingId] = useState<string | null>(
    null
  );

  const queueRef = useRef<QueueItem[]>([]);
  const isProcessingRef = useRef(false);

  const processQueue = useCallback(async () => {
    if (isProcessingRef.current) return;

    isProcessingRef.current = true;
    setIsProcessing(true);

    try {
      while (queueRef.current.length > 0) {
        const item = queueRef.current.shift();
        if (!item) break;

        setQueue((prev) => prev.filter((q) => q.id !== item.id));
        setCurrentProcessingId(item.id);

        try {
          const response = await fetch("/api/echo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item.payload),
          });

          let data: any = null;
          try {
            data = await response.json();
          } catch {
            data = null;
          }

          if (response.status === 429) {
            const retryAfterHeader = response.headers.get("Retry-After");
            const retryAfterSec = retryAfterHeader
              ? parseInt(retryAfterHeader, 10)
              : 60;

            setResults((prev) => [
              {
                id: item.id,
                status: "rate_limited",
                error:
                  data?.error ||
                  `Rate limited by backend. Suggested wait ${retryAfterSec}s.`,
                timestamp: Date.now(),
              },
              ...prev,
            ]);

          } else if (!response.ok) {
            setResults((prev) => [
              {
                id: item.id,
                status: "error",
                error: data?.error || data?.message || `HTTP ${response.status}`,
                timestamp: Date.now(),
              },
              ...prev,
            ]);
          } else {
            setResults((prev) => [
              {
                id: item.id,
                status: "success",
                data,
                timestamp: Date.now(),
              },
              ...prev,
            ]);
          }
        } catch (error: any) {
          setResults((prev) => [
            {
              id: item.id,
              status: "error",
              error:
                error instanceof Error
                  ? error.message
                  : "Network or unknown error",
              timestamp: Date.now(),
            },
            ...prev,
          ]);
        } finally {
          setCurrentProcessingId(null);
        }
      }
    } finally {
      isProcessingRef.current = false;
      setIsProcessing(false);
    }
  }, []);

  const addToQueue = useCallback(
    (payload: any) => {
      const newItem: QueueItem = {
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : Math.random().toString(36).substring(2),
        payload,
        timestamp: Date.now(),
        message: payload.message,
      };

      // update in memory queue
      queueRef.current.push(newItem);
      // update React state for UI
      setQueue((prev) => [...prev, newItem]);

      // kick the worker
      processQueue();
    },
    [processQueue]
  );

  return {
    queue,
    results,
    isProcessing,
    currentProcessingId,
    addToQueue,
  };
}
