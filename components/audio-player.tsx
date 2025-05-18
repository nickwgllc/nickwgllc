"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, Bookmark, Share2, Download } from "lucide-react"

interface AudioPlayerProps {
  title: string
  author: string
  coverImage: string
}

export function AudioPlayer({ title, author, coverImage }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element for demo
    const audio = new Audio("/placeholder-audio.mp3")
    audioRef.current = audio

    // Set duration for demo (normally this would come from the audio file)
    setDuration(320) // 5:20 in seconds

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeChange = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const skipForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(currentTime + 15, duration)
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const skipBackward = () => {
    if (audioRef.current) {
      const newTime = Math.max(currentTime - 15, 0)
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-5 w-5" />
    if (volume < 50) return <Volume1 className="h-5 w-5" />
    return <Volume2 className="h-5 w-5" />
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-40">
      <div className="container flex items-center h-20 px-4">
        <div className="flex items-center gap-3 w-1/4">
          <img src={coverImage || "/placeholder.svg"} alt={title} className="h-12 w-12 rounded-md object-cover" />
          <div className="min-w-0">
            <h4 className="font-medium truncate">{title}</h4>
            <p className="text-sm text-muted-foreground truncate">{author}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={skipBackward}>
              <SkipBack className="h-5 w-5" />
              <span className="sr-only">Skip backward</span>
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" fill="currentColor" />}
              <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={skipForward}>
              <SkipForward className="h-5 w-5" />
              <span className="sr-only">Skip forward</span>
            </Button>
          </div>

          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground w-10 text-right">{formatTime(currentTime)}</span>
            <Slider value={[currentTime]} max={duration} step={1} onValueChange={handleTimeChange} className="flex-1" />
            <span className="text-xs text-muted-foreground w-10">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-1/4 justify-end">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            >
              {getVolumeIcon()}
              <span className="sr-only">Volume</span>
            </Button>
            {showVolumeSlider && (
              <div className="absolute bottom-full right-0 mb-2 p-2 bg-background border rounded-md shadow-md w-32">
                <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} />
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Save</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-5 w-5" />
            <span className="sr-only">Download</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

