import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Play, Users, Clock, Calendar, BarChart, Share2, Plus } from "lucide-react"
import { AudioPlayer } from "@/components/audio-player"

export default function FeedDetailPage({ params }: { params: { id: string } }) {
  // Mock data for the feed
  const feed = {
    id: params.id,
    title: "Leadership Updates",
    description:
      "Weekly updates from the executive team covering company strategy, performance, and future plans. Stay informed about the latest developments and decisions.",
    image: "/placeholder.svg?height=300&width=300",
    episodes: 12,
    listeners: 48,
    createdAt: "January 15, 2023",
  }

  // Mock data for episodes
  const episodes = [
    {
      id: "1",
      title: "Q2 Strategy Overview",
      description: "CEO John Smith discusses our Q2 strategy and key initiatives for the coming months.",
      duration: "24:15",
      publishedAt: "May 15, 2023",
      listens: 42,
    },
    {
      id: "2",
      title: "Product Roadmap Update",
      description: "CTO Jane Doe shares updates on our product roadmap and upcoming feature releases.",
      duration: "18:42",
      publishedAt: "May 10, 2023",
      listens: 38,
    },
    {
      id: "3",
      title: "Financial Performance Review",
      description: "CFO Michael Johnson reviews our financial performance for the previous quarter.",
      duration: "32:08",
      publishedAt: "May 5, 2023",
      listens: 35,
    },
  ]

  return (
    <div className="space-y-8 pb-24">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 lg:w-1/4">
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <img src={feed.image || "/placeholder.svg"} alt={feed.title} className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="md:w-2/3 lg:w-3/4 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{feed.title}</h1>
              <p className="text-muted-foreground mt-2">{feed.description}</p>
            </div>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{feed.listeners} listeners</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{feed.episodes} episodes</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Since {feed.createdAt}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button>
              <Play className="mr-2 h-4 w-4" fill="currentColor" />
              Play Latest
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share Feed
            </Button>
            <Button variant="outline">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="episodes" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="listeners">Listeners</TabsTrigger>
          </TabsList>
          <Button asChild>
            <Link href={`/create/episode?feed=${feed.id}`}>
              <Plus className="mr-2 h-4 w-4" />
              Add Episode
            </Link>
          </Button>
        </div>

        <TabsContent value="episodes" className="space-y-4">
          {episodes.map((episode) => (
            <Card key={episode.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-muted">
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
                        <h3 className="font-medium">{episode.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{episode.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {episode.duration}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {episode.publishedAt}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {episode.listens} listens
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About this Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feed.description}</p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Created by</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Smith</p>
                      <p className="text-xs text-muted-foreground">CEO</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Feed Settings</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Privacy</span>
                      <Badge variant="outline">Invite-only</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Content Expiration</span>
                      <Badge variant="outline">None</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="listeners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Listeners</CardTitle>
              <CardDescription>People with access to this feed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=User${i + 1}`} />
                        <AvatarFallback>{`U${i + 1}`}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">User {i + 1}</p>
                        <p className="text-xs text-muted-foreground">user{i + 1}@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Last listened 2 days ago</span>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Invite More Listeners
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <AudioPlayer title="Q2 Strategy Overview" author="John Smith" coverImage="/placeholder.svg?height=80&width=80" />
    </div>
  )
}

