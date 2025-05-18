import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentFeeds } from "@/components/recent-feeds"
import { RecentEpisodes } from "@/components/recent-episodes"
import { UsageStats } from "@/components/usage-stats"
import { WelcomeBanner } from "@/components/welcome-banner"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <Tabs defaultValue="feeds" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="feeds">My Feeds</TabsTrigger>
            <TabsTrigger value="listening">Listening</TabsTrigger>
          </TabsList>
          <Button asChild>
            <Link href="/create">Create New</Link>
          </Button>
        </div>

        <TabsContent value="feeds" className="space-y-6">
          <RecentFeeds />
        </TabsContent>

        <TabsContent value="listening" className="space-y-6">
          <RecentEpisodes />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UsageStats />

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/create/feed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
                Create New Feed
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/create/episode">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Record New Episode
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/team/invite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
                Invite Team Members
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips & Tutorials</CardTitle>
            <CardDescription>Learn how to get the most out of InCrowd.fm</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">Getting Started Guide</h4>
                <p className="text-xs text-muted-foreground">Learn the basics of creating and sharing content</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">AI Editing Tutorial</h4>
                <p className="text-xs text-muted-foreground">Master the AI-powered editing tools</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 12h-4" />
                  <path d="M6 16h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium">Analytics Deep Dive</h4>
                <p className="text-xs text-muted-foreground">Understand your audience and track engagement</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0">
              View all tutorials
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

