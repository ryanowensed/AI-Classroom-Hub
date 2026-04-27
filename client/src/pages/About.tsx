/* ============================================================
   About Page — AI Classroom Hub
   ============================================================ */

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Shield, BookOpen, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    color: "#2563EB",
    bg: "#EFF6FF",
    label: "Trusted, Not Sponsored",
    desc: "Every tool review and resource recommendation is based on classroom practicality and research evidence. No vendor relationships. No affiliate fees.",
  },
  {
    icon: BookOpen,
    color: "#0D9488",
    bg: "#F0FDFA",
    label: "Teacher-First",
    desc: "Written by a practitioner for practitioners. The Hub exists to reduce friction, not add to it. Every resource is tested against the question: does this change Monday?",
  },
  {
    icon: Users,
    color: "#6366F1",
    bg: "#EEF2FF",
    label: "Grade-Level Specific",
    desc: "A one-size-fits-all approach to AI in education doesn't work. Resources are organized by grade level and role because the challenges at Pre-K and Grade 12 are fundamentally different.",
  },
  {
    icon: TrendingUp,
    color: "#E8533A",
    bg: "#FFF7F5",
    label: "Research-Grounded",
    desc: "Every recommendation is grounded in credible research. The Hub cites RAND, Stanford HAI, Brookings, and peer-reviewed sources — not vendor white papers.",
  },
];

const stats = [
  { value: "20+", label: "Years in K-12 classrooms" },
  { value: "700K+", label: "Teachers using MagicSchool AI (reviewed here)" },
  { value: "68%", label: "of teachers now use AI weekly (RAND 2026)" },
  { value: "6%", label: "say their AI policy is clear — the gap we're filling" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-blue-300 mb-3 block">About</span>
            <h1 className="text-4xl font-extrabold font-display text-white mb-5 leading-tight">
              Built by a teacher. For teachers. No courses. No certifications.
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              The AI Classroom Hub exists because 52% of teachers are learning about AI through personal exploration and social media. That's not a system working. That's a gap — and this is the attempt to fill it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-3 block">The Mission</span>
              <h2 className="text-3xl font-extrabold font-display text-[#0F2A4A] mb-5 leading-tight">
                AI won't replace great teachers. But teachers who use AI well will have a significant advantage — and their students will too.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ryan David has spent 20+ years in K-12 classrooms and currently serves as Director of Operations and Director of Technology for a K-8 school. He writes Office Hours /AI, a free Sunday publication for teachers who teach with AI.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The AI Classroom Hub is the expanded version of that mission — a comprehensive, grade-level resource hub that serves teachers and administrators navigating the most consequential technological shift in education history.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-[#E8533A] hover:bg-[#d4432a] text-white font-semibold font-display px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Read Office Hours /AI <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#F8FAFC] rounded-xl p-5 border border-gray-100 text-center">
                  <div className="text-3xl font-extrabold font-display text-[#2563EB] mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-[#2563EB] mb-2 block">What We Stand For</span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A]">The principles behind every resource.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="p-2.5 rounded-lg inline-block mb-3" style={{ backgroundColor: v.bg }}>
                  <v.icon size={20} style={{ color: v.color }} />
                </div>
                <h3 className="text-sm font-bold font-display text-[#0F2A4A] mb-2">{v.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin photo section */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="/manus-storage/admin-section_05026089.png"
                alt="School administrator reviewing AI policy documents"
                className="w-full h-72 lg:h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold font-display uppercase tracking-widest text-[#E8533A] mb-3 block">For Leaders Too</span>
              <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A] mb-4 leading-tight">
                The Hub serves administrators, not just teachers.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Only 6% of teachers say their school's AI policy is clear. District leaders are navigating a governance challenge unlike any previous technology wave — and they need practical tools, not just theory.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Administrators branch provides policy templates, governance frameworks, data privacy guidance, and budget evaluation tools built specifically for K-12 school leaders.
              </p>
              <Link
                href="/administrators"
                className="inline-flex items-center gap-2 text-[#E8533A] font-semibold font-display text-sm hover:gap-3 transition-all"
              >
                Explore Administrator Resources <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#0F2A4A]">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-display text-white mb-3">Start with Office Hours /AI.</h3>
            <p className="text-sm text-blue-200 mb-6">The free Sunday publication for teachers who teach with AI. One tip, one tool, one story. Every week.</p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 bg-[#E8533A] hover:bg-[#d4432a] text-white font-semibold font-display px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe Free <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
