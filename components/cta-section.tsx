import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to transform your team's communication?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using InCrowd.fm to create more engaging, secure, and effective audio
            content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#signup">Start For Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

