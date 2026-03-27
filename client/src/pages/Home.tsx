import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Sparkles, BookOpen, Newspaper, Wrench, GraduationCap,
  ArrowRight, Clock, Users, TrendingUp, Mail, CheckCircle2,
  BookMarked
} from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Your Guide to AI in Education
              </Badge>
              <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-6">
                Empower Your Teaching with{" "}
                <span className="text-primary">AI Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light leading-relaxed">
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

        {/* ── STATS ── */}
        <section className="py-12 border-b bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: <Users className="h-8 w-8 text-primary" />, value: "61%", label: "Of K-12 teachers using AI in 2026" },
                { icon: <TrendingUp className="h-8 w-8 text-primary" />, value: "50%", label: "Of teachers received AI training in 2025" },
                { icon: <Clock className="h-8 w-8 text-primary" />, value: "$30M", label: "Google's investment in AI learning projects" },
              ].map((s) => (
                <div key={s.label} className="space-y-2">
                  <div className="flex justify-center">{s.icon}</div>
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED SECTIONS ── */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: "/try-this-today", icon: <Sparkles className="h-5 w-5" />, title: "Try This Today", desc: "Quick, actionable AI tips you can implement in your classroom right now", cta: "View daily tips", color: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground", ctaColor: "text-primary" },
                { href: "/case-studies", icon: <BookOpen className="h-5 w-5" />, title: "Case Studies", desc: "Real teacher success stories with specific examples and measurable results", cta: "Read case studies", color: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground", ctaColor: "text-accent" },
                { href: "/news", icon: <Newspaper className="h-5 w-5" />, title: "In the News", desc: "Latest AI education developments, research findings, and tool launches", cta: "Latest updates", color: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground", ctaColor: "text-primary" },
                { href: "/tools", icon: <Wrench className="h-5 w-5" />, title: "Tool Directory", desc: "Comprehensive database of AI tools for lesson planning, assessment, and more", cta: "Browse tools", color: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground", ctaColor: "text-accent" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${item.color}`}>
                          {item.icon}
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex items-center text-sm font-medium ${item.ctaColor}`}>
                        {item.cta}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section className="border-y border-border">

          {/* Subscribe form */}
          <div className="bg-background py-16">
            <div className="container max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: copy */}
                <div>
                  <p className="section-label mb-2">Free weekly newsletter for educators</p>
                  <div className="section-rule"></div>
                  <h2 className="heading-display text-3xl md:text-4xl mb-4">
                    AI tools that actually{" "}
                    <em className="italic text-primary">work</em> in your classroom
                  </h2>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed font-light">
                    One practical tip, one tool, one real teacher story — delivered every week. No jargon. No hype.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Try This Today tip", cls: "bg-primary-soft text-primary-soft" },
                      { icon: <Wrench className="h-3.5 w-3.5" />, label: "Tool of the week", cls: "bg-accent/15 text-accent" },
                      { icon: <Newspaper className="h-3.5 w-3.5" />, label: "AI education news", cls: "bg-muted text-muted-foreground" },
                      { icon: <BookMarked className="h-3.5 w-3.5" />, label: "Teacher success story", cls: "bg-secondary text-secondary-foreground" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${item.cls}`}>
                          {item.icon}
                        </div>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: form */}
                <div className="bg-muted/40 rounded-2xl p-8 border border-border">
                  {subscribed ? (
                    <div className="text-center py-4">
                      <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-3" />
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
                          className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground/60"
                        />
                        <Button type="submit" className="w-full">
                          Subscribe free →
                        </Button>
                      </form>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                        {["Free forever", "No spam, ever", "Unsubscribe anytime"].map((t) => (
                          <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary/50 inline-block"></span>
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
          <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-muted/20">
            {[
              { value: "12+", label: "Countries represented" },
              { value: "Weekly", label: "Every issue is classroom-ready" },
              { value: "61%", label: "Of teachers now using AI in 2026" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 text-center">
                <div className="heading-display text-2xl text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Recent issues */}
          <div className="bg-muted/20 py-12 border-t border-border">
            <div className="container max-w-4xl mx-auto">
              <p className="section-label mb-1">Recent issues</p>
              <h3 className="heading-display text-xl mb-6">See what lands in your inbox</h3>
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
                    className="bg-background rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors group"
                  >
                    <div className="px-5 py-4 border-b border-border bg-muted/30">
                      <p className="section-label mb-1">{issue.tag}</p>
                      <p className="text-sm font-medium leading-snug mb-1 group-hover:text-primary transition-colors">{issue.title}</p>
                      <p className="text-xs text-muted-foreground">{issue.date}</p>
                    </div>
                    <div className="px-5 py-3">
                      <ul className="space-y-1.5">
                        {issue.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
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
                  className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  Browse all past issues <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-background py-12 border-t border-border">
            <div className="container max-w-4xl mx-auto">
              <p className="section-label mb-6">From educators</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { quote: "The only AI newsletter I actually read top to bottom. Every issue has something I can use the same week.", name: "Rose Prust", role: "Special Ed Teacher, WA", initials: "RP", bg: "bg-primary-soft", color: "text-primary" },
                  { quote: "Finally an AI resource written for classroom teachers — not tech people trying to sound like teachers.", name: "J. Dean", role: "Primary Teacher, Manchester UK", initials: "JD", bg: "bg-accent/15", color: "text-accent" },
                  { quote: "I shared it with my whole department. Three of us now use the prompt templates every single week.", name: "Al Rabanera", role: "Math Teacher, Fullerton CA", initials: "AR", bg: "bg-secondary", color: "text-secondary-foreground" },
                ].map((t) => (
                  <div key={t.name} className="border border-border rounded-xl p-5">
                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.quote}"</p>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${t.bg} ${t.color}`}>
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

        {/* ── FEATURED TOOL SPOTLIGHT ── */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <p className="section-label mb-1">Tool Spotlight</p>
              <h2 className="heading-display text-3xl mb-3">Trusted by teachers right now</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                Discover powerful AI tools that teachers are using to transform their classrooms
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Brisk Teaching", desc: "The Swiss Army knife of educational AI", body: "Chrome extension with 40+ tools for quizzes, lesson plans, writing feedback, and custom learning activities.", tags: ["Free", "Lesson Planning"] },
                { name: "NotebookLM", desc: "AI powered by your own content", body: "Upload your teaching materials and get AI-generated study guides, questions, and even podcast summaries.", tags: ["Free", "Content Creation"] },
                { name: "Diffit", desc: "Instant differentiation made easy", body: "Creates reading passages at multiple levels with comprehension questions in under 20 seconds.", tags: ["Free", "Differentiation"] },
              ].map((tool) => (
                <Card key={tool.name}>
                  <CardHeader>
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 font-light">{tool.body}</p>
                    <div className="flex gap-2 mb-4">
                      {tool.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <Link href="/tools">
                      <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="heading-display text-3xl mb-4 text-primary-foreground">Ready to Transform Your Teaching?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 font-light">
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
