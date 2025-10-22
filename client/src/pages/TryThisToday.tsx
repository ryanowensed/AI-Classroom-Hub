import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Zap, ExternalLink } from "lucide-react";

export default function TryThisToday() {
  const tips = [
    {
      title: "Create Differentiated Reading Passages",
      tool: "Diffit",
      time: "5 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Generate reading passages at multiple levels for the same topic, complete with comprehension questions.",
      steps: [
        "Go to Diffit.me and sign up for a free account",
        "Enter your topic (e.g., 'Ancient Greek Vases') and select grade level",
        "Choose the reading level range you need (2nd grade to 10th grade)",
        "Review the generated passage and adjust if needed",
        "Export to Google Classroom or print for students"
      ],
      link: "https://diffit.me"
    },
    {
      title: "Generate Quiz Questions with AI",
      tool: "Brisk Teaching",
      time: "3 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Turn any article, video, or document into a quiz with multiple choice, short answer, and essay questions.",
      steps: [
        "Install the Brisk Teaching Chrome extension",
        "Navigate to any web article or open a Google Doc",
        "Click the Brisk extension icon",
        "Select 'Create Quiz' and choose question types",
        "Review and edit questions, then export to your LMS"
      ],
      link: "https://briskteaching.com"
    },
    {
      title: "Create an Educational Song",
      tool: "Suno",
      time: "10 minutes",
      difficulty: "Intermediate",
      subject: "All Subjects",
      description: "Generate catchy songs about any topic to help students remember key concepts through music.",
      steps: [
        "Sign up for Suno (free account gives 10 songs per day)",
        "Write lyrics about your topic or describe the song you want",
        "Choose a music genre (pop, rap, country, rock, etc.)",
        "Generate 2 versions and pick your favorite",
        "Download as audio or video file to share with students"
      ],
      link: "https://suno.ai"
    },
    {
      title: "Make a Podcast Summary of Your Lesson",
      tool: "NotebookLM",
      time: "15 minutes",
      difficulty: "Intermediate",
      subject: "All Subjects",
      description: "Upload your lesson materials and get an AI-generated podcast that explains the content in an engaging way.",
      steps: [
        "Go to NotebookLM and create a new notebook",
        "Upload your lesson slides, PDFs, or paste in text content",
        "Click 'Generate Audio Overview'",
        "Wait 5-10 minutes for the AI to create a podcast",
        "Share the podcast link with students for review or absent students"
      ],
      link: "https://notebooklm.google.com"
    },
    {
      title: "Design Visual Aids Instantly",
      tool: "Canva Magic",
      time: "5 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Use AI to generate images, infographics, and visual aids for your lessons.",
      steps: [
        "Open Canva and create a new design",
        "Use Magic Media to generate images from text descriptions",
        "Try Magic Write to generate text content for slides",
        "Customize colors and fonts to match your style",
        "Download or share directly with students"
      ],
      link: "https://canva.com"
    },
    {
      title: "Provide Instant Writing Feedback",
      tool: "Brisk Teaching",
      time: "2 minutes per student",
      difficulty: "Beginner",
      subject: "ELA, Writing",
      description: "Get AI-powered feedback on student writing that's personalized and aligned to your rubric.",
      steps: [
        "Open a student's Google Doc with the Brisk extension",
        "Click Brisk and select 'Provide Feedback'",
        "Upload your rubric or let AI use best practices",
        "Review the generated feedback and edit as needed",
        "Insert feedback as comments or share with student"
      ],
      link: "https://briskteaching.com"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                <Zap className="mr-1 h-3 w-3" />
                Quick Wins
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Try This Today
              </h1>
              <p className="text-lg text-muted-foreground">
                Quick, actionable AI tips you can implement in your classroom right now. Each activity takes 15 minutes or less and requires no technical expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{tip.title}</CardTitle>
                        <CardDescription className="text-base">{tip.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="font-normal">
                        <Clock className="mr-1 h-3 w-3" />
                        {tip.time}
                      </Badge>
                      <Badge 
                        variant={tip.difficulty === "Beginner" ? "default" : "secondary"}
                        className="font-normal"
                      >
                        {tip.difficulty}
                      </Badge>
                      <Badge variant="outline" className="font-normal">
                        {tip.subject}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2 text-muted-foreground">
                        Tool: <span className="text-foreground">{tip.tool}</span>
                      </div>
                      <div className="text-sm font-medium mb-2">Step-by-step:</div>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        {tip.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex gap-2">
                            <span className="font-medium text-primary">{stepIndex + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full" asChild>
                        <a href={tip.link} target="_blank" rel="noopener noreferrer">
                          Try {tip.tool}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Tips for Success</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Start Small</h3>
                    <p className="text-sm text-muted-foreground">
                      Pick one activity that addresses your biggest pain point. Master it before moving to the next.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Review AI Output</h3>
                    <p className="text-sm text-muted-foreground">
                      Always review AI-generated content for accuracy, bias, and appropriateness before sharing with students.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Iterate Your Prompts</h3>
                    <p className="text-sm text-muted-foreground">
                      If the output isn't quite right, refine your prompt with more specific details about grade level, learning objectives, or format.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Share with Colleagues</h3>
                    <p className="text-sm text-muted-foreground">
                      When you find something that works, share it with your team. Collective learning accelerates adoption.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

