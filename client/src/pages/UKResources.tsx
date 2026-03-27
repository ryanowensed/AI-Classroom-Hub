import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Newspaper, Sparkles, Wrench, ExternalLink, Shield, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UKResources() {
  const ukTools = [
    {
      name: "Diffit",
      description: "Creates differentiated reading passages and comprehension questions in seconds. Works across all Key Stages and is GDPR-compliant with no student data stored.",
      category: "Differentiation",
      pricing: "Free",
      gdpr: true,
      link: "https://diffit.me",
      keyStages: ["KS2", "KS3", "KS4"],
    },
    {
      name: "NotebookLM",
      description: "Upload your scheme of work or National Curriculum documents and generate study guides, FAQs, and audio summaries. Excellent for revision support.",
      category: "Content Creation",
      pricing: "Freemium",
      gdpr: true,
      link: "https://notebooklm.google.com",
      keyStages: ["KS3", "KS4", "KS5"],
    },
    {
      name: "MagicSchool.ai",
      description: "80+ AI tools for lesson planning, assessment, and parent communication. Trusted by schools across the UK and compliant with UK data protection standards.",
      category: "Lesson Planning",
      pricing: "Freemium",
      gdpr: true,
      link: "https://magicschool.ai",
      keyStages: ["KS1", "KS2", "KS3", "KS4"],
    },
    {
      name: "Brisk Teaching",
      description: "Chrome extension with 40+ tools for quizzes, lesson plans, and writing feedback. Works directly in Google Classroom and Microsoft Teams.",
      category: "Lesson Planning",
      pricing: "Freemium",
      gdpr: true,
      link: "https://briskteaching.com",
      keyStages: ["KS2", "KS3", "KS4"],
    },
    {
      name: "Snorkl",
      description: "Evaluates spoken, handwritten, and drawn responses — ideal for oral assessments and maths problem-solving across Key Stages.",
      category: "Assessment",
      pricing: "Freemium",
      gdpr: true,
      link: "https://snorkl.ai",
      keyStages: ["KS2", "KS3", "KS4"],
    },
    {
      name: "Napkin AI",
      description: "Turns text notes into visual diagrams and infographics instantly. Useful for creating revision resources and concept maps aligned to the National Curriculum.",
      category: "Visual Learning",
      pricing: "Freemium",
      gdpr: true,
      link: "https://napkin.ai",
      keyStages: ["KS3", "KS4", "KS5"],
    },
  ];

  const ukPrompts = [
    {
      title: "Year Group Differentiation",
      prompt: `Create three versions of this reading passage at different levels for Year [X] students: one for lower ability, one for middle ability, and one for higher ability. Include 3 comprehension questions for each version aligned to the National Curriculum for [Subject].`,
      subject: "All subjects",
      keyStage: "KS2–KS4",
    },
    {
      title: "National Curriculum Lesson Plan",
      prompt: `Write a 60-minute lesson plan for Year [X] [Subject] that addresses the following National Curriculum objective: [paste objective]. Include a starter activity, main task with differentiation for SEND students, and a plenary. Use Bloom's Taxonomy to structure the learning objectives.`,
      subject: "All subjects",
      keyStage: "KS1–KS4",
    },
    {
      title: "GCSE Revision Summary",
      prompt: `Create a one-page revision summary for GCSE [Subject] on the topic of [topic]. Include key vocabulary, 5 key facts, a worked example, and 3 exam-style questions with mark scheme guidance. Format it for an A4 printout.`,
      subject: "GCSE subjects",
      keyStage: "KS4",
    },
    {
      title: "Parent Communication (UK)",
      prompt: `Write a brief, professional letter to parents explaining that our class will be using AI tools as part of our [Subject] lessons this term. Explain what the tools do, reassure them about data privacy (GDPR compliance), and invite any questions. Keep it under 200 words.`,
      subject: "All subjects",
      keyStage: "All",
    },
    {
      title: "SEND Adaptation",
      prompt: `Adapt the following lesson activity for a student with [specific need, e.g. dyslexia / ADHD / EAL]. Suggest 3 specific modifications to the task, the resources, and the assessment method. The student is in Year [X] and the subject is [Subject].`,
      subject: "All subjects",
      keyStage: "All",
    },
    {
      title: "A-Level Essay Scaffold",
      prompt: `Create a structured essay scaffold for the following A-Level [Subject] question: [paste question]. Include a suggested thesis statement, 3 main argument points with supporting evidence prompts, a counter-argument section, and a conclusion framework. Align to AQA/Edexcel/OCR mark scheme criteria.`,
      subject: "A-Level subjects",
      keyStage: "KS5",
    },
  ];

  const ukCaseStudies = [
    {
      title: "forschools.ai Cohort: 40 UK Schools Pilot AI Tools",
      school: "Multiple UK Schools",
      subject: "Cross-curricular",
      result: "Teachers in the forschools.ai cohort reported saving an average of 5–8 hours per week on planning and marking after integrating AI tools into their workflows. The cohort spanned primary and secondary schools across England.",
      tool: "Multiple tools",
      keyStage: "KS2–KS4",
    },
    {
      title: "EAL Support: AI Translation Saves 15+ Hours Per Week",
      school: "Secondary School, Greater Manchester",
      subject: "EAL / Pastoral",
      result: "A form tutor supporting a new Spanish-speaking student used AI translation tools to create bilingual resources, communicate with parents, and adapt lesson materials — saving over 15 hours in the first month and significantly improving the student's transition.",
      tool: "MagicSchool.ai + Google Translate",
      keyStage: "KS3",
    },
    {
      title: "GCSE History: AI-Assisted Source Analysis Practice",
      school: "Academy Trust, West Midlands",
      subject: "History",
      result: "A History teacher used NotebookLM to upload past GCSE papers and mark schemes, then generated targeted revision questions for each student's weak areas. Mock exam scores improved by an average of 8 marks across the cohort.",
      tool: "NotebookLM",
      keyStage: "KS4",
    },
    {
      title: "Primary Literacy: Differentiated Passages in Under 2 Minutes",
      school: "Primary School, Yorkshire",
      subject: "English / Literacy",
      result: "A Year 4 teacher used Diffit to generate three-level reading passages on every topic covered in class, eliminating the need to manually adapt resources for mixed-ability groups. Planning time for literacy lessons dropped by 40%.",
      tool: "Diffit",
      keyStage: "KS2",
    },
  ];

  const ukNews = [
    {
      title: "DfE Publishes AI in Schools Guidance Framework",
      date: "February 2026",
      summary: "The Department for Education released updated guidance for schools on the responsible use of AI tools, covering data protection, academic integrity, and staff training requirements.",
      tag: "Policy",
    },
    {
      title: "Ofsted: AI Use in Schools 'Not Yet Consistently Managed'",
      date: "January 2026",
      summary: "Ofsted's annual report noted that while AI adoption in UK classrooms is accelerating, many schools lack formal policies — prompting calls for clearer DfE guidance.",
      tag: "Research",
    },
    {
      title: "forschools.ai Expands to 200+ UK Schools",
      date: "March 2026",
      summary: "The UK-based AI education platform forschools.ai announced expansion to over 200 partner schools, offering curated AI tool recommendations and CPD resources for teachers.",
      tag: "Platform",
    },
    {
      title: "ICO Clarifies GDPR Rules for EdTech AI Tools",
      date: "March 2026",
      summary: "The Information Commissioner's Office published new guidance specifically addressing AI tools used in educational settings, clarifying consent requirements and data minimisation principles.",
      tag: "GDPR",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* ── UK HEADER BANNER ── */}
        <section className="bg-gradient-to-br from-[#012169]/5 via-[#C8102E]/5 to-background border-b border-border py-16 md:py-24">
          <div className="container max-w-4xl mx-auto text-center">
            {/* Union Jack accent + forschools.ai badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium bg-background border border-border px-4 py-2 rounded-full shadow-sm">
                <span className="text-lg">🇬🇧</span>
                <span className="text-foreground font-semibold">UK Educators</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full">
                <Shield className="h-3 w-3" />
                Recommended by forschools.ai
              </div>
            </div>

            <h1
              className="heading-display text-3xl md:text-5xl leading-tight mb-4 text-foreground"
            >
              AI Classroom Hub:{" "}
              <span className="text-primary">Resources for UK Educators</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              All resources adapted for the UK National Curriculum and UK classroom tools. Prompt templates reference Year groups, Key Stages, and UK exam boards — not US grade levels or Common Core.
            </p>
          </div>
        </section>

        {/* ── QUICK NAVIGATION ── */}
        <section className="bg-background border-b border-border py-6">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "UK Prompt Templates", href: "#prompts", icon: <Sparkles className="h-4 w-4" /> },
                { label: "GDPR-Safe Tools", href: "#tools", icon: <Wrench className="h-4 w-4" /> },
                { label: "UK Case Studies", href: "#case-studies", icon: <BookOpen className="h-4 w-4" /> },
                { label: "UK Policy News", href: "#news", icon: <Newspaper className="h-4 w-4" /> },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-colors bg-muted/50"
                >
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── UK PROMPT TEMPLATES ── */}
        <section id="prompts" className="py-16 bg-muted/50 border-b border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Prompt Templates</p>
              <div className="w-10 h-0.5 bg-primary mb-4"></div>
              <h2
                className="heading-display text-2xl md:text-3xl text-foreground mb-2"
              >
                UK-adapted AI prompts
              </h2>
              <p className="text-sm text-muted-foreground font-light">
                These templates use UK terminology — Year groups, Key Stages, GCSE, A-Level, National Curriculum — so you can copy and use them immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ukPrompts.map((prompt) => (
                <div key={prompt.title} className="bg-background rounded-xl border border-border p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-sm font-semibold text-foreground">{prompt.title}</h3>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <Badge variant="secondary" className="text-[10px] px-2 py-0.5">{prompt.keyStage}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-light">{prompt.subject}</p>
                  <div className="bg-muted/50 rounded-lg p-3 flex-1">
                    <p className="text-xs text-foreground/80 leading-relaxed font-mono whitespace-pre-wrap">{prompt.prompt}</p>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(prompt.prompt)}
                    className="mt-3 text-xs text-primary font-medium hover:underline text-left"
                  >
                    Copy prompt →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/resources">
                <span className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 cursor-pointer">
                  View all prompt templates in the Resources section <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── GDPR-SAFE TOOLS ── */}
        <section id="tools" className="py-16 bg-background border-b border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Tool Recommendations</p>
              <div className="w-10 h-0.5 bg-primary mb-4"></div>
              <h2
                className="heading-display text-2xl md:text-3xl text-foreground mb-2"
              >
                GDPR-compliant tools for UK schools
              </h2>
              <p className="text-sm text-muted-foreground font-light">
                All tools below are available in the UK and have been selected with GDPR compliance in mind. Always verify with your school's data protection officer before using any third-party tool with student data.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ukTools.map((tool) => (
                <div key={tool.name} className="border border-border rounded-xl p-5 hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-foreground">{tool.name}</h3>
                    <div className="flex gap-1.5 flex-shrink-0 flex-wrap justify-end">
                      <Badge variant="secondary" className="text-[10px] px-2 py-0.5">{tool.pricing}</Badge>
                      {tool.gdpr && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          <Shield className="h-2.5 w-2.5" /> GDPR
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed font-light">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {tool.keyStages.map((ks) => (
                        <span key={ks} className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{ks}</span>
                      ))}
                    </div>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Visit <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/tools">
                <span className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Browse the full Tool Directory <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── UK CASE STUDIES ── */}
        <section id="case-studies" className="py-16 bg-muted/50 border-b border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Case Studies</p>
              <div className="w-10 h-0.5 bg-primary mb-4"></div>
              <h2
                className="heading-display text-2xl md:text-3xl text-foreground mb-2"
              >
                UK schools using AI well
              </h2>
              <p className="text-sm text-muted-foreground font-light">
                Real results from UK classrooms — including schools from the forschools.ai cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ukCaseStudies.map((cs) => (
                <div key={cs.title} className="bg-background rounded-xl border border-border p-5">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <Badge variant="secondary" className="text-[10px] px-2 py-0.5">{cs.keyStage}</Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">{cs.subject}</Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{cs.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{cs.school}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light mb-3">{cs.result}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Tool used:</span> {cs.tool}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/case-studies">
                <span className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Read all case studies <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── UK POLICY NEWS ── */}
        <section id="news" className="py-16 bg-background border-b border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">UK Policy & News</p>
              <div className="w-10 h-0.5 bg-primary mb-4"></div>
              <h2
                className="heading-display text-2xl md:text-3xl text-foreground mb-2"
              >
                AI in UK education: what's happening
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ukNews.map((item) => (
                <div key={item.title} className="border border-border rounded-xl p-5 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">{item.tag}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{item.summary}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/news">
                <span className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Read all AI education news <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FORSCHOOLS.AI PARTNERSHIP CALLOUT ── */}
        <section className="py-12 bg-primary/10">
          <div className="container max-w-3xl mx-auto text-center px-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-background border border-primary/20 px-4 py-2 rounded-full mb-5">
              <Shield className="h-3.5 w-3.5" />
              Suggested by forschools.ai
            </div>
            <h2
              className="heading-display text-2xl md:text-3xl text-foreground mb-3"
            >
              Trusted by the UK AI education community
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 max-w-xl mx-auto">
              The AI Classroom Hub is recommended by forschools.ai — the UK's leading AI education platform — as a trusted resource for UK teachers navigating AI in the classroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://theaiclassroomhub.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Subscribe to the newsletter <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://forschools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-medium text-sm px-6 py-3 rounded-xl border border-border hover:border-primary/40 transition-colors"
              >
                Visit forschools.ai <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
