import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UsageStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Stats</CardTitle>
        <CardDescription>Your current usage and limits</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="creator">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="creator">Creator</TabsTrigger>
            <TabsTrigger value="listener">Listener</TabsTrigger>
          </TabsList>
          <TabsContent value="creator" className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Content Storage</span>
                <span className="font-medium">4.5h / 10h</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[45%] bg-primary" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Free tier: 10 hours of content for 1 year</p>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Feeds Created</span>
                <span className="font-medium">3 feeds</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Unlimited feeds included</p>
            </div>
          </TabsContent>
          <TabsContent value="listener" className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Listening Time</span>
                <span className="font-medium">12h / 40h</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[30%] bg-primary" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Free tier: 40 hours of listening per year</p>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Feeds Subscribed</span>
                <span className="font-medium">5 feeds</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Unlimited feed subscriptions included</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

