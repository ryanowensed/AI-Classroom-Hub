import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Star, Badge as BadgeIcon, Zap, Globe, Users, TrendingUp, MailOpen } from "lucide-react";

export default function Advertise() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      <main className="flex-1">

        {/* ── TOP THIRD: Value Proposition ── */}
        <section className="border-b border-border bg-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D5EFF] bg-[#E6F1FB] px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Sponsorship & Advertising
            </div>
            <h1
              className="text-4xl md:text-5xl leading-tight mb-5 text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
            >
              Reach educators who are{" "}
              <em className="italic text-[#1D5EFF]">actively looking</em> for AI tools.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              The AI Classroom Hub newsletter delivers practical AI resources to K–12 and higher ed teachers across the US, UK, and beyond — every single week.
            </p>
          </div>
        </section>

        {/* ── MIDDLE THIRD: Stats ── */}
        <section className="border-b border-border bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">

              {/* Subscribers */}
              <div className="py-12 px-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F1FB] flex items-center justify-center">
                    <MailOpen className="h-5 w-5 text-[#1D5EFF]" />
                  </div>
                </div>
                <div
                  className="text-5xl text-[#1D5EFF] mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
                >
                  Growing
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">📬 Subscriber Base</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Active educators — real school emails, not casual browsers. Verified through Beehiiv's double opt-in.
                </p>
              </div>

              {/* Geographic reach */}
              <div className="py-12 px-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E1F5EE] flex items-center justify-center">
                    <Globe className="h-5 w-5 text-[#0F6E56]" />
                  </div>
                </div>
                <div
                  className="text-5xl text-[#1D5EFF] mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
                >
                  12+
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">🌍 Countries</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  US, UK, Germany, Greece, Poland, and beyond. Strong UK presence — a differentiator for GDPR-compliant tools.
                </p>
              </div>

              {/* Engagement */}
              <div className="py-12 px-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAEEDA] flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-[#854F0B]" />
                  </div>
                </div>
                <div
                  className="text-5xl text-[#1D5EFF] mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
                >
                  High
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">📈 Open & Click Rate</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Above-industry-average engagement. Educators read to act — every issue is classroom-ready and immediately applicable.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── SPONSORSHIP FORMATS ── */}
        <section className="bg-[#F8F9FC] border-b border-border py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Sponsorship formats</p>
              <h2
                className="text-2xl md:text-3xl text-foreground"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
              >
                Three ways to reach your audience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Format 1: Tool Spotlight */}
              <div className="bg-white rounded-2xl border border-border p-6 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#E6F1FB] flex items-center justify-center mb-4">
                  <Star className="h-4.5 w-4.5 text-[#1D5EFF]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1D5EFF] mb-2">Format 01</div>
                <h3 className="text-base font-semibold mb-2">Tool Spotlight</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  A featured write-up in the newsletter, with your tool framed as the weekly recommendation. Approximately 300 words, clearly labeled as sponsored. Written in the same practical, teacher-first voice as every other issue — so it gets read.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Best for: New tool launches, awareness campaigns</p>
                </div>
              </div>

              {/* Format 2: Directory Featured Badge */}
              <div className="bg-white rounded-2xl border border-[#1D5EFF]/30 p-6 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-semibold bg-[#1D5EFF] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Popular</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#EEEDFE] flex items-center justify-center mb-4">
                  <BadgeIcon className="h-4.5 w-4.5 text-[#534AB7]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1D5EFF] mb-2">Format 02</div>
                <h3 className="text-base font-semibold mb-2">Directory Featured Badge</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  Your tool receives a "Featured" badge and top placement in the AI Classroom Hub Tool Directory for 30 days. Visible to every educator who browses the directory — a high-intent audience actively comparing tools.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Best for: Sustained visibility, comparison-stage buyers</p>
                </div>
              </div>

              {/* Format 3: Try This Today */}
              <div className="bg-white rounded-2xl border border-border p-6 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#E1F5EE] flex items-center justify-center mb-4">
                  <Zap className="h-4.5 w-4.5 text-[#0F6E56]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1D5EFF] mb-2">Format 03</div>
                <h3 className="text-base font-semibold mb-2">Try This Today Integration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  A step-by-step classroom activity built around your tool, published as that month's "Try This Today" tip. Teachers receive a ready-to-use lesson — your tool is the natural solution. The highest-engagement format in the newsletter.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Best for: Driving trial, demonstrating real classroom use</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── BOTTOM THIRD: Who reads this + CTA ── */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">The audience</p>
            </div>
            <div className="w-10 h-0.5 bg-[#1D5EFF] mb-6"></div>
            <h2
              className="text-2xl md:text-3xl text-foreground mb-4"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
            >
              Educators, not casual browsers.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4 font-light">
              AI Classroom Hub readers are practicing K–12 and higher ed teachers who signed up specifically to find tools they can use in their classrooms. These are real school email addresses — not personal Gmail accounts. They are decision-makers at the classroom level: the people who actually adopt, recommend, and champion new tools within their schools and departments.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light">
              With strong representation across the US and UK, and growing readership in Germany, Greece, Poland, and beyond, this audience is uniquely positioned for tools that operate across English-speaking markets — and especially for GDPR-compliant tools seeking UK traction.
            </p>

            {/* Audience tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {["K–12 Teachers", "Higher Ed Faculty", "Instructional Coaches", "Curriculum Designers", "Special Ed Specialists", "UK Educators", "US Educators", "Early Adopters"].map((tag) => (
                <span key={tag} className="text-xs font-medium bg-[#F0F4FF] text-[#1D5EFF] border border-[#1D5EFF]/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#1D5EFF] rounded-2xl p-8 text-white text-center">
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
              >
                Interested in sponsoring?
              </h3>
              <p className="text-white/75 text-sm mb-6 font-light">
                No pricing listed here — we prefer a conversation first to make sure it's a good fit for both sides.
              </p>
              <a
                href="mailto:hello@theaiclassroomhub.com?subject=Sponsorship%20Inquiry%20—%20AI%20Classroom%20Hub"
                className="inline-flex items-center gap-2 bg-white text-[#1D5EFF] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-white/50 text-xs mt-4">hello@theaiclassroomhub.com</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
