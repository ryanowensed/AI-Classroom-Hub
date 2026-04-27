import BranchPage from "@/components/BranchPage";

export default function PreK() {
  return (
    <BranchPage
      config={{
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
      }}
    />
  );
}
