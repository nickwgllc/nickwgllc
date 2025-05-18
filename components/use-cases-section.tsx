import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Briefcase, HeartHandshake, HardHat, TrendingUp, Lightbulb, GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UseCasesSection() {
  const useCases = [
    {
      id: "executives",
      icon: <Briefcase className="h-5 w-5" />,
      title: "Business Leaders & Executives",
      description:
        "Share company updates, strategic vision, and industry insights with your team in a more personal and engaging format than email.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Record leadership updates on-the-go",
        "Track who's engaged with important announcements",
        "Create a more personal connection with remote teams",
        "Ensure sensitive information stays private",
      ],
    },
    {
      id: "sales",
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Sales & Customer Success Teams",
      description:
        "Provide training, share real-world sales call examples, and deliver coaching to your team when they need it most.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Import and annotate successful sales calls",
        "Create a library of best practices and objection handling",
        "Deliver just-in-time training before big meetings",
        "Track completion of required sales enablement content",
      ],
    },
    {
      id: "operations",
      icon: <HardHat className="h-5 w-5" />,
      title: "Field Service & Operations Teams",
      description:
        "Deliver safety briefings, standard operating procedures, and compliance updates to distributed teams.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Send critical updates that can be consumed hands-free",
        "Ensure compliance with required safety training",
        "Create step-by-step audio guides for complex procedures",
        "Track completion rates for regulatory requirements",
      ],
    },
    {
      id: "investors",
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Investors & Private Communities",
      description: "Share exclusive financial insights and fund updates with select investors in a secure environment.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Deliver market commentary and investment theses",
        "Control exactly who has access to sensitive information",
        "Track engagement with quarterly updates",
        "Create a more personal connection with limited partners",
      ],
    },
    {
      id: "consultants",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Consultants, Coaches & Thought Leaders",
      description: "Distribute premium, invite-only audio content to clients and paid subscribers.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Create exclusive audio content for paying clients",
        "Deliver insights in a convenient, on-the-go format",
        "Track which content resonates most with your audience",
        "Build deeper relationships through voice connection",
      ],
    },
    {
      id: "learning",
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Learning & Development Teams",
      description: "Use as an LMS-style platform for training, onboarding, and continuous professional development.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Create structured learning paths with audio content",
        "Track completion and comprehension of training materials",
        "Deliver bite-sized learning that fits into busy schedules",
        "Generate compliance reports for required training",
      ],
    },
  ]

  return (
    <section id="use-cases" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who Uses InCrowd.fm?</h2>
          <p className="text-xl text-muted-foreground">
            Our platform serves diverse teams with unique audio communication needs.
          </p>
        </div>

        <Tabs defaultValue="executives" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="flex flex-col items-center gap-2 py-3 h-auto data-[state=active]:bg-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">{useCase.icon}</div>
                <span className="text-xs text-center">{useCase.title.split(" & ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>

                  <ul className="space-y-3 mb-8">
                    {useCase.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <span className="text-xs text-primary font-bold">✓</span>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button>Learn More</Button>
                </div>

                <div className="relative rounded-lg overflow-hidden border shadow-lg">
                  <Image
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

