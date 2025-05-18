"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Upload, Youtube, Phone } from "lucide-react"

export default function CreatePage() {
  const router = useRouter()

  const createOptions = [
    {
      id: "feed",
      title: "Create a New Feed",
      description: "Start a new private podcast feed for your team or audience",
      icon: <Mic className="h-10 w-10" />,
      href: "/create/feed",
    },
    {
      id: "record",
      title: "Record an Episode",
      description: "Record audio directly in your browser with AI enhancement",
      icon: <Mic className="h-10 w-10" />,
      href: "/create/record",
    },
    {
      id: "upload",
      title: "Upload Audio",
      description: "Upload existing audio files from your device",
      icon: <Upload className="h-10 w-10" />,
      href: "/create/upload",
    },
    {
      id: "import-youtube",
      title: "Import from YouTube",
      description: "Add commentary to public YouTube videos",
      icon: <Youtube className="h-10 w-10" />,
      href: "/create/import-youtube",
    },
    {
      id: "import-call",
      title: "Import Call Recording",
      description: "Import and enhance call recordings from Dialpad",
      icon: <Phone className="h-10 w-10" />,
      href: "/create/import-call",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Content</h1>
        <p className="text-muted-foreground mt-2">Choose how you want to create or import content</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {createOptions.map((option) => (
          <Card
            key={option.id}
            className="cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => router.push(option.href)}
          >
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">{option.icon}</div>
                <div>
                  <h3 className="font-medium">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

