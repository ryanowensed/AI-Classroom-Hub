import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, ExternalLink, Search, DollarSign, Zap } from "lucide-react";
import { useState } from "react";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tools = [
    {
      name: "Brisk Teaching",
      description: "The Swiss Army knife of educational AI with 40+ tools for quizzes, lesson plans, writing feedback, and custom learning activities.",
      category: "Lesson Planning",
      pricing: "Freemium",
      features: ["Quiz generation", "Slide shows", "DOK questions", "Writing feedback", "Custom AI tutors"],
      link: "https://briskteaching.com",
      difficulty: "Beginner"
    },
    {
      name: "NotebookLM",
      description: "Upload your teaching materials and get AI-generated study guides, questions, timelines, and even podcast summaries.",
      category: "Content Creation",
      pricing: "Freemium",
      features: ["Source-based AI", "Audio podcasts", "Study guides", "DOK questions", "FAQ generation"],
      link: "https://notebooklm.google.com",
      difficulty: "Beginner"
    },
    {
      name: "Diffit",
      description: "Creates reading passages at multiple levels with comprehension questions in under 20 seconds. Perfect for differentiation.",
      category: "Differentiation",
      pricing: "Free",
      features: ["Multi-level passages", "Comprehension questions", "Text adaptation", "Quick generation", "Google Classroom integration"],
      link: "https://diffit.me",
      difficulty: "Beginner"
    },
    {
      name: "Snorkl",
      description: "Evaluates spoken, handwritten, or drawn responses. Great for math problems, diagrams, and oral assessments.",
      category: "Assessment",
      pricing: "Freemium",
      features: ["Oral assessment", "Visual grading", "Math problem evaluation", "Personalized feedback", "Under 1-minute grading"],
      link: "https://snorkl.ai",
      difficulty: "Intermediate"
    },
    {
      name: "TeacherServer",
      description: "University of South Florida's completely free platform with 1,000+ tools across all subjects. No ads, no subscriptions.",
      category: "Lesson Planning",
      pricing: "Free",
      features: ["1000+ tools", "All subjects", "Scientific experiments", "Historical scenarios", "Exercise routines"],
      link: "https://teacherserver.org",
      difficulty: "Beginner"
    },
    {
      name: "Suno",
      description: "Generate complete songs with music and vocals from lyrics or descriptions. Perfect for creating memorable educational content.",
      category: "Creative Tools",
      pricing: "Freemium",
      features: ["Music generation", "Vocal synthesis", "Multiple genres", "Custom lyrics", "Downloadable audio/video"],
      link: "https://suno.ai",
      difficulty: "Intermediate"
    },
    {
      name: "MagicSchool.ai",
      description: "The go-to AI assistant for educators worldwide, designed to simplify teaching tasks and combat teacher burnout.",
      category: "Lesson Planning",
      pricing: "Freemium",
      features: ["Lesson plans", "Assessments", "IEP support", "Parent communication", "Multiple AI tools"],
      link: "https://magicschool.ai",
      difficulty: "Beginner"
    },
    {
      name: "Eduaide.ai",
      description: "AI tools to create graphic organizers, engaging educational games, lesson plans, and high-quality instructional materials.",
      category: "Content Creation",
      pricing: "Freemium",
      features: ["Graphic organizers", "Educational games", "Lesson plans", "Instructional materials", "Standards alignment"],
      link: "https://eduaide.ai",
      difficulty: "Beginner"
    },
    {
      name: "Canva Magic",
      description: "AI-powered design tools for creating images, infographics, and visual aids. Magic Write helps with text content.",
      category: "Creative Tools",
      pricing: "Freemium",
      features: ["AI image generation", "Magic Write", "Design templates", "Infographics", "Presentation tools"],
      link: "https://canva.com",
      difficulty: "Beginner"
    },
    {
      name: "Microsoft Copilot",
      description: "ChatGPT-4 powered assistant that can browse the web, answer questions, analyze images, and help with creative tasks.",
      category: "General AI",
      pricing: "Free",
      features: ["Web browsing", "Image analysis", "Creative writing", "Research assistance", "Voice input"],
      link: "https://copilot.microsoft.com",
      difficulty: "Beginner"
    },
    {
      name: "ChatGPT for Teachers",
      description: "OpenAI's specialized version for K-12 educators with secure workspace, student data protection, and district admin controls. Free through June 2027.",
      category: "Lesson Planning",
      pricing: "Free",
      features: ["Secure student data handling", "Personalized teaching support", "District collaboration", "Admin controls", "No data used for training"],
      link: "https://openai.com/chatgpt/teachers",
      difficulty: "Beginner"
    },
    {
      name: "ChatGPT",
      description: "OpenAI's powerful language model for generating content, answering questions, and assisting with various teaching tasks.",
      category: "General AI",
      pricing: "Freemium",
      features: ["Text generation", "Question answering", "Code writing", "Image analysis (Plus)", "Custom GPTs"],
      link: "https://chat.openai.com",
      difficulty: "Beginner"
    },
    {
      name: "Google Gemini",
      description: "Google's AI assistant with strong integration into Google Workspace. Great for teachers already using Google tools.",
      category: "General AI",
      pricing: "Freemium",
      features: ["Google Workspace integration", "Multi-modal AI", "Research assistance", "Content generation", "Image understanding"],
      link: "https://gemini.google.com",
      difficulty: "Beginner"
    },
    {
      name: "SchoolAI",
      description: "AI platform designed specifically for K-12 education with safety features and curriculum-aligned content.",
      category: "Student Engagement",
      pricing: "Paid",
      features: ["Student-safe AI", "Curriculum alignment", "Teacher dashboard", "Student tutoring", "Progress tracking"],
      link: "https://schoolai.com",
      difficulty: "Intermediate"
    },
    {
      name: "Curipod",
      description: "Create interactive lessons with AI-generated slides, polls, drawings, and Q&A to boost student engagement.",
      category: "Student Engagement",
      pricing: "Freemium",
      features: ["Interactive slides", "Real-time polls", "Drawing activities", "Q&A sessions", "Student feedback"],
      link: "https://curipod.com",
      difficulty: "Beginner"
    },
    {
      name: "ClassPoint",
      description: "AI-powered interactive presentation tool that works directly in PowerPoint with quizzes and engagement features.",
      category: "Student Engagement",
      pricing: "Freemium",
      features: ["PowerPoint integration", "Interactive quizzes", "Student response system", "Gamification", "AI question generation"],
      link: "https://classpoint.io",
      difficulty: "Beginner"
    }
  ];

  const categories = ["All", "Lesson Planning", "Content Creation", "Differentiation", "Assessment", "Creative Tools", "General AI", "Student Engagement"];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPricingColor = (pricing: string) => {
    if (pricing === "Free") return "text-green-600 bg-green-50 border-green-200";
    if (pricing === "Freemium") return "text-blue-600 bg-blue-50 border-blue-200";
    return "text-orange-600 bg-orange-50 border-orange-200";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-500/5 via-primary/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                <Wrench className="mr-1 h-3 w-3" />
                Comprehensive Directory
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Tool Directory
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover and compare AI tools for lesson planning, assessment, differentiation, student engagement, and more. Filter by category, pricing, and difficulty level.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredTools.length} of {tools.length} tools
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <Badge variant="outline" className={getPricingColor(tool.pricing)}>
                        <DollarSign className="h-3 w-3 mr-1" />
                        {tool.pricing}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">{tool.category}</Badge>
                        <Badge variant="outline">
                          <Zap className="h-3 w-3 mr-1" />
                          {tool.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="text-sm font-medium mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {tool.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <Button variant="outline" className="w-full" asChild>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer">
                          Visit Tool
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No tools found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Missing a Tool?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Know of an AI tool that should be in our directory? Let us know and we'll add it to help other educators.
            </p>
            <Button size="lg">
              Suggest a Tool
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

