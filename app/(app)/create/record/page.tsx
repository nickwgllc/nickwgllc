"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Mic, Pause, Play, Square, Wand2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function RecordPage() {
  const router = useRouter()
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedFeed, setSelectedFeed] = useState("")

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRecording, isPaused])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    setIsPaused(false)
  }

  const handlePauseRecording = () => {
    setIsPaused(true)
  }

  const handleResumeRecording = () => {
    setIsPaused(false)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    setIsPaused(false)
  }

  const handleProcessAudio = () => {
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
    }, 2000)
  }

  const handlePublish = () => {
    // Simulate publishing
    router.push("/feeds")
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Record an Episode</h1>
        <p className="text-muted-foreground mt-2">Record audio directly in your browser with AI enhancement</p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Recording Studio</CardTitle>
            <CardDescription>Click the microphone button to start recording</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/30">
              <div className="text-4xl font-mono mb-8">{formatTime(recordingTime)}</div>

              <div className="flex items-center gap-4">
                {!isRecording ? (
                  <Button size="lg" className="rounded-full h-16 w-16" onClick={handleStartRecording}>
                    <Mic className="h-8 w-8" />
                  </Button>
                ) : (
                  <>
                    {isPaused ? (
                      <Button size="lg" className="rounded-full h-16 w-16" onClick={handleResumeRecording}>
                        <Play className="h-8 w-8" fill="currentColor" />
                      </Button>
                    ) : (
                      <Button size="lg" className="rounded-full h-16 w-16" onClick={handlePauseRecording}>
                        <Pause className="h-8 w-8" />
                      </Button>
                    )}
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-16 w-16"
                      onClick={handleStopRecording}
                    >
                      <Square className="h-8 w-8" />
                    </Button>
                  </>
                )}
              </div>

              {recordingTime > 0 && !isRecording && (
                <div className="mt-8 w-full max-w-md">
                  <Button className="w-full" onClick={handleProcessAudio} disabled={isProcessing}>
                    {isProcessing ? (
                      "Processing..."
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Enhance with AI
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            {recordingTime > 0 && !isRecording && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Episode Title</Label>
                  <Input id="title" placeholder="e.g., Weekly Update - May 20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="What is this episode about?" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feed">Add to Feed</Label>
                  <Select value={selectedFeed} onValueChange={setSelectedFeed}>
                    <SelectTrigger id="feed">
                      <SelectValue placeholder="Select a feed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leadership">Leadership Updates</SelectItem>
                      <SelectItem value="sales">Sales Training</SelectItem>
                      <SelectItem value="product">Product Knowledge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ai-enhancements">AI Enhancements</Label>
                    <Switch id="ai-enhancements" defaultChecked />
                  </div>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="noise-reduction" className="text-sm">
                          Noise Reduction
                        </Label>
                        <span className="text-xs text-muted-foreground">Medium</span>
                      </div>
                      <Slider id="noise-reduction" defaultValue={[50]} max={100} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="silence-removal" className="text-sm">
                          Silence Removal
                        </Label>
                        <span className="text-xs text-muted-foreground">Medium</span>
                      </div>
                      <Slider id="silence-removal" defaultValue={[50]} max={100} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="volume-leveling" className="text-sm">
                          Volume Leveling
                        </Label>
                        <span className="text-xs text-muted-foreground">High</span>
                      </div>
                      <Slider id="volume-leveling" defaultValue={[75]} max={100} step={1} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          {recordingTime > 0 && !isRecording && (
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button onClick={handlePublish}>Publish Episode</Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

