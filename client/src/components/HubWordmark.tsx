/* ============================================================
   HubWordmark — The AI Classroom Hub brand mark
   Design language: mirrors Office Hours /AI editorial system
   - Playfair Display (serif) for "The AI Classroom"
   - Royal Blue slash "/" as the signature brand element
   - Sora (geometric sans) for "Hub"
   - Tagline in small-caps tracking below a thin rule
   ============================================================ */

interface HubWordmarkProps {
  /** "light" = dark text on light bg (nav default), "dark" = white text on dark bg (footer) */
  variant?: "light" | "dark";
  /** Show the tagline below the rule */
  showTagline?: boolean;
  /** Size scale: "sm" for nav, "md" for hero/footer, "lg" for standalone use */
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function HubWordmark({
  variant = "light",
  showTagline = false,
  size = "sm",
  className = "",
}: HubWordmarkProps) {
  const textColor = variant === "dark" ? "text-white" : "text-[#0F1A2E]";
  const slashColor = "text-[#2563EB]"; // Royal Blue — always consistent
  const taglineColor = variant === "dark" ? "text-white/60" : "text-[#0F1A2E]/50";
  const ruleColor = variant === "dark" ? "border-white/30" : "border-[#0F1A2E]/20";

  const sizeConfig = {
    sm: {
      serif: "text-[1.15rem] leading-none",
      slash: "text-[1.25rem]",
      sans: "text-[1.15rem] leading-none",
      tagline: "text-[0.55rem] tracking-[0.18em] mt-1.5",
      gap: "gap-0",
    },
    md: {
      serif: "text-[1.6rem] leading-none",
      slash: "text-[1.75rem]",
      sans: "text-[1.6rem] leading-none",
      tagline: "text-[0.65rem] tracking-[0.2em] mt-2",
      gap: "gap-0",
    },
    lg: {
      serif: "text-[2.25rem] leading-none",
      slash: "text-[2.5rem]",
      sans: "text-[2.25rem] leading-none",
      tagline: "text-[0.75rem] tracking-[0.22em] mt-2.5",
      gap: "gap-0",
    },
  };

  const cfg = sizeConfig[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Main lockup: "The AI Classroom / Hub" */}
      <div className={`flex items-baseline ${cfg.gap}`}>
        {/* "The AI Classroom" in Playfair Display serif */}
        <span
          className={`font-serif ${cfg.serif} ${textColor} tracking-[-0.01em]`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800 }}
        >
          The AI Classroom
        </span>

        {/* Signature blue slash — the brand connector */}
        <span
          className={`${cfg.slash} ${slashColor} mx-[0.12em] font-light`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 300 }}
          aria-hidden="true"
        >
          /
        </span>

        {/* "Hub" in Sora geometric sans */}
        <span
          className={`${cfg.sans} ${textColor} font-bold`}
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
        >
          Hub
        </span>
      </div>

      {/* Optional tagline with rule — mirrors Office Hours /AI treatment */}
      {showTagline && (
        <>
          <div className={`border-t ${ruleColor} mt-2 mb-1.5`} />
          <span
            className={`${cfg.tagline} ${taglineColor} uppercase font-medium`}
            style={{ fontFamily: "'Sora', sans-serif", letterSpacing: "0.2em" }}
          >
            K–12 AI Resources for Educators
          </span>
        </>
      )}
    </div>
  );
}
