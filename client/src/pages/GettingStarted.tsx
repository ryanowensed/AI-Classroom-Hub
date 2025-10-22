import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { GraduationCap, CheckCircle2, HelpCircle, ArrowRight, Sparkles } from "lucide-react";

export default function GettingStarted() {
  const steps = [
    {
      number: 1,
      title: "Understand the Basics",
      description: "Learn what AI is and how it can help you as a teacher",
      actions: [
        "AI is a tool that can generate text, images, and other content based on your instructions",
        "It works best when you give it clear, specific prompts",
        "AI is not perfect—it requires your professional judgment and review",
        "Think of AI as a teaching assistant, not a replacement for your expertise"
      ]
    },
    {
      number: 2,
      title: "Start with One Simple Tool",
      description: "Don't try to learn everything at once—pick one tool that solves your biggest pain point",
      actions: [
        "Need help with differentiation? Try Diffit",
        "Want to save time on lesson planning? Try Brisk Teaching or MagicSchool.ai",
        "Looking for creative content? Try Suno or Canva Magic",
        "Need general AI assistance? Try ChatGPT or Microsoft Copilot (both free)"
      ]
    },
    {
      number: 3,
      title: "Try One Quick Win",
      description: "Pick a 5-minute activity from our 'Try This Today' section",
      actions: [
        "Generate quiz questions from an article you're already using",
        "Create differentiated reading passages for your next lesson",
        "Get feedback suggestions for a student writing sample",
        "Make a visual aid for tomorrow's lesson"
      ]
    },
    {
      number: 4,
      title: "Review and Refine",
      description: "Always review AI output before using it with students",
      actions: [
        "Check for accuracy—AI can make mistakes or 'hallucinate' facts",
        "Look for bias or inappropriate content",
        "Adjust the reading level and tone for your students",
        "Add your personal touch and teaching style"
      ]
    },
    {
      number: 5,
      title: "Build Your Practice",
      description: "Gradually incorporate AI into your regular workflow",
      actions: [
        "Use AI for one specific task each week",
        "Keep a list of prompts that work well for you",
        "Share successes (and failures) with colleagues",
        "Explore new tools as you get comfortable"
      ]
    },
    {
      number: 6,
      title: "Stay Informed and Safe",
      description: "Keep learning about AI best practices and safety",
      actions: [
        "Review our Safety & Ethics guidelines",
        "Check your district's AI policies",
        "Never share student personal information with AI tools",
        "Teach students about appropriate AI use"
      ]
    }
  ];

  const faqs = [
    {
      question: "Will AI replace teachers?",
      answer: "No. AI is a tool to support teachers, not replace them. Teaching requires human connection, emotional intelligence, cultural understanding, and professional judgment that AI cannot provide. AI can handle routine tasks, giving you more time for what matters most: building relationships with students and facilitating meaningful learning experiences."
    },
    {
      question: "Is it cheating to use AI for lesson planning?",
      answer: "Not at all! Using AI for lesson planning is like using a textbook, curriculum guide, or Pinterest for ideas. The key is that you review, adapt, and personalize the content for your students. Your professional expertise in selecting, modifying, and delivering the content is what makes it effective teaching."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "You don't need to be a tech expert to use AI tools. Most are designed to be as simple as having a conversation. If you can type a question or request, you can use AI. Start with free, user-friendly tools like ChatGPT or Microsoft Copilot, and follow our step-by-step guides."
    },
    {
      question: "How do I know if AI-generated content is accurate?",
      answer: "Always fact-check AI output, especially for factual content. AI can make mistakes or generate plausible-sounding but incorrect information. Cross-reference with reliable sources, use your subject matter expertise, and never use AI-generated content without reviewing it first."
    },
    {
      question: "Is it safe to use AI with student data?",
      answer: "Be very careful with student data. Never input student names, IDs, or personally identifiable information into AI tools. Use anonymized or sample data instead. Check your district's policies and each tool's privacy policy. When in doubt, keep student information out."
    },
    {
      question: "What about students using AI to cheat?",
      answer: "This is a real concern, but banning AI isn't the answer—students will use it anyway. Instead, teach appropriate use, design assignments that require critical thinking beyond what AI can do, and have honest conversations about academic integrity. Use AI detection as one data point, not the only one."
    },
    {
      question: "Do I need to pay for AI tools?",
      answer: "Many excellent AI tools have free versions that are perfect for getting started. Tools like ChatGPT, Microsoft Copilot, Diffit, and TeacherServer offer robust free options. Paid versions typically offer more features, faster responses, or no usage limits, but aren't necessary to begin."
    },
    {
      question: "How much time will this really save me?",
      answer: "Teachers using AI report saving 8-10 hours per week on average. The time savings come from faster lesson planning, automated differentiation, quicker feedback generation, and streamlined administrative tasks. Your results will vary based on how you integrate AI into your workflow."
    },
    {
      question: "What if my district doesn't allow AI?",
      answer: "Some districts are still developing AI policies. If yours hasn't addressed AI yet, consider being part of the conversation. Share research, propose pilot programs, and emphasize the educational benefits. If AI is prohibited, focus on understanding the technology so you're ready when policies evolve."
    },
    {
      question: "Where do I go for help if I get stuck?",
      answer: "Start with our Resources section for prompt templates and guides. Check the tool's help documentation or tutorial videos. Join online teacher communities where educators share AI tips. And remember: experimentation is part of learning—it's okay to try, fail, and try again!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <GraduationCap className="mr-1 h-3 w-3" />
                Start Your AI Journey
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Getting Started with AI in Your Classroom
              </h1>
              <p className="text-lg text-muted-foreground">
                New to AI? No problem. This guide will take you from curious beginner to confident user in six simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Your 6-Step Roadmap</h2>
              
              <div className="space-y-6">
                {steps.map((step) => (
                  <Card key={step.number} className="overflow-hidden">
                    <CardHeader className="bg-primary/5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {step.actions.map((action, index) => (
                          <li key={index} className="flex gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="pt-6">
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ready to Take the First Step?</h3>
                    <p className="text-muted-foreground mb-6">
                      Head to our "Try This Today" section for quick, beginner-friendly activities you can do right now.
                    </p>
                    <Link href="/try-this-today">
                      <Button size="lg">
                        Try Your First AI Activity
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Common questions from teachers new to AI
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">What to Explore Next</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/try-this-today">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle>Try This Today</CardTitle>
                      <CardDescription>
                        Quick wins you can implement immediately
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        View Activities
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/tools">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle>Tool Directory</CardTitle>
                      <CardDescription>
                        Browse AI tools by category and use case
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Explore Tools
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/resources">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle>Resources</CardTitle>
                      <CardDescription>
                        Prompt library, safety guides, and more
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        View Resources
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

