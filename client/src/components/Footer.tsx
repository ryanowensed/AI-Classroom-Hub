import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">AI Classroom Hub</h3>
            <p className="text-sm text-muted-foreground">
              Empowering teachers with the latest AI tools and resources for modern classrooms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/try-this-today">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Try This Today
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Tool Directory
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    In the News
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/getting-started">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Getting Started
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    All Resources
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources#prompts">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Prompt Library
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources#safety">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Safety & Ethics
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} AI Classroom Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

