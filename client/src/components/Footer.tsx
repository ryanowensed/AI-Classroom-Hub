/**
 * Footer — matches /coach design exactly:
 *   - border-top #e5e3dd, bg #f8f8f7
 *   - 680px container
 *   - Three lines: copyright, privacy note, link row
 *   - Publication name: Office Hours /AI
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: "0.8125rem",
    color: "#6b6862",
    textDecoration: "none",
  };

  const handleLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#34322d";
    e.currentTarget.style.textDecoration = "underline";
    e.currentTarget.style.textUnderlineOffset = "3px";
  };
  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#6b6862";
    e.currentTarget.style.textDecoration = "none";
  };

  return (
    <footer
      aria-label="Site footer"
      style={{
        borderTop: "1px solid #e5e3dd",
        paddingTop: "40px",
        paddingBottom: "48px",
        backgroundColor: "#f8f8f7",
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
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          {/* Line 1: copyright */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "#6b6862",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            &copy; {currentYear} Office Hours{" "}
            <span style={{ color: "#0081f2" }}>/</span>
            AI. Published by{" "}
            <a
              href="https://theaiclassroomhub.com"
              style={{ ...linkStyle, textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              theaiclassroomhub.com
            </a>
            . Built by a teacher, for teachers.
          </p>

          {/* Line 2: privacy note */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "#6b6862",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Your email is only used to send you Office Hours{" "}
            <span style={{ color: "#0081f2" }}>/</span>
            AI every Sunday. Unsubscribe any time, one click.
          </p>

          {/* Line 3: link row */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Archive", href: "/archive" },
              { label: "Contact", href: "mailto:ryan@aiclassroomhub.com" },
            ].map((item, i, arr) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <a
                  href={item.href}
                  style={linkStyle}
                  onMouseEnter={handleLinkEnter}
                  onMouseLeave={handleLinkLeave}
                >
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ color: "#e5e3dd", fontSize: "0.8125rem" }}>&middot;</span>
                )}
              </span>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
