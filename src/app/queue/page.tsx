"use client";

import { useApiQueue } from '@/hooks/useApiQueue';
import { Loader2, CheckCircle2, XCircle, Clock, AlertTriangle } from 'lucide-react';

export default function ApiQueue() {
    const { queue, results, isProcessing, currentProcessingId, addToQueue } = useApiQueue();

    const handleAddRequest = () => {
        addToQueue({ timestamp: Date.now(), type: 'manual', message: 'Hello World!' });
    };

    const handleAddBatch = () => {
        for (let i = 0; i < 5; i++) {
            addToQueue({ timestamp: Date.now(), type: 'batch', message: `Hello World! ${i}` });
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
            <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">API Queue System</h2>
                <p className="text-muted-foreground">
                    Protects the backend from rate limits (10 req/min) by queuing requests on the frontend.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                    <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                        <h3 className="font-semibold mb-4">Controls</h3>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={handleAddRequest}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            >
                                Add Request
                            </button>
                            <button
                                onClick={handleAddBatch}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            >
                                Add Batch (5)
                            </button>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                        <h3 className="font-semibold mb-4">Queue Status</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Pending Requests</span>
                                <span className="inline-flex items-center justify-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                                    {queue.length}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Status</span>
                                <div className="flex items-center gap-2">
                                    {isProcessing ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin text-primary" />
                                            <span className="text-sm font-medium text-primary">Processing...</span>
                                        </>
                                    ) : (
                                        <span className="text-sm font-medium text-muted-foreground">Idle</span>
                                    )}
                                </div>
                            </div>
                            {currentProcessingId && (
                                <div className="p-3 rounded-lg bg-muted/50 text-xs font-mono">
                                    Processing ID: {currentProcessingId}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold">Recent Activity</h3>
                        <span className="text-xs text-muted-foreground">{results.length} processed</span>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                        {results.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50">
                                <Clock className="h-8 w-8 mb-2" />
                                <p className="text-sm">No requests processed yet</p>
                            </div>
                        ) : (
                            results.map((result) => (
                                <div
                                    key={`${result.id}-${result.timestamp}`}
                                    className={`p-3 rounded-lg border text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${result.status === 'success' ? 'bg-green-500/10 border-green-500/20' :
                                            result.status === 'rate_limited' ? 'bg-yellow-500/10 border-yellow-500/20' :
                                                'bg-red-500/10 border-red-500/20'
                                        }`}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            {result.status === 'success' && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                                            {result.status === 'rate_limited' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                                            {result.status === 'error' && <XCircle className="h-4 w-4 text-red-500" />}
                                            <span className="font-medium">
                                                {result.status === 'success' ? 'Success' :
                                                    result.status === 'rate_limited' ? 'Rate Limited' : 'Error'}
                                            </span>
                                        </div>
                                        <span className="text-xs opacity-70">
                                            {new Date(result.timestamp).toLocaleTimeString()}
                                        </span>
                                    </div>

                                    {result.error && (
                                        <p className="mt-1 text-xs opacity-90">{result.error}</p>
                                    )}

                                    {result.data && (
                                        <div className="mt-2 p-2 rounded bg-background/50 text-xs font-mono overflow-hidden text-ellipsis whitespace-nowrap">
                                            {JSON.stringify(result.data.echo || result.data)}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}