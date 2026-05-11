/* ============================================================
   HubWordmark — The AI Classroom Hub brand mark
   Design language: aligns with the site-wide Sora editorial system
   - Sora for a cleaner, more cohesive header lockup
   - Navy/blue/coral brand accents used throughout the site
   - Optional tagline treatment for footer and larger placements
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
  const primaryText = variant === "dark" ? "text-white" : "text-[#0F2A4A]";
  const secondaryText = variant === "dark" ? "text-white/92" : "text-[#10233F]";
  const slashColor = variant === "dark" ? "text-[#F9735B]" : "text-[#E8533A]";
  const taglineColor = variant === "dark" ? "text-white/60" : "text-[#0F2A4A]/55";
  const ruleColor = variant === "dark" ? "border-white/25" : "border-[#0F2A4A]/15";

  const sizeConfig = {
    sm: {
      wrap: "text-[1.02rem]",
      slash: "text-[1.08rem] mx-[0.34em]",
      tagline: "text-[0.54rem] tracking-[0.2em] mt-1.5",
      rule: "mt-2 mb-1.5",
    },
    md: {
      wrap: "text-[1.42rem]",
      slash: "text-[1.5rem] mx-[0.38em]",
      tagline: "text-[0.65rem] tracking-[0.22em] mt-2",
      rule: "mt-2.5 mb-1.5",
    },
    lg: {
      wrap: "text-[2rem]",
      slash: "text-[2.1rem] mx-[0.4em]",
      tagline: "text-[0.75rem] tracking-[0.24em] mt-2.5",
      rule: "mt-3 mb-2",
    },
  };

  const cfg = sizeConfig[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div
        className={`flex items-center ${cfg.wrap} leading-none font-display tracking-[-0.045em] whitespace-nowrap`}
        aria-label="The AI Classroom Hub"
      >
        <span className={`${primaryText} font-extrabold`}>The AI Classroom</span>
        <span
          className={`${cfg.slash} ${slashColor} font-black leading-none translate-y-[-0.01em]`}
          aria-hidden="true"
        >
          /
        </span>
        <span className={`${secondaryText} font-extrabold`}>Hub</span>
      </div>

      {showTagline && (
        <>
          <div className={`border-t ${ruleColor} ${cfg.rule}`} />
          <span
            className={`${cfg.tagline} ${taglineColor} uppercase font-semibold font-display`}
          >
            K–12 AI Resources for Educators
          </span>
        </>
      )}
    </div>
  );
}
