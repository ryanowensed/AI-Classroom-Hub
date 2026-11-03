export interface BranchAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface ResourceItem {
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: string;
  href?: string;
  actionLabel?: string;
  external?: boolean;
}

export interface BranchConfig {
  path: string;
  title: string;
  metaDescription: string;
  icon: string;
  label: string;
  color: string;
  bg: string;
  tagline: string;
  description: string;
  heroStat: { value: string; label: string };
  focusAreas: string[];
  resources: ResourceItem[];
  researchNote: string;
  ctaLabel: string;
  primaryAction?: BranchAction;
  secondaryAction?: BranchAction;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
}

const blueprintUrl =
  "https://blueprint.k-8ai.com/?utm_source=aiclassroomhub&utm_medium=admin_page&utm_campaign=ai_policy_templates";
const checklistUrl =
  "https://www.k-8ai.com/?utm_source=aiclassroomhub&utm_medium=admin_page&utm_campaign=ai_policy_templates&utm_content=hero_secondary#subscribe";

export const prek: BranchConfig = {
  path: "/prek-kinder",
  title: "Pre-K / Kinder AI Resources — AI Classroom Hub",
  metaDescription:
    "Safety-first AI resources for early childhood educators. Developmental appropriateness, data safety, and play-based learning for ages 3–6.",
  icon: "🌱",
  label: "Pre-K / Kinder",
  color: "#F59E0B",
  bg: "#FFFBEB",
  tagline: "Safety-first AI resources for early childhood educators.",
  description:
    "AI in early childhood is primarily invisible — operating through adaptive apps, smart toys, and AI-embedded platforms before children can even recognize it. This branch focuses on developmental appropriateness, data safety, and play-based learning rather than productivity.",
  heroStat: { value: "Ages 3–6", label: "The most vulnerable AI users in K-12" },
  focusAreas: [
    "Developmental Appropriateness",
    "COPPA Compliance",
    "Play-Based Learning",
    "Parent Communication",
    "Data Privacy",
    "Safety & Vetting",
  ],
  resources: [
    {
      icon: "🔍",
      title: "AI Tool Reviews (Early Childhood)",
      desc: "Vetted tools with COPPA compliance ratings, developmental appropriateness scores, and data privacy assessments for ages 3–6.",
      tag: "Safety First",
      tagColor: "#F59E0B",
      tagBg: "#FFFBEB",
    },
    {
      icon: "📋",
      title: "Developmental Appropriateness Guide",
      desc: "Research-backed guidance on AI exposure for ages 3–6, drawing on Boston Children's Digital Wellness Lab findings.",
      tag: "Research-Based",
      tagColor: "#F59E0B",
      tagBg: "#FFFBEB",
    },
    {
      icon: "🎮",
      title: "AI for Play-Based Learning",
      desc: "Lesson ideas and activity frameworks that center play and human connection rather than screen time.",
      tag: "Classroom Ready",
      tagColor: "#F59E0B",
      tagBg: "#FFFBEB",
    },
    {
      icon: "📨",
      title: "Parent Communication Templates",
      desc: "Multilingual templates for explaining AI tools in your classroom to families. Available in English, Spanish, and more.",
      tag: "Multilingual",
      tagColor: "#F59E0B",
      tagBg: "#FFFBEB",
    },
    {
      icon: "🔒",
      title: "Safety & Privacy Resource Center",
      desc: "Guidance on data privacy, AI toy safety, and smart speaker use in early childhood settings.",
      tag: "Privacy",
      tagColor: "#F59E0B",
      tagBg: "#FFFBEB",
    },
    {
      icon: "💬",
      title: "Prompt Templates for Pre-K Teachers",
      desc: "AI prompts for lesson planning, parent newsletters, IEP documentation, and classroom management at the early childhood level.",
      tag: "Time Saver",
      tagColor: "#F59E0B",
      tagBg: "#FFFBEB",
    },
  ],
  researchNote:
    "Research from Boston Children's Digital Wellness Lab has found that the youngest children are most likely to attribute human-like emotions to technology, raising developmental concerns that educators must address proactively. The primary concern at this level is developmental appropriateness, not productivity.",
  ctaLabel: "Subscribe to Office Hours /AI",
};

export const elementary: BranchConfig = {
  path: "/elementary",
  title: "Elementary AI Resources (Grades 1–5) — AI Classroom Hub",
  metaDescription:
    "Differentiation, literacy, and foundational skills for grades 1–5. AI resources for lesson planning, reading, math, and special education.",
  icon: "📚",
  label: "Elementary (Grades 1–5)",
  color: "#10B981",
  bg: "#ECFDF5",
  tagline: "Differentiation, literacy, and foundational skills for grades 1–5.",
  description:
    "Elementary teachers are among the heaviest users of AI for lesson planning and differentiation — the two most time-consuming tasks at this level. AI for reading and literacy is the most searched topic among elementary educators, and special education use cases are growing rapidly.",
  heroStat: { value: "~3.2 hrs", label: "Saved per week on lesson planning alone" },
  focusAreas: [
    "Differentiated Instruction",
    "Reading & Literacy",
    "Math Adaptive Learning",
    "Special Education & IEP",
    "Formative Assessment",
    "Standards Alignment",
  ],
  resources: [
    {
      icon: "🎯",
      title: "Differentiated Instruction Hub",
      desc: "Prompts and tools for creating tiered lessons, leveled texts, and scaffolded activities for diverse learners.",
      tag: "Most Used",
      tagColor: "#10B981",
      tagBg: "#ECFDF5",
    },
    {
      icon: "📖",
      title: "Reading & Literacy AI Toolkit",
      desc: "Strategies for AI-supported phonics, comprehension, and writing instruction. Includes tool reviews for Amira Learning and similar platforms.",
      tag: "High Demand",
      tagColor: "#10B981",
      tagBg: "#ECFDF5",
    },
    {
      icon: "🔢",
      title: "Math Adaptive Learning Reviews",
      desc: "Implementation guides for DreamBox, IXL, and other adaptive math platforms with efficacy data and equity considerations.",
      tag: "Tool Reviews",
      tagColor: "#10B981",
      tagBg: "#ECFDF5",
    },
    {
      icon: "♿",
      title: "Special Education & IEP Resources",
      desc: "AI tools for IEP goal writing, accommodation suggestions, and behavior intervention plans. MagicSchool AI and similar platforms reviewed.",
      tag: "Fast Growing",
      tagColor: "#10B981",
      tagBg: "#ECFDF5",
    },
    {
      icon: "✅",
      title: "Formative Assessment Templates",
      desc: "AI-generated quick checks, exit tickets, and progress monitoring tools aligned to grade-level standards.",
      tag: "Time Saver",
      tagColor: "#10B981",
      tagBg: "#ECFDF5",
    },
    {
      icon: "📐",
      title: "Standards Alignment Tools",
      desc: "Guides for mapping AI-generated content to CCSS, NGSS, and state standards. Includes verification checklists.",
      tag: "Quality Check",
      tagColor: "#10B981",
      tagBg: "#ECFDF5",
    },
  ],
  researchNote:
    "MagicSchool AI is used by 700,000+ U.S. teachers and is especially popular at the elementary level for IEP writing and accommodation planning. Teachers using AI for differentiation report saving an average of 2.1 hours per week on this task alone.",
  ctaLabel: "Get the Weekly AI Digest",
};

export const middleSchool: BranchConfig = {
  path: "/middle-school",
  title: "Middle School AI Resources (Grades 6–8) — AI Classroom Hub",
  metaDescription:
    "Academic integrity, engagement, and independent learning for grades 6–8. Process-based assessment and student AI literacy resources.",
  icon: "🔬",
  label: "Middle School (Grades 6–8)",
  color: "#0D9488",
  bg: "#F0FDFA",
  tagline: "Academic integrity, engagement, and independent learning for grades 6–8.",
  description:
    "Middle school is the pivot point between foundational learning and more independent, project-based learning. Academic integrity is the dominant concern at this level — 59% of teens think using AI to cheat is a regular occurrence at their school. The most effective schools are moving to process-based assessment rather than relying on unreliable detection tools.",
  heroStat: { value: "59%", label: "of teens say AI cheating is common at their school" },
  focusAreas: [
    "Academic Integrity",
    "Process-Based Assessment",
    "Student AI Literacy",
    "Subject-Specific Tools",
    "Project-Based Learning",
    "Engagement Strategies",
  ],
  resources: [
    {
      icon: "⚖️",
      title: "Academic Integrity Resource Center",
      desc: "Assessment redesign frameworks moving from AI-proof to AI-inclusive. Honest review of detection tool accuracy (68–82%) and false positive risks.",
      tag: "Crisis-Level Need",
      tagColor: "#0D9488",
      tagBg: "#F0FDFA",
    },
    {
      icon: "📝",
      title: "Process-Based Assessment Templates",
      desc: "Draft submission trackers, revision history guides, and oral examination components that make AI use visible rather than hidden.",
      tag: "Proven Approach",
      tagColor: "#0D9488",
      tagBg: "#F0FDFA",
    },
    {
      icon: "🧪",
      title: "Subject-Specific AI Toolkits",
      desc: "Dedicated resources for ELA, Math, Science, and Social Studies at the middle school level. Vetted tools with classroom implementation guides.",
      tag: "By Subject",
      tagColor: "#0D9488",
      tagBg: "#F0FDFA",
    },
    {
      icon: "🤖",
      title: "Student AI Literacy Curriculum",
      desc: "Lessons for teaching ethical AI use, prompt engineering basics, and critical evaluation of AI outputs. Classroom-ready units.",
      tag: "Curriculum",
      tagColor: "#0D9488",
      tagBg: "#F0FDFA",
    },
    {
      icon: "🏗️",
      title: "Project-Based Learning + AI",
      desc: "Frameworks for AI-integrated PBL units that leverage AI as a thinking partner rather than a shortcut.",
      tag: "PBL",
      tagColor: "#0D9488",
      tagBg: "#F0FDFA",
    },
    {
      icon: "💬",
      title: "Prompt Templates for Middle School",
      desc: "Subject-specific prompt templates for ChatGPT, Gemini, and Claude. Includes student-facing and teacher-facing versions.",
      tag: "Time Saver",
      tagColor: "#0D9488",
      tagBg: "#F0FDFA",
    },
  ],
  researchNote:
    "AI detection tools (Turnitin, GPTZero, Copyleaks) have independent testing accuracy of only 68–82% and false positive rates of 8–18%, making them unreliable for high-stakes decisions and particularly harmful to non-native English speakers. Process-based assessment is the evidence-backed alternative.",
  ctaLabel: "Get the Weekly AI Digest",
};

export const highSchool: BranchConfig = {
  path: "/high-school",
  title: "High School AI Resources (Grades 9–12) — AI Classroom Hub",
  metaDescription:
    "College and career readiness, advanced integration, and AI literacy for grades 9–12. Assessment design, CTE, and media literacy resources.",
  icon: "🎓",
  label: "High School (Grades 9–12)",
  color: "#6366F1",
  bg: "#EEF2FF",
  tagline: "College and career readiness, advanced integration, and AI literacy for grades 9–12.",
  description:
    "Four in five high school students now use AI for schoolwork. High school is where the academic integrity crisis is most acute, where AI literacy is now considered a graduation readiness skill, and where CTE programs are integrating AI as a core career-readiness competency.",
  heroStat: { value: "4 in 5", label: "high school students now use AI for schoolwork" },
  focusAreas: [
    "AI-Inclusive Assessment",
    "College & Career Readiness",
    "AI Literacy Curriculum",
    "CTE Integration",
    "Media Literacy",
    "Academic Integrity",
  ],
  resources: [
    {
      icon: "📊",
      title: "AI-Inclusive Assessment Design Center",
      desc: "Frameworks for redesigning essays and exams to work with AI rather than against it. Moves from detection to authentic demonstration.",
      tag: "Tier 1 Priority",
      tagColor: "#6366F1",
      tagBg: "#EEF2FF",
    },
    {
      icon: "📚",
      title: "Subject-Specific AI Integration Guides",
      desc: "Resources for AP courses, STEM, Humanities, and CTE. Includes tool reviews, lesson frameworks, and implementation guides by subject.",
      tag: "By Subject",
      tagColor: "#6366F1",
      tagBg: "#EEF2FF",
    },
    {
      icon: "🤖",
      title: "AI Literacy Curriculum",
      desc: "Full units on prompt engineering, critical evaluation of AI outputs, and ethical AI use. Aligned to CompTIA AI readiness standards.",
      tag: "Graduation Ready",
      tagColor: "#6366F1",
      tagBg: "#EEF2FF",
    },
    {
      icon: "🏢",
      title: "College & Career Readiness + AI",
      desc: "Preparing students for an AI-integrated workforce. Includes college application guidance (46% of students use AI in their college search).",
      tag: "Future Ready",
      tagColor: "#6366F1",
      tagBg: "#EEF2FF",
    },
    {
      icon: "📰",
      title: "Media Literacy + AI",
      desc: "Tools for identifying AI-generated content, deepfakes, and synthetic media. Critical thinking frameworks for the AI information age.",
      tag: "Critical Thinking",
      tagColor: "#6366F1",
      tagBg: "#EEF2FF",
    },
    {
      icon: "🔧",
      title: "CTE + AI Integration",
      desc: "Resources for Career and Technical Education pathways. AI is now a core competency in healthcare, engineering, business, and more.",
      tag: "CTE",
      tagColor: "#6366F1",
      tagBg: "#EEF2FF",
    },
  ],
  researchNote:
    "The American Federation of Teachers launched the National Academy for AI Instruction in March 2026, aiming to train 400,000 teachers — a signal that formal AI professional development is becoming institutionalized at the secondary level. AI literacy is now considered a graduation readiness skill by CompTIA and leading workforce development organizations.",
  ctaLabel: "Get the Weekly AI Digest",
};

export const administrators: BranchConfig = {
  path: "/administrators",
  title: "Administrator AI Resources — AI Classroom Hub",
  metaDescription:
    "AI governance, policy, privacy, and implementation support for K-12 leaders, plus the K-8 AI Blueprint for school-ready rollout.",
  icon: "🏫",
  label: "Administrators & School Leaders",
  color: "#E8533A",
  bg: "#FFF7F5",
  tagline: "AI governance, policy, privacy, and implementation support for K-12 leaders.",
  description:
    "Use The AI Classroom Hub as your broad K-12 resource center for AI governance, privacy, professional learning, and district strategy. When your leadership team needs a ready-to-use implementation system for K-8 policy rollout, communication, and launch planning, the K-8 AI Blueprint provides the focused next step.",
  primaryAction: {
    label: "View the K-8 AI Blueprint",
    href: `${blueprintUrl}&utm_content=hero_primary`,
    external: true,
  },
  secondaryAction: {
    label: "Download the Free AI Policy Checklist",
    href: checklistUrl,
    external: true,
  },
  heroStat: { value: "6%", label: "of teachers say their school's AI policy is clear" },
  focusAreas: [
    "AI Policy & Governance",
    "Data Privacy (FERPA/COPPA)",
    "Professional Development",
    "Budget & ROI",
    "State Legislation",
    "District-Wide Strategy",
  ],
  resources: [
    {
      icon: "📋",
      title: "K-8 AI Blueprint Implementation System",
      desc: "A focused companion offer from K-8 AI with editable policy templates, stakeholder communication language, and a practical launch plan for school leaders who need implementation-ready guidance.",
      tag: "Recommended Next Step",
      tagColor: "#E8533A",
      tagBg: "#FFF7F5",
      href: `${blueprintUrl}&utm_content=resource_card`,
      actionLabel: "View Blueprint",
      external: true,
    },
    {
      icon: "🏛️",
      title: "AI Governance Framework Guide",
      desc: "Step-by-step guide to building a school-wide AI strategy. Based on the CoSN 2026 adaptive governance model used by leading districts.",
      tag: "Leadership",
      tagColor: "#E8533A",
      tagBg: "#FFF7F5",
    },
    {
      icon: "🔒",
      title: "Data Privacy & Compliance Center",
      desc: "FERPA/COPPA guidance for vetting AI tools. Includes a vendor evaluation checklist and data processing agreement templates.",
      tag: "Compliance",
      tagColor: "#E8533A",
      tagBg: "#FFF7F5",
    },
    {
      icon: "⚖️",
      title: "State AI Legislation Tracker",
      desc: "Updates on state-level AI education laws covering data privacy, academic integrity, and teacher training mandates. Updated monthly.",
      tag: "Policy Watch",
      tagColor: "#E8533A",
      tagBg: "#FFF7F5",
    },
    {
      icon: "🎓",
      title: "AI PD Program Builder",
      desc: "Frameworks for district-wide professional development. Addresses the fact that only 34% of teachers have received any formal AI training.",
      tag: "PD",
      tagColor: "#E8533A",
      tagBg: "#FFF7F5",
    },
    {
      icon: "💰",
      title: "Budget & ROI Evaluation Tools",
      desc: "Guides for evaluating AI tool effectiveness and justifying EdTech expenditures post-ESSER. Includes cost-per-outcome frameworks.",
      tag: "Post-ESSER",
      tagColor: "#E8533A",
      tagBg: "#FFF7F5",
    },
  ],
  researchNote:
    "The CoSN AI District Leaders Action Summit in May 2026 drew 29+ district leadership teams, confirming that AI governance is now a C-suite priority. The most successful districts are starting with clearly defined problems rather than available products, and using phased pilots with measurable outcomes rather than district-wide rollouts.",
  ctaTitle: "Need a school-ready AI implementation system before the next board or staff meeting?",
  ctaDescription:
    "The K-8 AI Blueprint turns the guidance from this hub into editable policies, communication language, and a practical launch plan for K-8 school teams.",
  ctaLabel: "View the K-8 AI Blueprint",
  ctaHref: `${blueprintUrl}&utm_content=bottom_cta`,
  ctaExternal: true,
};
