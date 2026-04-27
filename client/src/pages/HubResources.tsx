/* ============================================================
   Hub Resources Page — AI Classroom Hub
   Cross-cutting resources accessible from all branches
   ============================================================ */

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Wrench, FileText, BookOpen, GraduationCap, BarChart2, Users, Globe, Download, Shield } from "lucide-react";
import { toast } from "sonner";

const resources = [
  {
    icon: Wrench,
    color: "#0D9488",
    bg: "#F0FDFA",
    label: "AI Tool Directory",
    desc: "Searchable, filterable database of vetted AI tools organized by grade level, subject, and use case. No vendor bias.",
    href: "/tool-directory",
    tag: "Tier 1",
  },
  {
    icon: FileText,
    color: "#2563EB",
    bg: "#EFF6FF",
    label: "Prompt Library",
    desc: "Grade-level and subject-specific prompt templates for ChatGPT, Gemini, and Claude. The #1 time-saving resource.",
    href: "/prompt-library",
    tag: "Most Requested",
  },
  {
    icon: BookOpen,
    color: "#6366F1",
    bg: "#EEF2FF",
    label: "AI Glossary for Educators",
    desc: "Plain-language definitions of key AI terms. Reduces intimidation and builds foundational literacy for all staff.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: GraduationCap,
    color: "#10B981",
    bg: "#ECFDF5",
    label: "PD Pathways",
    desc: "Self-paced learning modules for beginner, intermediate, and advanced AI users. Structured for individual or department use.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: BarChart2,
    color: "#F59E0B",
    bg: "#FFFBEB",
    label: "Research & Reports Library",
    desc: "Curated library of credible AI in education research from RAND, Stanford HAI, Brookings, and others.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: Globe,
    color: "#E8533A",
    bg: "#FFF7F5",
    label: "News & Trends Feed",
    desc: "Regularly updated digest of AI in education news, policy changes, and tool updates. Curated for K-12 relevance.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: Users,
    color: "#0F2A4A",
    bg: "#F1F5F9",
    label: "Community Forum",
    desc: "Peer-to-peer space for educators to share experiences, exchange resources, and ask questions. Moderated by practitioners.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: Download,
    color: "#6366F1",
    bg: "#EEF2FF",
    label: "Free Downloads",
    desc: "High-value, low-barrier entry point for new visitors. Templates, checklists, and quick-start guides.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
  {
    icon: Shield,
    color: "#E8533A",
    bg: "#FFF7F5",
    label: "AI Ethics & Safety Center",
    desc: "Foundational guidance on responsible AI use for all levels. Covers bias, privacy, equity, and age-appropriate use.",
    href: "#",
    tag: "Coming Soon",
    comingSoon: true,
  },
];

export default function HubResources() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-blue-300 mb-3 block">Hub Resources</span>
            <h1 className="text-4xl font-extrabold font-display text-white mb-4 leading-tight">
              Cross-cutting resources for every K-12 educator.
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              These resources exist at the Hub level and are accessible from every branch page. Built to serve teachers and administrators across all grade levels and subject areas.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r, i) => (
              <div
                key={i}
                className={`group bg-white rounded-xl border border-gray-100 p-6 shadow-sm transition-all ${r.comingSoon ? "opacity-80" : "hover:shadow-md hover:-translate-y-1 cursor-pointer"}`}
                onClick={() => {
                  if (r.comingSoon) {
                    toast.info("This resource is coming soon. Subscribe to Office Hours /AI to be notified.");
                  }
                }}
              >
                {r.comingSoon ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg" style={{ backgroundColor: r.bg }}>
                        <r.icon size={20} style={{ color: r.color }} />
                      </div>
                      <span className="text-xs font-bold font-display px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
                        {r.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-display text-[#0F2A4A] mb-2">{r.label}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
                  </div>
                ) : (
                  <Link href={r.href}>
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-[#0F2A4A]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1">New resources added every week.</h3>
              <p className="text-sm text-blue-200">Subscribe to Office Hours /AI to be notified when new Hub Resources go live.</p>
            </div>
            <Link
              href="/newsletter"
              className="shrink-0 flex items-center gap-2 bg-[#E8533A] hover:bg-[#d4432a] text-white font-semibold font-display px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe Free <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
