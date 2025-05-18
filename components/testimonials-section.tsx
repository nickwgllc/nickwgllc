import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "InCrowd.fm has transformed how our leadership team communicates with our global workforce. The engagement analytics have been eye-opening.",
      author: "Sarah Johnson",
      title: "Chief Communications Officer",
      company: "Global Tech Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Our sales team's performance improved by 23% after implementing InCrowd.fm for training and best practice sharing.",
      author: "Michael Chen",
      title: "VP of Sales",
      company: "SaaS Innovations",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The AI summarization feature alone saves me hours each week. I can quickly catch up on all the important updates from my team.",
      author: "Alex Rodriguez",
      title: "Operations Director",
      company: "Logistics Pro",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted by Leading Organizations</h2>
          <p className="text-xl text-muted-foreground">
            See how teams are using InCrowd.fm to transform their internal communications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 mt-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="opacity-70 hover:opacity-100 transition-opacity">
              <img
                src={`/placeholder.svg?height=40&width=120&text=LOGO ${i}`}
                alt={`Company logo ${i}`}
                className="h-8 md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

