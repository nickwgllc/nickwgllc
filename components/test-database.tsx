"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

export function TestDatabase() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success?: boolean
    message?: string
    serverTime?: string
    error?: string
    details?: string
  } | null>(null)

  const testDatabase = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-database")
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: "Failed to test database connection",
        details: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Database Connection Test</CardTitle>
        <CardDescription>Test your database connection configuration</CardDescription>
      </CardHeader>
      <CardContent>
        {result && (
          <div
            className={`p-4 rounded-md ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
          >
            {result.success ? (
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-green-800">{result.message}</p>
                  {result.serverTime && <p className="mt-2 text-sm text-green-700">Server time: {result.serverTime}</p>}
                </div>
              </div>
            ) : (
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-red-800">{result.error}</p>
                  {result.details && <p className="mt-2 text-sm text-red-700">{result.details}</p>}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={testDatabase} disabled={isLoading} className="w-full">
          {isLoading ? "Testing..." : "Test Database Connection"}
        </Button>
      </CardFooter>
    </Card>
  )
}

