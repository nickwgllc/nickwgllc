import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MoreHorizontal, Play, Clock, Bookmark } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function RecentEpisodes() {
  const episodes = [
    {
      id: "1",
      title: "Q2 Strategy Overview",
      feed: "Leadership Updates",
      duration: "24:15",
      progress: 75,
      image: "/placeholder.svg?height=100&width=100",
      date: "May 15, 2023",
    },
    {
      id: "2",
      title: "Handling Customer Objections",
      feed: "Sales Training",
      duration: "18:42",
      progress: 30,
      image: "/placeholder.svg?height=100&width=100",
      date: "May 10, 2023",
    },
    {
      id: "3",
      title: "New Feature Walkthrough",
      feed: "Product Knowledge",
      duration: "32:08",
      progress: 0,
      image: "/placeholder.svg?height=100&width=100",
      date: "May 5, 2023",
    },
  ]

  return (
    <div className="space-y-4">
      {episodes.map((episode) => (
        <Card key={episode.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                <img
                  src={episode.image || "/placeholder.svg"}
                  alt={episode.title}
                  className="object-cover h-full w-full"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute inset-0 m-auto h-8 w-8 rounded-full opacity-80 hover:opacity-100"
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium line-clamp-1">{episode.title}</h3>
                    <p className="text-sm text-muted-foreground">{episode.feed}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bookmark className="h-4 w-4" />
                      <span className="sr-only">Save</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Add to Playlist</DropdownMenuItem>
                        <DropdownMenuItem>Share Episode</DropdownMenuItem>
                        <DropdownMenuItem>View Transcript</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {episode.duration}
                  </div>
                  <div className="text-xs text-muted-foreground">{episode.date}</div>
                </div>
                {episode.progress > 0 && (
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-primary" style={{ width: `${episode.progress}%` }} />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

