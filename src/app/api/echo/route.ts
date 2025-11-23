import { NextResponse } from "next/server";

const RATE_LIMIT = Number(process.env.RATE_LIMIT || 10);

let windowStart = Date.now();
let count = 0;

function checkRateLimit() {
    const now = Date.now();
    const oneMinute = 60_000;

    if (now - windowStart >= oneMinute) {
        windowStart = now;
        count = 0;
    }

    if (count >= RATE_LIMIT) {
        return false;
    }

    count += 1;
    return true;
}

export async function POST(req: Request) {
    if (!checkRateLimit()) {
        return NextResponse.json({
            status: "error",
            error: "Rate limit exceeded. Please try again later.",
        }, { status: 429 });
    }

    const body = await req.json();
    const message = body?.message;

    if (typeof message !== "string" || message.trim().length === 0) {
        return NextResponse.json({
            status: "error",
            error: "Invalid or missing 'message' field",
        }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
        status: "ok",
        echo: message,
    });
}
