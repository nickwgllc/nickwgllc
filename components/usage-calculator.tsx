"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UsageCalculator() {
  const [creatorHours, setCreatorHours] = useState(10)
  const [listenerHours, setListenerHours] = useState(40)

  // Calculate costs
  const creatorCost = Math.max(0, (creatorHours - 10) * 2)
  const listenerCost = Math.max(0, (listenerHours - 40) * 1)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Usage Calculator</CardTitle>
        <CardDescription>Estimate your costs based on your expected usage</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="creator">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="creator">Creator</TabsTrigger>
            <TabsTrigger value="listener">Listener</TabsTrigger>
          </TabsList>

          <TabsContent value="creator" className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="creator-hours" className="text-sm font-medium">
                  Hours of content per year: {creatorHours}
                </label>
                <span className="text-sm font-medium">{creatorHours <= 10 ? "Free" : `$${creatorCost}/year`}</span>
              </div>
              <Slider
                id="creator-hours"
                min={1}
                max={50}
                step={1}
                value={[creatorHours]}
                onValueChange={(value) => setCreatorHours(value[0])}
                className="mb-4"
              />
              <div className="text-sm text-muted-foreground">First 10 hours free, then $2/hour per year</div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Your Estimated Cost</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Free tier (10 hours)</div>
                <div className="text-right">$0.00</div>
                {creatorHours > 10 && (
                  <>
                    <div>Additional hours ({creatorHours - 10} × $2)</div>
                    <div className="text-right">${creatorCost.toFixed(2)}</div>
                  </>
                )}
                <div className="font-medium">Total per year</div>
                <div className="text-right font-medium">${creatorCost.toFixed(2)}</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="listener" className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="listener-hours" className="text-sm font-medium">
                  Hours of listening per year: {listenerHours}
                </label>
                <span className="text-sm font-medium">{listenerHours <= 40 ? "Free" : `$${listenerCost}/year`}</span>
              </div>
              <Slider
                id="listener-hours"
                min={1}
                max={100}
                step={1}
                value={[listenerHours]}
                onValueChange={(value) => setListenerHours(value[0])}
                className="mb-4"
              />
              <div className="text-sm text-muted-foreground">First 40 hours free, then $1/hour</div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Your Estimated Cost</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Free tier (40 hours)</div>
                <div className="text-right">$0.00</div>
                {listenerHours > 40 && (
                  <>
                    <div>Additional hours ({listenerHours - 40} × $1)</div>
                    <div className="text-right">${listenerCost.toFixed(2)}</div>
                  </>
                )}
                <div className="font-medium">Total per year</div>
                <div className="text-right font-medium">${listenerCost.toFixed(2)}</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

