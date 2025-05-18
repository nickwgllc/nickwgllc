import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if the API key is set
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json({
        configured: false,
        message: "OpenAI API key is not configured",
        keyFirstChars: null,
        keyLastChars: null,
      })
    }

    // For security, only show parts of the key
    const firstChars = apiKey.substring(0, 3)
    const lastChars = apiKey.substring(apiKey.length - 4)

    // Make a simple request to OpenAI to validate the key
    const response = await fetch("https://api.openai.com/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (response.ok) {
      return NextResponse.json({
        configured: true,
        valid: true,
        message: "OpenAI API key is valid and working",
        keyFirstChars: firstChars,
        keyLastChars: lastChars,
      })
    } else {
      const error = await response.json()
      return NextResponse.json({
        configured: true,
        valid: false,
        message: "OpenAI API key is configured but not valid",
        error: error.error?.message || "Unknown error",
        keyFirstChars: firstChars,
        keyLastChars: lastChars,
      })
    }
  } catch (error: any) {
    return NextResponse.json({
      configured: true,
      valid: false,
      message: "Error checking OpenAI API key",
      error: error.message,
    })
  }
}

