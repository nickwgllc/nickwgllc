import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Play, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function RecentFeeds() {
  const feeds = [
    {
      id: "1",
      title: "Leadership Updates",
      description: "Weekly updates from the executive team",
      episodes: 12,
      listeners: 48,
      image: "/placeholder.svg?height=100&width=100",
      lastUpdated: "2 days ago",
    },
    {
      id: "2",
      title: "Sales Training",
      description: "Best practices and techniques for the sales team",
      episodes: 8,
      listeners: 24,
      image: "/placeholder.svg?height=100&width=100",
      lastUpdated: "1 week ago",
    },
    {
      id: "3",
      title: "Product Knowledge",
      description: "Deep dives into our product features",
      episodes: 15,
      listeners: 36,
      image: "/placeholder.svg?height=100&width=100",
      lastUpdated: "3 days ago",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {feeds.map((feed) => (
        <Card key={feed.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-video relative bg-muted">
              <img src={feed.image || "/placeholder.svg"} alt={feed.title} className="object-cover w-full h-full" />
              <Button size="icon" variant="secondary" className="absolute bottom-2 right-2 rounded-full">
                <Play className="h-4 w-4" fill="currentColor" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="line-clamp-1">{feed.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1">{feed.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Feed</DropdownMenuItem>
                  <DropdownMenuItem>Add Episode</DropdownMenuItem>
                  <DropdownMenuItem>Share Feed</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Feed</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Badge variant="outline" className="text-xs">
                {feed.episodes} episodes
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Users className="h-3 w-3 mr-1" />
                {feed.listeners} listeners
              </div>
              <div className="text-xs text-muted-foreground ml-auto">Updated {feed.lastUpdated}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

