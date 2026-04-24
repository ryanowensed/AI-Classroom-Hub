import { Link } from "wouter";

/**
 * Header — matches /coach design exactly:
 *   - bg #f8f8f7, border-bottom #e5e3dd
 *   - DM Serif Display wordmark "Office Hours /AI" (left) — slash in accent blue
 *   - Single muted nav link (right): "Read the Sunday issue →"
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
        {/* Wordmark — "Office Hours /AI" with accent slash */}
        <Link href="/">
          <a
            aria-label="Office Hours /AI — home"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.125rem",
              color: "#34322d",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              cursor: "pointer",
            }}
          >
            Office Hours{" "}
            <span
              aria-hidden="true"
              style={{
                color: "#0081f2",
                fontSize: "1.25em",
                lineHeight: 1,
                display: "inline-block",
                transform: "translateY(0.02em)",
              }}
            >
              /
            </span>
            AI
          </a>
        </Link>

        {/* Single nav link */}
        <a
          href="/archive"
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
