/* ============================================================
   Newsletter Page — Office Hours /AI
   ============================================================ */

import { useState } from "react";
import Layout from "@/components/Layout";
import SubscribeForm from "@/components/SubscribeForm";
import { Check, BookOpen, Wrench, Users, Newspaper } from "lucide-react";

const issues = [
  {
    number: "#012",
    date: "April 20, 2026",
    title: "The IEP Prompt That Saved a Special Ed Teacher 6 Hours",
    tip: "Use ChatGPT to generate SMART IEP goal drafts in under 3 minutes.",
    tool: "MagicSchool AI — IEP Goal Bank",
    story: "A special education teacher in Ohio reduced her IEP writing time from 4 hours to 45 minutes per student.",
  },
  {
    number: "#011",
    date: "April 13, 2026",
    title: "Why AI Detection Tools Are Failing Your Students",
    tip: "Move from AI detection to process-based assessment. Here's the framework.",
    tool: "Turnitin Similarity Report — What It Actually Measures",
    story: "A middle school ELA teacher redesigned her essay unit after a false positive flagged a student's original work.",
  },
  {
    number: "#010",
    date: "April 6, 2026",
    title: "The Admin's First AI Policy: A 30-Minute Starting Point",
    tip: "Use this prompt to generate your school's first AI acceptable use policy draft.",
    tool: "Claude 3.5 Sonnet — Best for Policy Drafting",
    story: "A K-8 principal used the Hub's policy template to present a draft to her board in under a week.",
  },
];

const whatIsInside = [
  { icon: BookOpen, color: "#2563EB", label: "Try This Today", desc: "One quick, actionable AI tip you can implement right now — no setup required." },
  { icon: Wrench, color: "#0D9488", label: "Tool of the Week", desc: "A focused look at one AI tool teachers are actually using — what it does, how to start, and whether it's worth your time." },
  { icon: Users, color: "#6366F1", label: "Case Study", desc: "A real teacher success story with specific examples and measurable results — not hypotheticals." },
  { icon: Newspaper, color: "#E8533A", label: "In the News", desc: "The AI education developments, research findings, and tool launches that actually matter for your classroom." },
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(/manus-storage/newsletter-bg_f07a09b2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#C0392B]/82" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <Newspaper size={13} className="text-white/80" />
              <span className="text-xs font-bold font-display uppercase tracking-widest text-white/90">Office Hours /AI</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-white mb-5 leading-tight">
              The Sunday read for teachers who teach with AI.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              One practical tip, one tool, one real classroom story — every Sunday morning. No jargon. No hype. Just what works on Monday. Written by Ryan David. 20+ years in K-12 classrooms.
            </p>

            {!submitted ? (
              <div className="max-w-md mx-auto">
                <SubscribeForm
                  audience="office-hours"
                  placeholder="your@school.edu"
                  buttonText="Subscribe Free"
                  inputClassName="bg-white text-gray-800 placeholder-gray-400 border-0 focus:ring-white/50 py-3"
                  buttonClassName="bg-[#0F2A4A] hover:bg-[#1a3a5c] text-white whitespace-nowrap"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 bg-white/15 border border-white/25 rounded-xl px-6 py-4 max-w-md mx-auto">
                <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold font-display text-white">You're subscribed!</div>
                  <div className="text-xs text-white/70">Your first issue arrives Sunday morning.</div>
                </div>
              </div>
            )}
            <p className="text-white/50 text-xs mt-3">Free every Sunday. Unsubscribe any time.</p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#E8533A] mb-2 block">Every Issue</span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A]">What's in every issue.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatIsInside.map((item, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100">
                <div className="p-2.5 rounded-lg inline-block mb-3" style={{ backgroundColor: item.color + "15" }}>
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="text-sm font-bold font-display text-[#0F2A4A] mb-2">{item.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="container">
          <div className="mb-8">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#E8533A] mb-2 block">Recent Issues</span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A]">The tips you've been missing.</h2>
          </div>
          <div className="space-y-4">
            {issues.map((issue, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <div className="text-xs font-bold font-display text-[#E8533A] mb-0.5">{issue.number}</div>
                    <div className="text-xs text-gray-400">{issue.date}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold font-display text-[#0F2A4A] mb-3">{issue.title}</h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="bg-[#EFF6FF] rounded-lg p-3">
                        <div className="text-xs font-bold font-display text-[#2563EB] mb-1">Try This Today</div>
                        <p className="text-xs text-gray-600">{issue.tip}</p>
                      </div>
                      <div className="bg-[#F0FDFA] rounded-lg p-3">
                        <div className="text-xs font-bold font-display text-[#0D9488] mb-1">Tool of the Week</div>
                        <p className="text-xs text-gray-600">{issue.tool}</p>
                      </div>
                      <div className="bg-[#EEF2FF] rounded-lg p-3">
                        <div className="text-xs font-bold font-display text-[#6366F1] mb-1">Case Study</div>
                        <p className="text-xs text-gray-600">{issue.story}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Made This */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-3 block">Who Made This</span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A] mb-4">Written by a teacher, for teachers.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ryan David has spent 20+ years in K-12 classrooms and currently serves as Director of Operations and Director of Technology for a K-8 school. He writes Office Hours /AI, a free Sunday publication for teachers who teach with AI.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              He is not selling a course. He is not selling a certification. He is writing to the teachers he used to be.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
