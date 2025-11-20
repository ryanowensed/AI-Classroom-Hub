import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Copy, Shield, Video, FileText, Lightbulb } from "lucide-react";
import { toast } from "sonner";

export default function Resources() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const prompts = [
    {
      category: "Lesson Planning",
      title: "Create a Differentiated Lesson Plan",
      prompt: "Create a lesson plan for [TOPIC] for [GRADE LEVEL] students. Include:\n- Learning objectives aligned to standards\n- Three differentiated activities (below level, on level, above level)\n- Assessment strategies\n- Materials needed\n- Estimated timing for each section\n\nMake it engaging and hands-on where possible.",
      useCase: "Use this to quickly generate a complete lesson plan with built-in differentiation"
    },
    {
      category: "Lesson Planning",
      title: "Generate Essential Questions",
      prompt: "Generate 5 essential questions for a unit on [TOPIC] for [GRADE LEVEL]. These questions should:\n- Be open-ended and thought-provoking\n- Connect to real-world applications\n- Encourage critical thinking\n- Be appropriate for the developmental level\n- Guide inquiry throughout the unit",
      useCase: "Perfect for starting a new unit with questions that drive deeper thinking"
    },
    {
      category: "Assessment",
      title: "Create Depth of Knowledge Questions",
      prompt: "Create 10 questions about [TOPIC] for [GRADE LEVEL] students, with:\n- 3 questions at DOK Level 1 (Recall)\n- 3 questions at DOK Level 2 (Skill/Concept)\n- 3 questions at DOK Level 3 (Strategic Thinking)\n- 1 question at DOK Level 4 (Extended Thinking)\n\nInclude answer keys with explanations.",
      useCase: "Generate questions at multiple cognitive levels to assess true understanding"
    },
    {
      category: "Assessment",
      title: "Design a Rubric",
      prompt: "Create a detailed rubric for [ASSIGNMENT TYPE] on [TOPIC] for [GRADE LEVEL]. Include:\n- 4-5 criteria that assess key skills\n- 4 performance levels (Exemplary, Proficient, Developing, Beginning)\n- Clear descriptors for each level\n- Point values\n\nMake the language student-friendly and actionable.",
      useCase: "Quickly create clear, standards-aligned rubrics for any assignment"
    },
    {
      category: "Differentiation",
      title: "Adapt Text for Multiple Reading Levels",
      prompt: "Take this passage and rewrite it at three different reading levels:\n1. [LOWER GRADE] level (simpler vocabulary, shorter sentences)\n2. [TARGET GRADE] level (grade-appropriate)\n3. [HIGHER GRADE] level (more complex vocabulary and sentence structure)\n\nPassage: [PASTE YOUR TEXT HERE]\n\nMaintain the key concepts and information in all versions.",
      useCase: "Make any text accessible to all learners in your classroom"
    },
    {
      category: "Differentiation",
      title: "Create Choice Board Activities",
      prompt: "Create a 3x3 choice board for [TOPIC] for [GRADE LEVEL] with activities at different difficulty levels and learning styles:\n- Visual/Spatial activities\n- Verbal/Linguistic activities\n- Logical/Mathematical activities\n- Kinesthetic activities\n- Interpersonal activities\n\nInclude clear instructions and success criteria for each option.",
      useCase: "Give students choice while ensuring all options meet learning objectives"
    },
    {
      category: "Student Engagement",
      title: "Design a Gamified Activity",
      prompt: "Design a gamified learning activity for [TOPIC] for [GRADE LEVEL] that includes:\n- Clear game mechanics (points, levels, challenges)\n- Learning objectives embedded in gameplay\n- Individual and team elements\n- Rules and instructions\n- Assessment component\n\nMake it fun but educational!",
      useCase: "Transform any topic into an engaging game-based learning experience"
    },
    {
      category: "Student Engagement",
      title: "Create Real-World Connections",
      prompt: "Generate 5 real-world connections for [TOPIC] that [GRADE LEVEL] students can relate to. For each connection:\n- Explain how the concept applies in real life\n- Provide a specific example or scenario\n- Suggest a hands-on activity or discussion question\n- Connect to potential careers or future applications",
      useCase: "Help students see the relevance of what they're learning"
    },
    {
      category: "Parent Communication",
      title: "Write a Parent Newsletter",
      prompt: "Write a parent newsletter for [GRADE LEVEL] about our upcoming unit on [TOPIC]. Include:\n- Overview of what students will learn\n- Key vocabulary and concepts\n- How parents can support learning at home\n- Important dates and assignments\n- Fun facts or resources for families\n\nKeep the tone friendly and encouraging. Length: 300-400 words.",
      useCase: "Keep parents informed and engaged with classroom learning"
    },
    {
      category: "Parent Communication",
      title: "Translate Parent Communication",
      prompt: "Translate this parent communication into [LANGUAGE] while maintaining a warm, professional tone:\n\n[PASTE YOUR MESSAGE HERE]\n\nEnsure cultural appropriateness and clarity.",
      useCase: "Communicate effectively with families who speak other languages"
    }
  ];

  const safetyGuidelines = [
    {
      title: "Student Data Privacy",
      points: [
        "Never upload student names, IDs, or personally identifiable information to AI tools",
        "Use anonymized data or sample data when testing tools",
        "Review each tool's privacy policy and data handling practices",
        "Check if your district has approved the tool for use",
        "Be especially cautious with tools that require student accounts"
      ]
    },
    {
      title: "Academic Integrity",
      points: [
        "Be transparent with students about when and how you use AI",
        "Teach students about appropriate vs. inappropriate AI use",
        "Establish clear policies about AI use for student work",
        "Use AI as a teaching tool, not a replacement for learning",
        "Review and edit all AI-generated content before sharing with students"
      ]
    },
    {
      title: "Bias and Fairness",
      points: [
        "Review AI outputs for cultural bias, stereotypes, or inaccuracies",
        "Ensure AI-generated content is inclusive and representative",
        "Don't rely solely on AI for sensitive topics or diverse perspectives",
        "Supplement AI content with diverse, authentic sources",
        "Teach students to critically evaluate AI-generated information"
      ]
    },
    {
      title: "Age-Appropriate Use",
      points: [
        "Verify minimum age requirements for AI tools (often 13+)",
        "Preview all AI-generated content before sharing with students",
        "Use tools with built-in safety features for student-facing applications",
        "Consider having students use AI through teacher accounts when appropriate",
        "Provide supervision and guidance when students interact with AI"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                <BookOpen className="mr-1 h-3 w-3" />
                Learning Materials
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to successfully integrate AI into your teaching practice, from prompt templates to safety guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="prompts" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="prompts">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Prompt Library
                </TabsTrigger>
                <TabsTrigger value="safety">
                  <Shield className="h-4 w-4 mr-2" />
                  Safety & Ethics
                </TabsTrigger>
                <TabsTrigger value="videos">
                  <Video className="h-4 w-4 mr-2" />
                  Video Tutorials
                </TabsTrigger>
                <TabsTrigger value="guides">
                  <FileText className="h-4 w-4 mr-2" />
                  Guides
                </TabsTrigger>
              </TabsList>

              <TabsContent value="prompts" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Prompt Library</h2>
                  <p className="text-muted-foreground mb-8">
                    Copy-paste ready prompts for common teaching tasks. Customize the bracketed sections for your specific needs.
                  </p>

                  {["Lesson Planning", "Assessment", "Differentiation", "Student Engagement", "Parent Communication"].map((category) => (
                    <div key={category} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{category}</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {prompts.filter(p => p.category === category).map((item, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                                  <CardDescription className="text-sm">
                                    {item.useCase}
                                  </CardDescription>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => copyToClipboard(item.prompt, item.title)}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-muted p-4 rounded-md text-sm font-mono whitespace-pre-wrap">
                                {item.prompt}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="safety" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Safety & Ethics Guidelines</h2>
                  <p className="text-muted-foreground mb-8">
                    Important considerations for responsible AI use in educational settings.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {safetyGuidelines.map((guideline, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            {guideline.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {guideline.points.map((point, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <span className="text-primary font-bold mt-1">•</span>
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="mt-8 border-orange-200 bg-orange-50/50">
                    <CardHeader>
                      <CardTitle className="text-orange-900">Important Reminder</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-orange-800">
                        Always review AI-generated content before using it with students. AI can make mistakes, include biased information, or generate inappropriate content. Your professional judgment is essential.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
                  <p className="text-muted-foreground mb-8">
                    Step-by-step video guides for popular AI tools. (Coming soon!)
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["Brisk Teaching Basics", "NotebookLM for Teachers", "Diffit Quick Start", "Suno Music Creation", "ChatGPT for Lesson Planning", "AI Safety Best Practices"].map((title, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-3">
                            <Video className="h-12 w-12 text-muted-foreground" />
                          </div>
                          <CardTitle className="text-lg">{title}</CardTitle>
                          <CardDescription>
                            Coming soon
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Downloadable Guides</h2>
                  <p className="text-muted-foreground mb-8">
                    Comprehensive guides and checklists for AI integration. (Coming soon!)
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Free Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <Card className="border-green-200 bg-green-50/30">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-900">
                            <FileText className="h-5 w-5 text-green-600" />
                            Gemini Certified Educator
                          </CardTitle>
                          <CardDescription>For K-12 teachers - teaching innovation and student success</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="default" className="w-full" asChild>
                            <a href="https://goo.gle/gfecerts" target="_blank" rel="noopener noreferrer">
                              Get Certified (Free)
                            </a>
                          </Button>
                          <p className="text-xs text-muted-foreground mt-3">
                            Multiple choice exam, available in 12 languages. Earn verifiable digital certificate for PD credits.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-green-200 bg-green-50/30">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-900">
                            <FileText className="h-5 w-5 text-green-600" />
                            Gemini Certified University Student
                          </CardTitle>
                          <CardDescription>For college students - academic excellence and career prep</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="default" className="w-full" asChild>
                            <a href="https://goo.gle/gfecerts" target="_blank" rel="noopener noreferrer">
                              Get Certified (Free)
                            </a>
                          </Button>
                          <p className="text-xs text-muted-foreground mt-3">
                            Validate core skills in using Gemini and Google AI tools. Completely free with digital certificate.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-green-200 bg-green-50/30">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-900">
                            <FileText className="h-5 w-5 text-green-600" />
                            Gemini Certified Student (K12)
                          </CardTitle>
                          <CardDescription>For high school students - responsible AI use</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="default" className="w-full" asChild>
                            <a href="https://goo.gle/gfecerts" target="_blank" rel="noopener noreferrer">
                              Get Certified (Free)
                            </a>
                          </Button>
                          <p className="text-xs text-muted-foreground mt-3">
                            Requires foundational course completion. Free certification for informed, responsible AI use.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Downloadable Guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "AI Integration Checklist", description: "Step-by-step guide for introducing AI to your classroom" },
                        { title: "District Policy Template", description: "Sample AI use policy for schools and districts" },
                        { title: "Parent Information Sheet", description: "Explain AI use to families" },
                        { title: "Student AI Literacy Curriculum", description: "Teach students about AI responsibly" },
                        { title: "Prompt Engineering Guide", description: "Master the art of crafting effective prompts" },
                        { title: "Tool Comparison Matrix", description: "Compare features of popular AI tools" }
                      ].map((guide, index) => (
                        <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            {guide.title}
                          </CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full" disabled>
                            Download PDF (Coming Soon)
                          </Button>
                        </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

