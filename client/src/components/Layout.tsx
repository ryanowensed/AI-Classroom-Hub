/* ============================================================
   Layout — AI Classroom Hub
   Design: Precision Navigation Hub
   Fixed top nav with mega-menu, brand footer
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import HubWordmark from "@/components/HubWordmark";
import { Menu, X, ChevronDown, BookOpen, Layers, GraduationCap, Users, School, Brain, FileText, Wrench, Newspaper, Info, ArrowRight } from "lucide-react";

const branches = [
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
];

const hubResources = [
  { label: "AI Tool Directory", href: "/tool-directory", icon: Wrench, color: "#0D9488" },
  { label: "Prompt Library", href: "/prompt-library", icon: FileText, color: "#2563EB" },
  { label: "Hub Resources", href: "/hub-resources", icon: Layers, color: "#6366F1" },
  { label: "Newsletter", href: "/newsletter", icon: Newspaper, color: "#E8533A" },
  { label: "About", href: "/about", icon: Info, color: "#0F2A4A" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaRef.current && !megaRef.current.contains(e.target as Node) &&
        megaTriggerRef.current && !megaTriggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ── Top Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md border-b border-border" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <HubWordmark variant="light" size="sm" showTagline={false} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Grade Branches Mega Menu */}
              <button
                ref={megaTriggerRef}
                onClick={() => setMegaOpen(!megaOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium font-display transition-colors ${
                  megaOpen ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                }`}
              >
                <School size={15} />
                Grade Levels
                <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {hubResources.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
                >
                  <item.icon size={14} />
                  {item.label}
                </Link>
              ))}

              <Link
                href="/newsletter"
                className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
              >
                <Newspaper size={14} />
                Newsletter
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                About
              </Link>
              <Link
                href="/newsletter"
                className="flex items-center gap-1.5 bg-[#E8533A] hover:bg-[#d4432a] text-white text-sm font-semibold font-display px-4 py-2 rounded-md transition-colors"
              >
                Subscribe Free
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {megaOpen && (
          <div
            ref={megaRef}
            className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl z-50"
          >
            <div className="container py-6">
              <div className="grid grid-cols-5 gap-4">
                {branches.map((branch) => (
                  <Link
                    key={branch.href}
                    href={branch.href}
                    className="group p-4 rounded-lg border-2 border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all"
                    onClick={() => setMegaOpen(false)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{branch.icon}</span>
                      <span
                        className="text-xs font-bold font-display uppercase tracking-wider"
                        style={{ color: branch.color }}
                      >
                        {branch.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{branch.desc}</p>
                    <div className="space-y-1">
                      {branch.resources.map((r) => (
                        <div key={r} className="flex items-center gap-1 text-xs text-gray-400">
                          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: branch.color }} />
                          {r}
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-3 text-xs font-semibold font-display flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: branch.color }}
                    >
                      Explore <ArrowRight size={11} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-lg">
            <div className="container py-4 space-y-1">
              <p className="text-xs font-bold font-display uppercase tracking-widest text-gray-400 px-3 py-2">Grade Levels</p>
              {branches.map((branch) => (
                <Link
                  key={branch.href}
                  href={branch.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg">{branch.icon}</span>
                  <div>
                    <div className="text-sm font-semibold font-display text-gray-800">{branch.label}</div>
                    <div className="text-xs text-gray-500">{branch.desc.slice(0, 45)}…</div>
                  </div>
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <p className="text-xs font-bold font-display uppercase tracking-widest text-gray-400 px-3 py-2">Resources</p>
              {hubResources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <item.icon size={16} style={{ color: item.color }} />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  href="/newsletter"
                  className="block w-full text-center bg-[#E8533A] hover:bg-[#d4432a] text-white text-sm font-semibold font-display px-4 py-3 rounded-md transition-colors"
                >
                  Subscribe to Office Hours /AI — Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#0F2A4A] text-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <HubWordmark variant="dark" size="md" showTagline={true} className="mb-4" />
              <p className="text-sm text-blue-200 leading-relaxed">
                The trusted compass for AI in K-12 education. Practical tools, vetted resources, and honest guidance for teachers and administrators.
              </p>
            </div>

            {/* Grade Levels */}
            <div>
              <h4 className="text-xs font-bold font-display uppercase tracking-widest text-blue-300 mb-4">Grade Levels</h4>
              <ul className="space-y-2">
                {branches.map((b) => (
                  <li key={b.href}>
                    <Link href={b.href} className="text-sm text-blue-100 hover:text-white transition-colors">
                      {b.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold font-display uppercase tracking-widest text-blue-300 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/tool-directory" className="text-sm text-blue-100 hover:text-white transition-colors">AI Tool Directory</Link></li>
                <li><Link href="/prompt-library" className="text-sm text-blue-100 hover:text-white transition-colors">Prompt Library</Link></li>
                <li><Link href="/hub-resources" className="text-sm text-blue-100 hover:text-white transition-colors">Hub Resources</Link></li>
                <li><Link href="/about" className="text-sm text-blue-100 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-bold font-display uppercase tracking-widest text-blue-300 mb-4">Office Hours /AI</h4>
              <p className="text-sm text-blue-200 mb-4">The Sunday read for teachers who teach with AI. Free every week.</p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-1.5 bg-[#E8533A] hover:bg-[#d4432a] text-white text-sm font-semibold font-display px-4 py-2 rounded-md transition-colors"
              >
                Subscribe Free <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-blue-300">© 2026 AI Classroom Hub. Written by Ryan David.</p>
            <p className="text-xs text-blue-400">20+ years in K-12 classrooms. No courses. No certifications. Just what works.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
