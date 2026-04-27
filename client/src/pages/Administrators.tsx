import BranchPage from "@/components/BranchPage";

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
          "District leaders are navigating a governance challenge unlike any previous technology wave. The key insight from the 2026 CoSN conference: AI implementation is fundamentally a leadership issue, not an IT issue. Effective governance requires superintendents to be personally proximate to AI strategy decisions.",
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
            desc: "Customizable policies for students, teachers, and staff. Includes acceptable use, academic integrity, and data privacy policies ready to adapt.",
            tag: "Most Urgent",
            tagColor: "#E8533A",
            tagBg: "#FFF7F5",
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
        ctaLabel: "Subscribe to Office Hours /AI",
      }}
    />
  );
}
