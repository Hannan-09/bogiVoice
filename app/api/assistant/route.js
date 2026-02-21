import { NextResponse } from "next/server";

// GET → Test directly in browser
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "BOGI backend is running 🚀",
  });
}

// POST → Used by React Native app
export async function POST(req) {
  try {
    const body = await req.json();
    const userText = body.text;

    if (!userText) {
      return NextResponse.json(
        { success: false, message: "No text provided" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      type: "test",
      reply: `Hello, you said: ${userText}`,
    });

  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}