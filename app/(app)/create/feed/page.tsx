"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Image } from "lucide-react"

export default function CreateFeedPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate feed creation
    setTimeout(() => {
      setIsLoading(false)
      router.push("/feeds")
    }, 1500)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create a New Feed</h1>
        <p className="text-muted-foreground mt-2">Set up a private podcast feed for your team or audience</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Feed Details</CardTitle>
              <CardDescription>Basic information about your feed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Feed Title</Label>
                <Input id="title" placeholder="e.g., Leadership Updates" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="What is this feed about?" rows={4} />
              </div>
              <div className="space-y-2">
                <Label>Feed Image</Label>
                <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-accent/50 transition-colors">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Image className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">Drag and drop or click to upload</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG or GIF, up to 2MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Access</CardTitle>
              <CardDescription>Control who can access your feed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup defaultValue="invite-only">
                <div className="flex items-start space-x-3 space-y-0">
                  <RadioGroupItem value="invite-only" id="invite-only" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="invite-only" className="font-medium">
                      Invite-only
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Only people you specifically invite can access this feed
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0 mt-3">
                  <RadioGroupItem value="organization" id="organization" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="organization" className="font-medium">
                      Organization-wide
                    </Label>
                    <p className="text-sm text-muted-foreground">Anyone in your organization can access this feed</p>
                  </div>
                </div>
              </RadioGroup>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="expiration">Content Expiration</Label>
                  <p className="text-sm text-muted-foreground">Automatically remove content after a set period</p>
                </div>
                <Switch id="expiration" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Feed"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

