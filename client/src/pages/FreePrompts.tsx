import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Users,
  Clock,
  MessageSquare,
  FileText,
  GraduationCap,
  Heart,
  Sparkles,
  Star,
  CheckCircle2,
  Mail,
} from "lucide-react";

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

function FreePromptsSubscribeForm() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const inputRef            = useRef<HTMLInputElement>(null);

  const isValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrMsg("");
    if (!isValid(email)) {
      setErrMsg("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), utm_source: "free-prompts" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-2xl font-semibold text-foreground mb-2">You're in.</p>
        <p className="text-muted-foreground">Office Hours /AI arrives this Sunday. Check your inbox for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        ref={inputRef}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@school.edu"
        required
        className="flex-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 disabled:opacity-60 transition-colors whitespace-nowrap"
      >
        {status === "sending" ? "Sending…" : "Get the free PDF"}
      </button>
      {errMsg && <p className="text-sm text-destructive mt-2 w-full">{errMsg}</p>}
    </form>
  );
}

export default function FreePrompts() {

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

                {/* Trust signals */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <FileText className="h-4 w-4" />, label: "12-page PDF" },
                    { icon: <Clock className="h-4 w-4" />, label: "3+ hrs saved / week" },
                    { icon: <GraduationCap className="h-4 w-4" />, label: "K–12 all grades" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-background/60 text-sm">
                      <span className="text-primary">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
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
                { icon: <Mail className="h-5 w-5" />, val: "Free", label: "Enter email to download" },
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

        {/* ── Opt-in form ───────────────────────────────────────────────── */}
        <section id="get-the-pdf" className="py-20 bg-background">
          <div className="container max-w-3xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>

            <h2 className="heading-display text-3xl font-normal text-foreground mb-3">
              Get your free copy
            </h2>
            <p className="text-muted-foreground mb-2 text-lg max-w-xl mx-auto">
              Enter your email below. We'll send you the PDF link instantly — plus a free weekly tip every Sunday.
            </p>
            <p className="text-muted-foreground/60 text-sm mb-10">
              No spam, ever. Unsubscribe anytime.
            </p>

            <FreePromptsSubscribeForm />

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["Free forever", "No spam, ever", "Unsubscribe anytime", "Join educators in 12+ countries"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary/50 inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
