import { Link } from "wouter";

/**
 * Header — matches /coach design exactly:
 *   - bg #f8f8f7, border-bottom #e5e3dd
 *   - DM Serif Display wordmark (left)
 *   - Single muted nav link (right): "Subscribe →"
 *   - No hamburger, no nav links, no buttons
 */
export default function Header() {
  return (
    <nav
      aria-label="Site navigation"
      style={{
        borderBottom: "1px solid #e5e3dd",
        backgroundColor: "#f8f8f7",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        {/* Wordmark */}
        <Link href="/">
          <a
            aria-label="AI Classroom Hub — home"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.125rem",
              color: "#34322d",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              cursor: "pointer",
            }}
          >
            AI Classroom Hub
          </a>
        </Link>

        {/* Single nav link */}
        <a
          href="https://theaiclassroomhub.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#6b6862",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#34322d";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#6b6862";
          }}
        >
          Read the Sunday issue &rarr;
        </a>
      </div>
    </nav>
  );
}
