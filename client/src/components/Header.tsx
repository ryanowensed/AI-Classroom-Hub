import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Try This Today", href: "/try-this-today" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "In the News", href: "/news" },
    { name: "Tool Directory", href: "/tools" },
    { name: "Resources", href: "/resources" },
    { name: "Prompt Library", href: "/course" },
    { name: "🇬🇧 UK", href: "/uk" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header
      style={{
        borderBottom: "1px solid #e5e3dd",
        backgroundColor: "#f8f8f7",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* ── Primary nav bar: wordmark + subscribe link ── */}
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {/* Wordmark */}
          <Link href="/">
            <span
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "1.125rem",
                color: "#34322d",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              AI Classroom Hub
            </span>
          </Link>

          {/* Desktop: subscribe link */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div className="hidden lg:flex" style={{ gap: "1.5rem", alignItems: "center" }}>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: isActive(item.href) ? "#0081f2" : "#6b6862",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.15s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { if (!isActive(item.href)) (e.target as HTMLElement).style.color = "#34322d"; }}
                    onMouseLeave={(e) => { if (!isActive(item.href)) (e.target as HTMLElement).style.color = "#6b6862"; }}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            <a
              href="https://theaiclassroomhub.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#6b6862",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#34322d"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6b6862"; }}
            >
              Subscribe →
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#6b6862",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: "1px solid #e5e3dd",
            backgroundColor: "#f8f8f7",
          }}
        >
          <div
            className="container"
            style={{ paddingTop: "1rem", paddingBottom: "1.5rem" }}
          >
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  style={{
                    display: "block",
                    padding: "10px 0",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: isActive(item.href) ? "#0081f2" : "#6b6862",
                    borderBottom: "1px solid #e5e3dd",
                    cursor: "pointer",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <div style={{ paddingTop: "1rem" }}>
              <a
                href="https://theaiclassroomhub.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coach"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Subscribe to the newsletter
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
