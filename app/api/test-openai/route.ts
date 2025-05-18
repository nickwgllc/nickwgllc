import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function GET() {
  try {
    // Check if the API key is set
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 })
    }

    // Test the API key with a simple request
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: "Briefly describe what InCrowd.fm is in one sentence.",
    })

    return NextResponse.json({
      success: true,
      message: "OpenAI API key is working correctly!",
      response: text,
    })
  } catch (error: any) {
    console.error("OpenAI API error:", error)

    return NextResponse.json(
      {
        error: "Failed to connect to OpenAI API",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

