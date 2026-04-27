/* ============================================================
   Home Page — AI Classroom Hub
   Design: Precision Navigation Hub
   Hero: Split layout — headline + branch cards left, stats right
   Sections: Research stats, branch cards, newsletter CTA
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SubscribeForm from "@/components/SubscribeForm";
import { ArrowRight, BookOpen, FileText, Wrench, Shield, TrendingUp, Users, Clock, AlertTriangle } from "lucide-react";

const branches = [
  { label: "Pre-K / Kinder", href: "/prek-kinder", color: "#F59E0B", bg: "#FFFBEB", icon: "🌱", tagline: "Safety-first AI for early learners" },
  { label: "Elementary", href: "/elementary", color: "#10B981", bg: "#ECFDF5", icon: "📚", tagline: "Differentiation & literacy tools" },
  { label: "Middle School", href: "/middle-school", color: "#0D9488", bg: "#F0FDFA", icon: "🔬", tagline: "Integrity & engagement resources" },
  { label: "High School", href: "/high-school", color: "#6366F1", bg: "#EEF2FF", icon: "🎓", tagline: "College & career readiness" },
  { label: "Administrators", href: "/administrators", color: "#E8533A", bg: "#FFF7F5", icon: "🏫", tagline: "Policy, governance & PD" },
];

const stats = [
  { value: "68%", label: "of teachers use AI weekly", sub: "Up from 29% in Jan. 2025", icon: TrendingUp, color: "#2563EB" },
  { value: "34%", label: "received formal AI training", sub: "Only 1 in 3 teachers trained", icon: Users, color: "#E8533A" },
  { value: "6%", label: "say their AI policy is clear", sub: "Policy clarity is the #1 gap", icon: Shield, color: "#0D9488" },
  { value: "10–14", label: "hours saved per week", sub: "For teachers using AI actively", icon: Clock, color: "#6366F1" },
];

const tier1Resources = [
  {
    icon: FileText,
    color: "#2563EB",
    bg: "#EFF6FF",
    label: "Prompt Library",
    desc: "Grade-level and subject-specific prompt templates for ChatGPT, Gemini, and Claude.",
    href: "/prompt-library",
    tag: "Most Requested",
  },
  {
    icon: Wrench,
    color: "#0D9488",
    bg: "#F0FDFA",
    label: "AI Tool Directory",
    desc: "Searchable, filterable database of vetted AI tools organized by grade level and use case.",
    href: "/tool-directory",
    tag: "Tier 1 Resource",
  },
  {
    icon: Shield,
    color: "#E8533A",
    bg: "#FFF7F5",
    label: "Policy Templates",
    desc: "Customizable AI policies for students, teachers, and staff. Ready to adapt for your district.",
    href: "/administrators",
    tag: "Urgently Needed",
  },
  {
    icon: BookOpen,
    color: "#6366F1",
    bg: "#EEF2FF",
    label: "Hub Resources",
    desc: "Research library, AI glossary, PD pathways, and community forum for K-12 educators.",
    href: "/hub-resources",
    tag: "Cross-Cutting",
  },
];

const testimonials = [
  { quote: "The only AI newsletter I actually read top to bottom. Every issue has something I can use the same week.", name: "Rose Prust", role: "Special Ed Teacher, WA" },
  { quote: "Finally an AI resource written for classroom teachers — not tech people trying to sound like teachers.", name: "J. Dean", role: "Primary Teacher, Manchester UK" },
  { quote: "I shared it with my whole department. Three of us now use the prompt templates every single week.", name: "Al Rabanera", role: "Math Teacher, Fullerton CA" },
];

function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<Element>);
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-5 border border-gray-100 shadow-sm transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: stat.color + "15" }}>
          <stat.icon size={18} style={{ color: stat.color }} />
        </div>
        <div>
          <div className="text-2xl font-extrabold font-display" style={{ color: stat.color }}>{stat.value}</div>
          <div className="text-sm font-semibold text-gray-800 leading-tight">{stat.label}</div>
          <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useIntersection(statsRef as React.RefObject<Element>);

  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(/manus-storage/hero-bg_7dedd254.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F2A4A]/85" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            {/* Left: Headline + Branch Cards */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-semibold font-display text-white/90 tracking-wide uppercase">K-12 AI Resource Hub — April 2026</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-display text-white leading-[1.1] mb-5">
                The trusted compass for AI in K-12 education.
              </h1>

              <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
                Vetted tools, prompt libraries, policy templates, and professional development — organized by grade level, built for the classroom.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/newsletter"
                  className="flex items-center gap-2 bg-[#E8533A] hover:bg-[#d4432a] text-white font-semibold font-display px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Subscribe to Office Hours /AI <ArrowRight size={15} />
                </Link>
                <Link
                  href="/hub-resources"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold font-display px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Explore Resources
                </Link>
              </div>

              {/* Branch Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {branches.map((branch) => (
                  <Link
                    key={branch.href}
                    href={branch.href}
                    className="group bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 rounded-lg p-3 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{branch.icon}</span>
                      <span className="text-xs font-bold font-display text-white leading-tight">{branch.label}</span>
                    </div>
                    <p className="text-xs text-blue-200/80 leading-snug">{branch.tagline}</p>
                    <div
                      className="mt-2 text-xs font-semibold font-display flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: branch.color }}
                    >
                      Go <ArrowRight size={10} />
                    </div>
                  </Link>
                ))}
                <Link
                  href="/hub-resources"
                  className="group bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 rounded-lg p-3 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">🗂️</span>
                    <span className="text-xs font-bold font-display text-white leading-tight">Hub Resources</span>
                  </div>
                  <p className="text-xs text-blue-200/80 leading-snug">Tools, prompts & PD for all levels</p>
                  <div className="mt-2 text-xs font-semibold font-display flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300">
                    Go <ArrowRight size={10} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right: Research Stats Panel */}
            <div className="hidden lg:block">
              <div className="bg-white/8 border border-white/15 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp size={16} className="text-blue-300" />
                  <span className="text-xs font-bold font-display uppercase tracking-widest text-blue-300">2026 Research Data</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-white/8 rounded-xl p-4 border border-white/10">
                      <div className="text-3xl font-extrabold font-display mb-1" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs font-semibold text-white leading-tight mb-1">{stat.label}</div>
                      <div className="text-xs text-blue-300/70">{stat.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#E8533A]/20 border border-[#E8533A]/30 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={15} className="text-[#E8533A] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-display text-white mb-1">The Gap Is Real</div>
                      <p className="text-xs text-blue-200 leading-relaxed">
                        52% of teachers learn about AI through personal exploration and social media. The AI Classroom Hub exists to fill this vacuum with trusted, practical guidance.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-blue-400 mt-3 text-center">Sources: RAND 2026, Stanford HAI 2026, TPT State of the Classroom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tier 1 Resources ── */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-2 block">Start Here</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0F2A4A] mb-3">The resources teachers need most.</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Based on 2026 research data, these four resources address the most acute and broadly-felt needs across K-12 education.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tier1Resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg" style={{ backgroundColor: r.bg }}>
                    <r.icon size={20} style={{ color: r.color }} />
                  </div>
                  <span
                    className="text-xs font-bold font-display px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: r.bg, color: r.color }}
                  >
                    {r.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold font-display text-[#0F2A4A] mb-2">{r.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{r.desc}</p>
                <div
                  className="flex items-center gap-1 text-sm font-semibold font-display opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: r.color }}
                >
                  Explore <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Stats (mobile) ── */}
      <section ref={statsRef} className="py-14 bg-white lg:hidden">
        <div className="container">
          <div className="text-center mb-8">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-2 block">Why This Matters</span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A]">The state of AI in K-12, 2026.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Grade Level Branches ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-2 block">Choose Your Path</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0F2A4A] mb-3">Resources built for your level.</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Every educator's AI challenge is different. Select your grade level or role for resources tailored to your specific needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map((branch) => (
              <Link
                key={branch.href}
                href={branch.href}
                className="group relative bg-white rounded-xl border-t-4 border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
                style={{ borderTopColor: branch.color }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{branch.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold font-display text-[#0F2A4A] mb-1">{branch.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{branch.tagline}</p>
                  </div>
                </div>
                <div
                  className="mt-4 flex items-center gap-1 text-sm font-semibold font-display opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: branch.color }}
                >
                  Explore resources <ArrowRight size={13} />
                </div>
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-5 transition-opacity group-hover:opacity-10"
                  style={{ backgroundColor: branch.color }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Classroom Photo Section ── */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-3 block">The Mission</span>
              <h2 className="text-3xl font-extrabold font-display text-[#0F2A4A] mb-5 leading-tight">
                AI won't replace great teachers. But teachers who use AI well will have a significant advantage.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The AI Classroom Hub was built by Ryan David — 20+ years in K-12 classrooms, currently Director of Operations and Technology for a K-8 school. Not a course vendor. Not a certification seller. A practitioner writing to the teachers he used to be.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                The site exists because 52% of teachers are learning about AI through personal exploration and social media. That's not a system working. That's a gap the Hub is here to fill — with vetted, practical, grade-level guidance that changes what happens on Monday.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#2563EB] font-semibold font-display text-sm hover:gap-3 transition-all"
              >
                Learn more about the Hub <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/manus-storage/classroom-hero_aacf1221.png"
                alt="Modern K-12 classroom with students using technology"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-xs font-semibold font-display text-[#0F2A4A]">68% of teachers now use AI weekly — up from 29% in January 2025.</p>
                <p className="text-xs text-gray-500 mt-0.5">RAND Corporation, January 2026 Survey of 4,200 K-12 Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-2 block">What Readers Say</span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A]">From teachers who teach with AI.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-100">
                <div className="text-3xl text-[#2563EB]/20 font-display font-black leading-none mb-3">"</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <div className="text-sm font-bold font-display text-[#0F2A4A]">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(/manus-storage/newsletter-bg_f07a09b2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#C0392B]/80" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-white/70 mb-3 block">Office Hours /AI</span>
            <h2 className="text-3xl font-extrabold font-display text-white mb-4">
              The Sunday read for teachers who teach with AI.
            </h2>
            <p className="text-white/85 leading-relaxed mb-8">
              One practical tip, one tool, one real classroom story — every Sunday morning. No jargon. No hype. Just what works on Monday. Written by Ryan David. Free every week.
            </p>
            <div className="max-w-md mx-auto">
              <SubscribeForm
                audience="office-hours"
                placeholder="your@school.edu"
                buttonText="Subscribe Free"
                inputClassName="bg-white/95 text-gray-800 placeholder-gray-400 border-0 py-3"
                buttonClassName="bg-[#0F2A4A] hover:bg-[#1a3a5c] text-white whitespace-nowrap"
              />
            </div>
            <p className="text-white/50 text-xs mt-3">Free every Sunday. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
