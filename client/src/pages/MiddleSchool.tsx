import BranchPage from "@/components/BranchPage";

export default function MiddleSchool() {
  return (
    <BranchPage
      config={{
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
      }}
    />
  );
}
