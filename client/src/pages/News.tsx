import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Newspaper, ExternalLink, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      title: "White House Unveils National AI Legislative Framework",
      date: "March 20, 2026",
      category: "Policy",
      source: "The White House",
      summary: "President Trump unveiled a comprehensive National AI Legislative Framework on March 20, 2026, building on the December 2025 executive order. The framework establishes a federal-level approach to AI governance, preempting state-level restrictions on AI companies while setting standards for responsible AI development and deployment across sectors including education.",
      keyPoints: [
        "Establishes a unified federal approach to AI governance",
        "Builds on December 2025 executive order barring conflicting state AI laws",
        "Includes provisions for AI use in education and workforce development",
        "Complements the April 2025 executive order on AI education for youth"
      ],
      link: "https://www.whitehouse.gov/releases/2026/03/president-donald-j-trump-unveils-national-ai-legislative-framework/"
    },
    {
      title: "61% of Teachers Now Using AI — Nearly Double the 2023 Rate",
      date: "January 12, 2026",
      category: "Research",
      source: "Education Week",
      summary: "A landmark EdWeek Research Center survey found that 61% of teachers used AI in their work in 2025 — nearly double the 34% recorded in 2023. Experts attribute the surge to AI becoming embedded in tools teachers already use (Google, Canva, Kahoot!, Khan Academy, Microsoft) and growing professional development opportunities. However, 21% of teachers still say they have no plans to use AI.",
      keyPoints: [
        "61% of teachers used AI in 2025, up from 34% in 2023",
        "50% of teachers received AI professional development in 2025 (up from 29% in early 2024)",
        "AI embedded in familiar tools is the key driver of adoption",
        "21% of teachers still have no plans to use AI — access and philosophy cited as barriers"
      ],
      link: "https://www.edweek.org/technology/more-teachers-are-using-ai-in-their-classrooms-heres-why/2026/01"
    },
    {
      title: "Google Transforms Classroom and Gemini for Education at Bett 2026",
      date: "January 21, 2026",
      category: "Tools",
      source: "Google Blog",
      summary: "At the Bett 2026 conference in London, Google announced sweeping updates to Gemini and Google Classroom. Key additions include full-length practice SATs in Gemini (powered by The Princeton Review), a Gemini app that can draft assignments and summarize student progress using Google Classroom context, audio and video recording directly in Classroom, and standards tagging for assignments. Educators now have free access to Gemini 3 Pro.",
      keyPoints: [
        "Free full-length SAT practice tests in Gemini, grounded in Princeton Review content",
        "Gemini can now draft assignments and summarize student progress from Classroom context",
        "Audio, video, and screen recording now built into Google Classroom assignments",
        "Standards tagging for assignments from US, UK, Australia, Canada, Japan, Brazil, and Mexico"
      ],
      link: "https://blog.google/products-and-platforms/products/education/bett-2026-gemini-classroom-updates/"
    },
    {
      title: "NYC Releases AI School Guidelines — Some Say It Raises More Questions Than Answers",
      date: "March 24, 2026",
      category: "Policy",
      source: "Chalkbeat",
      summary: "New York City's Department of Education released a preliminary AI framework using a 'traffic light' approach: green for approved uses like lesson planning, yellow for supervised uses like student data analysis, and red for prohibited uses like grading and discipline decisions. The final playbook is expected in June 2026.",
      keyPoints: [
        "Green light: brainstorming lesson plans, drafting non-critical communications",
        "Yellow light: student data trends, bilingual translations, disability accommodations (with professional review)",
        "Red light: grading, IEPs, discipline, counseling, academic placement",
        "All AI tools must pass the district's data privacy vetting process before classroom use"
      ],
      link: "https://www.chalkbeat.org/newyork/2026/03/24/preliminary-ai-policy-nyc-schools/"
    },
    {
      title: "Google Announces Partnership to Train 6 Million Educators in AI Tools",
      date: "March 25, 2026",
      category: "Professional Development",
      source: "CalMatters",
      summary: "Google announced a three-year partnership aimed at training up to 6 million educators in AI tools — calling it the company's largest education effort in two decades. The announcement comes as teachers across the country are independently integrating AI into their classrooms ahead of formal district guidance.",
      keyPoints: [
        "3-year partnership targeting 6 million educators",
        "Described as Google's largest education initiative in 20 years",
        "Aims to close the gap between AI adoption and formal teacher training",
        "Complements NSF's $11M investment in K-12 AI professional development"
      ],
      link: "https://calmatters.org/commentary/2026/03/ai-teacher-classroom-use-california/"
    },
    {
      title: "NSF Invests $11 Million to Expand AI Professional Development for K-12 Teachers",
      date: "March 19, 2026",
      category: "Investment",
      source: "NSF",
      summary: "The U.S. National Science Foundation awarded $11 million to the Computer Science Teachers Association (CSTA) to launch 'AI Professional Development Weeks,' a multistate initiative preparing thousands of K-12 educators to teach foundational computer science and AI. The initiative will operate in at least 10 states over two years.",
      keyPoints: [
        "Award to CSTA in furtherance of the executive order on AI education for youth",
        "Will directly support 2,500–3,000 teachers across 10+ states",
        "Expected to reach 500,000–600,000 students",
        "Combines intensive summer PD with sustained community support"
      ],
      link: "https://www.nsf.gov/news/nsf-invests-11m-expand-ai-professional-development-k-12"
    },
    {
      title: "JFF Survey: AI in Education Growing Fast, But Guidance Gaps Persist",
      date: "March 18, 2026",
      category: "Research",
      source: "Jobs for the Future",
      summary: "A new national survey from Jobs for the Future found that 69% of learners now report AI is incorporated into their coursework — up from 57% in 2024. Despite this growth, learners are still more likely to learn about AI from social media (48%) than from their school or training program (23%).",
      keyPoints: [
        "69% of learners say AI is incorporated into their lessons (up from 57%)",
        "69% received formal AI training from their institution (up from 47%)",
        "31% report their institution fully permits AI; 11% say it's banned entirely",
        "Learners cite social media (48%) over schools (23%) as their primary AI information source"
      ],
      link: "https://www.jff.org/newsroom/press-releases/ai-usage-in-education-is-growing-but-gaps-in-guidance-persist-new-survey-finds/"
    },
    {
      title: "Student AI Homework Use Climbs to 62% Among Middle, High School, and College Students",
      date: "March 25, 2026",
      category: "Trends",
      source: "eSchool News",
      summary: "New data shows that AI use for homework among middle school, high school, and college students rose from 48% in May 2025 to 62% by December 2025 — a 14-point jump in just seven months. The data underscores the urgency for schools to develop clear, consistent AI use policies.",
      keyPoints: [
        "62% of students now use AI for homework (up from 48% in May 2025)",
        "Sharpest increase among high school and college students",
        "Most common uses: essay drafting, math help, and research summaries",
        "Highlights urgent need for school-level AI use policies"
      ],
      link: "https://www.eschoolnews.com/educational-ai/2026/03/25/student-ai-use-for-homework-rises-to-62/"
    },
    {
      title: "OpenAI ChatGPT for Teachers: Free Access Extended Through June 2027",
      date: "November 19, 2025",
      category: "Tools",
      source: "OpenAI",
      summary: "OpenAI launched ChatGPT for Teachers, a free version of its AI chatbot designed specifically for K-12 educators and school districts. The tool allows teachers to securely work with student information and provides administrative controls for district leaders. Free access is available through June 2027.",
      keyPoints: [
        "Free to K-12 educators in the U.S. through June 2027",
        "Designed to securely handle student information",
        "Administrative controls for district leaders",
        "Initially launched with 150,000 educators"
      ],
      link: "https://www.cnbc.com/2025/11/19/openai-chatgpt-for-teachers-k-12-educators.html"
    },
    {
      title: "AI Adoption in Education Reaches 86% — Fastest Growth of Any Industry",
      date: "October 2025",
      category: "Trends",
      source: "G2 Learning Hub",
      summary: "AI usage in education skyrocketed from 45% in 2023 to 86% in 2024, marking the sharpest rise across all industries. Teachers report significant time savings on lesson planning, grading, and communication, and the focus is shifting from experimentation to structured integration.",
      keyPoints: [
        "86% of educational institutions now using generative AI",
        "Fastest-growing sector for AI adoption across all industries",
        "Teachers report meaningful time savings on planning and admin",
        "Focus shifting from experimentation to systematic integration"
      ],
      link: "https://learn.g2.com/ai-in-edtech"
    },
    {
      title: "84% of High School Students Use AI for Schoolwork",
      date: "October 2025",
      category: "Research",
      source: "College Board",
      summary: "New research shows that 84% of high school students now use generative AI tools for schoolwork — up from 79% in January 2025 — with half using it weekly. The data highlights the growing need for teachers to develop AI literacy strategies and clear classroom expectations.",
      keyPoints: [
        "84% of high school students use AI for schoolwork (up from 79%)",
        "50% use AI tools at least weekly",
        "Most common uses: essay drafting, math help, research",
        "Teachers need strategies to guide appropriate and ethical AI use"
      ],
      link: "https://newsroom.collegeboard.org/new-research-majority-high-school-students-use-generative-ai-schoolwork"
    },
    {
      title: "Rising Concerns About AI's Impact on Student Critical Thinking",
      date: "October 2025",
      category: "Concerns",
      source: "EdWeek",
      summary: "A new report raises serious concerns about the potentially negative effects of AI use on students, including reduced critical thinking skills and over-reliance on technology. Students themselves report that AI makes their work feel 'too easy,' raising questions about long-term learning outcomes.",
      keyPoints: [
        "Students report work becoming 'too easy' with AI assistance",
        "Concerns about erosion of independent study skills",
        "Risk of over-reliance reducing deep learning",
        "Experts call for a balanced approach to AI integration"
      ],
      link: "https://www.edweek.org/technology/rising-use-of-ai-in-schools-comes-with-big-downsides-for-students/2025/10"
    },
    {
      title: "Google Commits $30 Million to AI Learning Projects Worldwide",
      date: "November 11, 2025",
      category: "Investment",
      source: "Google Blog",
      summary: "At the Google AI for Learning Forum in London, Google announced $30 million in new funding for learning projects and unveiled research showing AI's positive impact on student learning outcomes, including a 5.5% improvement in problem-solving and a 0.1% factual error rate for LearnLM.",
      keyPoints: [
        "$30M investment in AI learning projects over three years",
        "Partnership with Estonia's AI Leap initiative",
        "Research shows 5.5% improvement in student problem-solving",
        "LearnLM achieved only 0.1% factual error rate in testing"
      ],
      link: "https://blog.google/outreach-initiatives/education/ai-learning-commitments/"
    },
    {
      title: "San Francisco Opens First AI-Native Private School",
      date: "October 2025",
      category: "Innovation",
      source: "The Guardian",
      summary: "The private Alpha School in San Francisco built its entire curriculum around AI tools from day one, claiming students can learn faster and better with personalized AI-driven learning paths. Experts caution that the model may not be equitable or replicable in public school settings.",
      keyPoints: [
        "Curriculum built entirely around AI tools from the start",
        "Personalized learning paths for every student",
        "Claims students learn core subjects in 2 hours per day",
        "Equity and access concerns raised by education researchers"
      ],
      link: "https://www.theguardian.com/technology/2025/oct/18/san-francisco-ai-alpha-school-tech"
    },
    {
      title: "Teachers Using AI Report Less Burnout and Greater Job Satisfaction",
      date: "February 2025",
      category: "Teacher Wellness",
      source: "EdWeek",
      summary: "Veteran teachers who have incorporated AI into their daily practice report significant reductions in burnout and increased job satisfaction. By reducing administrative burden, AI frees up time for meaningful student interaction and creative lesson design.",
      keyPoints: [
        "AI reduces administrative burden and repetitive tasks",
        "More time available for meaningful student interaction",
        "Improved work-life balance reported by experienced teachers",
        "Particularly impactful for special education and inclusion teachers"
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
                Stay informed about the latest AI education developments, research findings, policy updates, and tool launches. Updated through March 2026.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs flex items-center gap-1 ${getCategoryColor(item.category)}`}
                      >
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      Source: {item.source}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">{item.summary}</p>
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Points</div>
                      <ul className="space-y-1">
                        {item.keyPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Read Full Article
                          <ExternalLink className="ml-2 h-3 w-3" />
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
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Current on AI in Education</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The AI education landscape changes rapidly. Bookmark this page and check back regularly for the latest news, research, and policy updates.
            </p>
            <Button size="lg" asChild>
              <a href="/resources">Explore Resources</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
