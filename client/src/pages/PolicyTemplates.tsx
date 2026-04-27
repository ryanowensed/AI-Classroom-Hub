/*
  AI Classroom Hub — Policy Template Library
  Philosophy: Precision Navigation Hub
  Color: Coral (#E8533A) — policy/governance accent
  Purpose: Provide 2026-current, customizable AI policy templates for schools and districts
*/

import { useState } from "react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Copy, Download, CheckCircle, AlertTriangle, Shield, BookOpen, Users, FileText, Scale, GraduationCap } from "lucide-react";

interface PolicyTemplate {
  id: string;
  title: string;
  category: string;
  audience: string;
  urgency: "Critical" | "High" | "Standard";
  description: string;
  lastUpdated: string;
  basedOn: string;
  template: string;
}

const templates: PolicyTemplate[] = [
  {
    id: "student-aup",
    title: "Student AI Acceptable Use Policy",
    category: "Acceptable Use",
    audience: "Students",
    urgency: "Critical",
    description: "A complete, grade-differentiated AUP covering approved tools, academic integrity expectations, and consequences. Aligned with FERPA, COPPA, and 2026 state guidance.",
    lastUpdated: "April 2026",
    basedOn: "NYC DOE March 2026 AI Guidance + California AI Integration Framework Jan. 2026",
    template: `[SCHOOL/DISTRICT NAME] STUDENT AI ACCEPTABLE USE POLICY
Effective Date: [DATE] | Reviewed: [DATE] | Next Review: [DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: PURPOSE AND SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[School/District Name] recognizes that artificial intelligence (AI) tools offer significant educational opportunities while also presenting challenges related to academic integrity, data privacy, and equitable access. This policy establishes clear expectations for student use of AI tools in all academic settings.

This policy applies to:
• All students enrolled in [School/District Name] grades [GRADE RANGE]
• All AI tools, including but not limited to: ChatGPT, Google Gemini, Claude, Copilot, and similar generative AI platforms
• Use on school devices, personal devices used for school purposes, and during school-sponsored activities

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: APPROVED AI TOOLS BY GRADE BAND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pre-K through Grade 2:
• AI tools are teacher-directed only. Students do not independently access AI platforms.
• Approved tools: [LIST DISTRICT-APPROVED TOOLS, e.g., Amira Learning, Reading Eggs]

Grades 3–5:
• AI tools may be used with direct teacher supervision and explicit assignment permission.
• Approved tools: [LIST DISTRICT-APPROVED TOOLS, e.g., Khanmigo, Diffit]
• Students must not input personal information, images, or identifying details.

Grades 6–8:
• AI tools may be used for approved purposes with teacher permission noted on the assignment.
• Approved tools: [LIST DISTRICT-APPROVED TOOLS]
• Students must disclose AI use in all submitted work using the AI Disclosure Statement (Appendix A).
• Unsupervised use of non-approved AI tools is prohibited.

Grades 9–12:
• AI tools may be used as a learning and productivity aid when explicitly permitted by the teacher.
• Approved tools: [LIST DISTRICT-APPROVED TOOLS]
• All AI use must be disclosed using the AI Disclosure Statement (Appendix A).
• Students are responsible for verifying the accuracy of all AI-generated content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: ACADEMIC INTEGRITY EXPECTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI use constitutes academic dishonesty when:
• A student submits AI-generated text, code, images, or other content as their own original work without disclosure.
• A student uses AI to complete an assessment or assignment where the teacher has explicitly prohibited AI use.
• A student uses AI to circumvent the learning process in a way that prevents them from developing the intended skill.

AI use is permitted and encouraged when:
• The teacher has explicitly authorized AI use for that specific assignment.
• The student discloses all AI use in the AI Disclosure Statement.
• The student uses AI as a starting point, research aid, or feedback tool — not as a final product generator.
• The student can explain, defend, and build upon any AI-assisted work.

Note on AI Detection Tools: [School/District Name] recognizes that AI detection tools have documented false positive rates of 15–30% and are not used as the sole basis for academic integrity determinations. Concerns about AI misuse are addressed through process-based assessment and conversation with the student.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: DATA PRIVACY AND SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Students must not enter the following into any AI tool:
• Full name, student ID, or date of birth
• Home address, phone number, or email address
• Photographs of themselves or other students
• Medical, disability, or mental health information
• Information about other students, families, or staff

Students should assume that all information entered into AI tools may be stored, used for model training, or accessed by third parties unless the tool has a verified school/district privacy agreement (FERPA/COPPA compliant).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: CONSEQUENCES FOR POLICY VIOLATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

First violation: Teacher-student conference; assignment may be redone; parent/guardian notification.
Second violation: Administrative referral; zero on the assignment; parent/guardian conference.
Third violation: [DISTRICT DISCIPLINARY PROCESS]; potential loss of device privileges; notation in student record.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPENDIX A: AI DISCLOSURE STATEMENT (Student Use)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I, [STUDENT NAME], certify that:
☐ I did not use any AI tools on this assignment.
☐ I used AI tools on this assignment. Details below:

Tool(s) used: _______________________________________________
How I used it: _______________________________________________
What I changed or added from the AI output: ___________________
I can explain and defend all content in this submission: ☐ Yes

Student Signature: _________________________ Date: ___________`
  },
  {
    id: "teacher-ai-use",
    title: "Teacher AI Use Guidelines",
    category: "Staff Guidelines",
    audience: "Teachers",
    urgency: "High",
    description: "Clear guidance for teachers on approved AI uses, data privacy obligations, and professional responsibilities when using AI for lesson planning, assessment, and communication.",
    lastUpdated: "April 2026",
    basedOn: "RAND 2026 Survey + CoSN AI District Leaders Action Summit May 2026",
    template: `[SCHOOL/DISTRICT NAME] TEACHER AI USE GUIDELINES
Effective Date: [DATE] | Reviewed: [DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: APPROVED USES OF AI FOR TEACHERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following AI uses are approved for all teachers at [School/District Name]:

LESSON PLANNING AND CURRICULUM DESIGN
• Generating lesson plan drafts, activity ideas, and unit outlines
• Creating differentiated materials for multiple learning levels
• Developing rubrics, assessment criteria, and project guidelines
• Generating discussion questions, exit tickets, and formative assessments

COMMUNICATION AND DOCUMENTATION
• Drafting parent newsletters, emails, and communication templates
• Generating report card comment drafts (teacher must personalize and verify)
• Creating meeting agendas and professional documentation
• Translating communications for multilingual families (verify with qualified translator for legal documents)

PROFESSIONAL DEVELOPMENT
• Using AI to research instructional strategies and best practices
• Generating professional learning resources and reading summaries
• Exploring AI tools to evaluate their classroom applicability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: PROHIBITED USES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Teachers must NOT use AI tools to:
• Enter student names, ID numbers, grades, or any personally identifiable information (PII) into non-approved AI platforms
• Generate student evaluations, IEP content, or disciplinary records without substantial human review and personalization
• Make high-stakes decisions about students (placement, retention, discipline) based primarily on AI output
• Use AI-generated content in official district communications without review and editing
• Access or share confidential student data through AI platforms without verified FERPA compliance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: DATA PRIVACY OBLIGATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before using any AI tool for school purposes, teachers must verify:
☐ The tool has a signed Data Processing Agreement (DPA) with the district
☐ The tool is on the district-approved vendor list
☐ The tool is FERPA-compliant (for any student data)
☐ The tool is COPPA-compliant (for tools used with students under 13)

If a tool is not on the approved list, submit a Vendor Review Request to [TECHNOLOGY DEPARTMENT CONTACT] before use. Approval typically takes [X] business days.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: PROFESSIONAL RESPONSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Teachers remain professionally and legally responsible for all content they submit, publish, or use in instruction — regardless of whether AI assisted in its creation. AI is a tool, not a co-author. The teacher's professional judgment, knowledge of their students, and instructional expertise must guide all AI-assisted work.

Teachers are expected to:
• Verify the accuracy of all AI-generated content before use
• Personalize AI-generated student communications to reflect genuine knowledge of the student
• Model responsible AI use for students, including transparency about when and how AI is used
• Complete district-provided AI professional development ([HOURS/MODULES REQUIRED] per year)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: APPROVED TOOLS LIST (2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The following tools have been reviewed and approved for teacher use:
[DISTRICT TO COMPLETE — Suggested starting point: MagicSchool AI, Diffit, Brisk Teaching, Khanmigo, Canva Magic Studio]

For the full approved vendor list, visit: [DISTRICT INTRANET LINK]
To request a new tool review: [SUBMISSION LINK OR EMAIL]`
  },
  {
    id: "district-governance",
    title: "District AI Governance Framework",
    category: "Governance",
    audience: "Administrators",
    urgency: "Critical",
    description: "A complete governance framework for district-level AI strategy, based on the CoSN 2026 adaptive governance model. Covers oversight structure, tool approval process, and policy review cycle.",
    lastUpdated: "April 2026",
    basedOn: "CoSN AI District Leaders Action Summit 2026 + NYC DOE 30-Page AI Guidance March 2026",
    template: `[DISTRICT NAME] ARTIFICIAL INTELLIGENCE GOVERNANCE FRAMEWORK
Adopted: [DATE] | Version: 1.0 | Next Review: [DATE + 1 YEAR]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: GOVERNANCE PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[District Name] adopts an adaptive governance model for artificial intelligence — one that establishes clear principles and oversight structures while remaining flexible enough to respond to a technology that evolves monthly, not annually. Effective AI governance is a leadership responsibility, not solely an IT function.

Core Governance Principles:
1. Student safety and privacy are non-negotiable and supersede all efficiency considerations.
2. AI adoption decisions start with clearly defined educational problems, not available products.
3. Equity is a primary lens: AI tools must not widen gaps between well-resourced and under-resourced students.
4. Transparency: staff, students, and families have the right to know when AI is used in educational decisions.
5. Human judgment remains authoritative for all high-stakes decisions affecting students.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: AI OVERSIGHT COMMITTEE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Composition (recommended):
• Superintendent or designee (Chair)
• Chief Technology Officer / Director of Technology
• Curriculum and Instruction Director
• School Principals (rotating, 1–2 per year)
• Special Education Director
• School Counselor or Student Services representative
• Parent/Guardian representative (appointed annually)
• Student representative (Grades 9–12 districts)
• Legal counsel (advisory, as needed)

Meeting Frequency: Quarterly minimum; monthly during active policy development or major tool rollouts.

Responsibilities:
• Review and approve all AI tool additions to the district approved list
• Monitor state and federal AI legislation and update policies accordingly
• Review annual AI use data and equity impact reports
• Approve budget allocations for AI tools and professional development
• Communicate AI strategy updates to the Board of Education

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: AI TOOL APPROVAL PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Stage 1 — Request (Any staff member):
Submit AI Tool Review Request form including: tool name, URL, proposed use case, grade levels, and cost.

Stage 2 — Privacy Review (Technology Department, 5–10 business days):
• Verify FERPA/COPPA compliance
• Review vendor privacy policy and Terms of Service
• Confirm or request Data Processing Agreement (DPA)
• Check Common Sense Privacy rating (target: 75+)

Stage 3 — Instructional Review (Curriculum & Instruction, 5–10 business days):
• Evaluate alignment with curriculum standards
• Assess age-appropriateness and accessibility
• Review bias and equity considerations
• Pilot feasibility assessment

Stage 4 — AI Oversight Committee Approval:
• Committee votes on approval at next scheduled meeting
• Approved tools added to district list with use parameters
• Staff notified via [COMMUNICATION CHANNEL]

Stage 5 — Annual Review:
All approved tools reviewed annually for continued compliance, updated privacy policies, and ongoing educational value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: PROFESSIONAL DEVELOPMENT REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All instructional staff: [X] hours of AI professional development per school year
New staff: AI orientation module completed within first 30 days
Administrators: [X] hours including governance and leadership modules
Annual all-staff: AI policy update session (minimum 1 hour)

PD must address: responsible use, data privacy, academic integrity, grade-appropriate tool use, and equity considerations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: POLICY REVIEW CYCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given the pace of AI development, this framework is reviewed annually at minimum. The AI Oversight Committee may initiate an emergency review in response to:
• Significant changes in state or federal law
• A major AI tool privacy breach or safety incident
• Substantial changes in the AI landscape that affect student safety or equity
• Board of Education direction

All policy revisions are communicated to staff, students, and families within 30 days of adoption.`
  },
  {
    id: "academic-integrity",
    title: "AI Academic Integrity Policy",
    category: "Academic Integrity",
    audience: "All Staff",
    urgency: "Critical",
    description: "A standalone academic integrity policy addressing AI specifically — covering what constitutes AI misuse, why detection tools are unreliable, and how to shift to process-based assessment.",
    lastUpdated: "April 2026",
    basedOn: "ICAI January 2026 Report + Stanford HAI 2026 AI Index",
    template: `[SCHOOL/DISTRICT NAME] AI ACADEMIC INTEGRITY POLICY
Effective Date: [DATE] | Applies To: All Students, Grades [RANGE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: STATEMENT OF PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Academic integrity means that the work a student submits honestly represents their own learning, thinking, and effort. AI tools do not change this principle — they change the context in which it must be applied.

[School/District Name] recognizes that AI tools are increasingly present in students' lives and will be present in their professional futures. Our goal is not to eliminate AI use but to ensure that AI is used in ways that support genuine learning rather than replace it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: DEFINING AI MISUSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI use constitutes academic dishonesty when ALL of the following are true:
1. The teacher has not explicitly authorized AI use for that assignment.
2. The student submits AI-generated content as their own original work.
3. The student does not disclose the AI use.

AI use is NOT academic dishonesty when:
• The teacher has explicitly authorized AI use and the student discloses it.
• The student uses AI as a brainstorming, feedback, or research tool and produces original work.
• The student uses AI to check grammar or spelling (unless the assignment explicitly prohibits this).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: ON AI DETECTION TOOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[School/District Name] policy on AI detection tools:

Current AI detection tools (including Turnitin AI, GPTZero, and similar platforms) have documented false positive rates of 15–32%, meaning they incorrectly flag original student writing as AI-generated at significant rates. Research has shown that:
• Non-native English speakers are flagged at disproportionately higher rates.
• Students with certain writing styles or disabilities are more likely to be falsely flagged.
• Detection accuracy degrades as AI models are updated.

Therefore: AI detection tool output is NOT sufficient evidence of academic dishonesty on its own. Concerns about AI misuse must be addressed through:
1. A private, non-accusatory conversation with the student.
2. A request for the student to explain, expand, or defend their work verbally.
3. Review of the student's process documentation (drafts, notes, browser history if applicable).
4. Administrator involvement if the conversation does not resolve the concern.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: PROCESS-BASED ASSESSMENT FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The most effective response to AI-related academic integrity concerns is to design assignments that make AI misuse difficult and learning visible. Teachers are encouraged to:

• Require process documentation: drafts, outlines, revision history, or research notes.
• Include in-class components: brief oral defenses, in-class writing samples, or presentations.
• Design for specificity: assignments that require personal experience, local context, or class-specific knowledge that AI cannot provide.
• Use the AI Disclosure Statement: normalize disclosure so students who use AI appropriately are not penalized.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: CONSEQUENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Align with district disciplinary matrix — suggested framework:]

Level 1 (First incident, minor): Teacher-student conference; opportunity to redo assignment; parent notification.
Level 2 (Repeat or significant): Administrative referral; zero on assignment; parent conference; academic integrity notation.
Level 3 (Egregious or repeated): [District disciplinary process]; potential course failure; permanent academic record notation.

Note: Consequences should be educational, not purely punitive. The goal is to help students understand why academic integrity matters — not simply to punish.`
  },
  {
    id: "data-privacy",
    title: "AI Tool Data Privacy & Vendor Vetting Checklist",
    category: "Data Privacy",
    audience: "Administrators",
    urgency: "High",
    description: "A practical checklist for evaluating AI tool privacy compliance before district adoption. Covers FERPA, COPPA, state privacy laws, and vendor contract requirements.",
    lastUpdated: "April 2026",
    basedOn: "FERPA/COPPA Requirements + Common Sense Privacy 2026 + State AI Legislation Tracker",
    template: `[DISTRICT NAME] AI TOOL DATA PRIVACY & VENDOR VETTING CHECKLIST
Completed By: _________________ | Date: _____________ | Tool Name: _________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1: BASIC INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tool Name: _______________________________________________
Vendor/Company: _________________________________________
Website: ________________________________________________
Proposed Use: ___________________________________________
Grade Levels: ____________________________________________
Cost: ___________________________________________________
Requested By: ___________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: FERPA COMPLIANCE (Required for any tool that accesses student records)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ Vendor explicitly states FERPA compliance in documentation
☐ Vendor will sign a Data Processing Agreement (DPA) with the district
☐ Student data is not sold to third parties
☐ Student data is not used to train AI models without explicit consent
☐ Data deletion process is documented and accessible
☐ Breach notification procedures are specified (required: within 72 hours)

FERPA Notes: ____________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 3: COPPA COMPLIANCE (Required for tools used with students under 13)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ Tool is designed for users under 13 OR requires parental consent
☐ No behavioral advertising to users under 13
☐ Personal information collection is limited to what is necessary for the educational service
☐ Parental access and deletion rights are documented
☐ Vendor has a verifiable COPPA compliance statement

COPPA Notes: ____________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 4: STATE-SPECIFIC REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

State: [YOUR STATE]
Applicable state student privacy laws: [e.g., CA AB 1584, NY Ed Law 2-d, TX SB 820]

☐ Vendor complies with applicable state student data privacy laws
☐ Vendor is listed on state-approved vendor list (if applicable)
☐ Data storage location complies with state requirements
☐ AI-specific state requirements addressed: [LIST STATE AI LAWS IF APPLICABLE]

State Compliance Notes: __________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 5: AI-SPECIFIC PRIVACY CONSIDERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ Student inputs are NOT used to train the AI model
☐ Conversation/interaction data is not retained beyond the session (or retention period is specified and acceptable)
☐ AI outputs are not shared with third parties
☐ Vendor has a published AI ethics or responsible AI statement
☐ Bias and fairness testing documentation is available
☐ Human oversight mechanisms are documented for high-stakes uses

AI-Specific Notes: _______________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 6: COMMON SENSE PRIVACY RATING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Common Sense Privacy Score: _______ / 100
(Check at: commonsense.org/education/privacy/ratings)

Score Guidance:
• 90–100: Approve with standard DPA
• 75–89: Approve with enhanced DPA; monitor annually
• 50–74: Requires AI Oversight Committee review before approval
• Below 50: Do not approve without significant vendor remediation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 7: FINAL RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ APPROVE — All requirements met. Add to approved vendor list.
☐ APPROVE WITH CONDITIONS — Conditions: _____________________
☐ PENDING — Additional information needed from vendor: _________
☐ DO NOT APPROVE — Reason: ________________________________

Reviewed By: _________________________ Title: _______________
Signature: ___________________________ Date: ________________
AI Oversight Committee Action: ______________________________`
  },
  {
    id: "parent-notification",
    title: "Parent/Guardian AI Notification & Consent",
    category: "Family Communication",
    audience: "Families",
    urgency: "Standard",
    description: "A clear, jargon-free letter explaining how AI is used in your school, what data is collected, and how families can opt out. Designed to build trust and transparency.",
    lastUpdated: "April 2026",
    basedOn: "NYC DOE Parent Communication Standards + FERPA Parental Rights",
    template: `[SCHOOL NAME] — NOTICE OF AI TOOL USE IN YOUR CHILD'S EDUCATION
School Year: [YEAR] | Sent: [DATE]

Dear [School Name] Families,

We want to keep you informed about how we use technology — including artificial intelligence (AI) tools — to support your child's education. This letter explains what AI tools we use, how they work, what information they collect, and your rights as a parent or guardian.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT IS AI AND HOW DO WE USE IT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Artificial intelligence (AI) tools are computer programs that can generate text, answer questions, provide feedback, and assist with learning tasks. At [School Name], we use AI tools to:

• Help teachers create lesson materials and differentiated resources
• Provide students with personalized reading and math practice
• Support students with writing feedback and research skills
• Help students with disabilities access content more effectively

We do NOT use AI to:
• Make decisions about your child's grades, placement, or discipline without human review
• Replace teacher instruction or the teacher-student relationship
• Collect or sell your child's personal information

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHICH AI TOOLS DOES YOUR CHILD USE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[COMPLETE THIS SECTION WITH YOUR APPROVED TOOLS]

Tool Name | Purpose | Grade Levels | Privacy Rating
[Tool 1] | [Purpose] | [Grades] | [Rating]
[Tool 2] | [Purpose] | [Grades] | [Rating]

All tools used at [School Name] have been reviewed for compliance with federal student privacy laws (FERPA and COPPA) and have signed agreements with our district to protect your child's information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR RIGHTS AS A PARENT OR GUARDIAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Under federal law (FERPA) and [State] law, you have the right to:
• Review any educational records related to your child, including records of AI tool use
• Request that your child not use specific AI tools (subject to available alternatives)
• Ask questions about how AI tools are used in your child's classroom
• Receive this information in your home language upon request

To exercise any of these rights or to ask questions, please contact:
[PRINCIPAL NAME], [SCHOOL NAME]
[EMAIL] | [PHONE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT WE TEACH STUDENTS ABOUT AI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We believe students need to learn how to use AI responsibly — not just how to use it. At [School Name], students learn:
• What AI can and cannot do reliably
• How to verify information AI provides
• When AI use is appropriate and when it is not
• How to protect their personal information online

We are committed to preparing your child for a world where AI is present — while ensuring that their education develops the critical thinking, creativity, and communication skills that AI cannot replace.

If you have questions about our AI use, please reach out. We welcome the conversation.

Sincerely,
[PRINCIPAL NAME]
[SCHOOL NAME]
[DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RETURN SLIP (Optional — for schools requiring acknowledgment)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Student Name: _________________________ Grade: _______

☐ I have read and understand the AI use notification.
☐ I have questions and would like to be contacted. Best number/email: ___________
☐ I request that my child not use the following tools: _________________________

Parent/Guardian Signature: __________________ Date: __________`
  },
  {
    id: "ai-pd-framework",
    title: "Staff AI Professional Development Framework",
    category: "Professional Development",
    audience: "Administrators",
    urgency: "High",
    description: "A structured PD framework for building district-wide AI competency. Addresses the fact that only 34% of teachers have received formal AI training. Includes tiered pathways and competency benchmarks.",
    lastUpdated: "April 2026",
    basedOn: "RAND 2026 PD Gap Data + ISTE AI Competency Framework 2026",
    template: `[DISTRICT NAME] STAFF AI PROFESSIONAL DEVELOPMENT FRAMEWORK
School Year: [YEAR] | Approved By: [NAME/TITLE] | Date: [DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: RATIONALE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As of January 2026, 68% of teachers use AI tools at least weekly — yet only 34% have received any formal AI training from their district (RAND Corporation, 2026). This gap between adoption and preparation creates risk for students, teachers, and the district. This framework establishes a structured, tiered pathway to build AI competency across all staff.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: COMPETENCY FRAMEWORK (Three Tiers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIER 1 — AI FOUNDATIONS (Required: All Staff)
Target: Every staff member understands what AI is, how it works at a basic level, and what the district's policies are.

Modules (Total: [X] hours):
• Module 1: What Is AI? (1 hr) — How generative AI works, what it can and cannot do, common misconceptions
• Module 2: District AI Policy Overview (1 hr) — Acceptable use, data privacy, academic integrity
• Module 3: Data Privacy Basics (1 hr) — What not to put in AI tools, FERPA/COPPA basics, student safety
• Module 4: AI and Equity (1 hr) — Bias in AI systems, equitable access, avoiding AI-driven gaps

Completion Requirement: All staff by [DATE]
Assessment: Brief knowledge check (pass/fail, unlimited retakes)

TIER 2 — AI IN PRACTICE (Required: All Instructional Staff)
Target: Teachers can use approved AI tools effectively and responsibly in their instructional practice.

Modules (Total: [X] hours):
• Module 5: AI for Lesson Planning (2 hrs) — Hands-on with approved tools; prompt writing basics
• Module 6: AI for Differentiation (2 hrs) — Generating tiered materials, ELL supports, IEP applications
• Module 7: AI for Assessment and Feedback (1.5 hrs) — Rubric generation, feedback drafts, process-based assessment
• Module 8: Teaching Students to Use AI Responsibly (1.5 hrs) — Classroom protocols, disclosure, critical evaluation

Completion Requirement: All instructional staff by [DATE]
Assessment: Submission of one AI-assisted lesson plan with reflection

TIER 3 — AI LEADERSHIP (Optional: Instructional Coaches, Department Heads, Administrators)
Target: Staff who will lead AI implementation, support colleagues, and contribute to district AI strategy.

Modules (Total: [X] hours):
• Module 9: AI Governance and Strategy (2 hrs) — Oversight structures, tool approval, policy development
• Module 10: Coaching Colleagues on AI (2 hrs) — Supporting resistant staff, building AI learning communities
• Module 11: Evaluating AI Tools (1.5 hrs) — Privacy review, instructional value assessment, piloting protocols
• Module 12: AI and the Future of Education (1.5 hrs) — Trends, research, preparing students for an AI-integrated world

Completion Requirement: Voluntary; recognized in [DISTRICT RECOGNITION PROGRAM]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: DELIVERY FORMATS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Self-paced online modules: Available through [LMS PLATFORM]
• In-person workshops: Offered [X] times per year at each school
• Peer learning communities: Monthly optional AI learning groups by grade band
• Embedded PD: 30-minute AI segments in existing staff meeting time
• Micro-credentials: [X]-hour focused badges for specific tools or skills

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: TRACKING AND ACCOUNTABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Completion tracking: [LMS PLATFORM] — principals receive monthly completion reports
Annual AI PD survey: Staff complete a brief survey each spring on AI use, confidence, and training needs
Board reporting: Annual AI PD completion rates reported to Board of Education
Recognition: Staff completing Tier 3 recognized at [RECOGNITION EVENT]`
  }
];

const categoryColors: Record<string, string> = {
  "Acceptable Use": "bg-blue-100 text-blue-800",
  "Staff Guidelines": "bg-teal-100 text-teal-800",
  "Governance": "bg-indigo-100 text-indigo-800",
  "Academic Integrity": "bg-amber-100 text-amber-800",
  "Data Privacy": "bg-purple-100 text-purple-800",
  "Family Communication": "bg-green-100 text-green-800",
  "Professional Development": "bg-orange-100 text-orange-800",
};

const urgencyConfig = {
  Critical: { color: "text-red-600 bg-red-50 border-red-200", icon: AlertTriangle },
  High: { color: "text-amber-600 bg-amber-50 border-amber-200", icon: Shield },
  Standard: { color: "text-blue-600 bg-blue-50 border-blue-200", icon: CheckCircle },
};

const audienceIcons: Record<string, React.ReactNode> = {
  Students: <GraduationCap className="w-4 h-4" />,
  Teachers: <BookOpen className="w-4 h-4" />,
  Administrators: <Users className="w-4 h-4" />,
  "All Staff": <Users className="w-4 h-4" />,
  Families: <Users className="w-4 h-4" />,
};

function PolicyCard({ policy }: { policy: PolicyTemplate }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const UrgencyIcon = urgencyConfig[policy.urgency].icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(policy.template);
    setCopied(true);
    toast.success("Template copied to clipboard!", {
      description: "Paste into a document and customize the bracketed fields.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([policy.template], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${policy.id}-template.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Template downloaded!", {
      description: "Open in any text editor or word processor to customize.",
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      {/* Top accent bar — coral for Critical, amber for High, blue for Standard */}
      <div
        className={`h-1 w-full ${
          policy.urgency === "Critical"
            ? "bg-[#E8533A]"
            : policy.urgency === "High"
            ? "bg-amber-500"
            : "bg-blue-500"
        }`}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${urgencyConfig[policy.urgency].color}`}
              >
                <UrgencyIcon className="w-3 h-3" />
                {policy.urgency}
              </span>
              <span
                className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                  categoryColors[policy.category] || "bg-gray-100 text-gray-700"
                }`}
              >
                {policy.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                {audienceIcons[policy.audience]}
                {policy.audience}
              </span>
            </div>
            <h3 className="font-display font-bold text-[#0F2A4A] text-lg leading-snug">
              {policy.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-3">{policy.description}</p>

        <div className="text-xs text-gray-400 mb-4">
          <span className="font-medium text-gray-500">Updated:</span> {policy.lastUpdated} ·{" "}
          <span className="font-medium text-gray-500">Based on:</span> {policy.basedOn}
        </div>

        {/* Template preview */}
        <div className="mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-[#2563EB] hover:text-blue-800 transition-colors flex items-center gap-1"
          >
            <FileText className="w-4 h-4" />
            {expanded ? "Hide template preview" : "Preview template"}
          </button>
          {expanded && (
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                {policy.template.slice(0, 1200)}
                {policy.template.length > 1200 && (
                  <span className="text-gray-400">
                    {"\n\n"}[...template continues — copy to see full version]
                  </span>
                )}
              </pre>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              copied
                ? "bg-green-600 text-white"
                : "bg-[#E8533A] text-white hover:bg-[#d44530]"
            }`}
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Template
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PolicyTemplates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAudience, setActiveAudience] = useState("All");

  const categories = ["All", ...Array.from(new Set(templates.map((t) => t.category)))];
  const audiences = ["All", ...Array.from(new Set(templates.map((t) => t.audience)))];

  const filtered = templates.filter((t) => {
    const catMatch = activeCategory === "All" || t.category === activeCategory;
    const audMatch = activeAudience === "All" || t.audience === activeAudience;
    return catMatch && audMatch;
  });

  const criticalCount = templates.filter((t) => t.urgency === "Critical").length;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-[#E8533A] relative overflow-hidden">
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
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3 font-display">
              POLICY TEMPLATE LIBRARY
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
              AI policies your school can actually use.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-6">
              Only 6% of teachers say their school's AI policy is clear. These templates — based on the NYC DOE, California, and CoSN 2026 frameworks — give you a real starting point in minutes, not months.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-white" />
                {templates.length} templates
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-white" />
                {criticalCount} marked Critical
              </span>
              <span className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-white" />
                FERPA &amp; COPPA aligned
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-white" />
                Updated April 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-8 bg-amber-50 border-b border-amber-100">
        <div className="container">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">How to use these templates</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Every template contains bracketed fields like <code className="bg-amber-100 px-1 rounded text-xs">[SCHOOL NAME]</code> and <code className="bg-amber-100 px-1 rounded text-xs">[DATE]</code> that you customize for your context. These are starting points — not final documents. Review with your legal counsel, union representatives, and school board before adoption. All templates are based on 2026 guidance from NYC DOE, California, CoSN, and federal FERPA/COPPA requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-10 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#E8533A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Audience:</span>
              {audiences.map((aud) => (
                <button
                  key={aud}
                  onClick={() => setActiveAudience(aud)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeAudience === aud
                      ? "bg-[#0F2A4A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {aud}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-800">{filtered.length}</span> templates
            </p>
            <p className="text-xs text-gray-400">All templates updated April 2026 · More added monthly</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((policy) => (
              <PolicyCard key={policy.id} policy={policy} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="font-medium">No templates match those filters.</p>
              <button
                onClick={() => { setActiveCategory("All"); setActiveAudience("All"); }}
                className="mt-2 text-sm text-[#2563EB] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 bg-[#0F2A4A]">
        <div className="container text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3 font-display">
            STAY CURRENT
          </p>
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            New templates added monthly.
          </h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            AI policy is evolving faster than any district can track alone. Subscribe to Office Hours /AI and get policy updates, new templates, and governance guidance every Sunday.
          </p>
          <a
            href="/newsletter"
            className="inline-flex items-center gap-2 bg-[#E8533A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#d44530] transition-colors"
          >
            Subscribe Free →
          </a>
        </div>
      </section>
    </Layout>
  );
}
