import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #e5e3dd",
        paddingTop: "40px",
        paddingBottom: "48px",
        backgroundColor: "#f8f8f7",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Brand line */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8125rem",
              color: "#6b6862",
              lineHeight: 1.5,
            }}
          >
            &copy; {currentYear} AI Classroom Hub. Published by{" "}
            <a
              href="https://theaiclassroomhub.com"
              style={{ color: "#6b6862", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              theaiclassroomhub.com
            </a>
            . Built by a teacher, for teachers.
          </p>

          {/* Privacy line */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8125rem",
              color: "#6b6862",
              lineHeight: 1.5,
            }}
          >
            Your email is only used to send you the AI Classroom Hub newsletter. Unsubscribe any time, one click.
          </p>

          {/* Link row */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {[
              { label: "Try This Today", href: "/try-this-today", internal: true },
              { label: "Tool Directory", href: "/tools", internal: true },
              { label: "Case Studies", href: "/case-studies", internal: true },
              { label: "Prompt Library", href: "/course", internal: true },
              { label: "Advertise", href: "/advertise", internal: true },
              { label: "Contact", href: "mailto:hello@theaiclassroomhub.com", internal: false },
              { label: "Privacy", href: "#", internal: false },
            ].map((item, i, arr) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {item.internal ? (
                  <Link href={item.href}>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8125rem",
                        color: "#6b6862",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#34322d"; (e.target as HTMLElement).style.textDecoration = "underline"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6b6862"; (e.target as HTMLElement).style.textDecoration = "none"; }}
                    >
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#6b6862",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#34322d"; (e.target as HTMLElement).style.textDecoration = "underline"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6b6862"; (e.target as HTMLElement).style.textDecoration = "none"; }}
                  >
                    {item.label}
                  </a>
                )}
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
