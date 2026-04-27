import BranchPage from "@/components/BranchPage";

export default function Elementary() {
  return (
    <BranchPage
      config={{
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
      }}
    />
  );
}
