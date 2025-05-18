"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, RefreshCw } from "lucide-react"

export function CheckApiKey() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    configured?: boolean
    valid?: boolean
    message?: string
    error?: string
    keyFirstChars?: string
    keyLastChars?: string
  } | null>(null)

  const checkApiKey = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/check-openai-key")
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        configured: false,
        valid: false,
        message: "Error checking API key",
        error: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Check on component mount
  useEffect(() => {
    checkApiKey()
  }, [])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>OpenAI API Key Status</CardTitle>
        <CardDescription>Check if your OpenAI API key is properly configured</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <RefreshCw className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : result ? (
          <div
            className={`p-4 rounded-md ${result.valid ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
          >
            {result.valid ? (
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-green-800">{result.message}</p>
                  {result.keyFirstChars && result.keyLastChars && (
                    <p className="mt-2 text-sm text-green-700">
                      API Key: {result.keyFirstChars}...{result.keyLastChars}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-red-800">{result.message}</p>
                  {result.error && <p className="mt-2 text-sm text-red-700">{result.error}</p>}
                  {result.keyFirstChars && result.keyLastChars && (
                    <p className="mt-2 text-sm text-red-700">
                      API Key: {result.keyFirstChars}...{result.keyLastChars}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button onClick={checkApiKey} disabled={isLoading} className="w-full">
          {isLoading ? "Checking..." : "Check API Key Again"}
        </Button>
      </CardFooter>
    </Card>
  )
}

