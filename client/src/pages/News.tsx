import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Newspaper, ExternalLink, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      title: "OpenAI Launches ChatGPT for Teachers",
      date: "November 19, 2025",
      category: "Tools",
      source: "OpenAI",
      summary: "OpenAI announced ChatGPT for Teachers, a free version of its AI chatbot designed specifically for K-12 educators and school districts. The tool will be free through June 2027 for U.S. teachers.",
      keyPoints: [
        "Free to K-12 educators in U.S. through June 2027",
        "Securely work with student information",
        "Administrative controls for district leaders",
        "Initially launching with 150,000 educators"
      ],
      link: "https://www.cnbc.com/2025/11/19/openai-chatgpt-for-teachers-k-12-educators.html"
    },
    {
      title: "Google Commits $30 Million to AI Learning Projects",
      date: "November 11, 2025",
      category: "Investment",
      source: "Google Blog",
      summary: "At the Google AI for Learning Forum in London, Google announced $30 million in new funding for learning projects and unveiled research showing AI's positive impact on student learning outcomes.",
      keyPoints: [
        "$30M investment over three years",
        "Partnership with Estonia's AI Leap initiative",
        "Research shows 5.5% improvement in problem-solving",
        "LearnLM had only 0.1% factual error rate"
      ],
      link: "https://blog.google/outreach-initiatives/education/ai-learning-commitments/"
    },
    {
      title: "Google Announces Free Gemini Certifications for Educators",
      date: "November 17, 2025",
      category: "Professional Development",
      source: "Google Blog",
      summary: "Google launched three new free Gemini certifications for educators, university students, and K-12 students, available in 12 languages with verifiable digital certificates.",
      keyPoints: [
        "Gemini Certified Educator for teachers",
        "Gemini Certified University Student",
        "Gemini Certified Student (K12) for high schoolers",
        "Completely free, available in 12 languages"
      ],
      link: "https://blog.google/outreach-initiatives/education/gemini-certifications-education/"
    },
    {
      title: "Teacher AI Training Rising Fast, But Still Has Long Way to Go",
      date: "November 18, 2025",
      category: "Professional Development",
      source: "EdWeek",
      summary: "50% of teachers now report having at least one professional development session on AI, up from 42% in 2024 and triple the 13% in 2023, but experts say more comprehensive training is needed.",
      keyPoints: [
        "50% of teachers received AI PD in Fall 2025",
        "Triple the rate from 2023",
        "School leaders more likely to receive training than teachers",
        "Need for ongoing, comprehensive PD programs"
      ],
      link: "https://www.edweek.org/technology/teacher-ai-training-is-rising-fast-but-still-has-a-long-way-to-go/2025/11"
    },
    {
      title: "AI Adoption in Education Jumps to 86%",
      date: "October 2025",
      category: "Trends",
      source: "G2 Learning",
      summary: "AI usage in education has skyrocketed from 45% in 2023 to 86% in 2024, marking the sharpest rise across all industries. This rapid adoption reflects growing teacher confidence in AI tools.",
      keyPoints: [
        "Fastest growing sector for AI adoption",
        "Teachers report significant time savings",
        "Focus shifting from experimentation to integration"
      ],
      link: "https://learn.g2.com/ai-in-edtech"
    },
    {
      title: "84% of High School Students Now Use AI for Schoolwork",
      date: "October 2025",
      category: "Research",
      source: "College Board",
      summary: "New research shows that the percentage of high school students using generative AI tools for schoolwork increased from 79% to 84% between January and May 2025, with half using it weekly.",
      keyPoints: [
        "Usage growing among all student demographics",
        "Most common uses: essay drafting, math help, research",
        "Teachers need strategies to guide appropriate use"
      ],
      link: "https://newsroom.collegeboard.org/new-research-majority-high-school-students-use-generative-ai-schoolwork"
    },
    {
      title: "Google Launches Gemini for Education in Miami Schools",
      date: "October 2025",
      category: "Tools",
      source: "Google Blog",
      summary: "Google announced it will provide Gemini for Education to high school students along with AI training for teachers, plus a $2 million grant for the National Applied AI Center.",
      keyPoints: [
        "Free access to Gemini for high school students",
        "Comprehensive teacher training program",
        "$2M investment in AI education infrastructure"
      ],
      link: "https://blog.google/outreach-initiatives/education/google-ai-education-workforce-skills/"
    },
    {
      title: "Gen AI Tutors Perform 32% Better on Personalization",
      date: "September 2025",
      category: "Research",
      source: "Harvard Business Review",
      summary: "New experimental research demonstrates that generative AI tutors deliver significantly better personalized learning experiences compared to traditional methods.",
      keyPoints: [
        "32% improvement in personalization metrics",
        "Better adaptation to individual learning styles",
        "Potential to scale one-on-one tutoring"
      ],
      link: "https://hbr.org/2025/09/how-gen-ai-could-transform-learning-and-development"
    },
    {
      title: "Rising Concerns About AI's Impact on Critical Thinking",
      date: "October 2025",
      category: "Concerns",
      source: "EdWeek",
      summary: "A new report raises serious concerns about potentially negative effects of AI use on students, including reduced critical thinking skills and over-reliance on technology.",
      keyPoints: [
        "Students report work becoming 'too easy'",
        "Concerns about erosion of study skills",
        "Need for balanced approach to AI integration"
      ],
      link: "https://www.edweek.org/technology/rising-use-of-ai-in-schools-comes-with-big-downsides-for-students/2025/10"
    },
    {
      title: "UNESCO Report: Protecting Student Rights in AI Education",
      date: "September 2025",
      category: "Policy",
      source: "UNESCO",
      summary: "During Digital Learning Week 2025, UNESCO released a comprehensive report on 'AI and education: protecting the rights of learners' with guidelines for ethical implementation.",
      keyPoints: [
        "Framework for protecting student data privacy",
        "Guidelines for equitable AI access",
        "Recommendations for teacher training"
      ],
      link: "https://www.unesco.org/en/articles/what-you-need-know-about-ai-and-right-education"
    },
    {
      title: "San Francisco Opens First AI-Native School",
      date: "October 2025",
      category: "Innovation",
      source: "The Guardian",
      summary: "The private Alpha School in San Francisco claims students can learn faster and better with AI integration, though experts warn not all students may benefit equally.",
      keyPoints: [
        "Curriculum built around AI tools from day one",
        "Personalized learning paths for each student",
        "Questions about equity and access remain"
      ],
      link: "https://www.theguardian.com/technology/2025/oct/18/san-francisco-ai-alpha-school-tech"
    },
    {
      title: "AI-Generated Lesson Plans: Benefits and Limitations",
      date: "October 2025",
      category: "Research",
      source: "The Conversation",
      summary: "Research shows AI-generated lesson plans can save time but often fall short on inspiring students and promoting critical thinking, requiring teacher refinement.",
      keyPoints: [
        "Good for structure and organization",
        "Often lacks creativity and engagement",
        "Best used as starting point, not final product"
      ],
      link: "https://theconversation.com/ai-generated-lesson-plans-fall-short-on-inspiring-students-and-promoting-critical-thinking-265355"
    },
    {
      title: "Universities Embrace AI: Will Students Get Smarter?",
      date: "October 2025",
      category: "Higher Ed",
      source: "Nature",
      summary: "Millions of students arriving at university campuses are now using AI, raising questions about whether this will enhance learning or reduce independent thinking.",
      keyPoints: [
        "Widespread adoption across higher education",
        "Debate over long-term learning outcomes",
        "Need for clear academic integrity policies"
      ],
      link: "https://www.nature.com/articles/d41586-025-03340-w"
    },
    {
      title: "Teachers Using AI Report Less Burnout",
      date: "February 2025",
      category: "Teacher Wellness",
      source: "EdWeek",
      summary: "Veteran teachers who have incorporated AI into their daily practice report significant reductions in burnout and increased job satisfaction.",
      keyPoints: [
        "AI reduces administrative burden",
        "More time for meaningful student interaction",
        "Improved work-life balance for teachers"
      ],
      link: "https://www.edweek.org/technology/i-dont-get-burnt-out-as-much-how-these-teachers-use-ai-in-their-daily-work/2025/02"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Trends": "bg-blue-500/10 text-blue-700 border-blue-200",
      "Research": "bg-purple-500/10 text-purple-700 border-purple-200",
      "Tools": "bg-green-500/10 text-green-700 border-green-200",
      "Concerns": "bg-orange-500/10 text-orange-700 border-orange-200",
      "Policy": "bg-red-500/10 text-red-700 border-red-200",
      "Innovation": "bg-teal-500/10 text-teal-700 border-teal-200",
      "Higher Ed": "bg-indigo-500/10 text-indigo-700 border-indigo-200",
      "Teacher Wellness": "bg-pink-500/10 text-pink-700 border-pink-200",
      "Investment": "bg-emerald-500/10 text-emerald-700 border-emerald-200",
      "Professional Development": "bg-violet-500/10 text-violet-700 border-violet-200"
    };
    return colors[category] || "bg-gray-500/10 text-gray-700 border-gray-200";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Trends":
        return <TrendingUp className="h-4 w-4" />;
      case "Concerns":
        return <AlertCircle className="h-4 w-4" />;
      case "Innovation":
        return <Lightbulb className="h-4 w-4" />;
      default:
        return <Newspaper className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-500/5 via-primary/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                <Newspaper className="mr-1 h-3 w-3" />
                Latest Updates
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                In the News
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay informed about the latest AI education developments, research findings, policy updates, and tool launches. Updated regularly with curated news from trusted sources.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className={getCategoryColor(item.category)}>
                            <span className="mr-1">{getCategoryIcon(item.category)}</span>
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          Source: {item.source}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.summary}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Key Points:</div>
                      <ul className="space-y-1">
                        {item.keyPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <Button variant="outline" className="w-full" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Read Full Article
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container">
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest AI education news delivered to your inbox weekly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

