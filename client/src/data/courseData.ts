export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: string;
  template?: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  lessons: Lesson[];
  duration: string;
  icon: string;
  color: string;
}

export const courseModules: Module[] = [
  {
    id: 1,
    title: "The Basics",
    subtitle: "The \"Golden Formula\"",
    description: "Master the three essential ingredients every AI prompt needs.",
    duration: "15 min",
    icon: "Lightbulb",
    color: "bg-blue-500",
    lessons: [
      {
        id: 1,
        title: "The 3 Ingredients",
        duration: "5 min",
        content: `# The 3 Ingredients of a Great Prompt

Every effective AI prompt has three essential parts. Think of it like giving directions to a substitute teacher—you need to tell them who they are, what they need to do, and how to do it.

## The Golden Formula

**Context + Task + Constraints = Great Results**

### 1. Context (Who are you?)
Tell the AI what role to play. This dramatically improves the quality of responses.

**Example:**
- ❌ Bad: "Create a lesson plan"
- ✅ Good: "You are an experienced 5th grade science teacher..."

### 2. Task (What do you need?)
Be specific about what you want the AI to create or do.

**Example:**
- ❌ Bad: "Help me with math"
- ✅ Good: "Create 10 word problems for practicing multiplication of fractions"

### 3. Constraints (Format/Length/Style)
Tell the AI exactly how you want the output formatted.

**Example:**
- ❌ Bad: "Make it good"
- ✅ Good: "Format as a table with 3 columns: Problem, Answer, Explanation. Keep each problem under 50 words."

## Why This Works

AI models are trained on millions of examples. When you give them a specific role (context), they pull from relevant examples. When you're specific about the task and constraints, they know exactly what success looks like.

## Try It Yourself

Compare these two prompts:

**Weak Prompt:**
"Create a quiz about the Civil War"

**Strong Prompt:**
"You are a high school history teacher. Create a 10-question multiple choice quiz about the causes of the Civil War. Include 4 answer choices for each question, with one correct answer. Format it so I can easily copy it into Google Forms."

The second prompt will give you something you can actually use in your classroom tomorrow.`,
        template: `You are a [GRADE LEVEL] [SUBJECT] teacher with [X] years of experience.

Create [SPECIFIC ITEM] about [TOPIC].

Requirements:
- [CONSTRAINT 1]
- [CONSTRAINT 2]
- [CONSTRAINT 3]

Format: [HOW YOU WANT IT STRUCTURED]`
      },
      {
        id: 2,
        title: "The \"Persona\" Trick",
        duration: "5 min",
        content: `# The "Persona" Trick

The single most powerful technique for better AI responses is telling it **who to be**.

## Why Personas Matter

When you tell ChatGPT "You are an expert 5th grade math teacher," it doesn't just change the tone—it fundamentally changes what knowledge and examples it draws from.

Think of it like this: If you ask a random person on the street for teaching advice, you'll get generic answers. But if you ask a veteran teacher with 20 years of experience, you'll get specific, practical advice.

## Effective Personas for Teachers

### For Lesson Planning
"You are an experienced [GRADE] [SUBJECT] teacher who specializes in differentiated instruction and student engagement."

### For Assessment Creation
"You are a curriculum specialist who creates rigorous, standards-aligned assessments that accurately measure student understanding."

### For Parent Communication
"You are a compassionate teacher who communicates clearly with parents about student progress while maintaining a positive, solution-focused tone."

### For IEP Goals
"You are a special education teacher with expertise in writing measurable, achievable IEP goals that align with state standards."

## The Difference It Makes

**Without Persona:**
"Create a lesson plan about photosynthesis"
→ Gets you a generic, textbook-style outline

**With Persona:**
"You are a 7th grade life science teacher known for making complex concepts accessible through hands-on activities. Create a lesson plan about photosynthesis."
→ Gets you an engaging, age-appropriate lesson with practical activities

## Pro Tips

1. **Be specific about grade level** - "5th grade" is better than "elementary"
2. **Add expertise** - "who specializes in..." gives even better results
3. **Include teaching style** - "who uses inquiry-based learning" shapes the approach
4. **Mention constraints** - "who teaches in a school with limited technology" helps AI adapt

## Common Personas to Save

Create a note file with your go-to personas so you can copy-paste them:

- Your standard teaching persona
- Your assessment creation persona  
- Your parent communication persona
- Your admin/email persona

This saves time and ensures consistency across all your AI interactions.`,
        template: `You are a [GRADE LEVEL] [SUBJECT] teacher who [TEACHING STYLE/EXPERTISE].

[Your task goes here]`
      },
      {
        id: 3,
        title: "Refining the Output",
        duration: "5 min",
        content: `# Refining the Output (Iterative Prompting)

The first response from AI is rarely perfect. The secret? **Keep the conversation going.**

## The Iteration Mindset

Think of AI like a teaching assistant who's eager to help but needs feedback. Your first prompt gets you 70% of the way there. A few follow-up prompts get you to 100%.

## Simple Refinement Phrases

### When it's too complex:
"Simplify this for students reading at a 4th grade level"

### When it's too simple:
"Add more depth and challenge for advanced learners"

### When the format is wrong:
"Reformat this as a table with columns for [X, Y, Z]"

### When you need more examples:
"Give me 5 more examples like this"

### When it's too long:
"Condense this to fit on one page"

### When it's too short:
"Expand section 3 with more detail and examples"

## The "Yes, And..." Technique

Instead of starting over, build on what's working:

**Example Conversation:**

**You:** "Create a worksheet about fractions"

**AI:** [Gives you a basic worksheet]

**You:** "Great start. Now add a word problem section at the end."

**AI:** [Adds word problems]

**You:** "Perfect. Now add an answer key on page 2."

**AI:** [Adds answer key]

**You:** "Last thing—add a visual model for each problem to help struggling learners."

## When to Start Over

Sometimes it's faster to start fresh with a better prompt. Start over if:
- The AI completely misunderstood your request
- The content is factually wrong
- The format is so far off it would take 5+ iterations to fix

## The 3-Iteration Rule

If you're not happy after 3 refinements, your original prompt probably wasn't specific enough. Start over with:
- Clearer context
- More specific task description
- Explicit constraints

## Save Your Winners

When you finally get the perfect output, save both:
1. The final prompt that worked
2. The output itself

Build a personal library of "prompts that work" for your most common tasks.

## Practice Exercise

Try this progression:

1. **Start:** "Create a quiz about the water cycle"
2. **Refine:** "Make it 10 questions, multiple choice"
3. **Refine:** "Add an answer key with explanations"
4. **Refine:** "Format it so I can paste it directly into Google Forms"

See how each iteration gets you closer to classroom-ready?`,
        template: `[After getting initial response]

That's a good start. Now [SPECIFIC CHANGE YOU WANT].

[After second response]

Almost perfect. Just [ONE MORE ADJUSTMENT].`
      }
    ]
  },
  {
    id: 2,
    title: "The Lesson Planner",
    subtitle: "From Standards to Scripts",
    description: "Create complete lesson plans, differentiate instantly, and align to standards.",
    duration: "20 min",
    icon: "BookOpen",
    color: "bg-green-500",
    lessons: [
      {
        id: 1,
        title: "The 5-Minute Lesson Plan",
        duration: "7 min",
        content: `# The 5-Minute Lesson Plan

Stop spending hours on lesson plans. With the right prompt, you can generate a solid lesson framework in minutes.

## The Complete Lesson Plan Prompt

This prompt generates a full lesson plan with all the components you actually need:

\`\`\`
You are an experienced [GRADE] [SUBJECT] teacher.

Create a complete [DURATION]-minute lesson plan on [TOPIC].

Include:
1. Learning objective (measurable)
2. Materials needed
3. Warm-up activity (5 min)
4. Direct instruction (10-15 min)
5. Guided practice (10 min)
6. Independent practice (10 min)
7. Closure/exit ticket (5 min)
8. Differentiation strategies for struggling and advanced learners

Format each section clearly with time allocations.
\`\`\`

## Real Example

**Prompt:**
"You are an experienced 4th grade math teacher. Create a complete 45-minute lesson plan on multiplying two-digit numbers. Include: learning objective, materials, warm-up, direct instruction, guided practice, independent practice, closure, and differentiation strategies."

**What You Get:**
A structured lesson plan you can actually teach tomorrow, with specific activities, examples, and timing.

## Customizing for Your Style

Add these modifiers based on your teaching approach:

### For Inquiry-Based Learning:
"Use an inquiry-based approach where students discover the concept through guided questions"

### For Hands-On Learning:
"Include hands-on manipulatives and kinesthetic activities"

### For Technology Integration:
"Incorporate [specific tool like Kahoot, Nearpod, etc.]"

### For Limited Resources:
"Use only materials commonly found in classrooms (no special supplies needed)"

## Quick Lesson Plan Variations

### Mini-Lesson (15 minutes):
"Create a 15-minute mini-lesson on [TOPIC] focusing only on direct instruction and one practice activity"

### Station Rotation:
"Create 4 station activities (10 minutes each) for learning [TOPIC], including one teacher-led station"

### Flipped Classroom:
"Create a lesson plan where students watch a 10-minute video at home, then do [TOPIC] activities in class"

## Time-Saving Tips

1. **Generate the framework first**, then customize the activities
2. **Save your best prompts** for different lesson types
3. **Generate multiple lessons at once**: "Create 5 lesson plans for a unit on..."
4. **Ask for weekly plans**: "Create a 5-day lesson sequence on..."

## What to Always Check

AI-generated lessons are great starting points, but always verify:
- ✅ Age-appropriateness of activities
- ✅ Realistic timing (AI sometimes underestimates)
- ✅ Availability of materials
- ✅ Alignment with your actual standards
- ✅ Safety considerations for hands-on activities

## Beyond the Basics

Once you have your lesson plan, use AI to:
- Generate the slideshow content
- Create the practice worksheets
- Write the exit ticket questions
- Draft the parent communication about the unit

We'll cover these in later modules!`,
        template: `You are an experienced [GRADE] [SUBJECT] teacher.

Create a complete [DURATION]-minute lesson plan on [TOPIC].

Include:
1. Learning objective (measurable)
2. Materials needed
3. Warm-up activity ([X] min)
4. Direct instruction ([X] min)
5. Guided practice ([X] min)
6. Independent practice ([X] min)
7. Closure/exit ticket ([X] min)
8. Differentiation strategies

Format each section clearly with time allocations.`
      },
      {
        id: 2,
        title: "Differentiation on Autopilot",
        duration: "7 min",
        content: `# Differentiation on Autopilot

Differentiation is essential but time-consuming. AI can instantly adapt any content for different learning levels.

## The Magic Phrase

Add this to any prompt to get differentiated versions:

"Create three versions: one for students reading 2 years below grade level, one at grade level, and one for advanced learners"

## Differentiation Strategies

### Reading Level Adjustment

**Prompt:**
"Rewrite this passage about [TOPIC] at a 3rd grade reading level while keeping the key concepts intact"

**Use when:**
- You have English language learners
- Students with reading difficulties
- You need to scaffold complex text

### Complexity Scaling

**Prompt:**
"Create three versions of this math problem: basic (one-step), intermediate (two-step), and advanced (multi-step with real-world context)"

**Use when:**
- You have mixed-ability groups
- You want to challenge advanced students
- You're doing station rotations

### Support Level Variation

**Prompt:**
"Create this worksheet in three versions:
1. With sentence starters and word bank
2. Standard version
3. Open-ended with extension questions"

**Use when:**
- Students need varying levels of scaffolding
- You're assessing the same skill at different depths
- You want to reduce frustration for struggling learners

## Real-World Examples

### Example 1: Reading Passage

**Original Prompt:**
"Create a 200-word passage about photosynthesis for 7th graders"

**Differentiated Prompt:**
"Create three versions of a passage about photosynthesis:
1. 150 words, 5th grade reading level, with key terms bolded
2. 200 words, 7th grade reading level (standard)
3. 250 words, 9th grade reading level with advanced vocabulary"

### Example 2: Math Practice

**Original Prompt:**
"Create 10 fraction multiplication problems"

**Differentiated Prompt:**
"Create 10 fraction multiplication problems in three difficulty levels:
- Level 1: Multiply fraction by whole number (e.g., 1/2 × 3)
- Level 2: Multiply two simple fractions (e.g., 1/2 × 1/4)
- Level 3: Multiply mixed numbers (e.g., 2 1/3 × 1 1/2)"

### Example 3: Writing Assignment

**Original Prompt:**
"Create a persuasive writing prompt about recycling"

**Differentiated Prompt:**
"Create a persuasive writing assignment about recycling with three scaffolding levels:
- Scaffold A: Provide thesis statement, three main points, and sentence starters
- Scaffold B: Provide thesis statement and main points only
- Scaffold C: Open-ended with requirement to include counterargument"

## Differentiation by Learning Style

### Visual Learners:
"Add a visual diagram or graphic organizer to support this concept"

### Kinesthetic Learners:
"Create a hands-on activity where students physically manipulate materials to learn [TOPIC]"

### Auditory Learners:
"Create discussion questions and a think-pair-share activity for [TOPIC]"

## Quick Differentiation Tricks

### Vocabulary Support:
"Add a vocabulary box with definitions for these terms: [LIST]"

### Step-by-Step Breakdown:
"Break this complex problem into 5 smaller steps with checkpoints"

### Real-World Connections:
"Add real-world examples that would interest [AGE] students"

### Choice Boards:
"Create a choice board with 9 activities for learning [TOPIC], varying in difficulty and learning style"

## Time-Saving Workflow

1. **Create the standard version first**
2. **Then prompt:** "Now create a simplified version for struggling learners"
3. **Then prompt:** "Now create an enrichment version for advanced learners"

This takes 3 minutes total instead of 30 minutes of manual work.

## What to Watch For

- ✅ Make sure "simplified" doesn't mean "dumbed down"—keep the rigor
- ✅ Advanced versions should go deeper, not just add more work
- ✅ Check that vocabulary is actually appropriate for the reading level
- ✅ Ensure all versions assess the same core standard`,
        template: `Create three versions of [ASSIGNMENT/MATERIAL]:

Version 1 (Approaching):
- [Reading level or support needed]
- [Specific scaffolds to include]

Version 2 (On-Level):
- [Standard expectations]

Version 3 (Advanced):
- [Extension or enrichment elements]`
      },
      {
        id: 3,
        title: "Standard Aligner",
        duration: "6 min",
        content: `# Standard Aligner

Make sure your lessons align with standards without spending hours cross-referencing documents.

## The Standards Alignment Prompt

**Basic Version:**
"Ensure this lesson aligns with [SPECIFIC STANDARD CODE AND TEXT]. Adjust the learning objective and assessment to directly address this standard."

**Advanced Version:**
"Review this lesson plan and:
1. Identify which parts align with [STANDARD]
2. Suggest modifications to better address the standard
3. Add an assessment question that directly measures this standard"

## Real Examples

### Example 1: Math Standard

**Prompt:**
"Create a lesson plan that addresses Common Core Standard 5.NF.B.4: Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction. Include a measurable objective, activities, and an exit ticket that assesses this specific standard."

### Example 2: ELA Standard

**Prompt:**
"Modify this reading comprehension lesson to align with CCSS.ELA-LITERACY.RL.4.3: Describe in depth a character, setting, or event in a story, drawing on specific details in the text. Adjust the questions and activities to specifically target this skill."

### Example 3: Science Standard

**Prompt:**
"Create a lesson addressing NGSS 3-LS1-1: Develop models to describe that organisms have unique and diverse life cycles. Include a hands-on modeling activity and assessment that demonstrates student understanding of this standard."

## Reverse Engineering: Start with Standards

Instead of creating a lesson and then checking alignment, start with the standard:

**Prompt Template:**
"I need to teach [STANDARD CODE]: [STANDARD TEXT]. Create a complete lesson plan with:
- A measurable objective that directly addresses this standard
- Activities that build toward mastery
- An assessment that measures this specific skill
- Success criteria students can understand"

## Multiple Standards in One Lesson

**Prompt:**
"Create a lesson that addresses both [STANDARD 1] and [STANDARD 2]. Show how the activities connect to each standard and create separate assessment items for each."

**Example:**
"Create a lesson that addresses both CCSS.MATH.CONTENT.4.OA.A.3 (multi-step word problems) and CCSS.MATH.CONTENT.4.NBT.B.4 (addition and subtraction). Include problems that require both skills."

## Checking Existing Lessons

Already have a lesson? Ask AI to audit it:

**Prompt:**
"Review this lesson plan and tell me:
1. Which standards it addresses
2. How well it aligns (rate 1-10 and explain)
3. What I should add or change to better align with [TARGET STANDARD]"

## Creating Standards-Based Assessments

**Prompt:**
"Create a 10-question assessment for [STANDARD]. Include:
- Question types that match the standard's verb (analyze, evaluate, create, etc.)
- A mix of difficulty levels
- An answer key with explanations
- A rubric aligned to the standard's proficiency levels"

## Unit Planning with Standards

**Prompt:**
"Create a 2-week unit plan that builds toward mastery of these standards: [LIST STANDARDS]. Show how each lesson builds on the previous one and include a summative assessment."

## Time-Saving Tips

1. **Keep a standards document handy** - Copy-paste the exact standard text
2. **Use standard codes** - "CCSS.MATH.CONTENT.5.NF.B.4" is clearer than "fraction multiplication"
3. **Ask for learning progressions** - "Break this standard into 5 sub-skills students need to master"
4. **Generate year-long pacing** - "Create a pacing guide for teaching all 4th grade math standards"

## What to Always Verify

- ✅ The AI interpreted the standard correctly
- ✅ The lesson actually teaches what the standard requires (not just mentions it)
- ✅ The assessment measures the right depth of knowledge
- ✅ Prerequisites are addressed before the target standard

## Pro Tip: Create a Standards Library

Build a collection of prompts for your most-taught standards:

"I teach [STANDARD] every year. Create 3 different lesson approaches:
1. Hands-on/kinesthetic
2. Technology-integrated
3. Collaborative/discussion-based"

Save the best results for next year!`,
        template: `Create a lesson plan that addresses [STANDARD CODE]: [FULL STANDARD TEXT].

Include:
- Measurable objective aligned to the standard
- Activities that build the specific skills in the standard
- Assessment that measures mastery of this standard
- Success criteria for students

Ensure the lesson directly teaches what the standard requires, not just related content.`
      }
    ]
  },
  {
    id: 3,
    title: "The Resource Generator",
    subtitle: "Tangible Classroom Materials",
    description: "Generate quizzes, rubrics, and worksheets ready to use.",
    duration: "20 min",
    icon: "Target",
    color: "bg-purple-500",
    lessons: [
      {
        id: 1,
        title: "The Quiz Maker",
        duration: "7 min",
        content: `# The Quiz Maker

Generate classroom-ready quizzes in seconds, not hours.

## The Complete Quiz Prompt

\`\`\`
You are an experienced [GRADE] [SUBJECT] teacher.

Create a [NUMBER]-question [QUIZ TYPE] about [TOPIC].

Requirements:
- [NUMBER] questions total
- Mix of difficulty levels (easy, medium, hard)
- Include an answer key with explanations
- Format: [HOW YOU WANT IT]

Focus on [SPECIFIC SKILLS OR CONCEPTS].
\`\`\`

## Quiz Types You Can Generate

### Multiple Choice
"Create a 10-question multiple choice quiz about the water cycle. Include 4 answer choices per question, with one correct answer. Add an answer key with brief explanations."

### True/False with Corrections
"Create a 15-question true/false quiz about World War II. For false statements, have students write the correction. Include an answer key."

### Fill-in-the-Blank
"Create a 12-question fill-in-the-blank quiz about cell organelles. Provide a word bank with 15 words (3 are distractors). Include an answer key."

### Short Answer
"Create 8 short-answer questions about photosynthesis. Each answer should be 2-3 sentences. Include a sample answer key with key points students should mention."

### Matching
"Create a matching quiz with 10 vocabulary terms and their definitions related to geometry. Include an answer key."

## Format Options

### Google Forms Ready
"Format this quiz so I can easily copy-paste it into Google Forms. Put each question on a new line with answer choices labeled A, B, C, D."

### Printable Worksheet
"Format this as a printable worksheet with space for student name, date, and answers. Include an answer key on page 2."

### Kahoot/Quizizz Style
"Create this quiz in a format I can import to Kahoot: question, 4 answers, correct answer marked, 30-second time limit per question."

## Advanced Quiz Features

### Tiered Difficulty
"Create a quiz with three sections: Basic (questions 1-5), Intermediate (questions 6-8), Advanced (questions 9-10). Students must complete Basic before moving to Intermediate."

### With Visuals
"Create a 10-question quiz about geometric shapes. For each question, describe a simple diagram I should include (e.g., 'Show a triangle with sides labeled 3, 4, 5')."

### Spiral Review
"Create a 15-question quiz that covers: 40% current unit (fractions), 40% last unit (decimals), 20% two units ago (place value)."

## Real-World Examples

### Example 1: Reading Comprehension

**Prompt:**
"Create a 10-question multiple choice quiz about the short story 'The Gift of the Magi.' Include:
- 3 questions about plot
- 3 questions about character motivation
- 2 questions about theme
- 2 questions about literary devices
Format for Google Forms with answer key."

### Example 2: Math Skills

**Prompt:**
"Create a 12-problem quiz on solving one-step equations. Include:
- 4 addition equations
- 4 subtraction equations
- 2 multiplication equations
- 2 division equations
Mix of positive and negative numbers. Include step-by-step solutions."

### Example 3: Science Concepts

**Prompt:**
"Create a 15-question quiz on the rock cycle for 6th graders. Include:
- 5 multiple choice (4 options each)
- 5 true/false
- 5 fill-in-the-blank with word bank
Include an answer key and a diagram of the rock cycle I should attach."

## Time-Saving Variations

### Quick Exit Ticket
"Create 3 quick exit ticket questions about [TODAY'S TOPIC] that I can project on the board. Students should be able to answer in 2-3 minutes."

### Weekly Quiz Template
"Create a template for weekly spelling quizzes: 10 fill-in-the-blank sentences, 5 definitions, and 5 'use in a sentence' questions. I'll plug in new words each week."

### Unit Test
"Create a comprehensive 50-question unit test on [TOPIC] with:
- 30 multiple choice
- 10 true/false
- 10 short answer
Include answer key and point values (100 points total)."

## Quality Checks

After generating, always verify:
- ✅ Questions actually assess understanding (not just recall)
- ✅ Answer choices are plausible (no obvious wrong answers)
- ✅ Wording is clear and age-appropriate
- ✅ Answer key is correct (AI sometimes makes mistakes!)
- ✅ No questions are accidentally duplicates

## Pro Tips

1. **Generate more than you need**, then pick the best questions
2. **Ask for question banks**: "Create 50 questions about [TOPIC], I'll choose 20 for the quiz"
3. **Reuse and modify**: "Take this quiz and create a similar one about [RELATED TOPIC]"
4. **Create versions**: "Create two versions of this quiz with different questions but same difficulty"`,
        template: `You are an experienced [GRADE] [SUBJECT] teacher.

Create a [NUMBER]-question [QUIZ TYPE] about [TOPIC].

Requirements:
- [QUESTION BREAKDOWN]
- Mix of difficulty levels
- Include answer key with explanations
- Format: [GOOGLE FORMS / PRINTABLE / OTHER]

Focus on assessing [SPECIFIC SKILLS].`
      },
      {
        id: 2,
        title: "The Rubric Architect",
        duration: "7 min",
        content: `# The Rubric Architect

Create detailed, standards-aligned rubrics that make grading faster and feedback clearer.

## The Complete Rubric Prompt

\`\`\`
You are an experienced [GRADE] [SUBJECT] teacher.

Create a detailed rubric for [ASSIGNMENT TYPE] on [TOPIC].

Include:
- 4 performance levels (Exemplary, Proficient, Developing, Beginning)
- [NUMBER] criteria categories
- Specific, observable descriptors for each level
- Point values that total [TOTAL POINTS]

Make descriptors specific enough that students understand exactly what's expected.
\`\`\`

## Common Rubric Types

### Writing Rubric

**Prompt:**
"Create a rubric for a 5-paragraph persuasive essay for 8th graders. Include criteria for: thesis statement, evidence/support, organization, language/word choice, and conventions. Use 4 performance levels worth 100 points total."

### Project Rubric

**Prompt:**
"Create a rubric for a science fair project for 6th graders. Include criteria for: research question, methodology, data collection, analysis, presentation, and creativity. Use 4 levels worth 50 points total."

### Presentation Rubric

**Prompt:**
"Create a rubric for a 10-minute oral presentation for high school students. Include criteria for: content knowledge, organization, delivery, visual aids, and response to questions. Use 4 levels worth 100 points total."

## Rubric Variations

### Single-Point Rubric

**Prompt:**
"Create a single-point rubric for [ASSIGNMENT]. List criteria in the middle column, with space for 'Areas for Growth' on the left and 'Areas of Strength' on the right. Focus on these 6 criteria: [LIST]."

### Checklist Rubric

**Prompt:**
"Create a checklist-style rubric for [ASSIGNMENT] with clear yes/no criteria. Include 15 items students must include, each worth specific points. Total: 100 points."

### Standards-Based Rubric

**Prompt:**
"Create a standards-based rubric for [ASSIGNMENT] that assesses [STANDARD]. Use these proficiency levels: Advanced (4), Proficient (3), Basic (2), Below Basic (1). Include specific evidence of each level."

## Real-World Examples

### Example 1: Lab Report

**Prompt:**
"Create a rubric for a high school biology lab report. Include criteria for:
- Hypothesis (clear, testable)
- Procedure (detailed, replicable)
- Data (organized, accurate)
- Analysis (thorough, uses evidence)
- Conclusion (addresses hypothesis, discusses errors)
Use 4 levels, 50 points total. Make descriptors specific to lab reports."

### Example 2: Group Project

**Prompt:**
"Create a rubric for a 4th grade group project on state history. Include criteria for:
- Research (depth and accuracy)
- Collaboration (teamwork, equal participation)
- Creativity (originality, effort)
- Presentation (clarity, organization)
Use 4 levels, 40 points total. Include both group and individual accountability."

### Example 3: Math Problem-Solving

**Prompt:**
"Create a rubric for assessing multi-step math problem-solving for 7th graders. Include criteria for:
- Understanding (identifies key information)
- Strategy (chooses appropriate method)
- Execution (calculations are correct)
- Communication (shows work clearly)
Use 4 levels, 20 points total."

## Student-Friendly Rubrics

**Prompt:**
"Create a student-friendly version of this rubric using 'I can' statements. Rewrite each descriptor so a [GRADE] student can self-assess before submitting."

**Example Output:**
- Exemplary: "I can write a clear thesis that takes a strong position and previews my main arguments"
- Proficient: "I can write a thesis that states my position clearly"
- Developing: "I can write a thesis, but my position isn't very clear"
- Beginning: "I need help writing a thesis statement"

## Time-Saving Tricks

### Template Rubrics

**Prompt:**
"Create a general writing rubric template I can use for any essay. Include criteria for: thesis, evidence, organization, style, and conventions. Leave [TOPIC] blank so I can customize it."

### Quick Feedback Rubric

**Prompt:**
"Create a simplified 3-level rubric (Exceeds, Meets, Needs Work) for quickly grading [ASSIGNMENT]. Focus on the 3 most important criteria only."

### Peer Assessment Rubric

**Prompt:**
"Create a simple peer assessment rubric for [ASSIGNMENT] that students can use to give each other feedback. Use student-friendly language and 3 criteria only."

## Advanced Features

### With Examples

**Prompt:**
"Create a rubric for [ASSIGNMENT] and include a concrete example for each performance level in the 'Organization' category."

### With Weighted Categories

**Prompt:**
"Create a rubric for [ASSIGNMENT] where Content is worth 50%, Organization is 25%, and Mechanics is 25%. Total: 100 points."

### With Self-Assessment Column

**Prompt:**
"Create a rubric for [ASSIGNMENT] with an additional column where students rate themselves before submitting. Include reflection prompts."

## Quality Checks

After generating, verify:
- ✅ Descriptors are specific and observable (not vague like "good" or "excellent")
- ✅ Difference between levels is clear
- ✅ Point values make sense and add up correctly
- ✅ Language is appropriate for student age
- ✅ All important aspects of the assignment are covered

## Pro Tips

1. **Show the rubric to students BEFORE they start** - It's a learning tool, not just a grading tool
2. **Ask AI to highlight common mistakes**: "Add a column showing common errors for each criterion"
3. **Create exemplars**: "Based on this rubric, write a sample paragraph that would score 'Exemplary'"
4. **Make it reusable**: "Create a rubric I can use for all persuasive essays this year"`,
        template: `You are an experienced [GRADE] [SUBJECT] teacher.

Create a detailed rubric for [ASSIGNMENT TYPE] on [TOPIC].

Include:
- 4 performance levels: Exemplary, Proficient, Developing, Beginning
- These criteria: [LIST CRITERIA]
- Specific, observable descriptors for each level
- Point values (total: [NUMBER] points)

Make descriptors specific enough that students understand expectations.`
      },
      {
        id: 3,
        title: "Worksheet Wizard",
        duration: "6 min",
        content: `# Worksheet Wizard

Generate practice worksheets, reading passages, and activities in minutes.

## The Basic Worksheet Prompt

\`\`\`
You are an experienced [GRADE] [SUBJECT] teacher.

Create a worksheet for practicing [SKILL/TOPIC].

Include:
- [NUMBER] problems/questions
- Mix of difficulty levels
- Clear instructions
- Answer key on separate page

Format: [PRINTABLE / DIGITAL / OTHER]
\`\`\`

## Worksheet Types

### Practice Problems

**Math:**
"Create a worksheet with 20 two-digit multiplication problems. Include 10 with regrouping and 10 without. Arrange in 4 columns. Include answer key."

**Grammar:**
"Create a worksheet with 15 sentences containing subject-verb agreement errors. Students must identify and correct each error. Include answer key with explanations."

### Reading Passages with Questions

**Prompt:**
"Create a 250-word informational passage about [TOPIC] at a [GRADE] reading level. Include:
- 5 multiple choice comprehension questions
- 3 short answer questions
- Vocabulary list with 5 key terms
- Answer key"

### Graphic Organizers

**Prompt:**
"Create a [TYPE] graphic organizer for [PURPOSE]. Include:
- Clear labels for each section
- Guiding questions or prompts
- Example of how to use it
- Blank version students can fill in"

**Types:** Venn diagram, T-chart, KWL chart, story map, concept web, timeline, etc.

## Real-World Examples

### Example 1: Math Worksheet

**Prompt:**
"Create a mixed practice worksheet for 5th grade math covering:
- 5 fraction addition problems (like denominators)
- 5 fraction subtraction problems (like denominators)
- 5 word problems using fractions
Arrange neatly on one page. Include answer key with work shown."

### Example 2: Vocabulary Practice

**Prompt:**
"Create a vocabulary worksheet for these 10 words: [LIST WORDS]. Include:
- Definitions (student-friendly)
- Fill-in-the-blank sentences (one per word)
- Matching section (words to definitions)
- 'Use 5 words in a paragraph' section
Include answer key."

### Example 3: Science Diagram

**Prompt:**
"Create a labeling worksheet for the parts of a plant cell. Include:
- Description of a blank cell diagram I should include
- List of 12 parts students need to label
- Word bank (scrambled)
- Brief function description for each part (on answer key)"

## Differentiated Worksheets

**Prompt:**
"Create three versions of a worksheet on [TOPIC]:
- Version A: 10 problems, with examples and hints
- Version B: 15 problems, standard difficulty
- Version C: 12 problems, more complex with extension questions
Include answer keys for all versions."

## Interactive Worksheet Features

### With QR Codes

**Prompt:**
"Create a worksheet on [TOPIC] that includes 5 QR code placeholders linking to:
1. Instructional video
2. Interactive practice game
3. Additional examples
4. Hint sheet
5. Self-check quiz
Describe what each QR code should link to."

### With Self-Checking

**Prompt:**
"Create a self-checking worksheet where students can verify their answers. Include a 'Check Your Work' section with hints like: 'If you got 42 for #3, you're on the right track!'"

### Puzzle-Style

**Prompt:**
"Create a math crossword puzzle using [TOPIC]. Clues should be problems students solve, and answers go in the puzzle. Include 15 across and 15 down. Provide blank puzzle and answer key."

## Time-Saving Variations

### Weekly Homework Template

**Prompt:**
"Create a weekly homework template for [SUBJECT] with sections for:
- Monday: [TYPE OF PRACTICE]
- Tuesday: [TYPE OF PRACTICE]
- Wednesday: [TYPE OF PRACTICE]
- Thursday: [TYPE OF PRACTICE]
I'll fill in specific problems each week."

### Station Activity Sheets

**Prompt:**
"Create 4 different worksheet activities for learning [TOPIC], one for each station in a rotation:
- Station 1: Independent practice
- Station 2: Partner activity
- Station 3: Challenge problems
- Station 4: Real-world application
Each should take 10 minutes."

### Exit Ticket Collection

**Prompt:**
"Create 10 different exit ticket worksheets for [UNIT]. Each should have 2-3 quick questions students can answer in 3 minutes. I'll use one per day."

## Format Specifications

### Google Classroom Ready

**Prompt:**
"Create this worksheet in a format I can post to Google Classroom where students type their answers directly. Use fillable fields like: 'Answer 1: ___________'"

### Print-Friendly

**Prompt:**
"Create this worksheet formatted for standard 8.5x11 paper with:
- 1-inch margins
- Large font (14pt for questions)
- Plenty of white space for student work
- Answer key on page 2"

### Accessible Format

**Prompt:**
"Create this worksheet with accessibility features:
- High contrast
- Large, clear font
- Simple layout
- Text descriptions for any visual elements
- Numbered lines for easy reference"

## Quality Checks

After generating, verify:
- ✅ Instructions are clear and complete
- ✅ Layout is clean and not cluttered
- ✅ Difficulty progression makes sense
- ✅ Answer key is accurate
- ✅ Appropriate amount of work (not too much/little)
- ✅ Space for students to show work

## Pro Tips

1. **Generate answer keys separately**: "Now create a detailed answer key showing all work for each problem"
2. **Create variations**: "Create 3 similar worksheets with different numbers so students can't copy"
3. **Add visuals**: "Describe simple clipart or icons I should add to make this more engaging"
4. **Build banks**: "Create 50 problems on [TOPIC], I'll choose 20 for each worksheet"`,
        template: `You are an experienced [GRADE] [SUBJECT] teacher.

Create a worksheet for practicing [SKILL/TOPIC].

Include:
- [NUMBER] problems/questions
- Clear instructions at the top
- Mix of difficulty (easy, medium, hard)
- Organized layout
- Answer key on page 2

Format for [PRINT / DIGITAL / SPECIFIC PLATFORM].`
      }
    ]
  },
  {
    id: 4,
    title: "The Visual & Creative Aid",
    subtitle: "Engagement Tools",
    description: "Use AI to create images, find videos, and generate creative prompts.",
    duration: "15 min",
    icon: "Sparkles",
    color: "bg-orange-500",
    lessons: [
      {
        id: 1,
        title: "Image Prompting 101",
        duration: "5 min",
        content: `# Image Prompting 101

Generate custom images for your lessons using AI image tools like DALL-E, Midjourney, or Canva's AI features.

## Basic Image Prompt Structure

**Formula:** [SUBJECT] + [STYLE] + [DETAILS] + [PURPOSE]

**Example:**
"A simple diagram of the water cycle, cartoon style, with clear labels, suitable for 4th grade science lesson"

## Classroom Image Types

### Diagrams and Illustrations

**Science:**
"Create a simple, labeled diagram of a plant cell. Cartoon style, bright colors, clear labels for nucleus, cell wall, chloroplast, mitochondria. Suitable for 7th grade."

**Math:**
"Create a visual representation of equivalent fractions showing 1/2, 2/4, and 4/8 as shaded rectangles. Simple, colorful, easy to understand."

**History:**
"Create a simple timeline illustration showing 5 major events of the American Revolution. Cartoon style, appropriate for 5th graders."

### Slide Backgrounds

**Prompt:**
"Create a professional slide background for a lesson on [TOPIC]. [COLOR SCHEME], minimalist, with subtle [RELEVANT IMAGERY] in the corners. Leave center clear for text."

**Example:**
"Create a professional slide background for a lesson on space exploration. Blue and purple gradient, minimalist, with subtle stars and planets in the corners. Leave center clear for text."

### Story Illustrations

**Prompt:**
"Create an illustration for a children's story about [TOPIC]. [STYLE: watercolor/cartoon/realistic], [MOOD: cheerful/mysterious/adventurous], appropriate for [AGE] students."

### Vocabulary Visuals

**Prompt:**
"Create a simple visual representation of the word '[WORD]' that helps students remember its meaning. [STYLE], clear and memorable."

**Example:**
"Create a simple visual representation of the word 'photosynthesis' showing sunlight, a leaf, and energy. Cartoon style, clear and memorable for 5th graders."

## Style Keywords That Work

- **Simple/Minimalist** - Clean, uncluttered
- **Cartoon/Illustrated** - Friendly, age-appropriate
- **Realistic/Photographic** - Detailed, accurate
- **Watercolor** - Soft, artistic
- **Flat design** - Modern, geometric
- **Hand-drawn** - Casual, approachable
- **Infographic style** - Data-focused, clear

## Common Classroom Uses

### Bulletin Board Headers

**Prompt:**
"Create a colorful header image that says '[TEXT]' in bold, playful letters. [THEME], bright colors, suitable for elementary classroom bulletin board."

### Anchor Chart Graphics

**Prompt:**
"Create a simple icon/symbol representing [CONCEPT]. Large, clear, single color, suitable for printing on an anchor chart."

### Reward Certificates

**Prompt:**
"Create a border design for a student achievement certificate. [THEME: stars/books/science/etc.], colorful but not overwhelming, leaves center blank for text."

### Classroom Posters

**Prompt:**
"Create an educational poster showing [CONCEPT]. Include [KEY ELEMENTS], clear labels, colorful but easy to read, suitable for classroom wall display."

## What to Avoid

❌ "Make it good" - Too vague
❌ Complex scenes with lots of details - Often messy
❌ Specific real people - AI struggles with faces
❌ Text in the image - Often misspelled or unclear

✅ "Simple, clear, labeled diagram"
✅ "Cartoon style, bright colors"
✅ "Minimalist, one main subject"
✅ "Add text separately after generating"

## Tools for Teachers

### Free Options:
- **Canva AI** - Built into Canva, easy to use
- **Bing Image Creator** - Free, powered by DALL-E
- **Adobe Firefly** - Free tier available

### Paid Options:
- **Midjourney** - Highest quality, $10/month
- **DALL-E (ChatGPT Plus)** - Integrated with ChatGPT, $20/month

## Quick Workflow

1. **Generate the image** using AI
2. **Download and save** to your teaching files
3. **Add text/labels** in PowerPoint, Canva, or Google Slides
4. **Use in lessons** - slides, worksheets, posters

## Pro Tips

1. **Generate multiple versions** - "Create 4 variations of this"
2. **Iterate if needed** - "Make the colors brighter" or "Simplify this"
3. **Save successful prompts** - Build a library of prompts that work
4. **Check copyright** - Most AI-generated images are free to use for education, but verify terms

## Real Example Workflow

**Goal:** Create a visual for teaching the parts of a flower

**Prompt 1:**
"Create a simple, labeled diagram of a flower showing petals, stem, leaves, and roots. Cartoon style, bright colors, clear labels, suitable for 2nd grade science."

**Result:** Good, but labels are blurry

**Prompt 2:**
"Create the same flower diagram but without any text labels. I'll add them myself."

**Result:** Perfect! Add labels in PowerPoint.

**Final Use:** Insert into slideshow, print for worksheet, display on bulletin board.`,
        template: `Create a [TYPE: diagram/illustration/background] showing [SUBJECT].

Style: [simple/cartoon/realistic/minimalist]
Colors: [bright/muted/specific colors]
Details: [what to include]
Purpose: [for slides/worksheet/poster]
Age: Suitable for [GRADE] students

[Any specific requirements like "no text" or "leave space for labels"]`
      },
      {
        id: 2,
        title: "Video Finder",
        duration: "5 min",
        content: `# Video Finder

Use AI to find the perfect educational videos for your lessons.

## The Video Search Prompt

Instead of spending 30 minutes browsing YouTube, ask AI to do the searching:

**Basic Prompt:**
"Find me 3-5 educational videos about [TOPIC] that are:
- Appropriate for [GRADE] students
- Between [X-Y] minutes long
- From reputable sources
- Engaging and well-produced

For each video, provide: title, channel, length, and a brief description of why it's good."

## Real Examples

### Example 1: Science Lesson

**Prompt:**
"Find me 3-5 educational videos about photosynthesis that are:
- Appropriate for 7th grade students
- Between 3-8 minutes long
- From reputable science education channels
- Include animations or demonstrations

For each video, provide: title, channel, length, and why it's effective for teaching this concept."

### Example 2: Math Concept

**Prompt:**
"Find me 2-3 videos explaining how to multiply fractions that are:
- Appropriate for 5th grade students
- Under 5 minutes
- Use clear visual models
- Step-by-step explanations

For each video, provide: title, channel, length, and what teaching approach it uses."

### Example 3: Historical Event

**Prompt:**
"Find me 3-4 videos about the Boston Tea Party that are:
- Appropriate for 4th grade students
- 5-10 minutes long
- Historically accurate
- Engaging storytelling or reenactments

For each video, provide: title, channel, length, and what makes it engaging for this age group."

## Specific Video Types

### Flipped Classroom Videos

**Prompt:**
"Find me a video I can assign as homework to introduce [TOPIC] before our class lesson. Should be:
- 5-10 minutes
- Clear explanations suitable for [GRADE]
- Students can watch independently
- From channels like Khan Academy, Crash Course, or similar"

### Hook/Engagement Videos

**Prompt:**
"Find me a short (1-3 minute) attention-grabbing video to start my lesson on [TOPIC]. Should be:
- Surprising, interesting, or funny
- Appropriate for [GRADE]
- Raises questions or curiosity
- Gets students excited about the topic"

### Demonstration Videos

**Prompt:**
"Find me a video showing [EXPERIMENT/PROCESS] that I can show in class. Should be:
- Clear camera angles
- Real-time or slightly sped up
- Safe and appropriate
- Shows results clearly"

## Advanced Searches

### Multiple Perspectives

**Prompt:**
"Find me 3 videos about [CONTROVERSIAL TOPIC] that present different viewpoints:
- One supporting [POSITION A]
- One supporting [POSITION B]
- One presenting balanced analysis
All should be appropriate for [GRADE] and from credible sources."

### Video Series

**Prompt:**
"Find me a video series or playlist about [TOPIC] that:
- Covers the full unit I'm teaching
- Has 5-10 videos, each 5-10 minutes
- Consistent quality and presenter
- I can assign throughout the unit"

### Differentiated Options

**Prompt:**
"Find me 3 videos about [TOPIC] at different complexity levels:
- One for struggling learners (simple, visual, slow-paced)
- One at grade level
- One for advanced learners (faster, more depth)
All under 10 minutes."

## Beyond YouTube

**Prompt:**
"Find me educational videos about [TOPIC] from sources other than YouTube, such as:
- PBS Learning Media
- National Geographic Education
- TED-Ed
- Smithsonian Learning Lab
Provide links and descriptions."

## Creating Video Guides

Once you find a good video, use AI to create viewing guides:

**Prompt:**
"I'm showing this video about [TOPIC]: [VIDEO TITLE/LINK]

Create a viewing guide with:
- 3 questions students should answer while watching
- 2 discussion questions for after
- Vocabulary list of key terms (with timestamps)
- Exit ticket question"

## Quality Checks

When AI suggests videos, verify:
- ✅ Video actually exists and link works
- ✅ Content is accurate and appropriate
- ✅ Length matches what AI said
- ✅ Production quality is good enough
- ✅ No inappropriate ads or comments visible

## Time-Saving Workflows

### Build a Video Library

**Prompt:**
"Create a list of the best educational YouTube channels for teaching [SUBJECT] to [GRADE] students. For each channel, describe their style and what topics they cover well."

### Curate by Unit

**Prompt:**
"I'm teaching a unit on [TOPIC] over 2 weeks. Find me:
- 1 intro video (hook)
- 3-4 instructional videos (core content)
- 1 review/summary video
- 1 real-world application video
Organize them in teaching order with brief descriptions."

### Quick Daily Videos

**Prompt:**
"Find me 10 short (under 3 minutes) videos about different aspects of [BROAD TOPIC]. I want to show one each day as a warm-up activity."

## Pro Tips

1. **Ask for alternatives**: "If that video isn't available, suggest 2 backup options"
2. **Get timestamps**: "Provide timestamps for the key moments in this video"
3. **Check accessibility**: "Does this video have accurate captions?"
4. **Find related content**: "What other videos does this channel have that I could use?"

## Common Pitfalls to Avoid

❌ Trusting AI's description without watching - Always preview!
❌ Assuming videos are still available - Links can break
❌ Not checking the full video - Sometimes inappropriate content appears later
❌ Forgetting about ads - Preview in an ad-free environment if possible

✅ Always watch videos yourself first
✅ Have backup videos ready
✅ Create viewing guides to keep students focused
✅ Check video dates - newer isn't always better, but very old videos may be outdated`,
        template: `Find me [NUMBER] educational videos about [TOPIC] that are:
- Appropriate for [GRADE] students
- Between [X-Y] minutes long
- From reputable sources (specify if needed)
- [SPECIFIC REQUIREMENTS: animated, demonstration, etc.]

For each video, provide:
- Title
- Channel/Source
- Length
- Brief description of content and why it's effective

[Optional: Organize by difficulty level / teaching sequence / video type]`
      },
      {
        id: 3,
        title: "Creative Writing Starters",
        duration: "5 min",
        content: `# Creative Writing Starters

Generate engaging writing prompts, story starters, and creative activities that actually inspire students.

## The Writing Prompt Formula

**Basic Structure:**
"Create [NUMBER] [TYPE] writing prompts for [GRADE] students about [THEME/TOPIC]. Each prompt should:
- Be engaging and age-appropriate
- Include specific details to spark ideas
- Allow for creativity and personal expression
- Be achievable in [TIME/LENGTH]"

## Types of Writing Prompts

### Story Starters

**Prompt:**
"Create 5 story starters for 4th graders that begin with an interesting situation. Each should:
- Start with a compelling first sentence
- Introduce a problem or mystery
- Leave room for student creativity
- Be 2-3 sentences long"

**Example Output:**
1. "The old treehouse had been empty for years, but this morning, there was a light on inside..."
2. "When Maya opened her locker, a tiny dragon flew out and landed on her shoulder..."

### Scenario-Based Prompts

**Prompt:**
"Create 5 'What if...' writing prompts for 6th graders that encourage creative problem-solving. Each should present an unusual situation and ask students to write about how they'd handle it."

**Example Output:**
1. "What if you woke up and could understand what animals were saying? Write about your day."
2. "What if you found a time machine in your basement? Where would you go and why?"

### Personal Narrative Prompts

**Prompt:**
"Create 5 personal narrative prompts for 3rd graders that help them write about real experiences. Focus on:
- Memorable moments
- Emotions and sensory details
- Beginning, middle, end structure"

**Example Output:**
1. "Write about a time you felt really proud of yourself. What did you do? How did it feel?"
2. "Describe your favorite place. What do you see, hear, and smell there?"

## Genre-Specific Prompts

### Mystery Writing

**Prompt:**
"Create 5 mystery story prompts for 5th graders. Each should include:
- A mysterious event or disappearance
- At least 3 suspects or clues
- A setting (school, neighborhood, etc.)
- An opening question"

### Fantasy Writing

**Prompt:**
"Create 5 fantasy writing prompts for 7th graders. Each should include:
- A magical element or creature
- A quest or challenge
- A unique world or setting
- A moral dilemma"

### Realistic Fiction

**Prompt:**
"Create 5 realistic fiction prompts for 8th graders dealing with relatable issues:
- Friendship challenges
- Family dynamics
- School situations
- Personal growth
Keep them authentic and age-appropriate."

## Creative Constraints

### Picture Prompts

**Prompt:**
"Describe 5 images I could show students as writing prompts for [GRADE]. For each image, describe:
- What the image shows
- What story questions it raises
- What emotions it evokes
- Where I could find similar images"

### Word Bank Challenges

**Prompt:**
"Create 5 writing challenges where students must use specific words. For each challenge:
- Provide 5-7 interesting words
- Suggest a genre or theme
- Set a word count goal (100-300 words)"

### Format Experiments

**Prompt:**
"Create 5 creative writing prompts that use unusual formats:
- Diary entries
- Text message conversations
- News articles
- Letters
- Recipes or instructions
Make them engaging for [GRADE] students."

## Differentiation Strategies

### Tiered Prompts

**Prompt:**
"Create 3 versions of a writing prompt about [TOPIC]:
- Version A: Highly scaffolded with sentence starters and word bank
- Version B: Standard prompt with guiding questions
- Version C: Open-ended with extension challenge"

### Choice Boards

**Prompt:**
"Create a 3x3 choice board of writing prompts about [THEME]. Include variety:
- Different genres (story, poem, essay, etc.)
- Different formats (letter, diary, script, etc.)
- Different difficulty levels
Students choose one to complete."

## Seasonal and Thematic Prompts

**Prompt:**
"Create 10 writing prompts related to [SEASON/HOLIDAY/THEME] for [GRADE] students. Make them creative and avoid clichés. Focus on unique angles and interesting scenarios."

## Quick Daily Prompts

**Prompt:**
"Create 20 quick (5-minute) writing prompts for [GRADE] students. These should be:
- One sentence each
- Thought-provoking or fun
- Suitable for journal entries or warm-ups
- Varied in topic and style"

## Poetry Prompts

**Prompt:**
"Create 5 poetry writing prompts for [GRADE] students. For each prompt:
- Suggest a poetry form (haiku, acrostic, free verse, etc.)
- Provide a theme or topic
- Include an example first line or structure
- Keep it accessible for beginners"

## Real-World Writing

**Prompt:**
"Create 5 real-world writing prompts for [GRADE] students that practice authentic writing:
- Business letters
- Persuasive emails
- Product reviews
- How-to guides
- Opinion articles
Make them relevant to student interests."

## Collaborative Writing Prompts

**Prompt:**
"Create 5 writing prompts designed for partner or group work:
- Story chains (each person writes a paragraph)
- Dialogue writing (two characters)
- Collaborative world-building
- Group mystery solving
Include instructions for how students should work together."

## Using Student Interests

**Prompt:**
"Create 10 writing prompts that connect to popular student interests for [GRADE]:
- Sports
- Video games
- Social media
- Music
- Technology
- Animals/pets
Make them engaging while building writing skills."

## Assessment-Friendly Prompts

**Prompt:**
"Create 5 writing prompts suitable for formal assessment of [GRADE] students. Each should:
- Align with [STANDARD if applicable]
- Allow for clear evaluation of writing skills
- Provide enough structure to ensure on-topic responses
- Include a rubric focus (narrative, informative, opinion)"

## Pro Tips

1. **Test prompts yourself** - Write a quick response to see if it's engaging
2. **Get student input** - Ask students what topics interest them
3. **Keep a prompt bank** - Save successful prompts for reuse
4. **Rotate genres** - Don't always assign the same type of writing
5. **Connect to curriculum** - Tie prompts to current units when possible

## Quality Checks

Good writing prompts should:
- ✅ Be clear and specific (not too vague)
- ✅ Spark curiosity or emotion
- ✅ Allow for multiple approaches
- ✅ Be achievable for the age group
- ✅ Avoid sensitive topics unless intentional

Avoid prompts that:
- ❌ Are too broad ("Write about anything")
- ❌ Have only one "right" answer
- ❌ Require specific experiences not all students have
- ❌ Are boring or overdone ("What I did this summer")`,
        template: `Create [NUMBER] [TYPE: story starters/prompts/scenarios] for [GRADE] students about [THEME/TOPIC].

Each should:
- Be engaging and age-appropriate
- [SPECIFIC REQUIREMENT 1]
- [SPECIFIC REQUIREMENT 2]
- Be achievable in [TIME/LENGTH]

[Optional: Include sentence starters, word banks, or guiding questions]`
      }
    ]
  },
  {
    id: 5,
    title: "The Admin Assistant",
    subtitle: "Save Time on Non-Teaching Tasks",
    description: "Draft emails, newsletters, and IEP goals quickly and professionally.",
    duration: "15 min",
    icon: "Zap",
    color: "bg-teal-500",
    lessons: [
      {
        id: 1,
        title: "The Email Drafter",
        duration: "5 min",
        content: `# The Email Drafter

Write professional emails to parents, administrators, and colleagues in seconds.

## The Email Formula

**Basic Structure:**
"Write a professional email to [RECIPIENT] about [TOPIC]. Tone should be [TONE]. Include [KEY POINTS]."

## Common Email Types

### Parent Communication - Positive News

**Prompt:**
"Write a brief email to a parent praising their child [STUDENT NAME] for [SPECIFIC ACHIEVEMENT/BEHAVIOR]. Tone: warm and specific. Keep it under 150 words."

**Example:**
"Write a brief email to a parent praising their child Marcus for showing exceptional leadership during our group science project. Tone: warm and specific. Keep it under 150 words."

### Parent Communication - Concern

**Prompt:**
"Write a professional email to a parent expressing concern about [ISSUE] with their child [STUDENT NAME]. Tone: caring but direct. Include:
- Specific examples of the behavior
- Impact on learning
- Request for a meeting or phone call
- Positive note about the student
Keep it under 200 words."

### Missing Work Follow-Up

**Prompt:**
"Write a brief email to a parent letting them know their child [STUDENT NAME] has missing assignments in [SUBJECT]. Tone: factual and supportive. Include:
- List of missing assignments
- Due dates
- Offer to help
- How to check grades online
Keep it under 150 words."

### Class Newsletter

**Prompt:**
"Write a weekly class newsletter for [GRADE] parents covering:
- What we learned this week in [SUBJECTS]
- Upcoming events/deadlines
- Reminder about [SPECIFIC ITEM]
- Way parents can support at home
Tone: friendly and informative. Keep it under 300 words."

### Meeting Request

**Prompt:**
"Write an email to [PARENT/ADMIN/COLLEAGUE] requesting a meeting about [TOPIC]. Tone: professional. Include:
- Brief context (1-2 sentences)
- Proposed meeting times
- Estimated duration
- What we'll discuss
Keep it under 150 words."

## Tone Variations

### Formal/Professional
"Write a formal email to the principal about [TOPIC]..."

### Friendly/Warm
"Write a friendly email to parents about [TOPIC]..."

### Urgent/Direct
"Write a direct email to [RECIPIENT] about [URGENT MATTER]..."

### Apologetic
"Write an apologetic email to [RECIPIENT] about [MISTAKE/ISSUE]..."

## Real-World Examples

### Example 1: Field Trip Permission

**Prompt:**
"Write an email to parents about an upcoming field trip to [LOCATION] on [DATE]. Include:
- Purpose of the trip and connection to curriculum
- Cost ($[AMOUNT])
- What students should bring
- Permission slip deadline
- Contact info for questions
Tone: enthusiastic but clear. Keep it under 250 words."

### Example 2: Substitute Teacher Note

**Prompt:**
"Write a note to a substitute teacher for my [GRADE] [SUBJECT] class. Include:
- Class schedule and timing
- Lesson plans for each period
- Behavior management tips
- Where to find materials
- Emergency contacts
Tone: clear and helpful. Keep it under 300 words."

### Example 3: Colleague Collaboration

**Prompt:**
"Write an email to a fellow teacher proposing a cross-curricular project between [SUBJECT 1] and [SUBJECT 2]. Include:
- Brief project idea
- Benefits for students
- Time commitment
- Request for meeting to discuss
Tone: collaborative and enthusiastic. Keep it under 200 words."

## Time-Saving Templates

### Weekly Update Template

**Prompt:**
"Create a template for weekly parent updates I can reuse. Include sections for:
- This week's learning highlights
- Next week's preview
- Reminders
- Celebration/shout-outs
- Parent support suggestions
Leave blanks I can fill in each week."

### Behavior Incident Template

**Prompt:**
"Create a template for emailing parents about behavior incidents. Include:
- Date and time of incident
- What happened (objective description)
- How it was addressed
- Next steps
- Request for parent support
- Positive note about student
Tone: professional and solution-focused."

## Advanced Features

### Multiple Recipients

**Prompt:**
"Write an email to send to all parents in my class about [TOPIC]. Make it clear, concise, and anticipate common questions. Include an FAQ section at the end."

### Follow-Up Emails

**Prompt:**
"Write a follow-up email to [RECIPIENT] after our meeting about [TOPIC]. Include:
- Summary of what we discussed
- Action items (who does what)
- Timeline
- Next check-in date
Tone: professional and action-oriented."

### Thank You Notes

**Prompt:**
"Write a thank you email to [VOLUNTEER/PARENT/COLLEAGUE] for [SPECIFIC HELP]. Tone: warm and genuine. Mention specific impact. Keep it under 100 words."

## Difficult Conversations

### Addressing Plagiarism

**Prompt:**
"Write a professional email to a parent about a plagiarism incident involving their child [STUDENT NAME]. Tone: firm but fair. Include:
- What happened (specific evidence)
- School policy
- Consequences
- How we'll move forward
- Offer to discuss
Keep it under 250 words."

### Grade Dispute Response

**Prompt:**
"Write a response to a parent who is questioning their child's grade in [SUBJECT]. Tone: professional and factual. Include:
- Acknowledgment of their concern
- Explanation of grading criteria
- Specific examples from student work
- Offer to review together
- Next steps
Keep it under 300 words."

## Quality Checks

Before sending AI-generated emails:
- ✅ Replace [STUDENT NAME] with actual name
- ✅ Check tone matches your relationship with recipient
- ✅ Verify all facts and dates
- ✅ Add personal touches if appropriate
- ✅ Proofread for errors (AI isn't perfect!)
- ✅ Check that it sounds like you

## Pro Tips

1. **Save your best emails** - Build a personal template library
2. **Customize the output** - AI gives you a draft, make it yours
3. **Batch similar emails** - "Write 3 versions of this email for different situations"
4. **Get subject lines** - "Suggest 3 subject line options for this email"
5. **Check for clarity** - "Rewrite this email at a 6th grade reading level"

## Common Pitfalls

❌ Sending AI emails without reading them
❌ Using overly formal language with parents you know well
❌ Forgetting to personalize student names
❌ Not matching your usual communication style
❌ Including inaccurate information

✅ Use AI as a starting point
✅ Adjust tone to match your voice
✅ Double-check all facts
✅ Add personal touches
✅ Read it out loud before sending`,
        template: `Write a [TONE: professional/friendly/formal] email to [RECIPIENT: parent/admin/colleague] about [TOPIC].

Include:
- [KEY POINT 1]
- [KEY POINT 2]
- [KEY POINT 3]

Tone: [SPECIFIC TONE DESCRIPTION]
Length: Under [NUMBER] words

[Optional: Add specific context or constraints]`
      },
      {
        id: 2,
        title: "Newsletter Generator",
        duration: "5 min",
        content: `# Newsletter Generator

Create engaging class newsletters, weekly updates, and parent communications in minutes.

## The Newsletter Prompt

**Basic Structure:**
"Create a [FREQUENCY] newsletter for [GRADE] [SUBJECT] class. Include sections for:
- [SECTION 1]
- [SECTION 2]
- [SECTION 3]
Tone: [TONE]. Length: [LENGTH]."

## Newsletter Types

### Weekly Class Newsletter

**Prompt:**
"Create a weekly newsletter for my 4th grade class. Include sections for:
- This Week's Learning (brief summary of each subject)
- Next Week's Preview
- Important Dates and Reminders
- Student Spotlight (celebrating 2-3 students)
- How Parents Can Help at Home
Tone: friendly and informative. Keep it under 400 words."

### Monthly Subject Newsletter

**Prompt:**
"Create a monthly newsletter for my high school English class. Include sections for:
- What We're Reading/Studying
- Major Assignments Due
- Writing Tips for Parents to Share
- Recommended Reading List
- Upcoming Events (debates, presentations, etc.)
Tone: professional but approachable. Keep it under 500 words."

### Unit Introduction Newsletter

**Prompt:**
"Create a newsletter introducing our upcoming unit on [TOPIC] to parents. Include:
- Overview of what we'll learn
- Key vocabulary students will encounter
- Projects or assessments coming up
- Resources parents can use to support learning
- Timeline (how long the unit will last)
Tone: enthusiastic and clear. Keep it under 350 words."

## Section Ideas

### Learning Highlights

**Prompt:**
"Write a 'This Week in Learning' section for a newsletter covering:
- Math: [TOPIC]
- Reading: [TOPIC]
- Science: [TOPIC]
- Social Studies: [TOPIC]
For each subject, include one specific example of what students did. Keep it under 150 words total."

### Student Celebrations

**Prompt:**
"Write a 'Student Spotlight' section celebrating:
- [STUDENT 1]: [ACHIEVEMENT]
- [STUDENT 2]: [ACHIEVEMENT]
- [STUDENT 3]: [ACHIEVEMENT]
Tone: warm and specific. Keep it under 100 words."

### Parent Tips

**Prompt:**
"Write a 'How to Help at Home' section for parents of [GRADE] students learning [TOPIC]. Include:
- 3 simple activities parents can do
- 2 questions parents can ask
- 1 resource they can access online
Tone: practical and encouraging. Keep it under 150 words."

### Important Reminders

**Prompt:**
"Write a 'Reminders' section for a class newsletter including:
- [EVENT 1] on [DATE]
- [EVENT 2] on [DATE]
- [DEADLINE] by [DATE]
Format as a bulleted list with brief details for each item."

## Real-World Examples

### Example 1: Elementary Weekly Newsletter

**Prompt:**
"Create a weekly newsletter for my 2nd grade class. Include:
- Welcome message (2-3 sentences)
- Learning highlights from this week (math, reading, science)
- Upcoming events (field trip next Friday, picture day Thursday)
- Reminder about library books due
- Celebration of students who showed kindness this week
- Homework for the week
Tone: warm and parent-friendly. Keep it under 400 words. Use a friendly format with clear sections."

### Example 2: Middle School Subject Newsletter

**Prompt:**
"Create a bi-weekly newsletter for my 7th grade science class. Include:
- Current unit overview (cells and organisms)
- Lab safety reminder
- Upcoming quiz on Friday
- Science fair project timeline
- Cool science fact of the week
- Student question of the week (with answer)
Tone: engaging and informative. Keep it under 350 words."

### Example 3: High School Department Newsletter

**Prompt:**
"Create a monthly newsletter for the high school math department to send to all parents. Include:
- Department news and updates
- Upcoming standardized testing dates
- Math tutoring schedule
- Success story from a student
- Math resources and apps parents should know about
- Contact information for each teacher
Tone: professional and supportive. Keep it under 500 words."

## Format Variations

### Email Format

**Prompt:**
"Create a newsletter formatted for email with:
- Catchy subject line
- Brief intro paragraph
- Clearly marked sections with headers
- Bulleted lists where appropriate
- Call-to-action at the end
- Sign-off"

### Printable Format

**Prompt:**
"Create a newsletter formatted for printing and sending home with students. Include:
- Eye-catching title
- Sections with clear headers
- Boxes or borders to separate content
- Space for parent signature at bottom
- Contact information footer"

### Digital Platform Format

**Prompt:**
"Create a newsletter formatted for [PLATFORM: Seesaw/ClassDojo/Google Classroom]. Keep it:
- Scannable (short paragraphs)
- Mobile-friendly
- With embedded links to resources
- Under 300 words"

## Seasonal Newsletters

**Prompt:**
"Create a [SEASON/HOLIDAY] themed newsletter for [GRADE] class. Include:
- Seasonal learning activities we're doing
- Holiday schedule/time off
- Reminders about [SEASONAL ITEM]
- Gratitude/reflection section
- Preview of next month
Tone: festive but informative. Keep it under 400 words."

## Special Purpose Newsletters

### Back-to-School Newsletter

**Prompt:**
"Create a welcome-back newsletter for the start of the school year for [GRADE] class. Include:
- Welcome message
- Teacher introduction (brief bio)
- Class expectations and routines
- Supply list reminder
- First week schedule
- How to contact me
- Exciting things planned for the year
Tone: welcoming and enthusiastic. Keep it under 500 words."

### End-of-Year Newsletter

**Prompt:**
"Create an end-of-year newsletter for [GRADE] class. Include:
- Reflection on the year's highlights
- Student growth and achievements
- Thank you to parents for support
- Summer learning suggestions
- Sneak peek at next year
- Final reminders (return books, clean out lockers, etc.)
Tone: celebratory and grateful. Keep it under 400 words."

### Progress Report Newsletter

**Prompt:**
"Create a newsletter to accompany progress reports for [GRADE] [SUBJECT]. Include:
- How to read the progress report
- What the grades/scores mean
- Areas of strength for the class overall
- Areas we're working on
- How parents can support at home
- Invitation to schedule conferences
Tone: informative and supportive. Keep it under 350 words."

## Time-Saving Templates

**Prompt:**
"Create a reusable newsletter template for [FREQUENCY] updates. Include:
- Standard sections with headers
- Placeholder text I can replace each time
- Consistent structure
- Space for 3-5 bullet points per section
- Sign-off template
Make it easy to fill in quickly each [WEEK/MONTH]."

## Visual Elements

**Prompt:**
"Suggest 5 visual elements I should add to make this newsletter more engaging:
- Header design ideas
- Section dividers
- Icons or clipart suggestions
- Color scheme
- Font recommendations
Keep it professional but friendly for [GRADE] parents."

## Multi-Language Support

**Prompt:**
"Translate this newsletter into [LANGUAGE] while keeping the same tone and structure. Ensure cultural appropriateness and clarity."

## Quality Checks

Before sending newsletters:
- ✅ All dates and times are correct
- ✅ Links work (if digital)
- ✅ Student names are spelled correctly
- ✅ Tone matches your usual communication style
- ✅ Information is accurate and up-to-date
- ✅ Contact information is included
- ✅ Proofread for typos

## Pro Tips

1. **Create a template** - Use the same structure each time
2. **Batch content** - Write multiple newsletters at once
3. **Reuse good content** - Save sections that work well
4. **Get feedback** - Ask a colleague to review your first few
5. **Track engagement** - Note which newsletters get the most parent responses
6. **Keep it concise** - Parents are busy; respect their time
7. **Include visuals** - Add photos of student work (with permission)
8. **Make it scannable** - Use headers, bullets, and short paragraphs`,
        template: `Create a [FREQUENCY: weekly/monthly/bi-weekly] newsletter for [GRADE] [SUBJECT] class.

Include sections for:
1. [SECTION 1 TITLE]: [What to include]
2. [SECTION 2 TITLE]: [What to include]
3. [SECTION 3 TITLE]: [What to include]
4. [SECTION 4 TITLE]: [What to include]

Tone: [friendly/professional/enthusiastic]
Length: Under [NUMBER] words
Format: [email/printable/digital platform]

[Optional: Add specific events, dates, or information to include]`
      },
      {
        id: 3,
        title: "IEP Goal Drafter",
        duration: "5 min",
        content: `# IEP Goal Drafter

Draft measurable, achievable IEP goals faster while maintaining quality and compliance.

## The IEP Goal Formula

**SMART Goal Structure:**
- **S**pecific - Clear and focused
- **M**easurable - Observable and quantifiable
- **A**chievable - Realistic for the student
- **R**elevant - Aligned with student needs
- **T**ime-bound - Has a clear timeline

## The Basic IEP Goal Prompt

**Prompt:**
"Write a SMART IEP goal for a [GRADE] student with [DISABILITY/CHALLENGE] in the area of [SKILL/SUBJECT]. 

Current level: [BASELINE DATA]
Target: [DESIRED OUTCOME]

Include:
- Measurable criteria
- Method of measurement
- Timeline
- Conditions (if applicable)"

## Academic Goals

### Reading

**Prompt:**
"Write a SMART IEP goal for a 3rd grade student with dyslexia in reading fluency.

Current level: Reads 45 words per minute with 75% accuracy
Target: Grade-level fluency (90 wpm with 95% accuracy)

Include measurement method and timeline (1 year)."

**Example Output:**
"By [DATE], when given a grade-level passage, [STUDENT] will read aloud at 90 words per minute with 95% accuracy, as measured by curriculum-based measurements administered monthly, in 4 out of 5 trials."

### Math

**Prompt:**
"Write a SMART IEP goal for a 5th grade student with dyscalculia in multi-digit multiplication.

Current level: Can multiply single-digit numbers with 60% accuracy
Target: Multiply 2-digit by 1-digit numbers with 80% accuracy

Include accommodations and measurement method."

### Writing

**Prompt:**
"Write a SMART IEP goal for a 7th grade student with dysgraphia in written expression.

Current level: Writes 2-3 sentence paragraphs with minimal detail
Target: Write organized paragraphs with topic sentence, 3 supporting details, and conclusion

Include measurement criteria and timeline."

## Behavioral/Social Goals

### Self-Regulation

**Prompt:**
"Write a SMART IEP goal for a 4th grade student with ADHD in self-regulation during independent work.

Current level: Stays on task for 5 minutes before needing redirection
Target: Stays on task for 20 minutes independently

Include measurement method and timeline."

### Social Skills

**Prompt:**
"Write a SMART IEP goal for a 6th grade student with autism in peer interaction.

Current level: Initiates conversation with peers 1-2 times per week
Target: Initiate and maintain appropriate peer conversations

Include measurement criteria and timeline."

### Emotional Regulation

**Prompt:**
"Write a SMART IEP goal for a 2nd grade student with anxiety in managing frustration.

Current level: Has emotional outbursts 3-4 times per day when faced with challenges
Target: Use coping strategies to manage frustration

Include specific strategies and measurement method."

## Functional/Life Skills Goals

### Organization

**Prompt:**
"Write a SMART IEP goal for a 9th grade student with executive functioning challenges in organization.

Current level: Turns in assignments on time 30% of the time
Target: Improve assignment completion and submission

Include use of organizational tools and measurement method."

### Communication

**Prompt:**
"Write a SMART IEP goal for a 1st grade student with speech delay in expressive language.

Current level: Uses 2-word phrases to communicate needs
Target: Use 4-5 word sentences to express needs and ideas

Include measurement method and timeline."

## Real-World Examples

### Example 1: Reading Comprehension

**Prompt:**
"Write a SMART IEP goal for a 4th grade student with a learning disability in reading comprehension.

Current level: Answers literal comprehension questions with 50% accuracy
Target: Answer both literal and inferential questions at grade level

Include measurement method, accommodations (if needed), and 1-year timeline."

**Example Output:**
"By [DATE], when given a grade-level text and graphic organizer, [STUDENT] will answer literal and inferential comprehension questions with 80% accuracy, as measured by teacher-created assessments and curriculum-based probes administered bi-weekly, in 4 out of 5 trials."

### Example 2: Math Problem-Solving

**Prompt:**
"Write a SMART IEP goal for a 6th grade student with autism in math problem-solving.

Current level: Solves one-step word problems with visual supports with 60% accuracy
Target: Solve multi-step word problems independently

Include scaffolding plan and measurement method."

### Example 3: Written Expression

**Prompt:**
"Write a SMART IEP goal for an 8th grade student with ADHD in essay writing.

Current level: Writes disorganized 3-paragraph essays with minimal evidence
Target: Write organized 5-paragraph essays with evidence and analysis

Include use of graphic organizers and measurement criteria."

## Goal Components to Include

### Baseline Data

**Prompt:**
"Based on this assessment data: [INSERT DATA], write a clear baseline statement for an IEP goal in [SKILL AREA]."

### Measurement Method

**Prompt:**
"Suggest 3 appropriate measurement methods for tracking progress on this IEP goal: [INSERT GOAL]. Include frequency of measurement."

### Accommodations/Modifications

**Prompt:**
"List appropriate accommodations to include in an IEP goal for a student with [DISABILITY] working on [SKILL]. Explain how each accommodation supports the goal."

## Progress Monitoring

**Prompt:**
"Create a simple progress monitoring tool for tracking this IEP goal: [INSERT GOAL]. Include:
- What to observe/measure
- How often to measure
- Data recording format
- Criteria for success"

## Multiple Goals for One Student

**Prompt:**
"Write 3 IEP goals for a [GRADE] student with [DISABILITY] covering:
1. [ACADEMIC AREA]
2. [BEHAVIORAL AREA]
3. [FUNCTIONAL AREA]

Current levels: [INSERT DATA]
Ensure goals are connected and support overall student growth."

## Transition Goals (High School)

**Prompt:**
"Write a transition IEP goal for a 10th grade student with [DISABILITY] in the area of [POST-SECONDARY SKILL: employment/independent living/post-secondary education].

Current level: [BASELINE]
Target: [POST-SECONDARY OUTCOME]

Include real-world application and measurement method."

## Quality Checks

Good IEP goals should:
- ✅ Be truly measurable (not subjective)
- ✅ Include specific criteria (percentages, frequency, etc.)
- ✅ State conditions ("when given...", "during...")
- ✅ Be achievable within the timeline
- ✅ Use observable verbs (will read, will write, will demonstrate)
- ✅ Include how progress will be measured

Avoid:
- ❌ Vague language ("will improve", "will do better")
- ❌ Unmeasurable terms ("will understand", "will appreciate")
- ❌ Goals that are too easy or too hard
- ❌ Missing measurement criteria
- ❌ Unclear timelines

## Legal Compliance Check

**Prompt:**
"Review this IEP goal for compliance with IDEA requirements: [INSERT GOAL]

Check for:
- Measurability
- Baseline data
- Clear criteria for success
- Timeline
- Measurement method
Suggest revisions if needed."

## Parent-Friendly Explanations

**Prompt:**
"Rewrite this IEP goal in parent-friendly language that explains:
- What skill we're working on
- Where the student is now
- Where we want them to be
- How we'll measure progress

Original goal: [INSERT TECHNICAL GOAL]"

## Pro Tips

1. **Always include baseline data** - You can't measure progress without a starting point
2. **Be specific about measurement** - "Teacher observation" isn't enough; specify what you're observing
3. **Use percentages and frequencies** - "4 out of 5 trials", "80% accuracy"
4. **Consider the student's age** - Goals should be developmentally appropriate
5. **Think long-term** - Will this goal help the student in real life?
6. **Collaborate** - Share AI drafts with your IEP team for input
7. **Keep student strengths in mind** - Goals should build on what students can do

## Important Disclaimer

⚠️ **AI-generated IEP goals are drafts only**
- Always review with your IEP team
- Ensure compliance with state and federal regulations
- Customize based on individual student needs
- Verify appropriateness with special education specialists
- Never copy-paste without careful review

IEP goals have legal implications. Use AI to save time on drafting, but always apply professional judgment and team collaboration.`,
        template: `Write a SMART IEP goal for a [GRADE] student with [DISABILITY/CHALLENGE] in the area of [SKILL/SUBJECT].

Current level (baseline): [SPECIFIC DATA]
Target: [DESIRED OUTCOME]

Include:
- Measurable criteria (percentages, frequency)
- Method of measurement
- Timeline ([X] months/1 year)
- Conditions ("when given...", "during...")

[Optional: Include accommodations, scaffolding, or specific strategies]`
      }
    ]
  }
];

export function getModuleById(id: number): Module | undefined {
  return courseModules.find(m => m.id === id);
}

export function getLessonByIds(moduleId: number, lessonId: number): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
}
