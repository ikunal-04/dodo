
export async function POST(req: Request) {
    const body = await req.json();
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return Response.json({
        status: "ok",
        echo: body
    })
}