/* ============================================================
   Prompt Library Page — AI Classroom Hub
   Grade-level and subject-specific prompt templates
   ============================================================ */

import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Search, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const gradeFilters = ["All Levels", "Pre-K / Kinder", "Elementary", "Middle School", "High School", "Administrators"];
const subjectFilters = ["All Subjects", "ELA / Writing", "Math", "Science", "Social Studies", "Special Education", "Administration"];

const prompts = [
  {
    grade: "Elementary",
    subject: "ELA / Writing",
    title: "Differentiated Reading Response",
    desc: "Generate three versions of a reading response prompt for the same text — below grade level, on grade level, and above grade level.",
    prompt: `I am teaching [BOOK TITLE] to my [GRADE] class. Create three versions of a reading response prompt for this text:\n1. Below grade level (simplified vocabulary, sentence starters provided)\n2. On grade level (standard expectations)\n3. Above grade level (extended thinking, text-to-world connections)\nEach version should assess the same core comprehension skill: [SKILL].`,
    tag: "Differentiation",
    tagColor: "#10B981",
    tagBg: "#ECFDF5",
  },
  {
    grade: "Elementary",
    subject: "Special Education",
    title: "IEP Goal Generator",
    desc: "Generate SMART IEP goals for a student based on their current performance level and target skill area.",
    prompt: `Generate 3 SMART IEP goals for a student with the following profile:\n- Current grade: [GRADE]\n- Disability category: [DISABILITY]\n- Current performance: [CURRENT LEVEL]\n- Target skill area: [SKILL AREA]\n- Setting: [SETTING]\n\nEach goal should include: baseline, measurable target, timeline, and measurement method.`,
    tag: "Special Education",
    tagColor: "#10B981",
    tagBg: "#ECFDF5",
  },
  {
    grade: "Middle School",
    subject: "ELA / Writing",
    title: "Process-Based Essay Assignment",
    desc: "Create an essay assignment that requires students to document their process, making AI use visible and assessable.",
    prompt: `Create a process-based essay assignment for [GRADE] students on [TOPIC]. The assignment must:\n1. Require students to submit a planning document showing their initial ideas\n2. Include a draft with tracked changes or revision notes\n3. Ask students to write a reflection on their writing process\n4. Include a section where students document any AI tools used and how\n\nThe rubric should assess process quality, not just final product.`,
    tag: "Academic Integrity",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
  },
  {
    grade: "High School",
    subject: "ELA / Writing",
    title: "AI-Inclusive Research Paper",
    desc: "Design a research assignment that teaches students to use AI as a research tool while developing original analysis.",
    prompt: `Design a research paper assignment for [GRADE] [SUBJECT] that:\n1. Explicitly teaches students to use AI for initial research and source discovery\n2. Requires students to verify all AI-provided information with primary/secondary sources\n3. Asks students to document their AI use in a methodology section\n4. Assesses original analysis and synthesis, not information recall\n5. Includes a self-assessment rubric for AI use transparency\n\nTopic: [TOPIC]. Length: [LENGTH].`,
    tag: "Assessment Design",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
  },
  {
    grade: "All Levels",
    subject: "Administration",
    title: "Parent Newsletter Draft",
    desc: "Generate a parent newsletter explaining your classroom's AI use policy and how it supports student learning.",
    prompt: `Write a parent newsletter (300-400 words) explaining how I use AI tools in my [GRADE] [SUBJECT] classroom. Include:\n1. What AI tools we use and why\n2. How AI supports (not replaces) student learning\n3. What we do NOT use AI for\n4. How students are taught to use AI responsibly\n5. How parents can support AI literacy at home\n\nTone: warm, accessible, reassuring. Avoid jargon.`,
    tag: "Communication",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
  },
  {
    grade: "Administrators",
    subject: "Administration",
    title: "AI Policy First Draft",
    desc: "Generate a first draft of a school or district AI acceptable use policy based on your specific context.",
    prompt: `Draft a school AI acceptable use policy for [SCHOOL TYPE] serving grades [GRADE RANGE]. The policy should address:\n1. Approved AI tools and approval process for new tools\n2. Student use guidelines by grade band\n3. Academic integrity expectations\n4. Data privacy requirements (FERPA/COPPA compliance)\n5. Teacher professional development requirements\n6. Parent notification and consent procedures\n\nTone: clear, enforceable, and developmentally appropriate. Avoid overly restrictive or permissive language.`,
    tag: "Policy",
    tagColor: "#E8533A",
    tagBg: "#FFF7F5",
  },
  {
    grade: "Elementary",
    subject: "Math",
    title: "Math Word Problem Generator",
    desc: "Generate differentiated math word problems at three difficulty levels for the same concept.",
    prompt: `Create 5 math word problems for each of three difficulty levels on the topic of [MATH CONCEPT] for [GRADE] students:\n\nLevel 1 (Below): Single-step, familiar contexts, simple numbers\nLevel 2 (On): Two-step, grade-appropriate contexts\nLevel 3 (Above): Multi-step, real-world applications, extension thinking\n\nAll problems should use culturally diverse names and contexts.`,
    tag: "Differentiation",
    tagColor: "#10B981",
    tagBg: "#ECFDF5",
  },
  {
    grade: "All Levels",
    subject: "ELA / Writing",
    title: "Report Card Comment Generator",
    desc: "Generate personalized, specific report card comments that go beyond generic praise.",
    prompt: `Write 5 report card comment options for a student with the following profile:\n- Subject: [SUBJECT]\n- Grade: [GRADE]\n- Strengths: [STRENGTHS]\n- Areas for growth: [GROWTH AREAS]\n- Recent achievement: [ACHIEVEMENT]\n\nEach comment should be 2-3 sentences, specific (not generic), and include one actionable suggestion for home support. Avoid deficit language.`,
    tag: "Time Saver",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
  },
];

function PromptCard({ p }: { p: typeof prompts[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(p.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className="text-xs font-bold font-display px-2 py-0.5 rounded-full"
              style={{ backgroundColor: p.tagBg, color: p.tagColor }}
            >
              {p.tag}
            </span>
            <span className="text-xs text-gray-400 font-display font-semibold">{p.grade}</span>
            <span className="text-xs text-gray-300">·</span>
            <span className="text-xs text-gray-400">{p.subject}</span>
          </div>
          <h3 className="text-sm font-bold font-display text-[#0F2A4A]">{p.title}</h3>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 flex items-center gap-1.5 text-xs font-semibold font-display px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600"
        >
          {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.desc}</p>
      <div className="bg-[#F8FAFC] rounded-lg p-3 border border-gray-100">
        <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono leading-relaxed line-clamp-4">{p.prompt}</pre>
      </div>
    </div>
  );
}

export default function PromptLibrary() {
  const [gradeFilter, setGradeFilter] = useState("All Levels");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [search, setSearch] = useState("");

  const filtered = prompts.filter((p) => {
    const matchGrade = gradeFilter === "All Levels" || p.grade === gradeFilter || p.grade === "All Levels";
    const matchSubject = subjectFilter === "All Subjects" || p.subject === subjectFilter;
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchGrade && matchSubject && matchSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 bg-[#2563EB]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-blue-200 mb-3 block">Prompt Library</span>
            <h1 className="text-4xl font-extrabold font-display text-white mb-4 leading-tight">
              Grade-level prompt templates that save real time.
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Teachers using AI across multiple categories save an average of 10–14 hours per week. These prompts are the starting point. Copy, customize, and use today.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search prompts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {gradeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setGradeFilter(f)}
                  className={`text-xs font-semibold font-display px-3 py-1.5 rounded-full border transition-colors ${
                    gradeFilter === f
                      ? "bg-[#2563EB] text-white border-[#2563EB]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {subjectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setSubjectFilter(f)}
                className={`text-xs font-semibold font-display px-3 py-1.5 rounded-full border transition-colors ${
                  subjectFilter === f
                    ? "bg-[#0D9488] text-white border-[#0D9488]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#0D9488] hover:text-[#0D9488]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500 font-display">
              Showing <strong className="text-[#0F2A4A]">{filtered.length}</strong> prompts
            </p>
            <p className="text-xs text-gray-400">More prompts added weekly via Office Hours /AI</p>
          </div>
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p, i) => (
                <PromptCard key={i} p={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 font-display">No prompts match your filters. Try broadening your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-[#0F2A4A]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1">New prompts added every Sunday.</h3>
              <p className="text-sm text-blue-200">Subscribe to Office Hours /AI — one prompt, one tool, one story. Free.</p>
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
