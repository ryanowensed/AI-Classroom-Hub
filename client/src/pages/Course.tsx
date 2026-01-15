import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

export default function Course() {
  const modules = [
    {
      id: 1,
      title: "The Basics",
      subtitle: "The \"Golden Formula\"",
      description: "Master the three essential ingredients every AI prompt needs: Context, Task, and Constraints.",
      lessons: 3,
      duration: "15 min",
      icon: Lightbulb,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "The Lesson Planner",
      subtitle: "From Standards to Scripts",
      description: "Create complete lesson plans, differentiate instantly, and align to standards with AI assistance.",
      lessons: 3,
      duration: "20 min",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "The Resource Generator",
      subtitle: "Tangible Classroom Materials",
      description: "Generate quizzes, rubrics, and worksheets that are actually ready to use in your classroom.",
      lessons: 3,
      duration: "20 min",
      icon: Target,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "The Visual & Creative Aid",
      subtitle: "Engagement Tools",
      description: "Use AI to create images, find perfect videos, and generate creative writing prompts.",
      lessons: 3,
      duration: "15 min",
      icon: Sparkles,
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "The Admin Assistant",
      subtitle: "Save Time on Non-Teaching Tasks",
      description: "Draft emails, newsletters, and IEP goals quickly and professionally with AI help.",
      lessons: 3,
      duration: "15 min",
      icon: Zap,
      color: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Free Resource for Educators
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                AI Prompt Library for{" "}
                <span className="text-primary">Teachers</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop staring at a blinking cursor. Browse our collection of proven AI prompts organized by teaching task. No tech background required—just find, copy, and adapt to your classroom needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/course/module/1">
                  <Button size="lg" className="text-base">
                    Browse Prompts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>85 minutes total</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>5 modules, 15 lessons</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Copy-paste templates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Course */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why This Library is Different</h2>
              <p className="text-muted-foreground">
                Most AI resources teach you jargon and theory. We give you practical prompts that actually work in real classrooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Simplified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No confusing jargon like "zero-shot" or "chain-of-thought." Just plain English that makes sense.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Problem-First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every lesson starts with a real teacher problem, not an AI feature. Learn what you actually need.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 mb-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Actionable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every lesson ends with templates you can copy and paste right into ChatGPT, Gemini, or any AI tool.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Prompt Categories</h2>
              <p className="text-muted-foreground">
                Five organized collections covering every teaching task from lesson planning to admin work.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Link key={module.id} href={`/course/module/${module.id}`}>
                    <Card className="hover:shadow-lg transition-all cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${module.color} text-white flex-shrink-0`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                Module {module.id}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {module.lessons} lessons • {module.duration}
                              </span>
                            </div>
                            <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                              {module.title}
                            </CardTitle>
                            <CardDescription className="text-sm font-medium text-muted-foreground mb-2">
                              {module.subtitle}
                            </CardDescription>
                            <p className="text-sm text-muted-foreground">
                              {module.description}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Stop Struggling with AI?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of teachers who've learned to create prompts that actually work. Start the first module now—it only takes 15 minutes.
            </p>
            <Link href="/course/module/1">
              <Button size="lg" variant="secondary" className="text-base">
                Start Module 1 Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
