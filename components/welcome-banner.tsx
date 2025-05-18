import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export function WelcomeBanner() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Welcome to InCrowd.fm</h2>
            <p className="text-muted-foreground">
              Your private audio network for the people who matter. Get started by creating your first feed or exploring
              content shared with you.
            </p>
            <div className="flex gap-2 pt-2">
              <Button>Create Your First Feed</Button>
              <Button variant="outline">Take a Tour</Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

