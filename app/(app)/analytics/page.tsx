import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart, Download, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-2">Track engagement and performance of your audio content</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Listens</CardDescription>
            <CardTitle className="text-3xl">1,248</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium">↑ 12%</span> from last period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Unique Listeners</CardDescription>
            <CardTitle className="text-3xl">342</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium">↑ 8%</span> from last period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Avg. Completion Rate</CardDescription>
            <CardTitle className="text-3xl">78%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium">↑ 5%</span> from last period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Listening Time</CardDescription>
            <CardTitle className="text-3xl">246h</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium">↑ 15%</span> from last period
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="feeds">Feeds</TabsTrigger>
          <TabsTrigger value="episodes">Episodes</TabsTrigger>
          <TabsTrigger value="listeners">Listeners</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Listening Activity</CardTitle>
              <CardDescription>Daily listening activity over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center border-t">
              <div className="text-center">
                <LineChart className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                <p className="text-sm text-muted-foreground mt-2">Chart visualization would appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Feeds</CardTitle>
                <CardDescription>Most popular feeds by listens</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t">
                <div className="text-center">
                  <BarChart className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">Chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Completion Rates</CardTitle>
                <CardDescription>Episode completion distribution</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">Chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="feeds" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feed Performance</CardTitle>
              <CardDescription>Engagement metrics by feed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg">
                <div className="grid grid-cols-5 gap-4 p-4 border-b font-medium text-sm">
                  <div>Feed</div>
                  <div className="text-right">Listens</div>
                  <div className="text-right">Unique Listeners</div>
                  <div className="text-right">Avg. Completion</div>
                  <div className="text-right">Total Time</div>
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0 text-sm">
                    <div className="font-medium">Feed {i + 1}</div>
                    <div className="text-right">{Math.floor(Math.random() * 500)}</div>
                    <div className="text-right">{Math.floor(Math.random() * 100)}</div>
                    <div className="text-right">{Math.floor(60 + Math.random() * 30)}%</div>
                    <div className="text-right">{Math.floor(Math.random() * 100)}h</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="episodes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Episode Performance</CardTitle>
              <CardDescription>Engagement metrics by episode</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg">
                <div className="grid grid-cols-6 gap-4 p-4 border-b font-medium text-sm">
                  <div className="col-span-2">Episode</div>
                  <div className="text-right">Listens</div>
                  <div className="text-right">Completion</div>
                  <div className="text-right">Avg. Duration</div>
                  <div className="text-right">Drop-off Point</div>
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b last:border-0 text-sm">
                    <div className="col-span-2 font-medium">Episode {i + 1}</div>
                    <div className="text-right">{Math.floor(Math.random() * 200)}</div>
                    <div className="text-right">{Math.floor(60 + Math.random() * 30)}%</div>
                    <div className="text-right">{Math.floor(10 + Math.random() * 20)}:00</div>
                    <div className="text-right">{Math.floor(5 + Math.random() * 10)}:00</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="listeners" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Listener Engagement</CardTitle>
              <CardDescription>Activity metrics by listener</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg">
                <div className="grid grid-cols-5 gap-4 p-4 border-b font-medium text-sm">
                  <div className="col-span-2">Listener</div>
                  <div className="text-right">Episodes Played</div>
                  <div className="text-right">Avg. Completion</div>
                  <div className="text-right">Total Time</div>
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0 text-sm">
                    <div className="col-span-2 font-medium">User {i + 1}</div>
                    <div className="text-right">{Math.floor(Math.random() * 20)}</div>
                    <div className="text-right">{Math.floor(60 + Math.random() * 30)}%</div>
                    <div className="text-right">{Math.floor(Math.random() * 20)}h</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

