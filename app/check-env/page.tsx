import { CheckApiKey } from "@/components/check-api-key"

export default function CheckEnvPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8">Environment Variable Check</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">OpenAI API Key</h2>
          <p className="text-muted-foreground mb-6">
            Verify that your OpenAI API key is correctly configured and working.
          </p>

          <CheckApiKey />
        </section>
      </div>
    </div>
  )
}

