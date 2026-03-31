import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Newspaper,
} from "lucide-react";

const PDF_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/108617926/Vj4ZbBZiPJ9UioW4mLEdBA/10_AI_Prompts_Teachers_Can_Use_Tomorrow_64adbf54.pdf";

export default function FreePromptsDownload() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "10_AI_Prompts_Teachers_Can_Use_Tomorrow.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* ── Thank-you hero ───────────────────────────────────────────── */}
        <section className="bg-foreground text-background py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />

          <div className="container max-w-2xl text-center">
            {/* Success icon */}
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>

            <h1 className="heading-display text-4xl md:text-5xl font-normal text-background leading-tight mb-4">
              You're all set!
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-background/70 text-lg leading-relaxed mb-3">
              Thanks for subscribing. Your free PDF is ready to download below.
            </p>
            <p className="text-background/50 text-sm mb-10">
              A copy has also been sent to your inbox — check your spam folder if you don't see it within a few minutes.
            </p>

            {/* Download button */}
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-10 py-6 text-lg"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Downloaded — enjoy!
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download Your Free PDF
                </>
              )}
            </Button>

            {downloaded && (
              <p className="mt-4 text-background/50 text-sm">
                File saved to your Downloads folder.
              </p>
            )}
          </div>
        </section>

        {/* ── What to do next ──────────────────────────────────────────── */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="heading-display text-2xl font-normal text-foreground mb-2">
                While you're here…
              </h2>
              <p className="text-muted-foreground text-sm">
                Explore more free resources to help you use AI in your classroom.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Sparkles className="h-6 w-6 text-primary" />,
                  title: "Try This Today",
                  desc: "Quick AI activities you can use in your next lesson — no prep required.",
                  href: "/try-this-today",
                  cta: "See today's tip",
                },
                {
                  icon: <BookOpen className="h-6 w-6 text-primary" />,
                  title: "AI Prompt Library",
                  desc: "Six modules of copy-paste prompts for every teaching task.",
                  href: "/course",
                  cta: "Browse the library",
                },
                {
                  icon: <Newspaper className="h-6 w-6 text-primary" />,
                  title: "In the News",
                  desc: "The latest AI education research, tool launches, and policy updates.",
                  href: "/news",
                  cta: "Read the news",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-card rounded-xl border p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <Link href={card.href}>
                    <span className="flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer">
                      {card.cta}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
