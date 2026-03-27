import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Sparkles, BookOpen, Newspaper, Wrench, GraduationCap, ArrowRight, Clock, Users, TrendingUp, Mail, CheckCircle2, Globe, BookMarked } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`https://theaiclassroomhub.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, "_blank");
      setSubscribed(true);
    }
  };

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
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">61%</div>
                <div className="text-sm text-muted-foreground">Of K-12 teachers using AI in 2026</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">50%</div>
                <div className="text-sm text-muted-foreground">Of teachers received AI training in 2025</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">$30M</div>
                <div className="text-sm text-muted-foreground">Google's investment in AI learning projects</div>
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

        {/* Newsletter CTA Section — inspired by Beehiiv design */}
        <section className="py-0 border-y border-border">
          {/* Top: value prop + subscribe form */}
          <div className="bg-white py-16">
            <div className="container max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: copy */}
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1D5EFF] bg-[#E6F1FB] px-3 py-1.5 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D5EFF] inline-block"></span>
                    Free weekly newsletter for educators
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                    AI tools that actually <em className="italic text-[#1D5EFF] not-italic">work</em> in your classroom
                  </h2>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed font-light">
                    One practical tip, one tool, one real teacher story — delivered every week. No jargon. No hype.
                  </p>
                  {/* What's inside */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Try This Today tip", color: "bg-[#E6F1FB] text-[#1D5EFF]" },
                      { icon: <Wrench className="h-3.5 w-3.5" />, label: "Tool of the week", color: "bg-[#E1F5EE] text-[#0F6E56]" },
                      { icon: <Newspaper className="h-3.5 w-3.5" />, label: "AI education news", color: "bg-[#FAEEDA] text-[#854F0B]" },
                      { icon: <BookMarked className="h-3.5 w-3.5" />, label: "Teacher success story", color: "bg-[#EEEDFE] text-[#534AB7]" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${item.color}`}>
                          {item.icon}
                        </div>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: form + trust signals */}
                <div className="bg-[#F8F9FC] rounded-2xl p-8 border border-border/60">
                  {subscribed ? (
                    <div className="text-center py-4">
                      <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <p className="font-semibold text-lg mb-1">You're in!</p>
                      <p className="text-sm text-muted-foreground">Check your inbox to confirm your subscription.</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-medium mb-3 text-foreground">Join educators in 12+ countries</p>
                      <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your school email address"
                          className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1D5EFF]/20 focus:border-[#1D5EFF] transition-colors placeholder:text-muted-foreground/60"
                        />
                        <button
                          type="submit"
                          className="w-full bg-[#1D5EFF] hover:bg-[#1D5EFF]/90 text-white font-medium text-sm py-3 px-6 rounded-lg transition-opacity"
                        >
                          Subscribe free →
                        </button>
                      </form>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                        {["Free forever", "No spam, ever", "Unsubscribe anytime"].map((t) => (
                          <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-[#1D5EFF] opacity-50 inline-block"></span>
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-white">
            {[
              { value: "12+", label: "Countries represented" },
              { value: "Weekly", label: "Every issue is classroom-ready" },
              { value: "61%", label: "Of teachers now using AI in 2026" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 text-center">
                <div className="text-2xl font-bold text-[#1D5EFF]" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Recent issues preview */}
          <div className="bg-muted/20 py-12">
            <div className="container max-w-4xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Recent issues</p>
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                See what lands in your inbox
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    tag: "March 2026",
                    title: "Claude Projects for lesson planning — a practical setup guide",
                    date: "March 20, 2026",
                    bullets: ["Set up a Claude Project with your course materials", "5 prompts for differentiated discussion questions", "Special ed teacher cuts IEP prep by 90%"],
                  },
                  {
                    tag: "March 2026",
                    title: "Google Classroom + Gemini: what's actually new in 2026",
                    date: "March 13, 2026",
                    bullets: ["Audio lessons built directly in Classroom", "Standards tagging for assignments: a walkthrough", "Tool spotlight: NotebookLM for student review"],
                  },
                ].map((issue) => (
                  <a
                    key={issue.title}
                    href="https://theaiclassroomhub.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl border border-border overflow-hidden hover:border-[#1D5EFF]/40 transition-colors group"
                  >
                    <div className="px-5 py-4 border-b border-border bg-muted/30">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1D5EFF] mb-1">{issue.tag}</p>
                      <p className="text-sm font-medium leading-snug mb-1 group-hover:text-[#1D5EFF] transition-colors">{issue.title}</p>
                      <p className="text-xs text-muted-foreground">{issue.date}</p>
                    </div>
                    <div className="px-5 py-3">
                      <ul className="space-y-1.5">
                        {issue.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-[#1D5EFF] mt-1.5 flex-shrink-0"></span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                ))}
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://theaiclassroomhub.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1D5EFF] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Browse all past issues <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white py-12 border-t border-border">
            <div className="container max-w-4xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">From educators</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { quote: "The only AI newsletter I actually read top to bottom. Every issue has something I can use the same week.", name: "Rose Prust", role: "Special Ed Teacher, WA", initials: "RP", bg: "bg-[#E6F1FB]", color: "text-[#185FA5]" },
                  { quote: "Finally an AI resource written for classroom teachers — not tech people trying to sound like teachers.", name: "J. Dean", role: "Primary Teacher, Manchester UK", initials: "JD", bg: "bg-[#E1F5EE]", color: "text-[#0F6E56]" },
                  { quote: "I shared it with my whole department. Three of us now use the prompt templates every single week.", name: "Al Rabanera", role: "Math Teacher, Fullerton CA", initials: "AR", bg: "bg-[#EEEDFE]", color: "text-[#534AB7]" },
                ].map((t) => (
                  <div key={t.name} className="border border-border rounded-xl p-5">
                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.quote}"</p>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${t.bg} ${t.color}`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
