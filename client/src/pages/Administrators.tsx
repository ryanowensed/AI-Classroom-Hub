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
      }}
    />
  );
}
