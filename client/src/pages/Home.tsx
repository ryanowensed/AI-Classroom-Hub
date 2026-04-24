import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

/* ── Shared inline style constants (mirrors /coach design tokens) ── */
const ink    = "#34322d";
const muted  = "#6b6862";
const accent = "#0081f2";
const border = "#e5e3dd";
const bg     = "#f8f8f7";

const serif = "'DM Serif Display', Georgia, serif";
const sans  = "'DM Sans', system-ui, sans-serif";

export default function Home() {
  // Load Beehiiv embed script once on mount
  useEffect(() => {
    if (!document.querySelector('script[src="https://subscribe-forms.beehiiv.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://subscribe-forms.beehiiv.com/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: bg }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* ══════════════════════════════════════════
            HERO — editorial, left-aligned, serif h1
        ══════════════════════════════════════════ */}
        <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
          <div className="container">
            <h1
              style={{
                fontFamily: serif,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.07,
                letterSpacing: "-0.01em",
                color: ink,
                marginBottom: "28px",
              }}
            >
              The practical AI resource for K–12 teachers.
            </h1>
            <p
              style={{
                fontFamily: sans,
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: 1.5,
                color: ink,
                marginBottom: "20px",
                maxWidth: "600px",
              }}
            >
              Real tools, real teacher stories, and actionable tips — delivered every week. No jargon. No hype. Just what works on Monday.
            </p>
            <p
              style={{
                fontFamily: sans,
                fontSize: "0.9375rem",
                color: muted,
                fontWeight: 500,
                marginBottom: "36px",
              }}
            >
              Written by Ryan David. 20+ years in the classroom.
            </p>

            {/* Newsletter CTA form */}
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: sans,
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: ink,
                  marginBottom: "10px",
                }}
              >
                Get the free weekly newsletter.
              </label>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  alignItems: "stretch",
                }}
              >
                <iframe
                  src="https://subscribe-forms.beehiiv.com/4ce10849-0bda-4649-85b9-5a8503ae0f0f"
                  data-test-id="beehiiv-embed"
                  frameBorder={0}
                  scrolling="no"
                  style={{
                    width: "100%",
                    maxWidth: "520px",
                    height: "80px",
                    margin: 0,
                    borderRadius: "4px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                />
              </div>
              <p
                style={{
                  marginTop: "12px",
                  color: muted,
                  fontFamily: sans,
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                }}
              >
                Free every Sunday. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: 0 }} />

        {/* ══════════════════════════════════════════
            WHAT'S INSIDE — section cards as editorial list
        ══════════════════════════════════════════ */}
        <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="container">
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: ink,
                marginBottom: "8px",
              }}
            >
              What's in every issue.
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0 0" }}>
              {[
                {
                  num: "1.",
                  label: "Try This Today",
                  desc: "One quick, actionable AI tip you can implement in your classroom right now — no setup required.",
                  href: "/try-this-today",
                },
                {
                  num: "2.",
                  label: "Tool of the Week",
                  desc: "A focused look at one AI tool teachers are actually using — what it does, how to start, and whether it's worth your time.",
                  href: "/tools",
                },
                {
                  num: "3.",
                  label: "Case Studies",
                  desc: "Real teacher success stories with specific examples and measurable results — not hypotheticals.",
                  href: "/case-studies",
                },
                {
                  num: "4.",
                  label: "In the News",
                  desc: "The AI education developments, research findings, and tool launches that actually matter for your classroom.",
                  href: "/news",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  style={{
                    padding: "28px 0",
                    borderBottom: `1px solid ${border}`,
                    borderTop: "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: sans,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: ink,
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ color: accent, fontWeight: 700, marginRight: "6px" }}>
                      {item.num}
                    </span>
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: "0.9375rem",
                      color: muted,
                      lineHeight: 1.55,
                      marginBottom: "10px",
                    }}
                  >
                    {item.desc}
                  </p>
                  <Link href={item.href}>
                    <span
                      style={{
                        fontFamily: sans,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: accent,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                        cursor: "pointer",
                      }}
                    >
                      Browse →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: 0 }} />

        {/* ══════════════════════════════════════════
            RECENT ISSUES
        ══════════════════════════════════════════ */}
        <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="container">
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: ink,
                marginBottom: "8px",
              }}
            >
              Recent issues.
            </h2>

            <div style={{ marginTop: "8px" }}>
              {[
                {
                  tag: "March 2026",
                  title: "Claude Projects for lesson planning — a practical setup guide",
                  date: "March 20, 2026",
                  bullets: [
                    "Set up a Claude Project with your course materials",
                    "5 prompts for differentiated discussion questions",
                    "Special ed teacher cuts IEP prep by 90%",
                  ],
                },
                {
                  tag: "March 2026",
                  title: "Google Classroom + Gemini: what's actually new in 2026",
                  date: "March 13, 2026",
                  bullets: [
                    "Audio lessons built directly in Classroom",
                    "Standards tagging for assignments: a walkthrough",
                    "Tool spotlight: NotebookLM for student review",
                  ],
                },
              ].map((issue) => (
                <a
                  key={issue.title}
                  href="https://theaiclassroomhub.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      padding: "28px 0",
                      borderBottom: `1px solid ${border}`,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: sans,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: muted,
                        marginBottom: "6px",
                      }}
                    >
                      {issue.tag}
                    </p>
                    <p
                      style={{
                        fontFamily: sans,
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: ink,
                        lineHeight: 1.4,
                        marginBottom: "4px",
                      }}
                    >
                      {issue.title}
                    </p>
                    <p
                      style={{
                        fontFamily: sans,
                        fontSize: "0.8125rem",
                        color: muted,
                        marginBottom: "12px",
                      }}
                    >
                      {issue.date}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                      {issue.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            fontFamily: sans,
                            fontSize: "0.875rem",
                            color: muted,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                          }}
                        >
                          <span style={{ color: accent, marginTop: "2px", flexShrink: 0 }}>/</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ marginTop: "24px" }}>
              <a
                href="https://theaiclassroomhub.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: sans,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: accent,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Browse all past issues →
              </a>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: 0 }} />

        {/* ══════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════ */}
        <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="container">
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: ink,
                marginBottom: "8px",
              }}
            >
              What educators are saying.
            </h2>

            <div style={{ marginTop: "8px" }}>
              {[
                {
                  quote: "The only AI newsletter I actually read top to bottom. Every issue has something I can use the same week.",
                  attr: "Rose Prust — Special Ed Teacher, WA",
                },
                {
                  quote: "Finally an AI resource written for classroom teachers — not tech people trying to sound like teachers.",
                  attr: "J. Dean — Primary Teacher, Manchester UK",
                },
                {
                  quote: "I shared it with my whole department. Three of us now use the prompt templates every single week.",
                  attr: "Al Rabanera — Math Teacher, Fullerton CA",
                },
              ].map((t) => (
                <blockquote
                  key={t.attr}
                  style={{
                    position: "relative",
                    padding: "28px 0 28px 28px",
                    borderBottom: `1px solid ${border}`,
                    margin: 0,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "26px",
                      color: accent,
                      fontFamily: serif,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    /
                  </span>
                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: "1.0625rem",
                      lineHeight: 1.55,
                      color: ink,
                      marginBottom: "10px",
                    }}
                  >
                    "{t.quote}"
                  </p>
                  <cite
                    style={{
                      fontFamily: sans,
                      fontSize: "0.8125rem",
                      color: muted,
                      fontWeight: 500,
                      fontStyle: "normal",
                    }}
                  >
                    — {t.attr}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: 0 }} />

        {/* ══════════════════════════════════════════
            TOOL SPOTLIGHT
        ══════════════════════════════════════════ */}
        <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="container">
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: ink,
                marginBottom: "8px",
              }}
            >
              Tools teachers are using right now.
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0 0" }}>
              {[
                {
                  name: "Brisk Teaching",
                  tag: "Lesson Planning",
                  desc: "Chrome extension with 40+ tools for quizzes, lesson plans, writing feedback, and custom learning activities. Free to start.",
                  href: "/tools",
                },
                {
                  name: "NotebookLM",
                  tag: "Content Creation",
                  desc: "Upload your teaching materials and get AI-generated study guides, questions, and even podcast summaries. Free.",
                  href: "/tools",
                },
                {
                  name: "Diffit",
                  tag: "Differentiation",
                  desc: "Creates reading passages at multiple levels with comprehension questions in under 20 seconds. Free.",
                  href: "/tools",
                },
              ].map((tool) => (
                <li
                  key={tool.name}
                  style={{
                    padding: "28px 0",
                    borderBottom: `1px solid ${border}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
                    <p
                      style={{
                        fontFamily: sans,
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: ink,
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {tool.name}
                    </p>
                    <span
                      style={{
                        fontFamily: sans,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: accent,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {tool.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: "0.9375rem",
                      color: muted,
                      lineHeight: 1.55,
                      marginBottom: "10px",
                    }}
                  >
                    {tool.desc}
                  </p>
                  <Link href={tool.href}>
                    <span
                      style={{
                        fontFamily: sans,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: accent,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                        cursor: "pointer",
                      }}
                    >
                      Learn more →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "24px" }}>
              <Link href="/tools">
                <span
                  style={{
                    fontFamily: sans,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: accent,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    cursor: "pointer",
                  }}
                >
                  Browse all tools →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: 0 }} />

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          <div className="container">
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: ink,
                marginBottom: "24px",
              }}
            >
              One more time.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "36px" }}>
              <p style={{ fontFamily: sans, fontSize: "1.0625rem", lineHeight: 1.6, color: ink }}>
                The practical AI resource for K–12 teachers. Real tools, real stories, actionable tips — every Sunday.
              </p>
              <p style={{ fontFamily: sans, fontSize: "1.0625rem", lineHeight: 1.6, color: ink }}>
                Free. No jargon. No hype. Built for the teachers who are already in the classroom doing the work.
              </p>
            </div>

            {/* Final subscribe form */}
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: sans,
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: ink,
                  marginBottom: "10px",
                }}
              >
                Get the free weekly newsletter.
              </label>
              <iframe
                src="https://subscribe-forms.beehiiv.com/4ce10849-0bda-4649-85b9-5a8503ae0f0f"
                data-test-id="beehiiv-embed"
                frameBorder={0}
                scrolling="no"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  height: "80px",
                  margin: 0,
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              />
              <p
                style={{
                  marginTop: "12px",
                  color: muted,
                  fontFamily: sans,
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                }}
              >
                Free every Sunday. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
