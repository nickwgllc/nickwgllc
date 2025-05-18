import { NextResponse } from "next/server"
import { Pool } from "pg"

export async function GET() {
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL && !process.env.POSTGRES_URL) {
    return NextResponse.json({ error: "Database connection string is not configured" }, { status: 500 })
  }

  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL
  const pool = new Pool({ connectionString })

  try {
    // Test the connection with a simple query
    const result = await pool.query("SELECT NOW() as current_time")

    return NextResponse.json({
      success: true,
      message: "Database connection successful!",
      serverTime: result.rows[0].current_time,
    })
  } catch (error: any) {
    console.error("Database connection error:", error)

    return NextResponse.json(
      {
        error: "Failed to connect to database",
        details: error.message,
      },
      { status: 500 },
    )
  } finally {
    // Close the pool
    await pool.end()
  }
}

