/* ============================================================
   AI Tool Directory — AI Classroom Hub
   Searchable, filterable database of vetted AI tools
   ============================================================ */

import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Search, ExternalLink, Star, Shield, Clock, CheckCircle2 } from "lucide-react";

const gradeFilters = ["All Levels", "Pre-K / Kinder", "Elementary", "Middle School", "High School", "Administrators"];
const useCaseFilters = [
  "All Uses",
  "Planning & Materials",
  "Differentiation & Accessibility",
  "Assessment & Feedback",
  "Student Practice & Tutoring",
  "Communication & Operations",
];

const directoryPrinciples = [
  "One strong tool can appear in more than one workflow, but every card must solve a specific school problem.",
  "Thin categories such as stand-alone policy, IEP, and generic writing were consolidated into broader educator workflows.",
  "General chatbots are included only when they add a meaningful admin, drafting, or district-planning use case.",
];

const tools = [
  {
    name: "MagicSchool AI",
    url: "https://www.magicschool.ai",
    grade: ["Elementary", "Middle School", "High School", "Administrators"],
    useCase: ["Planning & Materials", "Differentiation & Accessibility", "Assessment & Feedback", "Communication & Operations"],
    rating: 5,
    cost: "Free / Premium",
    privacy: "FERPA",
    desc: "A broad K-12 teacher workspace for lesson plans, rubrics, parent emails, accommodations, behavior supports, and multilingual communication. Best as an all-purpose teacher productivity suite rather than a single-task tool.",
    highlight: "Best Starter Suite",
    highlightColor: "#10B981",
    highlightBg: "#ECFDF5",
    timeSave: "3–5 hrs/week",
  },
  {
    name: "Eduaide.Ai",
    url: "https://www.eduaide.ai/",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Planning & Materials", "Differentiation & Accessibility", "Assessment & Feedback"],
    rating: 5,
    cost: "Free / Premium",
    privacy: "Review Required",
    desc: "Creates standards-aligned lesson materials, worksheets, graphic organizers, rubrics, questions, and differentiated versions with exports to Google Docs, DOCX, Google Forms, PDF, and text.",
    highlight: "Classroom Materials",
    highlightColor: "#2563EB",
    highlightBg: "#EFF6FF",
    timeSave: "2–4 hrs/week",
  },
  {
    name: "SchoolAI",
    url: "https://www.schoolai.com/",
    grade: ["Elementary", "Middle School", "High School", "Administrators"],
    useCase: ["Planning & Materials", "Student Practice & Tutoring", "Assessment & Feedback", "Communication & Operations"],
    rating: 5,
    cost: "Free / District",
    privacy: "Privacy First",
    desc: "Teacher-controlled AI spaces for student practice, real-time progress monitoring, productivity tools, and district oversight. Strong choice when leaders want student-facing AI with teacher visibility and guardrails.",
    highlight: "Teacher-Monitored",
    highlightColor: "#7C3AED",
    highlightBg: "#F5F3FF",
    timeSave: "10+ hrs/week",
  },
  {
    name: "QuestionWell",
    url: "https://questionwell.org/",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Planning & Materials", "Assessment & Feedback"],
    rating: 5,
    cost: "Free / Premium",
    privacy: "Data Pledge",
    desc: "Research-based generator for standards-aligned questions, readings, vocabulary, and interactive videos. Useful for teachers who need quality controls around rigor, cognitive demand, alignment, and export workflows.",
    highlight: "Research-Based",
    highlightColor: "#0D9488",
    highlightBg: "#F0FDFA",
    timeSave: "2–3 hrs/week",
  },
  {
    name: "Curipod",
    url: "https://www.curipod.com/",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Assessment & Feedback", "Student Practice & Tutoring"],
    rating: 5,
    cost: "Free / District",
    privacy: "FERPA / COPPA",
    desc: "Interactive writing practice where students write, receive real-time AI feedback, discuss, revise, and generate evidence teachers can use for follow-up. Especially useful for ELA, discussion, and constructed response practice.",
    highlight: "Writing Feedback",
    highlightColor: "#F97316",
    highlightBg: "#FFF7ED",
    timeSave: "Faster feedback cycles",
  },
  {
    name: "Diffit",
    url: "https://diffit.me",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Differentiation & Accessibility", "Planning & Materials"],
    rating: 4,
    cost: "Free / Premium",
    privacy: "FERPA",
    desc: "Turns topics, articles, videos, or existing text into leveled readings, vocabulary, summaries, and student activities. A practical choice for multilingual learners, reading-level adjustment, and scaffolded access to grade-level topics.",
    highlight: "Leveled Texts",
    highlightColor: "#10B981",
    highlightBg: "#ECFDF5",
    timeSave: "2–4 hrs/week",
  },
  {
    name: "Brisk Teaching",
    url: "https://www.briskteaching.com",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Planning & Materials", "Assessment & Feedback", "Differentiation & Accessibility"],
    rating: 4,
    cost: "Free / Premium",
    privacy: "FERPA",
    desc: "Chrome extension that works inside Google Docs, Slides, web pages, and classroom workflows. Strong for feedback, rubrics, quizzes, level changes, and turning existing resources into usable instructional materials.",
    highlight: "Google Workspace",
    highlightColor: "#0D9488",
    highlightBg: "#F0FDFA",
    timeSave: "2–3 hrs/week",
  },
  {
    name: "Khanmigo (Khan Academy)",
    url: "https://www.khanacademy.org/khan-labs",
    grade: ["Elementary", "Middle School", "High School"],
    useCase: ["Student Practice & Tutoring", "Assessment & Feedback", "Planning & Materials"],
    rating: 4,
    cost: "Free / District",
    privacy: "COPPA / FERPA",
    desc: "Socratic AI tutor and teacher assistant designed to guide students through thinking rather than simply giving answers. Best for math, writing, tutoring, and practice tied to Khan Academy content.",
    highlight: "Student Tutor",
    highlightColor: "#6366F1",
    highlightBg: "#EEF2FF",
    timeSave: "Reduces re-teaching",
  },
  {
    name: "Amira Learning",
    url: "https://www.amiralearning.com",
    grade: ["Elementary"],
    useCase: ["Student Practice & Tutoring", "Assessment & Feedback", "Differentiation & Accessibility"],
    rating: 5,
    cost: "District License",
    privacy: "FERPA / COPPA",
    desc: "AI-powered reading tutor and oral-reading assessment platform for early literacy. Most relevant for elementary reading intervention, fluency practice, dyslexia screening workflows, and MTSS conversations.",
    highlight: "Reading Intervention",
    highlightColor: "#F59E0B",
    highlightBg: "#FFFBEB",
    timeSave: "Supports 1:1 reading",
  },
  {
    name: "Canva Magic Studio",
    url: "https://www.canva.com/magic",
    grade: ["Elementary", "Middle School", "High School", "Administrators"],
    useCase: ["Planning & Materials", "Communication & Operations"],
    rating: 4,
    cost: "Free / Premium",
    privacy: "Review Required",
    desc: "AI-assisted design for presentations, newsletters, classroom visuals, family updates, and professional learning materials. Useful when communication quality and fast visual production matter.",
    highlight: "Design + AI",
    highlightColor: "#E8533A",
    highlightBg: "#FFF7F5",
    timeSave: "1–2 hrs/week",
  },
  {
    name: "Otter.ai",
    url: "https://otter.ai",
    grade: ["Administrators"],
    useCase: ["Communication & Operations"],
    rating: 4,
    cost: "Free / Business",
    privacy: "Review Required",
    desc: "AI transcription, meeting notes, summaries, and action items for leadership meetings, professional development, planning sessions, and internal operations. Avoid recording sensitive student meetings without district approval.",
    highlight: "Meeting Notes",
    highlightColor: "#E8533A",
    highlightBg: "#FFF7F5",
    timeSave: "1–2 hrs/week",
  },
  {
    name: "ChatGPT Edu",
    url: "https://openai.com/chatgpt/education",
    grade: ["Middle School", "High School", "Administrators"],
    useCase: ["Planning & Materials", "Communication & Operations"],
    rating: 4,
    cost: "Education Plan",
    privacy: "District Review",
    desc: "General-purpose AI for drafting, analysis, policy brainstorming, grant language, PD planning, and complex communication workflows. Best listed as an advanced planning tool, not as the default answer for every classroom category.",
    highlight: "Advanced Drafting",
    highlightColor: "#2563EB",
    highlightBg: "#EFF6FF",
    timeSave: "2–4 hrs/week",
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
    const query = search.trim().toLowerCase();
    const matchGrade = gradeFilter === "All Levels" || t.grade.includes(gradeFilter);
    const matchUse = useCaseFilter === "All Uses" || t.useCase.includes(useCaseFilter);
    const matchSearch =
      query === "" ||
      t.name.toLowerCase().includes(query) ||
      t.desc.toLowerCase().includes(query) ||
      t.useCase.some((use) => use.toLowerCase().includes(query));
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
              Vetted AI tools for K-12 educators. No filler categories.
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              A practical directory of classroom-tested and administrator-relevant AI tools, organized around real educator workflows instead of thin one-tool sections.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Principles */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-3">
            {directoryPrinciples.map((principle) => (
              <div key={principle} className="flex gap-2 rounded-xl border border-teal-100 bg-teal-50/60 p-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#0D9488]" />
                <p className="text-xs leading-relaxed text-[#0F2A4A]">{principle}</p>
              </div>
            ))}
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
                placeholder="Search tools or workflows…"
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <p className="text-sm text-gray-500 font-display">
              Showing <strong className="text-[#0F2A4A]">{filtered.length}</strong> tools
            </p>
            <p className="text-xs text-gray-400">District privacy review is still recommended before student use.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool) => (
              <div key={tool.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
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
                    aria-label={`Visit ${tool.name}`}
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

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.useCase.map((use) => (
                    <span key={use} className="text-[11px] bg-blue-50 text-[#2563EB] px-2 py-0.5 rounded-full border border-blue-100">{use}</span>
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
