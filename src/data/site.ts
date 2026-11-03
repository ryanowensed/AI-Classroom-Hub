export const SITE_URL = "https://theaiclassroomhub.com";
export const SITE_NAME = "AI Classroom Hub";

export const branches = [
  {
    label: "Pre-K / Kinder",
    href: "/prek-kinder",
    color: "#F59E0B",
    icon: "🌱",
    desc: "Developmental appropriateness, safety, and play-based learning",
    resources: ["AI Tool Reviews", "Safety Guide", "Parent Templates"],
  },
  {
    label: "Elementary",
    href: "/elementary",
    color: "#10B981",
    icon: "📚",
    desc: "Differentiation, literacy, and foundational skills for grades 1–5",
    resources: ["IEP Resources", "Literacy Toolkit", "Assessment Templates"],
  },
  {
    label: "Middle School",
    href: "/middle-school",
    color: "#0D9488",
    icon: "🔬",
    desc: "Academic integrity, engagement, and independent learning for grades 6–8",
    resources: ["Integrity Center", "Subject Toolkits", "AI Literacy Curriculum"],
  },
  {
    label: "High School",
    href: "/high-school",
    color: "#6366F1",
    icon: "🎓",
    desc: "College/career readiness and advanced integration for grades 9–12",
    resources: ["Assessment Design", "CTE + AI", "Media Literacy"],
  },
  {
    label: "Administrators",
    href: "/administrators",
    color: "#E8533A",
    icon: "🏫",
    desc: "Governance, policy, data privacy, and operational efficiency",
    resources: ["Policy Templates", "Governance Guide", "PD Program Builder"],
  },
] as const;

export const hubResources = [
  { label: "AI Tool Directory", href: "/tool-directory", icon: "Wrench", color: "#0D9488" },
  { label: "Prompt Library", href: "/prompt-library", icon: "FileText", color: "#2563EB" },
  { label: "Hub Resources", href: "/hub-resources", icon: "Layers", color: "#6366F1" },
  { label: "Newsletter", href: "/newsletter", icon: "Newspaper", color: "#E8533A" },
  { label: "About", href: "/about", icon: "Info", color: "#0F2A4A" },
] as const;
