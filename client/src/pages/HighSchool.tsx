import BranchPage from "@/components/BranchPage";

export default function HighSchool() {
  return (
    <BranchPage
      config={{
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
      }}
    />
  );
}
