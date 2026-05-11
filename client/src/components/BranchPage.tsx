/* ============================================================
   BranchPage — Reusable template for all five grade-level branches
   Design: Precision Navigation Hub
   ============================================================ */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export interface BranchAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface ResourceItem {
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: string;
  href?: string;
  actionLabel?: string;
  external?: boolean;
}

export interface BranchConfig {
  icon: string;
  label: string;
  color: string;
  bg: string;
  tagline: string;
  description: string;
  heroStat: { value: string; label: string };
  focusAreas: string[];
  resources: ResourceItem[];
  researchNote: string;
  ctaLabel: string;
  primaryAction?: BranchAction;
  secondaryAction?: BranchAction;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
}

function ActionLink({
  action,
  className,
  style,
  children,
}: {
  action: BranchAction;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className} style={style}>
      {children}
    </Link>
  );
}

function ResourceCard({ resource, color }: { resource: ResourceItem; color: string }) {
  const cardClassName =
    "bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group block";

  const cardContent = (
    <>
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{resource.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-sm font-bold font-display text-[#0F2A4A]">{resource.title}</h3>
            <span
              className="text-xs font-semibold font-display px-2 py-0.5 rounded-full"
              style={{ backgroundColor: resource.tagBg, color: resource.tagColor }}
            >
              {resource.tag}
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{resource.desc}</p>
        </div>
      </div>
      <div
        className="flex items-center gap-1 text-xs font-semibold font-display opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color }}
      >
        {resource.actionLabel ?? "Access resource"} <ArrowRight size={11} />
      </div>
    </>
  );

  if (resource.href) {
    if (resource.external) {
      return (
        <a href={resource.href} target="_blank" rel="noreferrer" className={cardClassName}>
          {cardContent}
        </a>
      );
    }

    return (
      <Link href={resource.href} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClassName} onClick={() => toast.info("Resource coming soon — check back after our next content release.")}>
      {cardContent}
    </div>
  );
}

export default function BranchPage({ config }: { config: BranchConfig }) {
  const primaryAction = config.primaryAction ?? { label: "Prompt Library", href: "/prompt-library" };
  const secondaryAction = config.secondaryAction ?? { label: "AI Tool Directory", href: "/tool-directory" };
  const footerAction = {
    label: config.ctaLabel,
    href: config.ctaHref ?? "/newsletter",
    external: config.ctaExternal,
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: config.bg }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, ${config.color} 0%, transparent 60%)`,
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{config.icon}</span>
              <div
                className="text-xs font-bold font-display uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: config.color + "20", color: config.color }}
              >
                {config.label}
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-[#0F2A4A] mb-4 leading-tight">
              {config.tagline}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              {config.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <ActionLink
                action={primaryAction}
                className="flex items-center gap-2 text-white font-semibold font-display px-5 py-2.5 rounded-lg text-sm transition-colors"
                style={{ backgroundColor: config.color }}
              >
                {primaryAction.label} <ArrowRight size={14} />
              </ActionLink>
              <ActionLink
                action={secondaryAction}
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold font-display px-5 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {secondaryAction.label} <ExternalLink size={13} />
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-gray-400">Key Focus Areas:</span>
            {config.focusAreas.map((area) => (
              <span
                key={area}
                className="text-xs font-semibold font-display px-3 py-1.5 rounded-full border"
                style={{ borderColor: config.color + "40", color: config.color, backgroundColor: config.bg }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="container">
          <div className="mb-8">
            <span
              className="text-xs font-bold font-display uppercase tracking-widest mb-2 block"
              style={{ color: config.color }}
            >
              Resources
            </span>
            <h2 className="text-2xl font-extrabold font-display text-[#0F2A4A]">
              What's available for {config.label}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.resources.map((resource, i) => (
              <ResourceCard key={i} resource={resource} color={config.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Note */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-xl p-6 border-l-4"
              style={{ backgroundColor: config.bg, borderLeftColor: config.color }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="text-2xl font-extrabold font-display leading-none mt-1"
                  style={{ color: config.color }}
                >
                  {config.heroStat.value}
                </div>
                <div>
                  <div className="text-sm font-bold font-display text-[#0F2A4A] mb-1">{config.heroStat.label}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{config.researchNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-12 bg-[#0F2A4A]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1">
                {config.ctaTitle ?? "Get the weekly AI classroom digest."}
              </h3>
              <p className="text-sm text-blue-200">
                {config.ctaDescription ?? "Office Hours /AI — one tip, one tool, one story. Every Sunday. Free."}
              </p>
            </div>
            <ActionLink
              action={footerAction}
              className="shrink-0 flex items-center gap-2 bg-[#E8533A] hover:bg-[#d4432a] text-white font-semibold font-display px-6 py-3 rounded-lg text-sm transition-colors"
            >
              {config.ctaLabel} <ArrowRight size={14} />
            </ActionLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}
