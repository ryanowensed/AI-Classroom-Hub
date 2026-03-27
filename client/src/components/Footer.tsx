import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xs font-bold">AI</span>
              </div>
              <span className="font-semibold text-foreground">AI Classroom Hub</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Practical AI resources for K–12 and higher ed teachers. No jargon. No hype.
            </p>
            <a
              href="https://theaiclassroomhub.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              Subscribe to the newsletter <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* Explore */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Try This Today", href: "/try-this-today" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Tool Directory", href: "/tools" },
                { label: "In the News", href: "/news" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Getting Started", href: "/getting-started" },
                { label: "Prompt Library", href: "/course" },
                { label: "All Resources", href: "/resources" },
                { label: "🇬🇧 UK Educators", href: "/uk" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work with us */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Work With Us</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Advertise / Sponsor", href: "/advertise" },
                { label: "Contact", href: "mailto:hello@theaiclassroomhub.com" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("mailto") || item.href === "#" ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</a>
                  ) : (
                    <Link href={item.href}>
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} AI Classroom Hub. All rights reserved.</p>
          <p className="font-light">Helping educators navigate AI — one classroom at a time.</p>
        </div>
      </div>
    </footer>
  );
}
