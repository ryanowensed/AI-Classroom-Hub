import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Clock, TrendingUp, Users, ExternalLink } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "AI Discovers Hidden Learning Need — IEP Transformed in One Week",
      school: "Lopez Island School District, WA",
      teacher: "Rose Prust, Special Education Teacher",
      gradeLevel: "Elementary",
      subject: "Special Education",
      tools: ["MagicSchool AI", "Ablespace"],
      timeSaved: "3+ hours per IEP",
      challenge: "A student with cortical visual impairment was not making expected progress despite a well-designed IEP. The teacher needed deeper insight into how the student was actually processing information.",
      solution: "Rose used Ablespace to analyze the student's interaction data across sessions. The AI identified a clear pattern: the student responded significantly better to auditory cues than visual ones — a finding that had not been captured in previous observations.",
      results: [
        "IEP updated to prioritize multi-sensory and auditory instruction",
        "Student showed improved cause-and-effect comprehension within one week",
        "Teacher gained data-driven insight that traditional observation had missed",
        "Model now being shared with other special education staff in the district"
      ],
      quote: "The AI didn't replace my professional judgment — it gave me information I couldn't have gathered on my own in that timeframe.",
      link: "https://www.raisesummit.com/zh/post/ai-case-studies-education"
    },
    {
      title: "AI Cuts IEP Preparation Time by 90%",
      school: "Multiple Districts (Better Speech Platform)",
      teacher: "Speech-Language Pathology Teams",
      gradeLevel: "K-12",
      subject: "Special Education / Speech-Language Pathology",
      tools: ["Streamline by Better Speech"],
      timeSaved: "90% reduction (3 hours → 10 minutes per IEP)",
      challenge: "Special education teachers and SLP teams were spending 3+ hours per IEP on procedural compliance documentation — time taken away from direct student support. With 70% of public schools reporting special ed vacancies, the administrative burden was unsustainable.",
      solution: "Better Speech's Streamline platform automates procedural compliance documentation for IEPs and 504 plans. Teachers review and refine AI-generated drafts rather than building documents from scratch, while maintaining full professional oversight.",
      results: [
        "IEP preparation time reduced from 3 hours to 10 minutes (90% reduction)",
        "SLP teams reported improved therapy efficiency and better student outcomes",
        "AI-drafted IEP goals scored 9.1–10 on quality scale vs. 5.5–9.2 without AI",
        "57% of special ed teachers now use AI for IEPs, up from 39% the prior year"
      ],
      quote: "Our goal isn't just to save time — it's to give educators and therapy providers their purpose back.",
      link: "https://www.raisesummit.com/zh/post/ai-case-studies-education"
    },
    {
      title: "Math Teacher Reclaims Professional Agency with ChatGPT",
      school: "La Vista High School, Fullerton, CA",
      teacher: "Al Rabanera, Math Teacher",
      gradeLevel: "High School",
      subject: "Mathematics",
      tools: ["ChatGPT"],
      timeSaved: "Several hours per unit design",
      challenge: "A veteran math teacher felt his professional judgment had been eroded by scripted curricula and top-down mandates. When a student asked 'When are we ever going to use math in real life?' he realized his lessons weren't connecting to students' lived experiences.",
      solution: "Al used ChatGPT to co-design a community-centered math project. He described his goals — local context, critical thinking, real issues — and evaluated, revised, and shaped the AI's suggestions into a lesson that reflected his students and his professional judgment.",
      results: [
        "Students created posters analyzing real community issues through a mathematical lens",
        "One student analyzed Fullerton's projected $20M budget deficit and modeled tax impact on low-income families",
        "Students stopped asking whether math was relevant — they already knew",
        "Teacher reported reclaiming his sense of professional agency and creativity"
      ],
      quote: "AI sharpened my professional judgment and clarified my thinking. I co-designed — I didn't copy and paste.",
      link: "https://calmatters.org/commentary/2026/03/ai-teacher-classroom-use-california/"
    },
    {
      title: "Ivy Tech Community College: AI Prevents 3,000 Students from Failing",
      school: "Ivy Tech Community College, Indiana",
      teacher: "Academic Support Team",
      gradeLevel: "Higher Education",
      subject: "All Subjects",
      tools: ["Predictive Analytics AI Platform"],
      timeSaved: "Early intervention at scale",
      challenge: "Identifying at-risk students early enough to intervene effectively was nearly impossible at scale. By the time students showed visible signs of struggle, it was often too late to prevent course failure.",
      solution: "Ivy Tech implemented an AI system that flags at-risk students within the first two weeks of the semester based on early behavioral and academic signals. Advisors then deliver targeted interventions before students fall behind.",
      results: [
        "98% of students who received targeted interventions improved grades to at least a C",
        "Approximately 3,000 students prevented from failing each semester",
        "Early intervention model now being studied by other community colleges",
        "Demonstrated that AI-powered early warning systems can work at institutional scale"
      ],
      quote: "What we've learned is that if you want to focus on the impact of technology, start by asking the community what they want to solve for.",
      link: "https://www.raisesummit.com/zh/post/ai-case-studies-education"
    },
    {
      title: "University of Louisiana AI Literacy Program Reaches 82,000 Participants",
      school: "University of Louisiana System",
      teacher: "Dr. Colleen Carraher Wolverton and Faculty",
      gradeLevel: "Higher Education",
      subject: "AI Literacy / Professional Development",
      tools: ["Custom AI Literacy Course Platform"],
      timeSaved: "Scalable at no cost to participants",
      challenge: "Students and faculty lacked foundational AI literacy — including understanding of AI history, ethics, and data privacy — needed to use AI tools responsibly and effectively in academic and professional settings.",
      solution: "The University of Louisiana System launched a free, self-paced, 16-hour AI literacy course covering AI history, ethics, best practices, digital literacy, and data privacy. Participants earn a verifiable digital badge upon completion.",
      results: [
        "82,000 participants completed the course since spring 2025",
        "Students initially reluctant to use AI began applying it for practical purposes",
        "Digital badge recognized as a workforce-relevant microcredential",
        "Course integrated as extra credit in multiple university courses"
      ],
      quote: "Microcredentials are a powerful way to recognise and validate learning that complements a student's degree.",
      link: "https://www.raisesummit.com/zh/post/ai-case-studies-education"
    },
    {
      title: "Ancient Greece Lesson: From Hours of Prep to Minutes",
      school: "Franklin Square School District, NY",
      teacher: "6th Grade Co-Teachers",
      gradeLevel: "Middle School",
      subject: "Social Studies",
      tools: ["Diffit", "Canva", "Google Classroom"],
      timeSaved: "8-10 hours per week",
      challenge: "Creating differentiated lesson materials for an inclusion classroom with students reading at multiple levels — from 2nd grade to 10th grade — was consuming enormous amounts of planning time.",
      solution: "Used Canva to generate images of Grecian vases and Diffit to create reading passages at different levels with built-in comprehension questions. Added custom short-answer questions via Google Classroom for higher-order thinking.",
      results: [
        "Lesson prep time reduced from hours to seconds",
        "All students could access content at their appropriate reading level",
        "Students completed a hands-on activity painting their own vases",
        "Superintendent noted potential to 'revolutionize education' in the district"
      ],
      quote: "Classroom preparation goes from hours to seconds when using AI.",
      link: "https://www.the74million.org/article/case-study-how-2-teachers-use-ai-behind-the-scenes-to-build-lessons-save-time/"
    },
    {
      title: "Tennessee Teachers Win 2026 Extraordinary Educator Award for Data-Driven AI Use",
      school: "Franklin Elementary & Dover Elementary, Tennessee",
      teacher: "Molly Foster & Tabitha Bates",
      gradeLevel: "Elementary (K-5)",
      subject: "All Subjects",
      tools: ["i-Ready", "Curriculum Associates AI Labs"],
      timeSaved: "Significant reduction in assessment analysis time",
      challenge: "Ensuring every student receives instruction tailored to their current level is nearly impossible to achieve manually across a full classroom. Both teachers needed a way to identify learning gaps and enrichment opportunities for each individual student without spending hours analyzing data.",
      solution: "Both teachers used i-Ready's AI-powered adaptive assessment and instruction tools to gather real-time data on each student's academic progress. The platform's AI Labs component provided actionable insights that guided daily instructional decisions, allowing teachers to respond to student needs with precision.",
      results: [
        "Selected from 170+ educators nationwide; only 26 honored in 2026",
        "Consistent student growth documented across reading and math",
        "Data-driven approach created inclusive classrooms that addressed gaps and enrichment simultaneously",
        "Both teachers invited to participate in Curriculum Associates' national leadership program"
      ],
      quote: "A data-driven classroom is a successful classroom because it allows instruction to be intentional and responsive.",
      link: "https://aijourn.com/tennessee-teachers-honored-as-2026-extraordinary-educators-for-classroom-innovation/"
    },
    {
      title: "Supporting a New ELL Student from Day One with AI Translation",
      school: "Franklin Square School District, NY",
      teacher: "6th Grade Inclusion Teacher",
      gradeLevel: "Middle School",
      subject: "All Subjects",
      tools: ["AI Translation Tools", "Diffit"],
      timeSaved: "15+ hours per week",
      challenge: "A new student arrived from El Salvador speaking only Spanish. The teacher needed to translate every lesson while the student learned English — an impossible workload to sustain manually.",
      solution: "Used AI tools to translate all classroom lessons into Spanish, allowing the student to understand assignments and participate fully while working in both languages simultaneously.",
      results: [
        "Student could participate in all lessons from her very first day",
        "Reduced teacher stress and planning burden significantly",
        "Student made measurable progress in both Spanish and English",
        "Model adopted for other ELL students across the district"
      ],
      quote: "AI really helped when a new student showed up speaking only Spanish. We used it to translate every classroom lesson for her.",
      link: "https://www.the74million.org/article/case-study-how-2-teachers-use-ai-behind-the-scenes-to-build-lessons-save-time/"
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
                Real teachers, real classrooms, real results. Discover how educators are using AI tools to save time, personalize learning, and improve student outcomes — updated through March 2026.
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
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm text-muted-foreground">IEP prep time reduction</div>
              </div>
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 text-accent mx-auto" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">At-risk students improved grades</div>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-orange-600 mx-auto" />
                <div className="text-2xl font-bold">82K</div>
                <div className="text-sm text-muted-foreground">AI literacy course participants</div>
              </div>
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto" />
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">Case studies (updated 2026)</div>
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
