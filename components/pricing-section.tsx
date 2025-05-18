import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { UsageCalculator } from "@/components/usage-calculator"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Usage-Based Pricing</h2>
          <p className="text-xl text-muted-foreground">Start for free and only pay for what you use.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="flex flex-col border-primary shadow-lg relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <CardHeader>
              <CardTitle>Creator Account</CardTitle>
              <CardDescription>For podcasters, leaders, and content creators</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold">Free</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">After 10 hours of content, $2/hour per year for storage</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-muted-foreground mt-1">First 10 hours of content free for 1 year</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Create unlimited private feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>10 hours of content storage free for 1 year</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>$2/hour per year after free allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>AI-powered editing and transcription</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Engagement analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Invite unlimited listeners</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Includes all listener features</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter>
              <Button className="w-full">Create Creator Account</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Listener Account</CardTitle>
              <CardDescription>For team members and content consumers</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold">Free</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">After 40 hours of listening, $1/hour</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-muted-foreground mt-1">First 40 hours of listening free per year</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Access to all feeds you're invited to</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>40 hours of listening free per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>$1/hour after free allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>AI-generated summaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Offline listening</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Personalized listening pace</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="w-full">
                Create Listener Account
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Calculate Your Costs</h3>
          <UsageCalculator />
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-muted/30 rounded-lg p-6 border">
          <h3 className="text-xl font-semibold mb-4 text-center">Enterprise Solutions</h3>
          <p className="text-center mb-6">
            Need custom features, dedicated support, or volume pricing? Our enterprise plan offers tailored solutions
            for larger organizations.
          </p>
          <div className="flex justify-center">
            <Button variant="outline">Contact Sales</Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            No credit card required to start. Only pay for what you use beyond the free tier.
          </p>
        </div>
      </div>
    </section>
  )
}

