import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Clock, TrendingUp, Users, ExternalLink } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Ancient Greece Lesson: From Hours to Seconds",
      school: "Franklin Square School District, NY",
      teacher: "6th Grade Co-Teachers",
      gradeLevel: "Middle School",
      subject: "Social Studies",
      tools: ["Diffit", "Canva", "Google Classroom"],
      timeSaved: "8-10 hours per week",
      challenge: "Creating differentiated lesson materials for inclusion classroom with students reading at multiple levels (2nd to 10th grade).",
      solution: "Used Canva to generate images of Grecian vases and Diffit to create reading passages at different levels with built-in comprehension questions. Added custom short-answer questions via Google Classroom.",
      results: [
        "Lesson prep time reduced from hours to seconds",
        "All students could access content at appropriate reading level",
        "Students completed hands-on activity painting their own vases",
        "Superintendent noted potential to 'revolutionize education'"
      ],
      quote: "Classroom preparation goes from hours to seconds when using AI.",
      link: "https://www.the74million.org/article/case-study-how-2-teachers-use-ai-behind-the-scenes-to-build-lessons-save-time/"
    },
    {
      title: "Supporting English Language Learners with Real-Time Translation",
      school: "Franklin Square School District, NY",
      teacher: "6th Grade Inclusion Teacher",
      gradeLevel: "Middle School",
      subject: "All Subjects",
      tools: ["AI Translation Tools", "Diffit"],
      timeSaved: "15+ hours per week",
      challenge: "New student from El Salvador arrived speaking only Spanish. Needed to translate every lesson while student learned English.",
      solution: "Used AI tools to translate all classroom lessons into Spanish, allowing student to understand assignments while working in both languages simultaneously.",
      results: [
        "Student could participate in all lessons from day one",
        "Reduced teacher stress and planning burden",
        "Student made progress in both Spanish and English",
        "Model now used for other ELL students in district"
      ],
      quote: "AI really helped when a new student showed up speaking only Spanish. We used it to translate every classroom lesson for her.",
      link: "https://www.the74million.org/article/case-study-how-2-teachers-use-ai-behind-the-scenes-to-build-lessons-save-time/"
    },
    {
      title: "Personalized Learning Plans for Special Education",
      school: "Franklin Square School District, NY",
      teacher: "Special Education Co-Teacher",
      gradeLevel: "Middle School",
      subject: "All Subjects",
      tools: ["Diffit", "AI Tracking Tools"],
      timeSaved: "10+ hours per week",
      challenge: "Creating individualized materials for students with IEPs, each with 5+ individual goals to track and document.",
      solution: "Used AI tools to generate materials meeting individual learning plans and track student progress across multiple goal areas automatically.",
      results: [
        "Massive time savings on IEP documentation",
        "Better tracking of individual student goals",
        "More personalized materials for each student",
        "Increased time for actual teaching vs. paperwork"
      ],
      quote: "AI tools can help create materials that meet students' individual learning plans and track their progress in a variety of areas—a huge time saving.",
      link: "https://www.the74million.org/article/case-study-how-2-teachers-use-ai-behind-the-scenes-to-build-lessons-save-time/"
    },
    {
      title: "Library Media Literacy Lessons Enhanced with AI",
      school: "John Street School, Franklin Square",
      teacher: "School Librarian",
      gradeLevel: "Elementary/Middle School",
      subject: "Media Literacy",
      tools: ["NotebookLM", "AI Lesson Planners"],
      timeSaved: "5+ hours per week",
      challenge: "Finding engaging ways to teach media literacy and creating comprehensive lesson plans for library sessions.",
      solution: "Uploaded YouTube videos to AI tools to get summaries and comprehension questions. Used AI to break down lessons into step-by-step directions with sample projects.",
      results: [
        "Quick generation of discussion questions from videos",
        "More comprehensive lesson plans with less effort",
        "AI fills out existing ideas with additional activities",
        "Better prepared for each library session"
      ],
      quote: "AI can boost an idea I have by filling it out with extra ideas. It's getting better every day—it's worlds different in just the half year I've been using it.",
      link: "https://www.the74million.org/article/case-study-how-2-teachers-use-ai-behind-the-scenes-to-build-lessons-save-time/"
    },
    {
      title: "Financial Literacy with AI Tutoring",
      school: "Newark, New Jersey Middle School",
      teacher: "Winston Roberts",
      gradeLevel: "Middle School",
      subject: "Financial Literacy",
      tools: ["AI Tutoring Platforms"],
      timeSaved: "Varies",
      challenge: "Helping students understand complex financial concepts and providing personalized support.",
      solution: "Integrated AI tutoring tools to provide students with on-demand help with financial literacy concepts and practice problems.",
      results: [
        "Students could get help outside of class time",
        "Personalized explanations for different learning styles",
        "Increased student confidence with financial concepts",
        "Teacher could focus on higher-level discussions"
      ],
      quote: "AI helps students learn financial literacy by providing personalized support when they need it most.",
      link: "https://www.waltonfamilyfoundation.org/stories/education/one-teachers-ai-journey"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/5 via-primary/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                <BookOpen className="mr-1 h-3 w-3" />
                Real Teacher Stories
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Case Studies
              </h1>
              <p className="text-lg text-muted-foreground">
                Real teachers, real classrooms, real results. Discover how educators are using AI tools to save time, personalize learning, and improve student outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12 bg-muted/30 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Clock className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">8-10 hrs</div>
                <div className="text-sm text-muted-foreground">Weekly time saved</div>
              </div>
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 text-accent mx-auto" />
                <div className="text-2xl font-bold">87%</div>
                <div className="text-sm text-muted-foreground">Teachers interested</div>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-orange-600 mx-auto" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Student access</div>
              </div>
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Case studies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container">
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-base">
                          {study.school} • {study.teacher}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{study.gradeLevel}</Badge>
                        <Badge variant="outline">{study.subject}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-2">Tools Used</div>
                        <div className="flex flex-wrap gap-2">
                          {study.tools.map((tool, i) => (
                            <Badge key={i} variant="secondary">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-2">Time Saved</div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-primary">{study.timeSaved}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex gap-2 text-muted-foreground">
                              <span className="text-primary font-bold">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {study.quote && (
                        <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r">
                          <p className="italic text-muted-foreground">"{study.quote}"</p>
                        </div>
                      )}

                      <div className="pt-4">
                        <Button variant="outline" asChild>
                          <a href={study.link} target="_blank" rel="noopener noreferrer">
                            Read Full Story
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Have Your Own Success Story?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to hear how AI tools are helping you in your classroom. Share your story to inspire other educators.
            </p>
            <Button size="lg">
              Share Your Story
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

