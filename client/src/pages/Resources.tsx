import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Copy, Shield, Video, FileText, Lightbulb, ExternalLink } from "lucide-react";
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
      prompt: "Create a lesson plan for [TOPIC] for [GRADE LEVEL] students. Include:\n- Learning objectives aligned to [STATE/COMMON CORE] standards\n- Three differentiated activities (below level, on level, above level)\n- Assessment strategies\n- Materials needed\n- Estimated timing for each section\n\nMake it engaging and hands-on where possible.",
      useCase: "Quickly generate a complete lesson plan with built-in differentiation for all learners"
    },
    {
      category: "Lesson Planning",
      title: "Design a Community-Centered Math Lesson",
      prompt: "I teach [GRADE LEVEL] math in [CITY/REGION]. Help me design a lesson on [MATH TOPIC] that connects to real issues in our community. I want students to:\n- Apply the math concept to a local, relevant problem\n- Develop critical thinking about the issue\n- Produce a tangible artifact (poster, report, model)\n\nSuggest 3 different community-centered angles I could take, with guiding questions for each.",
      useCase: "Co-design a lesson grounded in students' lived experiences — inspired by real teacher practice in 2026"
    },
    {
      category: "Lesson Planning",
      title: "Generate Essential Questions for a Unit",
      prompt: "Generate 5 essential questions for a unit on [TOPIC] for [GRADE LEVEL]. These questions should:\n- Be open-ended and thought-provoking\n- Connect to real-world applications\n- Encourage critical thinking\n- Be developmentally appropriate\n- Guide inquiry throughout the unit\n\nAlso suggest one overarching question that ties the unit together.",
      useCase: "Start a new unit with questions that drive deeper thinking and sustained inquiry"
    },
    {
      category: "Assessment",
      title: "Create Depth of Knowledge Questions",
      prompt: "Create 10 questions about [TOPIC] for [GRADE LEVEL] students, with:\n- 3 questions at DOK Level 1 (Recall)\n- 3 questions at DOK Level 2 (Skill/Concept)\n- 3 questions at DOK Level 3 (Strategic Thinking)\n- 1 question at DOK Level 4 (Extended Thinking)\n\nInclude answer keys with explanations for each question.",
      useCase: "Generate questions at multiple cognitive levels to assess true depth of understanding"
    },
    {
      category: "Assessment",
      title: "Design a Student-Friendly Rubric",
      prompt: "Create a detailed rubric for [ASSIGNMENT TYPE] on [TOPIC] for [GRADE LEVEL]. Include:\n- 4-5 criteria that assess key skills\n- 4 performance levels (Exemplary, Proficient, Developing, Beginning)\n- Clear, actionable descriptors for each level\n- Point values\n\nMake the language student-friendly so students can self-assess before submitting.",
      useCase: "Quickly create clear, standards-aligned rubrics that students can actually use for self-assessment"
    },
    {
      category: "Differentiation",
      title: "Adapt Text for Multiple Reading Levels",
      prompt: "Take this passage and rewrite it at three different reading levels:\n1. [LOWER GRADE] level (simpler vocabulary, shorter sentences)\n2. [TARGET GRADE] level (grade-appropriate)\n3. [HIGHER GRADE] level (more complex vocabulary and sentence structure)\n\nPassage: [PASTE YOUR TEXT HERE]\n\nMaintain the key concepts and information in all versions.",
      useCase: "Make any text accessible to all learners in your classroom without creating three separate lessons"
    },
    {
      category: "Differentiation",
      title: "Generate IEP Accommodation Suggestions",
      prompt: "A student in my [GRADE LEVEL] class has [DESCRIBE DISABILITY/NEED]. We are working on [TOPIC/SKILL]. Suggest 5 specific, practical accommodations or modifications I can make to:\n1. The lesson delivery\n2. The materials\n3. The assessment\n\nFor each suggestion, explain how it supports the student's access to the content.",
      useCase: "Generate practical, individualized accommodation ideas grounded in the specific lesson and student need"
    },
    {
      category: "Student Engagement",
      title: "Design a Gamified Activity",
      prompt: "Design a gamified learning activity for [TOPIC] for [GRADE LEVEL] that includes:\n- Clear game mechanics (points, levels, challenges)\n- Learning objectives embedded in gameplay\n- Individual and team elements\n- Rules and instructions students can follow independently\n- An assessment component\n\nMake it fun but educationally substantive.",
      useCase: "Transform any topic into an engaging game-based learning experience"
    },
    {
      category: "Student Engagement",
      title: "Create Real-World Connections",
      prompt: "Generate 5 real-world connections for [TOPIC] that [GRADE LEVEL] students can relate to. For each connection:\n- Explain how the concept applies in real life\n- Provide a specific, current example or scenario\n- Suggest a hands-on activity or discussion question\n- Connect to potential careers or future applications",
      useCase: "Help students see the relevance of what they're learning before you even start the lesson"
    },
    {
      category: "Parent Communication",
      title: "Draft a Concern Email to a Parent",
      prompt: "Help me write a professional, empathetic email to a parent about a concern with their child [use 'the student' as a placeholder]. The concern is: [DESCRIBE THE CONCERN]. I want the email to:\n- Be warm and non-accusatory\n- Describe what I've observed specifically\n- Invite collaboration and ask for the parent's perspective\n- Propose a next step (meeting, phone call, etc.)\n\nKeep it under 200 words.",
      useCase: "Draft sensitive parent communications quickly — then personalize before sending"
    },
    {
      category: "AI Tools (2026)",
      title: "Use Gemini to Draft a Google Classroom Assignment",
      prompt: "I teach [GRADE LEVEL] [SUBJECT]. Help me draft a Google Classroom assignment on [TOPIC]. Include:\n- A clear, student-friendly assignment description\n- Learning objectives aligned to [STANDARDS]\n- Specific instructions for what students should submit\n- A suggested due date timeline\n- One extension option for students who finish early\n\nKeep the tone encouraging and age-appropriate.",
      useCase: "Leverage Gemini's Google Classroom integration to draft complete assignments in seconds"
    },
    {
      category: "AI Tools (2026)",
      title: "Create a NotebookLM Study Guide for Students",
      prompt: "I'm creating a NotebookLM notebook for my [GRADE LEVEL] students studying [TOPIC/UNIT]. Help me write a clear introduction message to include in the notebook that:\n- Explains what the notebook contains\n- Tells students how to use the AI chat to study\n- Gives 5 example questions they can ask the notebook\n- Sets expectations for using AI responsibly\n\nKeep it friendly and appropriate for [GRADE LEVEL] students.",
      useCase: "Set students up for success when using NotebookLM as a study tool"
    },
    {
      category: "AI Tools (2026)",
      title: "Generate Standards-Tagged Assignment Descriptions",
      prompt: "Create an assignment description for [GRADE LEVEL] [SUBJECT] on [TOPIC] that is explicitly tagged to the following standards: [PASTE STANDARDS HERE].\n\nFor each standard, include:\n- A specific task or activity that addresses it\n- How students will demonstrate mastery\n- A suggested assessment method\n\nFormat it so I can easily import it into Google Classroom's standards tagging feature.",
      useCase: "Create standards-aligned assignments ready for Google Classroom's new standards tagging feature (2026)"
    },
    {
      category: "Parent Communication",
      title: "Translate Parent Communication",
      prompt: "Translate this parent communication into [LANGUAGE] while maintaining a warm, professional tone:\n\n[PASTE YOUR MESSAGE HERE]\n\nEnsure cultural appropriateness and clarity. If any phrasing doesn't translate well culturally, suggest an alternative.",
      useCase: "Communicate effectively with families who speak other languages — always have a fluent speaker review before sending"
    }
  ];

  const safetyGuidelines = [
    {
      title: "Student Data Privacy",
      points: [
        "Never upload student names, IDs, or personally identifiable information to AI tools",
        "Use anonymized or sample data when testing tools with student content",
        "Review each tool's privacy policy and data handling practices before use",
        "Check whether your district has approved the tool — NYC's 2026 framework is a useful model",
        "Be especially cautious with tools that require student accounts or store conversation history"
      ]
    },
    {
      title: "Academic Integrity",
      points: [
        "Be transparent with students about when and how you use AI in your teaching",
        "Teach students about appropriate vs. inappropriate AI use — model it yourself",
        "Establish clear, written policies about AI use for student work",
        "Use AI as a teaching tool and thinking partner, not a replacement for learning",
        "Review and edit all AI-generated content before sharing with students"
      ]
    },
    {
      title: "Bias and Fairness",
      points: [
        "Review AI outputs for cultural bias, stereotypes, or factual inaccuracies",
        "Ensure AI-generated content is inclusive and representative of your students",
        "Don't rely solely on AI for sensitive topics or diverse cultural perspectives",
        "Supplement AI content with diverse, authentic, and primary sources",
        "Teach students to critically evaluate AI-generated information — it can be confidently wrong"
      ]
    },
    {
      title: "Age-Appropriate Use",
      points: [
        "Verify minimum age requirements for AI tools (most require users to be 13+)",
        "Preview all AI-generated content before sharing with students",
        "Use tools with built-in safety features for student-facing applications",
        "Consider having students use AI through teacher-managed accounts when appropriate",
        "Provide supervision and structured guidance when students interact with AI directly"
      ]
    },
    {
      title: "Professional Judgment (2026 Update)",
      points: [
        "NYC's 2026 AI framework prohibits AI from making grading, IEP, discipline, or placement decisions",
        "AI can draft and suggest — but a qualified professional must always review and decide",
        "Use AI to augment your expertise, not to replace the professional judgment that protects students",
        "When in doubt, ask: 'Would I be comfortable if a parent or administrator saw this AI output as-is?'",
        "Document your AI use practices as part of your professional reflection"
      ]
    }
  ];

  const certifications = [
    {
      title: "Gemini Certified Educator",
      description: "For K-12 teachers — teaching innovation and student success with Google AI tools",
      link: "https://goo.gle/gfecerts",
      note: "Multiple choice exam, available in 12 languages. Earn a verifiable digital certificate for PD credits."
    },
    {
      title: "AI for Education Certificate (CSTA)",
      description: "For K-12 teachers — foundational AI literacy aligned to the NSF's 2026 PD initiative",
      link: "https://www.csteachers.org/page/ai-pd",
      note: "Part of the NSF-funded $11M AI Professional Development Weeks initiative. Free for eligible teachers."
    },
    {
      title: "Microsoft Innovative Educator (MIE) Expert",
      description: "For K-12 teachers — demonstrates expertise in using Microsoft tools including Copilot, Teams, and AI-powered features in education",
      link: "https://education.microsoft.com/en-us/resource/3c9f1a9a",
      note: "Free program with digital badge. Includes AI-specific modules added in 2025-2026. Recognized by many districts for PD credit."
    },
    {
      title: "University of Louisiana AI Literacy Badge",
      description: "Free 16-hour self-paced course covering AI history, ethics, best practices, and data privacy",
      link: "https://www.ulsystem.edu/ai",
      note: "82,000+ participants since spring 2025. Earns a verifiable digital badge recognized as a workforce microcredential."
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
              <h1 className="heading-display text-4xl mb-4">
                Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to successfully integrate AI into your teaching practice — from copy-paste prompt templates to safety guidelines updated for March 2026.
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
                  Prompt Templates
                </TabsTrigger>
                <TabsTrigger value="safety">
                  <Shield className="h-4 w-4 mr-2" />
                  Safety & Ethics
                </TabsTrigger>
                <TabsTrigger value="certifications">
                  <FileText className="h-4 w-4 mr-2" />
                  Certifications
                </TabsTrigger>
                <TabsTrigger value="guides">
                  <Video className="h-4 w-4 mr-2" />
                  Guides
                </TabsTrigger>
              </TabsList>

              <TabsContent value="prompts" className="space-y-8">
                <div>
                  <h2 className="heading-display text-2xl mb-2">Prompt Templates</h2>
                  <p className="text-muted-foreground mb-8">
                    Copy-paste ready prompts for common teaching tasks. Replace the bracketed sections with your specific details. Updated March 2026.
                  </p>

                  {["Lesson Planning", "Assessment", "Differentiation", "Student Engagement", "Parent Communication", "AI Tools (2026)"].map((category) => (
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
                  <h2 className="heading-display text-2xl mb-2">Safety & Ethics Guidelines</h2>
                  <p className="text-muted-foreground mb-8">
                    Important considerations for responsible AI use in educational settings — updated to reflect NYC's 2026 AI framework and current best practices.
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

                  <Card className="mt-8 border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-foreground">Important Reminder</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Always review AI-generated content before using it with students. AI can make mistakes, include biased information, or generate inappropriate content. Your professional judgment is essential — and in 2026, it is also your professional responsibility.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Free AI Certifications for Educators</h2>
                  <p className="text-muted-foreground mb-8">
                    Earn verifiable credentials that demonstrate your AI literacy and professional development. All options below are free for educators.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="border-accent/20 bg-accent/5">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-foreground">
                            <FileText className="h-5 w-5 text-accent" />
                            {cert.title}
                          </CardTitle>
                          <CardDescription>{cert.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="default" className="w-full mb-3" asChild>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              Get Certified (Free)
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                          <p className="text-xs text-muted-foreground">{cert.note}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-foreground">NSF AI Professional Development Weeks (2026)</CardTitle>
                      <CardDescription>
                        The NSF invested $11 million in March 2026 to fund intensive AI PD for K-12 teachers across 10+ states through the Computer Science Teachers Association (CSTA).
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        If you are a K-12 teacher in a participating state, you may be eligible for free, intensive AI professional development through this initiative. Check the CSTA website for availability in your region.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="https://www.csteachers.org" target="_blank" rel="noopener noreferrer">
                          Check CSTA for Eligibility
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Guides & External Resources</h2>
                  <p className="text-muted-foreground mb-8">
                    Curated external resources from trusted organizations — plus downloadable guides coming soon.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Trusted External Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {[
                        {
                          title: "NYC AI School Framework (2026)",
                          description: "NYC's preliminary 'traffic light' AI policy for schools — a useful model for any district developing AI guidelines",
                          link: "https://www.chalkbeat.org/newyork/2026/03/24/preliminary-ai-policy-nyc-schools/",
                          source: "Chalkbeat / NYC DOE"
                        },
                        {
                          title: "NSF K-12 AI PD Initiative",
                          description: "Details on the $11M NSF investment in AI professional development for K-12 teachers across 10+ states",
                          link: "https://www.nsf.gov/news/nsf-invests-11m-expand-ai-professional-development-k-12",
                          source: "National Science Foundation"
                        },
                        {
                          title: "JFF AI in Education Survey (2026)",
                          description: "National survey data on AI adoption in education — 69% of learners say AI is now incorporated into their coursework",
                          link: "https://www.jff.org/newsroom/press-releases/ai-usage-in-education-is-growing-but-gaps-in-guidance-persist-new-survey-finds/",
                          source: "Jobs for the Future"
                        },
                        {
                          title: "AI Tools for Educators Guide (2026)",
                          description: "Practical overview of the top AI tools teachers are using in 2026, with use cases and tips",
                          link: "https://www.the74million.org/article/10-useful-tech-tools-for-educators-in-2026-a-practical-guide/",
                          source: "The 74"
                        },
                        {
                          title: "UNESCO: AI and the Right to Education",
                          description: "Framework for protecting student rights, data privacy, and equitable access in AI-integrated education",
                          link: "https://www.unesco.org/en/articles/what-you-need-know-about-ai-and-right-education",
                          source: "UNESCO"
                        },
                        {
                          title: "AI-Generated Lesson Plans: Benefits and Limits",
                          description: "Research-based analysis of where AI lesson plans excel and where they fall short — and how teachers can close the gap",
                          link: "https://theconversation.com/ai-generated-lesson-plans-fall-short-on-inspiring-students-and-promoting-critical-thinking-265355",
                          source: "The Conversation"
                        }
                      ].map((resource, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base">
                              <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                              {resource.title}
                            </CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-muted-foreground mb-3">Source: {resource.source}</div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                Read Resource
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Downloadable Guides (Coming Soon)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "AI Integration Checklist", description: "Step-by-step guide for introducing AI to your classroom" },
                        { title: "District Policy Template", description: "Sample AI use policy for schools and districts" },
                        { title: "Parent Information Sheet", description: "Explain AI use to families in plain language" },
                        { title: "Student AI Literacy Curriculum", description: "Teach students about AI responsibly" },
                        { title: "Prompt Engineering Guide", description: "Master the art of crafting effective prompts" },
                        { title: "Tool Comparison Matrix", description: "Compare features of popular AI tools side by side" }
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
