import BranchPage from "@/components/BranchPage";

const blueprintUrl =
  "https://blueprint.k-8ai.com/?utm_source=aiclassroomhub&utm_medium=admin_page&utm_campaign=ai_policy_templates";
const checklistUrl =
  "https://www.k-8ai.com/?utm_source=aiclassroomhub&utm_medium=admin_page&utm_campaign=ai_policy_templates&utm_content=hero_secondary#subscribe";

export default function Administrators() {
  return (
    <BranchPage
      config={{
        icon: "🏫",
        label: "Administrators & School Leaders",
        color: "#E8533A",
        bg: "#FFF7F5",
        tagline: "Governance, policy, data privacy, and operational efficiency for K-12 leaders.",
        description:
          "District leaders need practical AI guidance they can adapt quickly for staff, students, families, and board conversations. Start with ready-to-edit templates powered by K-8 AI, then use this hub for governance, privacy, professional development, and district strategy.",
        primaryAction: {
          label: "Get Editable AI Policy Templates",
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
            title: "AI Policy Template Library",
            desc: "Ready-to-edit K-8 AI policy templates for staff, students, families, and school leaders. Built to help you move from concern to clear guidance this week.",
            tag: "Most Urgent",
            tagColor: "#E8533A",
            tagBg: "#FFF7F5",
            href: `${blueprintUrl}&utm_content=resource_card`,
            actionLabel: "View templates",
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
        ctaTitle: "Need an AI policy before the next board or staff meeting?",
        ctaDescription:
          "Get the K-8 AI Blueprint with editable policy templates, communication language, and a practical launch plan.",
        ctaLabel: "View the K-8 AI Blueprint",
        ctaHref: `${blueprintUrl}&utm_content=bottom_cta`,
        ctaExternal: true,
      }}
    />
  );
}
