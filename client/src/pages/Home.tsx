import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Design tokens (exact match to /coach) ─────────────────────────── */
const T = {
  bg:          "#f8f8f7",
  ink:         "#34322d",
  muted:       "#6b6862",
  accent:      "#0081f2",
  accentHover: "#0066c2",
  border:      "#e5e3dd",
  serif:       "'DM Serif Display', Georgia, serif",
  sans:        "'DM Sans', system-ui, sans-serif",
};

/* ─── Shared style objects ───────────────────────────────────────────── */
const divider: React.CSSProperties = {
  border: "none",
  borderTop: `1px solid ${T.border}`,
  margin: 0,
};

const section: React.CSSProperties = {
  paddingTop: "96px",
  paddingBottom: "96px",
};

const container: React.CSSProperties = {
  width: "100%",
  maxWidth: "680px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "24px",
  paddingRight: "24px",
};

const h2Style: React.CSSProperties = {
  fontFamily: T.serif,
  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.01em",
  color: T.ink,
  marginBottom: "8px",
};

/* ─── Accent slash helper ────────────────────────────────────────────── */
function Slash() {
  return (
    <span
      aria-hidden="true"
      style={{ color: T.accent }}
    >
      /
    </span>
  );
}

/* ─── Email form component ───────────────────────────────────────────── */
function SubscribeForm({ id }: { id: "hero" | "final" }) {
  const [email, setEmail]       = useState("");
  const [status, setStatus]     = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef                = useRef<HTMLInputElement>(null);
  const BEEHIIV_URL             = "https://theaiclassroomhub.beehiiv.com";

  const isValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (!isValid(email)) {
      setErrorMsg("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), reactivate_existing: true, utm_source: "homepage" }),
      });
      if (!res.ok) throw new Error("Server error: " + res.status);
      setStatus("success");
      // Redirect to Beehiiv publication after a brief confirmation pause
      setTimeout(() => {
        window.location.href = BEEHIIV_URL;
      }, 2000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again, or email ryan@aiclassroomhub.com and I'll add you manually.");
    }
  }

  if (status === "success") {
    return (
      <div aria-live="polite" style={{ textAlign: "left" }}>
        <p style={{ fontFamily: T.serif, fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: 1.1, color: T.ink, marginBottom: "16px" }}>
          You're in.
        </p>
        <p style={{ fontFamily: T.sans, fontSize: "1.0625rem", lineHeight: 1.55, color: T.ink, marginBottom: "8px" }}>
          Taking you to Office Hours <Slash />AI now…
        </p>
        <p style={{ fontFamily: T.sans, fontSize: "0.875rem", color: T.muted, marginTop: "12px" }}>
          Not redirecting?{" "}
          <a
            href="https://theaiclassroomhub.beehiiv.com"
            style={{ color: T.accent, textDecoration: "underline" }}
          >
            Click here.
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Form label — the exact phrase requested */}
      <label
        htmlFor={`${id}-email`}
        style={{
          display: "block",
          fontFamily: T.sans,
          fontSize: "0.9375rem",
          fontWeight: 500,
          color: T.ink,
          marginBottom: "10px",
        }}
      >
        Office Hours <Slash />AI — Free Sunday Publication.
      </label>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        <input
          ref={inputRef}
          id={`${id}-email`}
          type="email"
          name="email"
          placeholder="your@school.edu"
          required
          autoComplete="email"
          spellCheck={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            minWidth: "200px",
            fontFamily: T.sans,
            fontSize: "1rem",
            color: T.ink,
            background: "#fff",
            border: `1px solid ${T.border}`,
            borderRadius: "4px",
            padding: "13px 16px",
            outline: "none",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = T.accent;
            e.currentTarget.style.outline = `2px solid ${T.accent}`;
            e.currentTarget.style.outlineOffset = "2px";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = T.border;
            e.currentTarget.style.outline = "none";
          }}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            fontFamily: T.sans,
            fontSize: "0.9375rem",
            fontWeight: 700,
            color: "#fff",
            backgroundColor: status === "sending" ? "#6b6862" : T.accent,
            border: "none",
            borderRadius: "4px",
            padding: "14px 28px",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            lineHeight: 1.3,
            transition: "background-color 0.15s ease",
            opacity: status === "sending" ? 0.65 : 1,
          }}
          onMouseEnter={(e) => {
            if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.backgroundColor = T.accentHover;
          }}
          onMouseLeave={(e) => {
            if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.backgroundColor = T.accent;
          }}
        >
          {status === "sending" ? "Sending…" : "Subscribe free."}
        </button>
      </div>

      {errorMsg && (
        <p role="alert" style={{ marginTop: "10px", color: "#c0392b", fontFamily: T.sans, fontSize: "0.875rem" }}>
          {errorMsg}
        </p>
      )}

      <p style={{ marginTop: "12px", color: T.muted, fontFamily: T.sans, fontSize: "0.8125rem", lineHeight: 1.5 }}>
        Free every Sunday. Unsubscribe any time.
      </p>
    </form>
  );
}

/* ─── Fade-in hook ───────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── FAQ item ───────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${T.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          width: "100%",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: T.sans,
          fontSize: "1rem",
          fontWeight: 500,
          color: T.ink,
          lineHeight: 1.4,
          textAlign: "left",
        }}
      >
        {q}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "18px",
            height: "18px",
            color: T.muted,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <p
          style={{
            padding: "0 0 22px 0",
            fontFamily: T.sans,
            fontSize: "0.9375rem",
            color: T.muted,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  const patternRef  = useFadeIn() as React.RefObject<HTMLElement>;
  const insideRef   = useFadeIn() as React.RefObject<HTMLElement>;
  const whoRef      = useFadeIn() as React.RefObject<HTMLElement>;
  const proofRef    = useFadeIn() as React.RefObject<HTMLElement>;
  const faqRef      = useFadeIn() as React.RefObject<HTMLElement>;
  const finalCtaRef = useFadeIn() as React.RefObject<HTMLElement>;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: T.bg }}>
      <Header />

      <main id="main-content" tabIndex={-1} style={{ flex: 1, outline: "none" }}>

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section aria-labelledby="hero-heading" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
          <div style={container}>
            <h1
              id="hero-heading"
              style={{
                fontFamily: T.serif,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.07,
                letterSpacing: "-0.01em",
                color: T.ink,
                marginBottom: "28px",
              }}
            >
              The Sunday read for teachers who teach with AI.
            </h1>

            <p
              style={{
                fontFamily: T.sans,
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: 1.5,
                color: T.ink,
                marginBottom: "20px",
                maxWidth: "600px",
              }}
            >
              One practical tip, one tool, one real classroom story — every Sunday morning. No jargon. No hype. Just what works on Monday.
            </p>

            <p
              style={{
                fontFamily: T.sans,
                fontSize: "0.9375rem",
                color: T.muted,
                fontWeight: 500,
                marginBottom: "36px",
              }}
            >
              Written by Ryan David. 20+ years in K-12 classrooms.
            </p>

            <SubscribeForm id="hero" />
          </div>
        </section>

        <hr style={divider} />

        {/* ══════════════════════════════════════════
            PATTERN INTERRUPT
        ══════════════════════════════════════════ */}
        <section
          ref={patternRef}
          aria-labelledby="pattern-heading"
          style={section}
        >
          <div style={container}>
            <h2 id="pattern-heading" style={h2Style}>
              The AI tips you've been reading look like this.
            </h2>

            <div
              role="list"
              aria-label="Example generic AI tips"
              style={{ margin: "28px 0", display: "flex", flexDirection: "column", gap: 0 }}
            >
              {[
                '"Use ChatGPT to save time on lesson planning."',
                '"Try AI for differentiation."',
                '"Prompt engineering is the future of teaching."',
              ].map((line, i) => (
                <div
                  key={i}
                  role="listitem"
                  style={{
                    borderLeft: `2px solid ${T.border}`,
                    padding: "10px 18px",
                    fontFamily: T.sans,
                    fontSize: "0.9375rem",
                    color: T.muted,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                    borderTop: i > 0 ? `1px solid ${T.bg}` : undefined,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
              <p style={{ fontFamily: T.sans, lineHeight: 1.55, color: T.ink }}>
                They're fine. They're not wrong. They just don't change your Monday.
              </p>
              <p style={{ fontFamily: T.sans, lineHeight: 1.55, color: T.ink }}>
                You read the tip. You nod. You close the tab. And then you go back to planning the same way you always have. That's not you failing at AI. That's the tip failing you.
              </p>
            </div>

            <blockquote
              aria-label="Key insight"
              style={{ position: "relative", margin: "40px 0", paddingLeft: "28px" }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  top: "-2px",
                  color: T.accent,
                  fontFamily: T.serif,
                  fontSize: "2rem",
                  lineHeight: 1,
                }}
              >
                /
              </span>
              <p
                style={{
                  fontFamily: T.sans,
                  fontStyle: "italic",
                  fontSize: "clamp(1.125rem, 3vw, 1.375rem)",
                  lineHeight: 1.45,
                  color: T.ink,
                }}
              >
                Office Hours <Slash />AI is different. One practical tip, one tool, one real teacher story — every Sunday. Classroom-ready by Monday.
              </p>
            </blockquote>
          </div>
        </section>

        <hr style={divider} />

        {/* ══════════════════════════════════════════
            WHAT'S IN EVERY ISSUE
        ══════════════════════════════════════════ */}
        <section
          ref={insideRef}
          aria-labelledby="inside-heading"
          style={section}
        >
          <div style={container}>
            <h2 id="inside-heading" style={h2Style}>
              What's in every issue.
            </h2>

            <ul
              aria-label="Contents of every Office Hours /AI issue"
              style={{ listStyle: "none", padding: 0, margin: "8px 0 0 0" }}
            >
              {[
                {
                  num: "1.",
                  label: "Try This Today",
                  desc: "One quick, actionable AI tip you can implement in your classroom right now — no setup required.",
                },
                {
                  num: "2.",
                  label: "Tool of the Week",
                  desc: "A focused look at one AI tool teachers are actually using — what it does, how to start, and whether it's worth your time.",
                },
                {
                  num: "3.",
                  label: "Case Study",
                  desc: "A real teacher success story with specific examples and measurable results — not hypotheticals.",
                },
                {
                  num: "4.",
                  label: "In the News",
                  desc: "The AI education developments, research findings, and tool launches that actually matter for your classroom.",
                },
              ].map((item, i) => (
                <li
                  key={item.label}
                  style={{
                    padding: "28px 0",
                    borderBottom: `1px solid ${T.border}`,
                    borderTop: i === 0 ? `1px solid ${T.border}` : undefined,
                  }}
                >
                  <p
                    style={{
                      fontFamily: T.sans,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: T.ink,
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ color: T.accent, fontWeight: 700, marginRight: "6px" }} aria-hidden="true">
                      {item.num}
                    </span>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: T.sans, fontSize: "0.9375rem", color: T.muted, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr style={divider} />

        {/* ══════════════════════════════════════════
            WHO MADE THIS
        ══════════════════════════════════════════ */}
        <section
          ref={whoRef}
          aria-labelledby="who-heading"
          style={section}
        >
          <div style={container}>
            <h2 id="who-heading" style={h2Style}>
              Who made this.
            </h2>
            <p
              style={{
                fontFamily: T.sans,
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: T.ink,
                marginTop: "8px",
              }}
            >
              Ryan David has spent 20+ years in K-12 classrooms and currently serves as Director of Operations and Director of Technology for a K-8 school. He writes Office Hours <Slash />AI, a free Sunday publication for teachers who teach with AI. He is not selling a course. He is not selling a certification. He is writing to the teachers he used to be.
            </p>
          </div>
        </section>

        <hr style={divider} />

        {/* ══════════════════════════════════════════
            SOCIAL PROOF
        ══════════════════════════════════════════ */}
        <section
          ref={proofRef}
          aria-labelledby="proof-heading"
          style={section}
        >
          <div style={container}>
            <h2 id="proof-heading" style={h2Style}>
              What readers are saying.
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
              ].map((t, i) => (
                <blockquote
                  key={t.attr}
                  style={{
                    position: "relative",
                    padding: "28px 0 28px 28px",
                    borderBottom: `1px solid ${T.border}`,
                    borderTop: i === 0 ? `1px solid ${T.border}` : undefined,
                    margin: 0,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "26px",
                      color: T.accent,
                      fontFamily: T.serif,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    /
                  </span>
                  <p style={{ fontFamily: T.sans, fontSize: "1.0625rem", lineHeight: 1.55, color: T.ink, marginBottom: "10px" }}>
                    "{t.quote}"
                  </p>
                  <cite
                    style={{
                      fontFamily: T.sans,
                      fontSize: "0.8125rem",
                      color: T.muted,
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

        <hr style={divider} />

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section
          ref={faqRef}
          aria-labelledby="faq-heading"
          style={section}
        >
          <div style={container}>
            <h2 id="faq-heading" style={h2Style}>
              Questions teachers are asking.
            </h2>

            <div style={{ marginTop: "8px" }}>
              {[
                {
                  q: "Do I need to know anything about AI to get value from this?",
                  a: <>No. Every issue of Office Hours <Slash />AI is written for classroom teachers, not tech people. If you can send an email, you can use the tips inside.</>,
                },
                {
                  q: "What grade levels is this for?",
                  a: "K-12 and higher ed. The tools, tips, and case studies span grade bands — from elementary to high school — and are labeled so you can find what's relevant to you.",
                },
                {
                  q: "Which AI tools do you cover?",
                  a: "ChatGPT, Claude, Gemini, Copilot, Brisk Teaching, NotebookLM, Diffit, and many more. We focus on free or freemium tools that work without a district budget.",
                },
                {
                  q: "How is Office Hours /AI different from other AI newsletters?",
                  a: "It's written by a teacher who is still in schools — not a consultant or content marketer. Every tip is tested in real classrooms before it lands in your inbox.",
                },
                {
                  q: "Is any of this going to get me in trouble with my district's AI policy?",
                  a: "Office Hours /AI covers tools and strategies, not student data. Follow your district's AI guidance the same way you would with any other tool — review outputs, use judgment, and keep student information private.",
                },
              ].map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        <hr style={divider} />

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section
          ref={finalCtaRef}
          aria-labelledby="final-cta-heading"
          style={section}
        >
          <div style={container}>
            <h2 id="final-cta-heading" style={h2Style}>
              One more time.
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginBottom: "36px",
                marginTop: "8px",
              }}
            >
              <p style={{ fontFamily: T.sans, fontSize: "1.0625rem", lineHeight: 1.6, color: T.ink }}>
                The Sunday read for teachers who teach with AI. One practical tip, one tool, one real classroom story — every week.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: "1.0625rem", lineHeight: 1.6, color: T.ink }}>
                Office Hours <Slash />AI is free. No jargon. No hype. Built for the teachers who are already in the classroom doing the work.
              </p>
            </div>

            <SubscribeForm id="final" />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
