import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-6 text-sm font-medium">
            <span className="bg-primary/20 text-primary rounded-full px-2 py-0.5 text-xs font-semibold mr-2">NEW</span>
            <span>Private podcasting for teams and organizations</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your Private Audio Network for the People Who Matter
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Securely share exclusive audio content with your team. Enhance communication, training, and knowledge
            sharing with AI-powered tools and deep engagement tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#signup">Start For Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#demo">See How It Works</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Private & Secure</h3>
                <p className="text-sm text-muted-foreground">Invite-only access</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">Smart editing & summaries</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium">Deep Analytics</h3>
                <p className="text-sm text-muted-foreground">Track engagement & completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="container mt-16">
        <div className="relative mx-auto max-w-5xl rounded-xl border bg-background shadow-lg overflow-hidden">
          <img src="/placeholder.svg?height=600&width=1200" alt="InCrowd.fm dashboard" className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-20" />
        </div>
      </div>
    </section>
  )
}

