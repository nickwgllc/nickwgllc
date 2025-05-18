import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How does the freemium pricing model work?",
      answer:
        "InCrowd.fm uses a simple usage-based pricing model. Creator accounts get 10 hours of content storage free for the first year, then pay $2/hour per year after that. Listener accounts get 40 hours of listening free per year, then pay $1/hour after that. You only pay for what you use beyond the free tier.",
    },
    {
      question: "What's the difference between a Creator and a Listener account?",
      answer:
        "Creator accounts can create and manage feeds, upload and record content, and invite listeners. They also have access to AI editing tools and analytics. Listener accounts can only consume content they've been invited to access. All Creators are also Listeners, so Creator accounts include all Listener features.",
    },
    {
      question: "How is usage calculated?",
      answer:
        "For Creators, usage is based on the total duration of content stored on the platform. For Listeners, usage is based on the total time spent listening to content. Both are calculated on a yearly basis, with the free tier resetting each year.",
    },
    {
      question: "Can I upgrade or downgrade my account?",
      answer:
        "Yes, you can switch between Creator and Listener accounts at any time. If you downgrade from Creator to Listener, you'll need to decide what happens to your content. You can either keep it (and continue paying for storage) or remove it from the platform.",
    },
    {
      question: "Is there a limit to how many feeds I can create?",
      answer:
        "No, Creator accounts can create unlimited feeds. The pricing is based on the total hours of content, not the number of feeds.",
    },
    {
      question: "Do you offer enterprise pricing for large organizations?",
      answer:
        "Yes, we offer custom enterprise plans for organizations with specific needs, including volume discounts, dedicated support, custom integrations, and more. Contact our sales team for details.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about InCrowd.fm</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

