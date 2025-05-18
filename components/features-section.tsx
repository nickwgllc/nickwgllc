import { Lock, Mic, FileText, BarChart4, BookOpen, Phone, Bot, Share2, Cloud, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Private, Invite-Only Feeds",
      description:
        "Create exclusive audio content with controlled access. Each feed has a title, description, and cover image.",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "One-Click Recording & AI Editing",
      description:
        "Built-in recorder with pause & resume. AI enhances clarity, removes silences, and enables text-based editing.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Summarization & Transcription",
      description: "Instant AI-generated summaries and full-text searchable transcriptions for all episodes.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Listening Journey (LMS-Style)",
      description: "Set a listening pace with structured or AI-personalized episode selection and progress tracking.",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Recording Integration",
      description:
        "Auto-import customer & team calls from Dialpad with AI-extracted key takeaways and voice anonymization.",
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Advanced Engagement Analytics",
      description:
        "Track who listened, for how long, and where they dropped off. Generate completion reports for compliance.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Management & Sharing",
      description: "Schedule releases, create instant share links, and enable offline listening with mobile downloads.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Storage & Communication Integration",
      description: "Import from Google Drive & OneDrive. Receive notifications in Slack & Teams for new episodes.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Content Creation",
      description:
        "Import and comment on public or private audio. Add your insights at the beginning or end of existing content.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Usage-Based Pricing",
      description:
        "Start for free with generous limits. Only pay for what you use beyond the free tier, with transparent per-hour pricing.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Powerful Features for Your Private Audio Network
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to create, share, and track private audio content for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-background hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

