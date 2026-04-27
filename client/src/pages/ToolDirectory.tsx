/* ============================================================
   AI Tool Directory — AI Classroom Hub
   Searchable, filterable database of vetted AI tools
   ============================================================ */

import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Search, ExternalLink, Star, Shield, Clock } from "lucide-react";

const gradeFilters = ["All Levels", "Pre-K / Kinder", "Elementary", "Middle School", "High School", "Administrators"];
const useCaseFilters = ["All Uses", "Lesson Planning", "Differentiation", "Assessment", "IEP / Special Ed", "Writing", "Communication", "Policy"];

const tools = [
  {
    name: "MagicSchool AI",
    url: "https://www.magicschool.ai",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Lesson Planning", "Differentiation", "IEP / Special Ed", "Assessment"],
    rating: 5,
    cost: "Free / Premium",
    privacy: "FERPA",
    desc: "Used by 700,000+ U.S. teachers. Comprehensive suite for lesson planning, differentiation, IEP writing, and more. The most widely adopted AI tool in K-12.",
    highlight: "Most Widely Used",
    highlightColor: "#10B981",
    highlightBg: "#ECFDF5",
    timeSave: "3–5 hrs/week",
  },
  {
    name: "ChatGPT (Edu)",
    url: "https://openai.com/chatgpt/education",
    grade: ["Middle School", "High School", "Administrators"],
    useCase: ["Lesson Planning", "Writing", "Communication", "Policy"],
    rating: 4,
    cost: "Free / Plus",
    privacy: "Review Required",
    desc: "The most capable general-purpose AI. Excellent for lesson planning, parent communication, policy drafting, and professional development. Requires district privacy review.",
    highlight: "Most Capable",
    highlightColor: "#2563EB",
    highlightBg: "#EFF6FF",
    timeSave: "2–4 hrs/week",
  },
  {
    name: "Amira Learning",
    url: "https://www.amiralearning.com",
    grade: ["Elementary"],
    useCase: ["Assessment", "Differentiation"],
    rating: 5,
    cost: "District License",
    privacy: "FERPA / COPPA",
    desc: "AI-powered reading tutor with strong efficacy data for phonics and oral reading fluency. Particularly effective in Title I schools. IES-validated.",
    highlight: "Research Validated",
    highlightColor: "#F59E0B",
    highlightBg: "#FFFBEB",
    timeSave: "Replaces 1:1 reading time",
  },
  {
    name: "Khanmigo (Khan Academy)",
    url: "https://www.khanacademy.org/khan-labs",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Lesson Planning", "Assessment", "Writing"],
    rating: 4,
    cost: "Free",
    privacy: "COPPA / FERPA",
    desc: "Socratic AI tutor that guides students through problems rather than giving answers. Strong for math and writing. Free for teachers and students.",
    highlight: "Student-Facing",
    highlightColor: "#6366F1",
    highlightBg: "#EEF2FF",
    timeSave: "Reduces re-teaching time",
  },
  {
    name: "Brisk Teaching",
    url: "https://www.briskteaching.com",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Lesson Planning", "Assessment", "Writing"],
    rating: 4,
    cost: "Free / Premium",
    privacy: "FERPA",
    desc: "Chrome extension that works directly in Google Docs and Slides. Excellent for creating rubrics, giving feedback, and building quizzes from existing materials.",
    highlight: "Google Workspace",
    highlightColor: "#0D9488",
    highlightBg: "#F0FDFA",
    timeSave: "2–3 hrs/week",
  },
  {
    name: "Diffit",
    url: "https://diffit.me",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Differentiation", "Lesson Planning"],
    rating: 4,
    cost: "Free / Premium",
    privacy: "FERPA",
    desc: "Instantly generates differentiated reading materials at multiple Lexile levels from any topic, article, or YouTube video. Exceptional for ELL and special education.",
    highlight: "Differentiation",
    highlightColor: "#10B981",
    highlightBg: "#ECFDF5",
    timeSave: "2–4 hrs/week",
  },
  {
    name: "Canva Magic Studio",
    url: "https://www.canva.com/magic",
    grade: ["Elementary", "Middle School", "High School", "Administrators"],
    useCase: ["Lesson Planning", "Communication"],
    rating: 3,
    cost: "Free / Premium",
    privacy: "Review Required",
    desc: "AI-powered design tools for creating classroom materials, presentations, and parent communications. Magic Write generates text; Magic Design creates layouts.",
    highlight: "Design + AI",
    highlightColor: "#E8533A",
    highlightBg: "#FFF7F5",
    timeSave: "1–2 hrs/week",
  },
  {
    name: "Otter.ai",
    url: "https://otter.ai",
    grade: ["Administrators"],
    useCase: ["Communication", "Policy"],
    rating: 4,
    cost: "Free / Business",
    privacy: "Review Required",
    desc: "AI transcription and meeting notes for administrators. Excellent for IEP meetings, staff meetings, and professional development sessions. Generates summaries and action items.",
    highlight: "Admin Efficiency",
    highlightColor: "#E8533A",
    highlightBg: "#FFF7F5",
    timeSave: "1–2 hrs/week",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={i <= rating ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

export default function ToolDirectory() {
  const [gradeFilter, setGradeFilter] = useState("All Levels");
  const [useCaseFilter, setUseCaseFilter] = useState("All Uses");
  const [search, setSearch] = useState("");

  const filtered = tools.filter((t) => {
    const matchGrade = gradeFilter === "All Levels" || t.grade.includes(gradeFilter);
    const matchUse = useCaseFilter === "All Uses" || t.useCase.includes(useCaseFilter);
    const matchSearch = search === "" || t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase());
    return matchGrade && matchUse && matchSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 bg-[#0D9488]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-teal-100 mb-3 block">AI Tool Directory</span>
            <h1 className="text-4xl font-extrabold font-display text-white mb-4 leading-tight">
              Vetted AI tools for K-12 educators. No vendor bias.
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              Every tool reviewed for privacy compliance, classroom practicality, and real-world time savings. Organized by grade level and use case.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-2">
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tools…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {gradeFilters.map((f) => (
              <button
                key={f}
                onClick={() => setGradeFilter(f)}
                className={`text-xs font-semibold font-display px-3 py-1.5 rounded-full border transition-colors ${
                  gradeFilter === f
                    ? "bg-[#0D9488] text-white border-[#0D9488]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#0D9488] hover:text-[#0D9488]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {useCaseFilters.map((f) => (
              <button
                key={f}
                onClick={() => setUseCaseFilter(f)}
                className={`text-xs font-semibold font-display px-3 py-1.5 rounded-full border transition-colors ${
                  useCaseFilter === f
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500 font-display">
              Showing <strong className="text-[#0F2A4A]">{filtered.length}</strong> tools
            </p>
            <p className="text-xs text-gray-400">All tools reviewed for FERPA/COPPA compliance</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold font-display text-[#0F2A4A]">{tool.name}</h3>
                      <span
                        className="text-xs font-bold font-display px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: tool.highlightBg, color: tool.highlightColor }}
                      >
                        {tool.highlight}
                      </span>
                    </div>
                    <StarRating rating={tool.rating} />
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-400 hover:text-[#0D9488]"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-4">{tool.desc}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {tool.grade.map((g) => (
                    <span key={g} className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">{g}</span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-50">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-0.5">Cost</div>
                    <div className="text-xs font-semibold font-display text-[#0F2A4A]">{tool.cost}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5 text-xs text-gray-400 mb-0.5">
                      <Shield size={10} /> Privacy
                    </div>
                    <div className="text-xs font-semibold font-display text-[#0D9488]">{tool.privacy}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5 text-xs text-gray-400 mb-0.5">
                      <Clock size={10} /> Saves
                    </div>
                    <div className="text-xs font-semibold font-display text-[#2563EB]">{tool.timeSave}</div>
                  </div>
                </div>
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
              <h3 className="text-xl font-bold font-display text-white mb-1">New tools reviewed every week.</h3>
              <p className="text-sm text-blue-200">Subscribe to Office Hours /AI for the Tool of the Week — every Sunday, free.</p>
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
