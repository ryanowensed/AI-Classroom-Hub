import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Sparkles, BookOpen, Newspaper, Wrench, GraduationCap, ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Your Guide to AI in Education
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Empower Your Teaching with{" "}
                <span className="text-primary">AI Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover practical AI tools, real teacher success stories, and actionable tips to enhance your classroom instruction and save time on planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/getting-started">
                  <Button size="lg" className="text-base">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button size="lg" variant="outline" className="text-base">
                    Explore Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">8-10 hrs</div>
                <div className="text-sm text-muted-foreground">Average time saved per week</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">86%</div>
                <div className="text-sm text-muted-foreground">Of educators using AI in 2024</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">32%</div>
                <div className="text-sm text-muted-foreground">Better personalization with AI tutors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/try-this-today">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">Try This Today</CardTitle>
                    </div>
                    <CardDescription>
                      Quick, actionable AI tips you can implement in your classroom right now
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-primary font-medium">
                      View daily tips
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/case-studies">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">Case Studies</CardTitle>
                    </div>
                    <CardDescription>
                      Real teacher success stories with specific examples and measurable results
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-accent font-medium">
                      Read case studies
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/news">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Newspaper className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">In the News</CardTitle>
                    </div>
                    <CardDescription>
                      Latest AI education developments, research findings, and tool launches
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-orange-600 font-medium">
                      Latest updates
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/tools">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">Tool Directory</CardTitle>
                    </div>
                    <CardDescription>
                      Comprehensive database of AI tools for lesson planning, assessment, and more
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-purple-600 font-medium">
                      Browse tools
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Tool Spotlight */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Tool Spotlight</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover powerful AI tools that teachers are using to transform their classrooms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Brisk Teaching</CardTitle>
                  <CardDescription>The Swiss Army knife of educational AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chrome extension with 40+ tools for quizzes, lesson plans, writing feedback, and custom learning activities.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Free</Badge>
                    <Badge variant="secondary">Lesson Planning</Badge>
                  </div>
                  <Link href="/tools">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>NotebookLM</CardTitle>
                  <CardDescription>AI powered by your own content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload your teaching materials and get AI-generated study guides, questions, and even podcast summaries.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Free</Badge>
                    <Badge variant="secondary">Content Creation</Badge>
                  </div>
                  <Link href="/tools">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Diffit</CardTitle>
                  <CardDescription>Instant differentiation made easy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Creates reading passages at multiple levels with comprehension questions in under 20 seconds.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Free</Badge>
                    <Badge variant="secondary">Differentiation</Badge>
                  </div>
                  <Link href="/tools">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of educators who are using AI to save time, personalize learning, and enhance student engagement.
            </p>
            <Link href="/getting-started">
              <Button size="lg" variant="secondary" className="text-base">
                Get Started Now
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

