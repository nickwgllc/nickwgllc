import { TestOpenAI } from "@/components/test-openai"
import { TestDatabase } from "@/components/test-database"

export default function SetupPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">InCrowd.fm Setup</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">OpenAI API Configuration</h2>
          <p className="text-muted-foreground mb-6">
            Test your OpenAI API key to ensure it's properly configured for transcription and AI features.
          </p>

          <TestOpenAI />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Database Configuration</h2>
          <p className="text-muted-foreground mb-6">
            Test your database connection to ensure it's properly configured for storing application data.
          </p>

          <TestDatabase />
        </section>
      </div>
    </div>
  )
}

