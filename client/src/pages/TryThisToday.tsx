import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Zap, ExternalLink } from "lucide-react";

export default function TryThisToday() {
  const tips = [
    {
      title: "Build a Personal AI Teaching Assistant with Claude Projects",
      tool: "Claude (Anthropic)",
      time: "20 minutes to set up, saves hours every week",
      difficulty: "Intermediate",
      subject: "All Subjects",
      description: "Upload your syllabi, lesson plans, rubrics, and student context to Claude Projects. It becomes a personalized AI assistant that knows your students, your teaching style, and your curriculum — available 24/7 to help you prep, differentiate, and problem-solve.",
      steps: [
        "Sign up at claude.ai and start a new Project",
        "Upload your course materials: syllabi, lesson plans, rubrics, and any notes about your students",
        "Add a detailed instruction prompt describing your grade level, teaching philosophy, and student needs",
        "Ask Claude to review your upcoming unit and suggest missing elements or accommodations",
        "Use it to adapt materials for different learners, draft parent emails, or generate discussion questions"
      ],
      link: "https://claude.ai"
    },
    {
      title: "Turn Your Lesson Materials into a Podcast with NotebookLM",
      tool: "NotebookLM (Google)",
      time: "15 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Upload your lesson slides, PDFs, or text content to NotebookLM and generate an AI-hosted audio overview. Students can listen to a conversational summary of the lesson — perfect for review, absent students, or auditory learners.",
      steps: [
        "Go to notebooklm.google.com and create a new notebook",
        "Upload your lesson slides, PDFs, or paste in text content (up to 50 sources per notebook)",
        "Click 'Generate Audio Overview' in the notebook panel",
        "Wait 5-10 minutes for the AI to create a podcast-style summary",
        "Share the audio link with students for review or send to absent students"
      ],
      link: "https://notebooklm.google.com"
    },
    {
      title: "Create Differentiated Reading Passages in Seconds",
      tool: "Diffit",
      time: "5 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Generate reading passages at multiple reading levels for the same topic, complete with comprehension questions. Ideal for inclusion classrooms where students read at very different levels.",
      steps: [
        "Go to Diffit.me and sign up for a free account",
        "Enter your topic (e.g., 'The Water Cycle') and select your target grade level",
        "Choose the reading level range you need (e.g., 2nd grade through 8th grade)",
        "Review the generated passages — each comes with built-in comprehension questions",
        "Export directly to Google Classroom or print for students"
      ],
      link: "https://diffit.me"
    },
    {
      title: "Use MagicSchool AI to Draft IEP Goals in Minutes",
      tool: "MagicSchool AI",
      time: "10 minutes",
      difficulty: "Beginner",
      subject: "Special Education",
      description: "MagicSchool AI has a dedicated IEP goal generator that produces standards-aligned, measurable goals based on student needs. What used to take hours can now be drafted in minutes — leaving more time for the substantive work of supporting students.",
      steps: [
        "Sign up for a free MagicSchool AI account at magicschool.ai",
        "Navigate to the 'IEP Goal Generator' tool",
        "Enter the student's grade level, area of need, and current performance level",
        "Review the AI-generated goals and select or modify the ones that fit",
        "Use the 'Accommodation Generator' to pair goals with appropriate supports"
      ],
      link: "https://www.magicschool.ai"
    },
    {
      title: "Generate a Quiz from Any Article or Video",
      tool: "Brisk Teaching",
      time: "3 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Turn any web article, YouTube video, or Google Doc into a quiz with multiple choice, short answer, and essay questions — without leaving the page. The Brisk Chrome extension works directly in your browser.",
      steps: [
        "Install the Brisk Teaching Chrome extension (free at briskteaching.com)",
        "Navigate to any web article, open a Google Doc, or go to a YouTube video",
        "Click the Brisk extension icon in your browser toolbar",
        "Select 'Create Quiz' and choose your question types and difficulty level",
        "Review and edit the questions, then export to Google Forms or your LMS"
      ],
      link: "https://briskteaching.com"
    },
    {
      title: "Make AI-Powered Slides with Gamma",
      tool: "Gamma",
      time: "10 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Replace PowerPoint with Gamma for more engaging, visually dynamic lesson presentations. You can import existing slide decks, generate new ones from an outline, or embed live websites and videos directly into your slides.",
      steps: [
        "Sign up for free at gamma.app",
        "Choose 'Create new' and enter a topic or paste in an outline",
        "Let Gamma generate a full slide deck in seconds",
        "Customize the design, add your own images, and embed live websites or videos",
        "Present directly from Gamma or export to PowerPoint or Google Slides"
      ],
      link: "https://gamma.app"
    },
    {
      title: "Design an Interactive Lesson with Genially",
      tool: "Genially",
      time: "20 minutes",
      difficulty: "Intermediate",
      subject: "All Subjects",
      description: "Transform any image, map, or timeline into an interactive learning resource. Add clickable hotspots that reveal explanations, audio recordings, or links. Students click to explore — turning passive handouts into active learning experiences.",
      steps: [
        "Sign up for a free Genially account at genially.com",
        "Start with a template (interactive image, timeline, map, or presentation)",
        "Upload your image or use one of Genially's built-in visuals",
        "Add hotspots to key areas — link them to pop-up explanations, audio, or external resources",
        "Share the link with students or embed it in your LMS"
      ],
      link: "https://genially.com"
    },
    {
      title: "Write a Concern Email to a Parent Using AI",
      tool: "ChatGPT or MagicSchool AI",
      time: "5 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Drafting sensitive parent communications can be stressful and time-consuming. Use AI to generate a professional, empathetic first draft — then personalize it. This is one of the highest-value, lowest-risk uses of AI for teachers.",
      steps: [
        "Open ChatGPT (free at chat.openai.com) or MagicSchool AI's 'Communication' tool",
        "Describe the situation: student name (use a placeholder), the concern, and the tone you want",
        "Ask for a draft that is empathetic, solution-focused, and invites collaboration",
        "Review and personalize the draft — add specific details and your own voice",
        "Send through your school's official communication channel"
      ],
      link: "https://chat.openai.com"
    },
    {
      title: "Draft Assignments and Summarize Student Progress with Gemini in Google Classroom",
      tool: "Gemini for Education (Google)",
      time: "10 minutes to set up, ongoing time savings",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "As of January 2026, Gemini can now directly access your Google Classroom context to help you draft assignments, create rubrics, and summarize student progress. This is one of the most powerful new integrations for Google Workspace for Education users.",
      steps: [
        "Open Gemini at gemini.google.com and sign in with your Google Workspace for Education account",
        "Type: 'Help me draft an assignment for my [grade] [subject] class on [topic]'",
        "Gemini will use your Classroom context to tailor suggestions to your actual classes",
        "Ask it to 'Create a rubric for this assignment' or 'Summarize student progress on recent work'",
        "Review and refine the output, then push directly to Google Classroom"
      ],
      link: "https://edu.google.com/intl/ALL_us/for-educators/product-guides/gemini-for-google-workspace-for-education/"
    },
    {
      title: "Turn Your Lesson Notes into Visual Diagrams with Napkin AI",
      tool: "Napkin AI",
      time: "5 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "Napkin AI converts plain text into eye-catching visual diagrams, flowcharts, and infographics instantly. Paste in your lesson notes or a concept explanation, and Napkin generates a visual that you can customize and share with students — no design skills needed.",
      steps: [
        "Go to napkin.ai and sign up for a free account",
        "Paste in any text from your lesson notes, a concept explanation, or a process description",
        "Napkin AI will automatically generate visual diagram options",
        "Select the style that best fits your lesson (flowchart, concept map, timeline, etc.)",
        "Customize colors and labels, then export as PNG or SVG to embed in your slides"
      ],
      link: "https://napkin.ai"
    },
    {
      title: "Create an Audio Lesson for Students with Google Classroom",
      tool: "Google Classroom (with Gemini)",
      time: "15 minutes",
      difficulty: "Beginner",
      subject: "All Subjects",
      description: "New in 2026: Google Classroom now lets you create audio lessons directly within the platform using AI. This is ideal for flipped classrooms, absent students, or students who benefit from auditory learning. Record your voice or let AI generate a spoken version of your lesson content.",
      steps: [
        "Open Google Classroom and navigate to the Classwork tab",
        "Click 'Create' and select 'Assignment'",
        "Look for the new 'Create audio lesson' option in the Gemini tab within Classroom",
        "Enter your lesson content or let Gemini draft it based on your topic and class context",
        "Review the audio, add it to the assignment, and post to your class"
      ],
      link: "https://blog.google/products-and-platforms/products/education/bett-2026-gemini-classroom-updates/"
    },
    {
      title: "Create a Student-Centered Math Lesson with Real-World Context",
      tool: "ChatGPT",
      time: "15 minutes",
      difficulty: "Intermediate",
      subject: "Mathematics",
      description: "Inspired by a California math teacher's approach in March 2026: use ChatGPT to co-design a lesson grounded in your students' local community. Describe what you want to achieve, evaluate the AI's suggestions critically, and shape them into something that reflects your students' lives.",
      steps: [
        "Open ChatGPT and describe your lesson goal: grade level, topic, and what you want students to connect with",
        "Ask for lesson plan structures, thematic angles, and guiding questions rooted in local or current events",
        "Evaluate the suggestions — push back on anything that doesn't fit your students",
        "Ask ChatGPT to iterate on the ideas you like until the lesson feels authentic",
        "Launch the lesson by modeling the process yourself before asking students to try it"
      ],
      link: "https://chat.openai.com"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/10 text-green-700 border-green-200";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "Advanced": return "bg-red-500/10 text-red-700 border-red-200";
      default: return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <Badge className="mb-4" variant="secondary">
                <Zap className="mr-1 h-3 w-3" />
                Quick Wins
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Try This Today
              </h1>
              <p className="text-lg text-muted-foreground">
                Practical, step-by-step AI activities you can implement in your classroom right now. Each tip includes the tool, estimated time, and exact steps to follow — updated for March 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Tips Grid */}
        <section className="py-16">
          <div className="container">
            <div className="space-y-6">
              {tips.map((tip, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">{tip.tool}</Badge>
                          <Badge variant="outline" className={`text-xs ${getDifficultyColor(tip.difficulty)}`}>
                            {tip.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{tip.subject}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{tip.title}</CardTitle>
                        <CardDescription className="text-base">{tip.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">{tip.time}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">Step-by-Step Instructions</h4>
                    <ol className="space-y-3 mb-6">
                      {tip.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">
                            {i + 1}
                          </span>
                          <span className="text-sm pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                    <Button variant="outline" size="sm" asChild>
                      <a href={tip.link} target="_blank" rel="noopener noreferrer">
                        Open {tip.tool}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Go Deeper?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Once you've tried a few of these, explore the AI Prompt Library for copy-paste templates and the Tool Directory for a full breakdown of the best AI tools for educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/course">Explore the Prompt Library</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/tools">Browse All Tools</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
