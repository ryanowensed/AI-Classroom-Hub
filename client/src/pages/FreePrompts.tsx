import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Download,
  CheckCircle2,
  BookOpen,
  Users,
  Clock,
  MessageSquare,
  FileText,
  GraduationCap,
  Heart,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";

const PDF_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/108617926/Vj4ZbBZiPJ9UioW4mLEdBA/10_AI_Prompts_Teachers_Can_Use_Tomorrow_64adbf54.pdf";

const PROMPTS_PREVIEW = [
  {
    num: "01",
    title: "The Instant Lesson Hook",
    category: "Lesson Planning",
    saves: "~20 min",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    num: "02",
    title: "The Differentiation Machine",
    category: "Differentiation",
    saves: "~45 min",
    color: "bg-green-50 text-green-700 border-green-200",
    icon: <Users className="h-4 w-4" />,
  },
  {
    num: "03",
    title: "The Rubric Builder",
    category: "Assessment",
    saves: "~30 min",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    num: "04",
    title: "The Parent Email Writer",
    category: "Communication",
    saves: "~15 min",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    num: "05",
    title: "The Exit Ticket Generator",
    category: "Formative Assessment",
    saves: "~10 min",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    num: "06",
    title: "The Sub Plan Writer",
    category: "Planning & Admin",
    saves: "~1 hour",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    num: "07",
    title: "The Vocabulary Pre-Teach",
    category: "Vocabulary & Literacy",
    saves: "~25 min",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    num: "08",
    title: "The Discussion Question Ladder",
    category: "Critical Thinking",
    saves: "~20 min",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    num: "09",
    title: "The IEP Accommodation Translator",
    category: "Special Education",
    saves: "~30 min",
    color: "bg-violet-50 text-violet-700 border-violet-200",
    icon: <Heart className="h-4 w-4" />,
  },
  {
    num: "10",
    title: "The Weekly Reflection Prompt",
    category: "Teacher Wellbeing",
    saves: "For you",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    icon: <GraduationCap className="h-4 w-4" />,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The parent email prompt alone saved me 30 minutes on Monday. I've been dreading that email for a week.",
    name: "Sarah M.",
    role: "5th Grade Teacher, Ohio",
  },
  {
    quote:
      "I used the differentiation prompt for a reading passage and had three leveled versions in under 2 minutes. Game changer.",
    name: "James T.",
    role: "7th Grade ELA, Texas",
  },
  {
    quote:
      "The IEP accommodation translator is something I didn't know I needed. It turns vague IEP language into actual classroom strategies.",
    name: "Priya K.",
    role: "Inclusion Specialist, California",
  },
];

export default function FreePrompts() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "10_AI_Prompts_Teachers_Can_Use_Tomorrow.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="bg-foreground text-background py-20 md:py-28 relative overflow-hidden">
          {/* Blue top accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />

          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <div>
                <Badge className="mb-5 bg-primary/20 text-primary border-primary/30 hover:bg-primary/20">
                  <Sparkles className="mr-1.5 h-3 w-3" />
                  Free Download · March 2026
                </Badge>

                <h1 className="heading-display text-4xl md:text-5xl font-normal text-background leading-tight mb-4">
                  10 AI Prompts<br />
                  <span className="text-primary">Teachers Can</span><br />
                  Use Tomorrow
                </h1>

                <div className="w-16 h-1 bg-primary mb-6" />

                <p className="text-background/70 text-lg leading-relaxed mb-3">
                  Copy. Paste. Teach better.
                </p>
                <p className="text-background/60 text-base leading-relaxed mb-8">
                  Ready-to-use prompts for ChatGPT, Claude, or Gemini. Each one
                  includes the exact text to copy, what to do with the output,
                  and a pro tip to make it even better. No tech skills required.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={handleDownload}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8"
                  >
                    {downloaded ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Downloaded!
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-5 w-5" />
                        Download Free PDF
                      </>
                    )}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background/10 text-base"
                    asChild
                  >
                    <a
                      href="https://theaiclassroomhub.beehiiv.com/subscribe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe to Newsletter
                    </a>
                  </Button>
                </div>

                <p className="text-background/40 text-xs mt-4">
                  Free forever. No email required for the PDF download.
                </p>
              </div>

              {/* Right: PDF mockup card */}
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  {/* Shadow card */}
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/20 rounded-xl" />
                  <div className="relative bg-muted rounded-xl border border-border p-8 w-72 shadow-2xl">
                    {/* Mini cover */}
                    <div className="bg-foreground rounded-lg p-5 mb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">▦</span>
                        </div>
                        <span className="text-background/80 text-xs font-semibold">AI Classroom Hub</span>
                      </div>
                      <div className="w-8 h-0.5 bg-primary mb-3" />
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Free Resource</p>
                      <h3 className="heading-display text-background text-xl font-normal leading-tight mb-2">
                        10 AI Prompts Teachers Can Use Tomorrow
                      </h3>
                      <p className="text-background/50 text-xs">Copy. Paste. Teach better.</p>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {[
                        { val: "10", label: "Prompts" },
                        { val: "12", label: "Pages" },
                        { val: "Free", label: "Always" },
                      ].map((s) => (
                        <div key={s.label} className="bg-background rounded-lg p-2">
                          <div className="text-primary font-bold text-sm">{s.val}</div>
                          <div className="text-muted-foreground text-xs">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────────────────── */}
        <section className="border-b bg-muted/40 py-8">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <FileText className="h-5 w-5" />, val: "10", label: "Ready-to-copy prompts" },
                { icon: <Clock className="h-5 w-5" />, val: "3+ hrs", label: "Time saved per week" },
                { icon: <GraduationCap className="h-5 w-5" />, val: "K–12", label: "All grade levels" },
                { icon: <Sparkles className="h-5 w-5" />, val: "Free", label: "No sign-up required" },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="flex justify-center text-primary">{s.icon}</div>
                  <div className="text-2xl font-bold text-foreground">{s.val}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's inside ─────────────────────────────────────────────── */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl font-normal text-foreground mb-3">
                What's inside
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ten prompts across the tasks that take up most of your planning time.
                Each one is tested, practical, and ready to use today.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROMPTS_PREVIEW.map((p) => (
                <div
                  key={p.num}
                  className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {p.num}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm leading-tight mb-1">
                      {p.title}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${p.color}`}>
                        {p.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {p.saves}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="heading-display text-2xl font-normal text-foreground mb-2">
                What teachers are saying
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-card rounded-xl border p-6 space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download CTA ─────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container max-w-2xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8 text-primary" />
            </div>
            <h2 className="heading-display text-3xl font-normal text-foreground mb-4">
              Ready to save time this week?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Download the PDF and have all 10 prompts ready to use in your
              classroom tomorrow. Free, forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-10"
              >
                {downloaded ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Downloaded — enjoy!
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Free PDF
                  </>
                )}
              </Button>
            </div>

            <div className="mt-12 pt-10 border-t">
              <p className="text-muted-foreground text-sm mb-4">
                Want a new prompt every week? Join the free newsletter.
              </p>
              <a
                href="https://theaiclassroomhub.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Subscribe to AI Classroom Hub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
