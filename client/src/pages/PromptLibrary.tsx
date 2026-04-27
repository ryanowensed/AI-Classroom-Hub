/* ============================================================
   Prompt Library Page — AI Classroom Hub
   25 mega-prompt structured prompts using 2026 RCTF framework:
   Role → Context → Task → Format + Constraints
   ============================================================ */

import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, Search, Copy, Check, BookOpen, Info } from "lucide-react";
import { toast } from "sonner";

const gradeFilters = ["All Levels", "Pre-K / Kinder", "Elementary", "Middle School", "High School", "Administrators"];
const subjectFilters = ["All Subjects", "ELA / Writing", "Math", "Science", "Social Studies", "Special Education", "Administration", "SEL / Counseling"];

interface Prompt {
  grade: string;
  subject: string;
  title: string;
  desc: string;
  prompt: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  timesSaved?: string;
}

const prompts: Prompt[] = [
  // ─── PRE-K / KINDER ───────────────────────────────────────────────────────
  {
    grade: "Pre-K / Kinder",
    subject: "ELA / Writing",
    title: "Phonics Activity Builder",
    desc: "Generate a full set of phonics activities for a target sound — songs, movement games, and decodable sentences included.",
    timesSaved: "~45 min",
    tag: "Lesson Planning",
    tagColor: "#D97706",
    tagBg: "#FFFBEB",
    prompt: `ROLE: You are an early childhood literacy specialist with expertise in structured literacy and phonics instruction for Pre-K and Kindergarten.

CONTEXT: I am teaching [TARGET SOUND, e.g., short /a/] to [GRADE LEVEL] students. My class has [CLASS SIZE] students. Approximately [X] students are English Language Learners. We use [CURRICULUM NAME, e.g., Heggerty, UFLI, or none] as our core phonics program.

TASK: Create a complete 30-minute phonics activity sequence for the target sound that includes:
1. A warm-up movement activity (2–3 minutes) that connects the sound to a physical gesture
2. An oral blending chant or song using 8–10 words containing the target sound
3. A picture sorting activity with 12 picture words (6 with the target sound, 6 without)
4. Three decodable sentences students can practice reading aloud
5. A take-home activity families can do without any materials

CONSTRAINTS:
- All vocabulary must be within Pre-K/Kinder comprehension level
- Include culturally diverse names and contexts
- Activities must be doable without technology
- Avoid any words that contain sounds not yet taught (assume only [PREVIOUSLY TAUGHT SOUNDS] have been introduced)

FORMAT: Organize each activity with a clear heading, time estimate, materials needed, and step-by-step teacher instructions. Use simple, direct language.`,
  },
  {
    grade: "Pre-K / Kinder",
    subject: "Math",
    title: "Math Concept Introduction Sequence",
    desc: "Build a concrete-pictorial-abstract (CPA) lesson sequence for any early math concept with hands-on manipulative activities.",
    timesSaved: "~50 min",
    tag: "Lesson Planning",
    tagColor: "#D97706",
    tagBg: "#FFFBEB",
    prompt: `ROLE: You are an early childhood mathematics specialist familiar with the concrete-pictorial-abstract (CPA) progression and developmentally appropriate practice for Pre-K through Grade 1.

CONTEXT: I am introducing [MATH CONCEPT, e.g., counting to 10, comparing quantities, basic addition] to [GRADE LEVEL] students. My available manipulatives include [LIST AVAILABLE MATERIALS, e.g., counting bears, linking cubes, ten frames, pattern blocks].

TASK: Design a three-part CPA lesson sequence for this concept:

PART 1 — CONCRETE (15 minutes): A hands-on activity using physical manipulatives where students explore the concept through touch and movement. Include exact teacher language for introducing the activity.

PART 2 — PICTORIAL (10 minutes): A guided drawing or recording activity where students represent what they did with the manipulatives using pictures, tallies, or simple drawings.

PART 3 — ABSTRACT (10 minutes): A simple written or oral practice activity that connects the concrete experience to numbers or symbols.

Include: one formative assessment question to check understanding, one extension for students who finish early, and one support scaffold for students who need more time with concrete.

CONSTRAINTS:
- All activities must be completable in the listed time frames
- Use simple, consistent mathematical vocabulary throughout
- Include at least one opportunity for student talk/partner sharing

FORMAT: Use clear section headers for each CPA stage. Include a materials list at the top and a teacher reflection prompt at the end.`,
  },
  {
    grade: "Pre-K / Kinder",
    subject: "SEL / Counseling",
    title: "Morning Meeting SEL Activity Pack",
    desc: "Generate a week of morning meeting activities focused on a specific social-emotional skill, with discussion prompts and read-aloud connections.",
    timesSaved: "~40 min",
    tag: "SEL",
    tagColor: "#8B5CF6",
    tagBg: "#F5F3FF",
    prompt: `ROLE: You are a school counselor and early childhood educator specializing in social-emotional learning (SEL) for Pre-K through Grade 2, trained in the CASEL framework.

CONTEXT: I am a [GRADE LEVEL] teacher running a 15-minute morning meeting each day. This week's SEL focus is [SKILL, e.g., identifying emotions, taking turns, handling frustration, making friends]. My students are [X] years old.

TASK: Create a 5-day morning meeting activity sequence (Monday–Friday) for this SEL skill. Each day should include:
- A 2-minute greeting activity that connects to the SEL theme
- A 5-minute sharing or discussion prompt appropriate for the age group
- A 5-minute activity (game, movement, or story) that practices the skill
- One picture book recommendation that connects to the theme
- One "take it home" conversation starter families can use

CONSTRAINTS:
- All activities must be executable in 15 minutes total
- No materials beyond basic classroom supplies needed
- Activities must be inclusive for students with varying verbal abilities
- Include at least one non-verbal participation option each day

FORMAT: Present as a Monday–Friday table with columns for: Greeting, Discussion Prompt, Activity, and Book Connection. Add a brief "Why this matters" note for each day.`,
  },

  // ─── ELEMENTARY ───────────────────────────────────────────────────────────
  {
    grade: "Elementary",
    subject: "ELA / Writing",
    title: "Differentiated Reading Response (3 Levels)",
    desc: "Generate three versions of a reading response prompt for the same text — below, on, and above grade level — with sentence starters for each.",
    timesSaved: "~35 min",
    tag: "Differentiation",
    tagColor: "#10B981",
    tagBg: "#ECFDF5",
    prompt: `ROLE: You are a literacy coach specializing in differentiated instruction for Grades 2–5, with expertise in Universal Design for Learning (UDL).

CONTEXT: My [GRADE] class just finished reading [BOOK TITLE / TEXT TYPE]. The core comprehension skill I am assessing is [SKILL, e.g., identifying theme, making inferences, comparing characters]. My class includes students reading at approximately [RANGE, e.g., 1st–5th grade reading levels].

TASK: Create three versions of a written reading response prompt for this text:

VERSION 1 — APPROACHING (Below Grade Level):
- Simplified vocabulary and sentence structure
- 3–4 sentence starter options students can choose from
- Requires 1 paragraph response
- Includes a visual or graphic organizer scaffold

VERSION 2 — ON GRADE LEVEL:
- Standard grade-level expectations
- 1–2 optional sentence starters
- Requires 2 paragraph response
- Includes one guiding question for each paragraph

VERSION 3 — EXTENDING (Above Grade Level):
- Higher-order thinking expectations (analysis, evaluation, synthesis)
- No sentence starters
- Requires 3 paragraph response with text evidence
- Includes an extension option connecting to another text or real-world issue

CONSTRAINTS:
- All three versions assess the same core skill
- Avoid language that signals "easier" or "harder" versions to students
- Include a self-assessment checklist for each version

FORMAT: Present each version with a clear heading, the prompt text, sentence starters (where applicable), and the self-assessment checklist. Add a teacher note on how to distribute versions without stigma.`,
  },
  {
    grade: "Elementary",
    subject: "Math",
    title: "Math Word Problem Set (Culturally Responsive)",
    desc: "Generate 15 differentiated math word problems at three difficulty levels using culturally diverse names and real-world contexts.",
    timesSaved: "~30 min",
    tag: "Differentiation",
    tagColor: "#10B981",
    tagBg: "#ECFDF5",
    prompt: `ROLE: You are a mathematics curriculum developer specializing in culturally responsive pedagogy and differentiated instruction for Grades 3–5.

CONTEXT: I am teaching [MATH CONCEPT, e.g., multi-digit multiplication, fractions, area and perimeter] to my [GRADE] class. My students come from diverse backgrounds including [GENERAL CULTURAL CONTEXT, e.g., Latino, South Asian, African American communities — or leave blank for general diversity]. I need problems that feel relevant to their lives.

TASK: Create 15 math word problems organized into three difficulty levels (5 problems each):

LEVEL 1 — FOUNDATIONAL: Single-step problems, familiar contexts, numbers within [RANGE]
LEVEL 2 — GRADE LEVEL: Two-step problems, real-world contexts, grade-appropriate numbers
LEVEL 3 — CHALLENGE: Multi-step problems, complex contexts, extension thinking required

CONSTRAINTS:
- Use a diverse mix of names (avoid defaulting to only Western European names)
- Contexts should include: food from various cultures, community settings, family activities, sports from around the world
- All problems must be mathematically accurate and solvable
- Avoid stereotypical cultural associations
- Include at least 3 problems featuring female protagonists in active/leadership roles

FORMAT: Organize by level with a header for each. After each problem, include the answer and a brief note on the mathematical concept being practiced. Add a teacher tip on how to use these for flexible grouping.`,
  },
  {
    grade: "Elementary",
    subject: "Science",
    title: "Science Investigation Design",
    desc: "Design a complete hands-on science investigation aligned to NGSS, including materials, procedure, data table, and discussion questions.",
    timesSaved: "~55 min",
    tag: "Lesson Planning",
    tagColor: "#D97706",
    tagBg: "#FFFBEB",
    prompt: `ROLE: You are a NGSS-aligned elementary science curriculum specialist with expertise in inquiry-based learning for Grades 3–5.

CONTEXT: I am teaching [SCIENCE CONCEPT, e.g., properties of matter, plant life cycles, forces and motion] to my [GRADE] class. My available materials include [LIST MATERIALS, e.g., basic classroom supplies, science kit contents]. Class period is [X] minutes. Students have [prior knowledge context, e.g., already learned about living vs. non-living things].

TASK: Design a complete hands-on science investigation that includes:

1. DRIVING QUESTION: One compelling, student-friendly question that frames the investigation
2. BACKGROUND (Teacher): 3–4 sentences of content background for the teacher
3. MATERIALS LIST: Per-group materials list (groups of 4 students)
4. SAFETY NOTES: Any relevant safety considerations
5. PROCEDURE: Step-by-step numbered instructions written at student reading level
6. DATA TABLE: A blank data table students can fill in during the investigation
7. ANALYSIS QUESTIONS: 3 questions progressing from observation → explanation → application
8. NGSS ALIGNMENT: Which specific NGSS performance expectations this addresses
9. DIFFERENTIATION: One modification for students needing support, one extension for advanced students

CONSTRAINTS:
- Investigation must be completable in [X] minutes
- Materials must be realistic for a typical elementary classroom
- Procedure steps must be written at [GRADE] reading level
- Include a sentence frame for the conclusion for students who need writing support

FORMAT: Use clear section headers matching the numbered list above. Include a teacher prep checklist at the start.`,
  },
  {
    grade: "Elementary",
    subject: "Special Education",
    title: "SMART IEP Goal Generator",
    desc: "Generate 3 SMART IEP goals with baselines, targets, timelines, and measurement methods for a student's specific needs.",
    timesSaved: "~40 min",
    tag: "Special Education",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    prompt: `ROLE: You are a special education specialist with expertise in writing legally compliant, measurable IEP goals aligned to IDEA requirements and evidence-based practices.

CONTEXT: I am writing IEP goals for a student with the following profile:
- Current grade: [GRADE]
- Disability category: [DISABILITY, e.g., Specific Learning Disability, Autism Spectrum Disorder, Speech/Language Impairment]
- Current performance level: [DESCRIBE CURRENT PERFORMANCE, e.g., reads at 1st grade level, decodes CVC words with 60% accuracy]
- Target skill area: [SKILL AREA, e.g., reading fluency, written expression, math computation, social skills]
- Setting: [SETTING, e.g., resource room 60 min/day, inclusion with push-in support]
- Student strengths: [STRENGTHS]

TASK: Generate 3 SMART IEP goal options for this student. For each goal, provide:
1. The complete goal statement (SMART format)
2. Baseline data statement
3. Measurable target with specific criteria (accuracy %, frequency, duration)
4. Timeline (typically one year)
5. Measurement method (how progress will be tracked)
6. Progress monitoring schedule (how often data will be collected)
7. Suggested evidence-based intervention strategies that align with this goal

CONSTRAINTS:
- Goals must be legally defensible and measurable
- Avoid vague language like "will improve" without specific criteria
- Goals must be ambitious but achievable within one year
- Use person-first language throughout
- Do not include any personally identifying information

FORMAT: Present each goal in a structured format with labeled sections. Add a note at the end reminding the teacher to personalize and verify all goals with the full IEP team before finalizing.`,
  },
  {
    grade: "Elementary",
    subject: "Administration",
    title: "Parent Communication — AI in Our Classroom",
    desc: "Generate a warm, jargon-free parent newsletter explaining how AI supports learning in your classroom.",
    timesSaved: "~20 min",
    tag: "Communication",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    prompt: `ROLE: You are an experienced elementary teacher known for clear, warm family communication that builds trust and partnership.

CONTEXT: I am a [GRADE] [SUBJECT] teacher at [SCHOOL TYPE, e.g., public elementary school]. I want to send a newsletter to families explaining how I use AI tools in my classroom. My families include [CONTEXT, e.g., a mix of tech-savvy and tech-skeptical parents; many multilingual families]. The newsletter will be sent [via email / printed and sent home].

TASK: Write a parent newsletter (300–400 words) that:
1. Opens with a warm, relatable hook about how technology in classrooms has always evolved
2. Explains in plain language what AI tools are and how I use them (lesson prep, differentiation, feedback)
3. Clearly states what I do NOT use AI for (making decisions about students, replacing my relationship with their child)
4. Describes how students are taught to use AI responsibly and ethically
5. Gives families 2–3 specific ways to support AI literacy at home
6. Closes with an invitation to ask questions or visit the classroom

CONSTRAINTS:
- Maximum 8th grade reading level (use Hemingway App guidelines)
- Avoid all technical jargon — explain any AI terms in plain language
- Tone: warm, confident, reassuring — not defensive
- Do not make promises about specific tools without bracketed placeholders for customization
- Include one brief FAQ section with 2–3 common parent questions and answers

FORMAT: Newsletter format with a subject line, greeting, body paragraphs, FAQ section, and closing. Add a note at the end suggesting translation options for multilingual families.`,
  },

  // ─── MIDDLE SCHOOL ────────────────────────────────────────────────────────
  {
    grade: "Middle School",
    subject: "ELA / Writing",
    title: "Process-Based Essay Assignment",
    desc: "Create an essay assignment that requires students to document their writing process, making AI use visible, assessable, and educational.",
    timesSaved: "~45 min",
    tag: "Academic Integrity",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    prompt: `ROLE: You are a middle school ELA curriculum designer specializing in process-based writing instruction and academic integrity in the age of AI.

CONTEXT: I am a [GRADE] ELA teacher assigning [ESSAY TYPE, e.g., argumentative, narrative, informational] writing on [TOPIC]. My students have access to AI tools outside of school. I want to design an assignment that teaches responsible AI use while ensuring students develop genuine writing skills.

TASK: Design a complete process-based essay assignment that includes:

1. ASSIGNMENT OVERVIEW: Clear description of the essay task, purpose, and audience
2. PROCESS REQUIREMENTS (these are graded equally with the final product):
   - Pre-writing documentation (brainstorm, outline, or concept map)
   - First draft with tracked changes or handwritten annotations
   - Peer feedback record
   - Revision reflection (what changed and why)
   - AI Use Disclosure (if applicable): what tool, how used, what student changed

3. FINAL ESSAY REQUIREMENTS: Length, format, citation style

4. RUBRIC: Two-part rubric scoring both Process (50%) and Product (50%)
   - Process criteria: documentation completeness, evidence of revision, reflection quality
   - Product criteria: thesis, evidence, organization, voice, conventions

5. AI GUIDANCE FOR STUDENTS: Clear, non-punitive explanation of when AI use is permitted, how to disclose it, and why process documentation matters

CONSTRAINTS:
- Assignment must be completable over [X] weeks
- Include at least one in-class writing component to establish baseline voice
- Rubric must be student-friendly (written so students can self-assess)
- Include a "what counts as AI misuse" clarification section

FORMAT: Full assignment sheet students can receive, followed by the teacher rubric. Include a teacher note on how to handle AI disclosure conversations.`,
  },
  {
    grade: "Middle School",
    subject: "Science",
    title: "Socratic Seminar Preparation Guide",
    desc: "Generate a complete Socratic seminar preparation packet on a science topic, including background readings, discussion questions, and participation rubric.",
    timesSaved: "~50 min",
    tag: "Discussion",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    prompt: `ROLE: You are a middle school science teacher and instructional coach specializing in discussion-based learning and scientific argumentation aligned to NGSS.

CONTEXT: My [GRADE] science class is preparing for a Socratic seminar on [SCIENCE TOPIC, e.g., climate change and human responsibility, genetic engineering ethics, space exploration priorities]. Students have [PRIOR KNOWLEDGE CONTEXT]. The seminar will be [X] minutes long with [CLASS SIZE] students.

TASK: Create a complete Socratic seminar preparation packet including:

1. BACKGROUND READING SUMMARY: A 300-word accessible summary of the key scientific concepts students need to understand before the seminar

2. MULTIPLE PERSPECTIVES: Brief summaries of 3–4 different stakeholder perspectives on this topic (e.g., scientists, policymakers, community members, students)

3. DISCUSSION QUESTIONS (Tiered):
   - 3 opening questions (accessible, factual grounding)
   - 4 core questions (analysis, evidence evaluation, perspective-taking)
   - 2 closing questions (synthesis, personal connection, action)

4. STUDENT PREPARATION GUIDE: What students should do before the seminar (reading, note-taking, forming initial positions)

5. PARTICIPATION RUBRIC: A 4-point rubric assessing: quality of contributions, use of evidence, building on others' ideas, respectful disagreement

6. TEACHER FACILITATION NOTES: 5 strategies for keeping the discussion student-led

CONSTRAINTS:
- All content must be scientifically accurate as of 2026
- Discussion questions must be genuinely open-ended (no single correct answer)
- Include at least one question that connects science to social justice or equity
- Preparation materials must be readable at [GRADE] level

FORMAT: Organize as a student packet (pages 1–3) and teacher guide (page 4). Include a pre-seminar reflection prompt and post-seminar synthesis activity.`,
  },
  {
    grade: "Middle School",
    subject: "Social Studies",
    title: "Primary Source Analysis Scaffold",
    desc: "Create a tiered primary source analysis activity with scaffolded questioning for diverse learners.",
    timesSaved: "~35 min",
    tag: "Differentiation",
    tagColor: "#10B981",
    tagBg: "#ECFDF5",
    prompt: `ROLE: You are a middle school social studies teacher and literacy specialist with expertise in historical thinking skills and document-based instruction.

CONTEXT: I am teaching [HISTORICAL PERIOD/EVENT, e.g., the Civil Rights Movement, Reconstruction, WWI] to my [GRADE] class. I want to use [PRIMARY SOURCE TYPE, e.g., a photograph, a speech excerpt, a political cartoon, a letter] as the centerpiece of a lesson. My class includes students with a wide range of reading levels and English language proficiency.

TASK: Create a tiered primary source analysis activity with three levels of scaffolding:

LEVEL 1 — HIGH SCAFFOLD (ELL, below grade level, IEP support):
- Simplified caption or context paragraph (5th grade reading level)
- Vocabulary support: 5 key terms with student-friendly definitions
- Observation questions only (What do you see/notice?)
- Sentence frames for all responses

LEVEL 2 — MODERATE SCAFFOLD (on grade level):
- Standard context paragraph
- 2 vocabulary terms with definitions
- Observation + interpretation questions
- Optional sentence starters

LEVEL 3 — MINIMAL SCAFFOLD (above grade level, extension):
- Brief context only (students research additional context)
- No vocabulary support provided
- Analysis + evaluation + connection questions
- Open-ended response format

ALL LEVELS include:
- A "sourcing" section: Who created this? When? Why?
- A "corroboration" prompt: What other sources would help verify this?
- A connection to a current event or contemporary issue

CONSTRAINTS:
- All three levels must analyze the same source
- Questions must progress from lower to higher-order thinking (Bloom's)
- Include a class discussion debrief protocol after individual work

FORMAT: Three separate student worksheets (clearly labeled by level without stigmatizing language) plus a teacher answer guide with discussion facilitation notes.`,
  },
  {
    grade: "Middle School",
    subject: "Math",
    title: "Real-World Math Project Design",
    desc: "Design a project-based math unit connecting grade-level standards to a real-world problem students care about.",
    timesSaved: "~60 min",
    tag: "Project-Based Learning",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    prompt: `ROLE: You are a middle school mathematics curriculum designer specializing in project-based learning (PBL) and real-world mathematics applications.

CONTEXT: I am teaching [MATH STANDARDS/CONCEPTS, e.g., ratios and proportional reasoning, statistics and data analysis, linear equations] to my [GRADE] class. I want to design a 2–3 week project that connects these standards to something students genuinely care about. My students are interested in [STUDENT INTERESTS, e.g., sports, social media, environmental issues, music, gaming].

TASK: Design a complete project-based math unit that includes:

1. DRIVING QUESTION: One compelling, real-world question that requires the target math to answer
2. FINAL PRODUCT: What students will create/present (e.g., data report, recommendation memo, infographic, presentation)
3. STANDARDS ALIGNMENT: Specific CCSS math standards addressed
4. LESSON SEQUENCE (10–15 days):
   - Entry event to hook students
   - 3–4 mini-lessons teaching the required math concepts
   - Work sessions with checkpoints
   - Critique and revision protocol
   - Final presentation/exhibition

5. SCAFFOLDS AND SUPPORTS:
   - Graphic organizers for the project phases
   - Calculation guides for students who need support
   - Extension challenges for advanced students

6. ASSESSMENT:
   - Formative checkpoints (at least 3)
   - Final project rubric assessing both math accuracy and communication quality

CONSTRAINTS:
- All required math must align to [GRADE] CCSS standards
- Project must use real data students can access (include 2–3 specific data sources)
- Include at least one collaborative component and one individual accountability measure
- Final product must require students to communicate math reasoning, not just calculate

FORMAT: Full project overview document for teacher planning, followed by a student-facing project guide.`,
  },
  {
    grade: "Middle School",
    subject: "SEL / Counseling",
    title: "AI and Digital Citizenship Lesson",
    desc: "Design a lesson helping students think critically about AI, bias, and responsible use — connecting to their own digital lives.",
    timesSaved: "~40 min",
    tag: "Digital Citizenship",
    tagColor: "#8B5CF6",
    tagBg: "#F5F3FF",
    prompt: `ROLE: You are a school counselor and digital citizenship educator specializing in adolescent development and critical media literacy for Grades 6–8.

CONTEXT: I am facilitating a [X]-minute lesson for [GRADE] students on the topic of AI and responsible digital citizenship. My students use AI tools regularly — many for homework, social media, and entertainment. Some have positive associations with AI; others are skeptical or anxious. This lesson is part of our [ADVISORY / COUNSELING / TECH CLASS] program.

TASK: Design a complete lesson plan that helps students:
1. Understand at a basic level how generative AI works (without deep technical detail)
2. Identify ways AI can be helpful AND ways it can be harmful or misleading
3. Recognize AI bias and how it can affect the information they receive
4. Develop personal guidelines for responsible AI use in school and life

LESSON STRUCTURE:
- Hook (5 min): An engaging activity or scenario that surfaces students' current AI experiences
- Direct Instruction (10 min): Key concepts about how AI works, what it can/can't do, and what bias means in AI
- Activity (15 min): A hands-on critical thinking activity (e.g., comparing AI outputs, spotting AI-generated content, testing AI for bias)
- Discussion (10 min): Structured discussion connecting to students' lives
- Reflection/Closure (5 min): Personal commitment or takeaway

CONSTRAINTS:
- No technology required (lesson should work without student devices)
- Content must be accurate and current as of 2026
- Avoid both AI-utopian and AI-dystopian framing — aim for critical, balanced thinking
- Include discussion questions that surface diverse student perspectives
- Must be appropriate for students with varying levels of AI experience

FORMAT: Full lesson plan with teacher instructions, student activity sheets, and a discussion facilitation guide. Include a parent communication note summarizing what was covered.`,
  },

  // ─── HIGH SCHOOL ──────────────────────────────────────────────────────────
  {
    grade: "High School",
    subject: "ELA / Writing",
    title: "AI-Inclusive Research Paper Assignment",
    desc: "Design a research assignment that teaches students to use AI as a legitimate research tool while developing original analysis and proper attribution.",
    timesSaved: "~50 min",
    tag: "Assessment Design",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    prompt: `ROLE: You are a high school English department chair and writing specialist with expertise in research-based writing, source evaluation, and academic integrity in the AI era.

CONTEXT: I am assigning a research paper to my [GRADE] [SUBJECT] class on [TOPIC OR CHOICE OF TOPICS]. My students have access to AI tools and I want to design an assignment that teaches responsible, transparent AI use as a legitimate research skill — rather than banning it and driving it underground.

TASK: Design a complete research paper assignment that includes:

1. ASSIGNMENT OVERVIEW: Topic, length, format, audience, and purpose

2. AI USE POLICY FOR THIS ASSIGNMENT (embedded in the assignment):
   - Explicitly permitted: using AI for initial research, brainstorming, outline feedback, grammar checking
   - Explicitly prohibited: submitting AI-generated text as original analysis
   - Required: AI Methodology Section (see below)

3. AI METHODOLOGY SECTION REQUIREMENT:
   Students must include a 150–200 word section documenting:
   - Which AI tools they used and for what purpose
   - What the AI provided and how they verified or modified it
   - How their original analysis differs from what AI generated

4. RESEARCH PROCESS REQUIREMENTS:
   - Annotated bibliography (minimum [X] sources, including at least [X] primary sources)
   - Research log documenting sources consulted (including AI interactions)
   - Thesis evolution document showing how their argument developed

5. RUBRIC: Assessing original analysis (40%), evidence quality (25%), AI methodology transparency (15%), writing craft (20%)

CONSTRAINTS:
- Assignment must require analysis that AI cannot provide (personal interpretation, local context, class-specific connections)
- Include an in-class writing component to establish student voice baseline
- Rubric must reward transparency about AI use, not penalize it
- Include guidance on how to cite AI-generated content in [MLA/APA/Chicago]

FORMAT: Full student assignment sheet, research process timeline, and teacher rubric. Include a FAQ section addressing common student questions about AI use on this assignment.`,
  },
  {
    grade: "High School",
    subject: "Science",
    title: "Scientific Argument & Evidence Evaluation",
    desc: "Design a NGSS-aligned argumentation task where students evaluate competing scientific claims using real data.",
    timesSaved: "~45 min",
    tag: "NGSS Argumentation",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    prompt: `ROLE: You are a high school science teacher and NGSS curriculum specialist with expertise in science argumentation, data literacy, and the crosscutting concept of Cause and Effect.

CONTEXT: I am teaching [SCIENCE TOPIC, e.g., climate science, CRISPR gene editing, vaccine efficacy, antibiotic resistance] to my [GRADE] [COURSE, e.g., Biology, Chemistry, Environmental Science] class. I want students to engage with real scientific data and construct evidence-based arguments — skills they will need in college and civic life.

TASK: Design a complete scientific argumentation task that includes:

1. PHENOMENON: A compelling, real-world phenomenon related to the topic that raises a genuine scientific question

2. COMPETING CLAIMS: Two or three scientifically defensible (but different) claims about the phenomenon that students must evaluate

3. DATA PACKAGE: Descriptions of 4–5 types of evidence students should research or that you will provide (graphs, studies, expert statements, data tables) — include specific 2025–2026 sources where possible

4. ARGUMENTATION FRAMEWORK: A structured template students use to:
   - State their claim
   - Cite specific evidence
   - Explain their reasoning (the "because" connecting evidence to claim)
   - Acknowledge and rebut a counterargument

5. PEER CRITIQUE PROTOCOL: A structured process for students to evaluate each other's arguments

6. DISCUSSION/DEBATE FORMAT: How the class will share and discuss competing arguments

7. ASSESSMENT RUBRIC: Aligned to NGSS Science and Engineering Practice 7 (Engaging in Argument from Evidence)

CONSTRAINTS:
- All scientific content must be accurate and current as of 2026
- Task must be completable in [X] class periods
- Include scaffolding for students who struggle with scientific writing
- Avoid politically charged framing — focus on scientific evidence, not policy

FORMAT: Teacher planning guide, student task sheet, argumentation template, and rubric.`,
  },
  {
    grade: "High School",
    subject: "Social Studies",
    title: "Civic Action Research Project",
    desc: "Design a project where students research a local or national issue and develop a real civic action plan, using AI as a research tool.",
    timesSaved: "~55 min",
    tag: "Project-Based Learning",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    prompt: `ROLE: You are a high school social studies teacher and civic education specialist with expertise in action civics, project-based learning, and youth civic engagement.

CONTEXT: I am teaching [COURSE, e.g., AP Government, U.S. History, Contemporary Issues] to my [GRADE] class. I want students to research a real issue — local, state, or national — and develop a genuine civic action plan. Students may use AI tools as research aids. The project will culminate in [PRESENTATION FORMAT, e.g., presentations to a community panel, letters to elected officials, a community forum].

TASK: Design a complete civic action research project that includes:

1. PROJECT OVERVIEW: Purpose, timeline ([X] weeks), and final product description

2. ISSUE SELECTION PROCESS: How students choose their issue (individual, small group, or class-wide), with criteria for selecting issues that are:
   - Genuinely civic in nature (involves government, policy, or community)
   - Researchable with available sources
   - Actionable at the student level

3. RESEARCH PHASE (with AI guidance):
   - Research questions students must answer
   - Source requirements (primary, secondary, stakeholder interviews)
   - Guidance on using AI for research while maintaining source integrity
   - Bias and perspective analysis requirement

4. CIVIC ACTION PLAN COMPONENTS:
   - Problem statement with evidence
   - Stakeholder analysis
   - Policy or action recommendation
   - Implementation strategy
   - Anticipated obstacles and responses

5. PRESENTATION REQUIREMENTS AND RUBRIC

6. REFLECTION: Post-project student reflection on civic agency and learning

CONSTRAINTS:
- Project must connect to actual civic structures (real officials, real policies, real organizations)
- Include guidance on contacting real stakeholders respectfully
- Rubric must assess civic reasoning quality, not just research quantity
- Include scaffolds for students with limited prior civics knowledge

FORMAT: Full teacher project guide, student project handbook, and assessment rubric.`,
  },
  {
    grade: "High School",
    subject: "Math",
    title: "Statistics Real-World Data Analysis",
    desc: "Design a statistics project where students collect, analyze, and present real data on a question they care about.",
    timesSaved: "~50 min",
    tag: "Data Literacy",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    prompt: `ROLE: You are a high school statistics teacher and data literacy specialist with expertise in AP Statistics, real-world data analysis, and communicating quantitative findings.

CONTEXT: I am teaching [STATISTICS CONCEPTS, e.g., descriptive statistics, probability, hypothesis testing, regression] to my [GRADE] [COURSE, e.g., AP Statistics, Pre-Calculus, Data Science] class. I want students to apply these concepts to real data on a question they genuinely care about. Students may use technology including AI tools for data analysis assistance.

TASK: Design a complete statistics project that includes:

1. PROJECT OVERVIEW: Purpose, timeline, and deliverables

2. QUESTION DEVELOPMENT PHASE:
   - How students develop a statistical question (must be answerable with data)
   - Criteria for a good statistical question
   - Examples of strong vs. weak statistical questions

3. DATA COLLECTION PHASE:
   - Options: collect original data (survey, observation, experiment) OR use existing datasets
   - Recommended 2025–2026 open data sources (government, sports, social, environmental)
   - Data quality and bias considerations
   - AI use guidance: using AI to help find datasets, NOT to fabricate data

4. ANALYSIS REQUIREMENTS:
   - Required statistical procedures aligned to [COURSE STANDARDS]
   - Visualization requirements (minimum types and quality standards)
   - Interpretation requirements (what the numbers mean in context)

5. COMMUNICATION REQUIREMENTS:
   - Written report OR presentation format
   - Audience: non-statistician (must explain methods in plain language)
   - Limitations section: what the data cannot tell us

6. RUBRIC: Assessing statistical accuracy, interpretation quality, visualization clarity, and communication

CONSTRAINTS:
- Students must use real data (no fabricated datasets)
- Analysis must go beyond description to include inference or prediction
- Include a "what AI helped with" disclosure section in the final report
- Rubric must reward honest acknowledgment of data limitations

FORMAT: Teacher project guide, student handbook with timeline, and assessment rubric.`,
  },
  {
    grade: "High School",
    subject: "SEL / Counseling",
    title: "College & Career AI Readiness Lesson",
    desc: "Help students understand how AI is changing the job market and develop skills for navigating an AI-integrated future.",
    timesSaved: "~35 min",
    tag: "Future Readiness",
    tagColor: "#8B5CF6",
    tagBg: "#F5F3FF",
    prompt: `ROLE: You are a high school counselor and career educator specializing in college and career readiness, workforce trends, and preparing students for an AI-integrated economy.

CONTEXT: I am facilitating a [X]-minute lesson/advisory session for [GRADE] students on how AI is changing careers and what skills will matter most in their futures. My students are [CONTEXT, e.g., college-bound, career-focused, mixed, first-generation college students]. They have varying levels of AI experience and career clarity.

TASK: Design a complete lesson that helps students:
1. Understand which types of jobs/tasks AI is changing and which it is not
2. Identify the "human skills" (creativity, empathy, judgment, communication) that remain essential
3. Reflect on their own strengths in relation to an AI-integrated future
4. Develop a personal AI literacy plan — specific skills to build before graduation

LESSON STRUCTURE:
- Hook (5 min): A compelling statistic or scenario about AI and the job market
- Research Share (10 min): Key findings about AI and employment (accurate, balanced, not fear-based)
- Activity 1 (10 min): "AI Can / AI Can't" — students categorize job tasks
- Activity 2 (10 min): Personal strengths inventory connecting to future-ready skills
- Action Planning (10 min): Students draft a personal AI literacy goal for the semester
- Closing (5 min): Share-out and commitment

CONSTRAINTS:
- Content must be accurate and current as of 2026 — avoid outdated job market predictions
- Avoid both "AI will take all jobs" and "AI changes nothing" extremes
- Include perspectives on AI and equity (who benefits, who is at risk)
- Must be relevant for students pursuing both college and direct-to-career paths
- Include resources for students who want to learn more

FORMAT: Full lesson plan, student activity sheets, and a resource list of free AI literacy learning opportunities. Include a parent communication note.`,
  },

  // ─── ADMINISTRATORS ───────────────────────────────────────────────────────
  {
    grade: "Administrators",
    subject: "Administration",
    title: "AI Policy First Draft Generator",
    desc: "Generate a complete first draft of a school or district AI acceptable use policy tailored to your specific context and grade range.",
    timesSaved: "~90 min",
    tag: "Policy",
    tagColor: "#E8533A",
    tagBg: "#FFF7F5",
    prompt: `ROLE: You are a K-12 education policy specialist with expertise in educational technology governance, FERPA/COPPA compliance, and AI policy development for school districts.

CONTEXT: I am developing an AI acceptable use policy for [SCHOOL TYPE, e.g., public elementary school, K-8 charter school, large urban high school, rural K-12 district]. We serve grades [GRADE RANGE] with approximately [ENROLLMENT] students. Our current technology infrastructure includes [BRIEF DESCRIPTION, e.g., 1:1 Chromebooks, shared iPad carts]. We are in [STATE], which has [STATE AI LEGISLATION STATUS, e.g., no specific AI legislation yet / recently passed SB XXX on student data privacy].

TASK: Draft a complete AI acceptable use policy that includes:

1. PURPOSE AND SCOPE: Why this policy exists and who it covers
2. DEFINITIONS: Clear definitions of AI, generative AI, and key terms in plain language
3. APPROVED USES BY ROLE:
   - Student use guidelines (differentiated by grade band)
   - Teacher use guidelines
   - Administrator use guidelines
4. PROHIBITED USES: Clear list of what is not permitted
5. ACADEMIC INTEGRITY: How AI use relates to existing academic integrity policy
6. DATA PRIVACY: FERPA/COPPA requirements, approved vendor process
7. TOOL APPROVAL PROCESS: How new AI tools are evaluated and approved
8. PROFESSIONAL DEVELOPMENT: Training requirements for staff
9. PARENT NOTIFICATION: How families are informed about AI use
10. ENFORCEMENT AND CONSEQUENCES: Tiered consequence framework
11. POLICY REVIEW: How and when this policy will be updated

CONSTRAINTS:
- Policy must be legally sound and aligned to FERPA, COPPA, and [STATE] law
- Language must be clear enough for students and families to understand
- Avoid overly restrictive language that bans all AI use — aim for responsible use framework
- Include bracketed placeholders [LIKE THIS] for all school-specific details
- Policy must acknowledge that AI technology evolves rapidly and build in flexibility

FORMAT: Formal policy document format with numbered sections, a policy header with adoption date and review cycle, and a glossary. Include a one-page plain-language summary for families.`,
  },
  {
    grade: "Administrators",
    subject: "Administration",
    title: "Staff AI Professional Development Plan",
    desc: "Generate a structured, tiered PD plan for building district-wide AI competency, addressing the fact that only 34% of teachers have received formal AI training.",
    timesSaved: "~75 min",
    tag: "Professional Development",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    prompt: `ROLE: You are a K-12 professional development director and instructional technology specialist with expertise in adult learning, change management, and AI integration in schools.

CONTEXT: I am designing a professional development plan for [DISTRICT/SCHOOL NAME] to build AI competency across all staff. We have approximately [X] teachers, [X] administrators, and [X] support staff. Current AI training status: [DESCRIBE, e.g., no formal training provided, some teachers self-taught, one PD session last year]. Our budget for AI PD is approximately [BUDGET RANGE OR "limited"]. Available PD time includes [DESCRIBE, e.g., 3 full PD days per year, monthly early release, summer institute].

TASK: Design a comprehensive, tiered AI professional development plan that includes:

1. NEEDS ASSESSMENT: A brief staff survey (10 questions) to establish baseline AI knowledge and identify priority needs

2. THREE-TIER COMPETENCY FRAMEWORK:
   - Tier 1 (All Staff): AI Foundations — what AI is, district policy, data privacy basics
   - Tier 2 (Instructional Staff): AI in Practice — using approved tools, prompt writing, classroom integration
   - Tier 3 (Leaders/Coaches): AI Leadership — governance, coaching colleagues, evaluating tools

3. FOR EACH TIER: Learning objectives, recommended delivery format, time required, and assessment/completion criteria

4. IMPLEMENTATION TIMELINE: Month-by-month rollout plan for [SCHOOL YEAR]

5. DELIVERY OPTIONS: Mix of formats (self-paced online, in-person workshop, peer learning communities, embedded PD)

6. RESISTANT STAFF STRATEGY: Specific approaches for staff who are skeptical or anxious about AI

7. SUSTAINABILITY PLAN: How to maintain and update PD as AI evolves

8. BUDGET ESTIMATE: Rough cost ranges for different implementation approaches

CONSTRAINTS:
- Plan must be realistic for a school with limited PD time and budget
- Include free/low-cost resources and tools where possible
- Address equity: ensure all staff have access regardless of tech comfort level
- Build in teacher voice — staff should help shape the PD, not just receive it

FORMAT: Executive summary (1 page), full plan document, and a one-page visual overview suitable for sharing with the Board of Education.`,
  },
  {
    grade: "Administrators",
    subject: "Administration",
    title: "AI Tool ROI & Budget Justification",
    desc: "Build a data-driven ROI framework for justifying AI tool investments to your school board, with time savings calculations and outcome metrics.",
    timesSaved: "~60 min",
    tag: "Budget & Strategy",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    prompt: `ROLE: You are a school district administrator and education finance specialist with expertise in EdTech ROI analysis, budget justification, and data-driven decision making.

CONTEXT: I am preparing a budget justification for [AI TOOL OR PROGRAM, e.g., a district-wide AI writing assistant, a personalized learning platform, an AI-powered assessment tool]. The annual cost is approximately [COST]. I need to present this to [AUDIENCE, e.g., school board, superintendent, finance committee]. Our district has [ENROLLMENT] students and [X] teachers. Post-ESSER, we are under significant budget pressure.

TASK: Build a comprehensive ROI framework and budget justification document that includes:

1. EXECUTIVE SUMMARY (1 page): The case for this investment in plain language

2. PROBLEM STATEMENT: The specific educational challenge this tool addresses, with data

3. TIME SAVINGS ANALYSIS:
   - Estimated hours saved per teacher per week (cite RAND 2026 data: 10–14 hrs/week for active AI users)
   - Total district-wide time savings calculation
   - Dollar value of time savings (using average teacher hourly cost)

4. STUDENT OUTCOME PROJECTIONS:
   - What outcomes this tool is designed to improve
   - Research evidence for similar tools (cite specific studies)
   - How we will measure impact in Year 1

5. COST-BENEFIT ANALYSIS:
   - Total cost (licensing + implementation + training)
   - Quantified benefits (time savings + projected outcome improvements)
   - Break-even analysis

6. RISK ANALYSIS: What could go wrong and how we will mitigate it

7. ALTERNATIVES CONSIDERED: Other options evaluated and why this was chosen

8. IMPLEMENTATION PLAN: Timeline, training, and success metrics

CONSTRAINTS:
- All financial calculations must use real numbers (provide formulas with [PLACEHOLDERS])
- Cite specific 2025–2026 research where possible
- Address data privacy and FERPA compliance proactively
- Include a Year 1 evaluation plan with specific metrics

FORMAT: Formal budget justification document with executive summary, supporting analysis sections, and a one-page board presentation slide outline.`,
  },
  {
    grade: "Administrators",
    subject: "Administration",
    title: "Family AI Town Hall Facilitation Guide",
    desc: "Design a complete community town hall on AI in schools — agenda, talking points, FAQ responses, and strategies for handling skeptical or concerned parents.",
    timesSaved: "~45 min",
    tag: "Community Engagement",
    tagColor: "#E8533A",
    tagBg: "#FFF7F5",
    prompt: `ROLE: You are a school principal and community engagement specialist with expertise in facilitating difficult conversations about technology, equity, and education with diverse parent communities.

CONTEXT: I am hosting a [X]-minute community town hall on AI in our schools for [AUDIENCE, e.g., elementary school parents, high school families, district-wide community]. Expected attendance: [X] people. My community includes [CONTEXT, e.g., tech-savvy parents who want more AI, skeptical parents concerned about screen time, multilingual families, families with limited tech access]. Key concerns I anticipate: [LIST 2–3 CONCERNS, e.g., academic integrity, data privacy, job displacement for teachers].

TASK: Create a complete town hall facilitation guide including:

1. PRE-EVENT PREPARATION:
   - Communication to send families 2 weeks before (email/flyer)
   - Room setup recommendations
   - Materials to prepare

2. AGENDA (with time allocations):
   - Welcome and ground rules
   - What AI is (and isn't) — accessible explanation
   - How we use AI in our school
   - What we don't use AI for
   - Our policies and protections
   - Q&A facilitation

3. KEY TALKING POINTS: For each agenda section, 3–4 specific, honest talking points (not PR spin)

4. FAQ RESPONSES: Prepared responses to 10 most common parent questions, including:
   - "Is AI replacing teachers?"
   - "What data is being collected about my child?"
   - "What if I don't want my child using AI?"
   - "How do you prevent cheating?"
   - "Is this safe for young children?"

5. DIFFICULT CONVERSATION STRATEGIES: How to respond to hostile or highly emotional questions

6. FOLLOW-UP PLAN: What to send families after the event

CONSTRAINTS:
- All responses must be honest — avoid corporate-speak or dismissiveness
- Include multilingual communication strategies
- Talking points must be accurate and current as of 2026
- Include a strategy for capturing parent input and following up on unresolved concerns

FORMAT: Complete facilitator guide with agenda, talking points, FAQ script, and follow-up email template.`,
  },
  {
    grade: "Administrators",
    subject: "Administration",
    title: "Academic Integrity Investigation Protocol",
    desc: "Create a fair, legally sound protocol for investigating suspected AI misuse — addressing why detection tools alone are insufficient.",
    timesSaved: "~40 min",
    tag: "Academic Integrity",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    prompt: `ROLE: You are a school administrator and academic integrity specialist with expertise in student due process, fair investigation procedures, and the limitations of AI detection technology.

CONTEXT: I am developing a protocol for [SCHOOL TYPE] to investigate suspected AI misuse in student work. My staff are increasingly concerned about AI-generated submissions but are unsure how to investigate fairly. I need a protocol that is legally sound, educationally appropriate, and does not rely solely on AI detection tools (which have documented false positive rates of 15–32%).

TASK: Create a complete academic integrity investigation protocol for suspected AI misuse that includes:

1. GUIDING PRINCIPLES:
   - Why AI detection tools cannot be used as sole evidence
   - The presumption of good faith
   - Student due process rights
   - The educational goal of the process

2. TRIGGER CRITERIA: What should (and should not) trigger an investigation
   - Appropriate triggers: specific behavioral patterns, student's own admission, comparison to known work
   - Inappropriate triggers: AI detection score alone, teacher "gut feeling" without evidence

3. INVESTIGATION STEPS (step-by-step):
   - Step 1: Teacher documentation
   - Step 2: Initial student conversation (non-accusatory)
   - Step 3: Student opportunity to demonstrate knowledge
   - Step 4: Evidence review
   - Step 5: Administrator involvement (if needed)
   - Step 6: Determination and consequences
   - Step 7: Documentation and record-keeping

4. STUDENT CONVERSATION GUIDE: Specific, non-accusatory language teachers can use

5. EVIDENCE STANDARDS: What constitutes sufficient evidence for each consequence level

6. APPEAL PROCESS: How students and families can appeal a determination

7. DOCUMENTATION FORMS: Templates for recording each step

CONSTRAINTS:
- Protocol must be consistent with student due process rights
- Must not disproportionately impact ELL students or students with disabilities
- Must be implementable by classroom teachers without extensive training
- Include guidance on when NOT to pursue formal investigation

FORMAT: Formal protocol document with numbered steps, decision flowchart, conversation guide, and documentation templates.`,
  },

  // ─── ALL LEVELS ───────────────────────────────────────────────────────────
  {
    grade: "All Levels",
    subject: "ELA / Writing",
    title: "Report Card Comment Generator",
    desc: "Generate 5 specific, personalized report card comment options that go beyond generic praise and include actionable home support suggestions.",
    timesSaved: "~25 min",
    tag: "Time Saver",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    prompt: `ROLE: You are an experienced teacher and instructional coach known for writing specific, honest, and constructive report card comments that communicate genuine knowledge of each student.

CONTEXT: I need to write report card comments for a student with the following profile:
- Subject: [SUBJECT]
- Grade: [GRADE]
- Grading period: [QUARTER/SEMESTER]
- Academic strengths: [SPECIFIC STRENGTHS — be as specific as possible]
- Areas for growth: [SPECIFIC GROWTH AREAS]
- Recent notable achievement or moment: [SPECIFIC EXAMPLE]
- Student personality/learning style (optional): [DESCRIPTION]
- Any context I want to acknowledge (optional): [e.g., improved significantly, had a difficult semester, strong effort despite challenges]

TASK: Write 5 different report card comment options for this student. Each comment should:
1. Be 2–3 sentences long
2. Reference at least one specific skill, achievement, or behavior (not generic praise)
3. Include one forward-looking statement (what to work on or what to look forward to)
4. Include one actionable suggestion for how families can support at home
5. End on a positive, encouraging note

CONSTRAINTS:
- Avoid deficit language ("struggles with," "cannot," "fails to") — use growth-oriented framing
- Avoid generic phrases like "is a pleasure to have in class" or "works hard"
- Each of the 5 options should have a noticeably different tone or emphasis
- Comments must be honest — do not write comments that misrepresent the student's performance
- Maximum 75 words per comment

FORMAT: Number each comment option 1–5. After all 5 options, add a brief note on which tone each comment takes (e.g., "Option 1 emphasizes growth; Option 3 is more achievement-focused") to help the teacher choose.`,
  },
  {
    grade: "All Levels",
    subject: "Administration",
    title: "Staff Meeting Agenda & Facilitation Guide",
    desc: "Generate a structured, time-efficient staff meeting agenda on any topic, with facilitation strategies to maximize participation and minimize passive sitting.",
    timesSaved: "~30 min",
    tag: "Leadership",
    tagColor: "#E8533A",
    tagBg: "#FFF7F5",
    prompt: `ROLE: You are a school principal and instructional leader known for running efficient, purposeful staff meetings that respect teacher time and drive genuine professional learning.

CONTEXT: I am facilitating a [X]-minute staff meeting for [AUDIENCE, e.g., full faculty, grade-level team, department, instructional coaches]. The primary topic is [TOPIC, e.g., reviewing student assessment data, introducing a new AI policy, planning for an upcoming event, addressing a school-wide challenge]. Secondary topics (if any): [LIST]. Current staff morale/context: [BRIEF DESCRIPTION, e.g., high stress due to testing season, positive momentum after a successful event, navigating a difficult policy change].

TASK: Create a complete staff meeting agenda and facilitation guide that includes:

1. AGENDA (time-stamped):
   - Opening/connection activity (5 min max)
   - Primary topic with clear purpose statement
   - Secondary topics (if applicable)
   - Action items and next steps
   - Closing

2. FOR EACH AGENDA ITEM:
   - Facilitator talking points (not a script — key points only)
   - Participation structure (whole group, small group, pairs, individual reflection)
   - Materials needed
   - Anticipated questions or resistance and how to respond

3. PARTICIPATION STRATEGIES: At least 3 specific techniques to ensure all voices are heard (not just the loudest)

4. DECISION-MAKING CLARITY: For each item, specify: Is this for information? Input? Decision?

5. FOLLOW-UP PLAN: What gets communicated after the meeting, to whom, and by when

CONSTRAINTS:
- Meeting must end on time — build in a 5-minute buffer
- No more than 20% of meeting time should be passive listening
- Include at least one moment of genuine teacher voice/input
- If the topic is potentially contentious, include a specific strategy for managing disagreement

FORMAT: Clean agenda document (shareable with staff) plus a separate facilitator guide with notes, talking points, and contingency plans.`,
  },
  {
    grade: "All Levels",
    subject: "Special Education",
    title: "Accommodation & Modification Generator",
    desc: "Generate a comprehensive set of classroom accommodations and modifications for a student with specific learning needs, aligned to their IEP goals.",
    timesSaved: "~35 min",
    tag: "Special Education",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    prompt: `ROLE: You are a special education specialist and inclusion coach with expertise in Universal Design for Learning (UDL), evidence-based accommodations, and supporting students with diverse learning needs in general education settings.

CONTEXT: I am a [ROLE: general education teacher / special education teacher / instructional coach] supporting a student with the following profile:
- Grade: [GRADE]
- Subject(s): [SUBJECTS]
- Disability category: [DISABILITY, e.g., ADHD, Dyslexia, Autism Spectrum Disorder, Emotional Behavioral Disorder, Intellectual Disability]
- Current IEP goals (brief summary): [GOALS]
- Specific challenges in my classroom: [DESCRIBE 2–3 SPECIFIC CHALLENGES]
- Student strengths: [STRENGTHS]
- Current accommodations in place: [LIST OR "none yet"]

TASK: Generate a comprehensive set of classroom supports organized into three categories:

1. ACCOMMODATIONS (changes to HOW the student accesses content — does not change what is learned):
   - Presentation accommodations (how information is delivered)
   - Response accommodations (how student demonstrates knowledge)
   - Setting accommodations (environment modifications)
   - Timing/scheduling accommodations

2. MODIFICATIONS (changes to WHAT is learned — only for students whose IEP specifies modified curriculum):
   - Content modifications for [SUBJECT]
   - Assessment modifications
   - Note: Flag if modifications are not appropriate for this student's IEP

3. INSTRUCTIONAL STRATEGIES (evidence-based teaching approaches):
   - 5 specific strategies for this student's learning profile
   - For each strategy: what it is, how to implement it, and what research supports it

4. TECHNOLOGY SUPPORTS: Specific assistive technology or AI tools that may benefit this student (with FERPA/COPPA compliance notes)

5. COLLABORATION NOTES: How to coordinate with the special education teacher, paraprofessional, and family

CONSTRAINTS:
- All accommodations must be legally appropriate and aligned to IDEA
- Distinguish clearly between accommodations and modifications
- Include implementation tips — not just what to do, but how
- Use person-first language throughout

FORMAT: Organized by category with clear headers. Include a one-page summary suitable for sharing with substitute teachers or support staff.`,
  },
];

function PromptCard({ p }: { p: Prompt }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(p.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard!", {
      description: "Paste into ChatGPT, Claude, Gemini, or any AI tool. Fill in the bracketed fields.",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span
              className="text-xs font-bold font-display px-2 py-0.5 rounded-full"
              style={{ backgroundColor: p.tagBg, color: p.tagColor }}
            >
              {p.tag}
            </span>
            <span className="text-xs text-gray-400 font-display font-semibold">{p.grade}</span>
            <span className="text-xs text-gray-300">·</span>
            <span className="text-xs text-gray-400">{p.subject}</span>
            {p.timesSaved && (
              <>
                <span className="text-xs text-gray-300">·</span>
                <span className="text-xs text-emerald-600 font-semibold">Saves {p.timesSaved}</span>
              </>
            )}
          </div>
          <h3 className="text-sm font-bold font-display text-[#0F2A4A] leading-snug">{p.title}</h3>
        </div>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.desc}</p>

      {/* Prompt preview toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-xs text-[#2563EB] font-semibold mb-2 hover:underline"
      >
        <BookOpen size={12} />
        {expanded ? "Hide prompt" : "Preview prompt"}
      </button>

      {expanded && (
        <div className="bg-[#F8FAFC] rounded-lg p-3 border border-gray-100 mb-3 max-h-48 overflow-y-auto">
          <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono leading-relaxed">{p.prompt}</pre>
        </div>
      )}

      <div className="mt-auto">
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-1.5 text-xs font-semibold font-display px-3 py-2 rounded-lg border transition-colors ${
            copied
              ? "bg-green-600 text-white border-green-600"
              : "bg-[#2563EB] text-white border-[#2563EB] hover:bg-blue-700"
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied to clipboard!" : "Copy Mega-Prompt"}
        </button>
      </div>
    </div>
  );
}

export default function PromptLibrary() {
  const [gradeFilter, setGradeFilter] = useState("All Levels");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [search, setSearch] = useState("");

  const filtered = prompts.filter((p) => {
    const matchGrade = gradeFilter === "All Levels" || p.grade === gradeFilter || p.grade === "All Levels";
    const matchSubject = subjectFilter === "All Subjects" || p.subject === subjectFilter;
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.tag.toLowerCase().includes(search.toLowerCase());
    return matchGrade && matchSubject && matchSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 bg-[#2563EB] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-blue-200 mb-3 block">
              Prompt Library — 25 Mega-Prompts
            </span>
            <h1 className="text-4xl font-extrabold font-display text-white mb-4 leading-tight">
              Grade-level mega-prompts that save real time.
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-4">
              Teachers using AI across multiple categories save an average of 10–14 hours per week. Every prompt here uses the 2026 RCTF structure — Role, Context, Task, Format — for maximum depth and accuracy.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">✓ 25 mega-prompts</span>
              <span className="flex items-center gap-1.5">✓ Pre-K through Administrators</span>
              <span className="flex items-center gap-1.5">✓ Works with ChatGPT, Claude, Gemini</span>
              <span className="flex items-center gap-1.5">✓ Copy with one click</span>
            </div>
          </div>
        </div>
      </section>

      {/* How mega-prompts work */}
      <section className="py-5 bg-blue-50 border-b border-blue-100">
        <div className="container">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">How to use these mega-prompts</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Each prompt uses the <strong>RCTF framework</strong> (Role → Context → Task → Format) — the 2026 standard for getting deep, accurate, classroom-ready AI outputs. Copy any prompt, paste it into ChatGPT, Claude, or Gemini, then fill in the <code className="bg-blue-100 px-1 rounded text-xs">[BRACKETED FIELDS]</code> with your specific details. The more specific you are, the better the output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-2">
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search prompts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {gradeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setGradeFilter(f)}
                  className={`text-xs font-semibold font-display px-3 py-1.5 rounded-full border transition-colors ${
                    gradeFilter === f
                      ? "bg-[#2563EB] text-white border-[#2563EB]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setSubjectFilter(f)}
                className={`text-xs font-semibold font-display px-3 py-1.5 rounded-full border transition-colors ${
                  subjectFilter === f
                    ? "bg-[#0D9488] text-white border-[#0D9488]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#0D9488] hover:text-[#0D9488]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500 font-display">
              Showing <strong className="text-[#0F2A4A]">{filtered.length}</strong> of {prompts.length} prompts
            </p>
            <p className="text-xs text-gray-400">New prompts added monthly via Office Hours /AI</p>
          </div>
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p, i) => (
                <PromptCard key={i} p={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 font-display mb-2">No prompts match your filters.</p>
              <button
                onClick={() => { setGradeFilter("All Levels"); setSubjectFilter("All Subjects"); setSearch(""); }}
                className="text-sm text-[#2563EB] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-[#0F2A4A]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1">New prompts added every Sunday.</h3>
              <p className="text-sm text-blue-200">Subscribe to Office Hours /AI — one prompt, one tool, one story. Free.</p>
            </div>
            <Link
              href="/newsletter"
              className="shrink-0 flex items-center gap-2 bg-[#E8533A] hover:bg-[#d4432a] text-white font-semibold font-display px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe Free <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
