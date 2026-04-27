/*
  AI Classroom Hub — Policy Template Library
  Philosophy: Precision Navigation Hub
  Color: Coral (#E8533A) — policy/governance accent
  Purpose: Provide 2026-current, customizable AI policy templates for schools and districts
  Email Gate: Visitors must provide name + email to unlock template access.
              Email is captured into the Resend "Policy Templates" audience.
              Unlock state is stored in sessionStorage so it persists across page navigation
              within the same browser session.
*/

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import {
  Copy,
  Download,
  CheckCircle,
  AlertTriangle,
  Shield,
  BookOpen,
  Users,
  FileText,
  Scale,
  GraduationCap,
  Lock,
  Unlock,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";

// ─── Session storage key ────────────────────────────────────────────────────
const SESSION_KEY = "policy_templates_unlocked";

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
    description:
      "A complete, grade-differentiated AUP covering approved tools, academic integrity expectations, and consequences. Aligned with FERPA, COPPA, and 2026 state guidance.",
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

Student Signature: _________________________ Date: ___________`,
  },
  {
    id: "teacher-ai-use",
    title: "Teacher AI Use Guidelines",
    category: "Staff Guidelines",
    audience: "Teachers",
    urgency: "High",
    description:
      "Clear guidance for teachers on approved AI uses, data privacy obligations, and professional responsibilities when using AI for lesson planning, assessment, and communication.",
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

[DISTRICT TECHNOLOGY DEPARTMENT to maintain and update this list quarterly]

Current approved tools include: [LIST TOOLS]
Last updated: [DATE]
Contact [NAME/EMAIL] to request a new tool review.`,
  },
  {
    id: "district-governance",
    title: "District AI Governance Framework",
    category: "Governance",
    audience: "Administrators",
    urgency: "Critical",
    description:
      "A board-ready governance framework covering AI oversight structure, procurement criteria, equity considerations, and annual review cycles. Based on CoSN 2026 Adaptive Governance model.",
    lastUpdated: "April 2026",
    basedOn: "CoSN AI District Leaders Action Summit 2026 + Stanford HAI K-12 AI Policy Brief",
    template: `[DISTRICT NAME] ARTIFICIAL INTELLIGENCE GOVERNANCE FRAMEWORK
Adopted: [DATE] | Annual Review: [MONTH] each year

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: GOVERNANCE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI Oversight Committee
• Composition: Superintendent (chair), CTO/Director of Technology, Curriculum Director, Principal representative, Teacher representative, Parent representative, Student representative (grades 9–12 districts)
• Meeting frequency: Quarterly, with emergency sessions as needed
• Responsibilities: Tool approval, policy review, incident response, annual reporting to the Board

AI Coordinator Role
• Designated staff member responsible for day-to-day AI implementation oversight
• Reports to: [TITLE]
• Responsibilities: Vendor DPA management, staff PD coordination, incident logging, quarterly committee reporting

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: AI TOOL PROCUREMENT CRITERIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All AI tools must meet the following criteria before district approval:

REQUIRED (all tools):
☐ Signed Data Processing Agreement (DPA) with the district
☐ FERPA compliance documentation
☐ Clear data retention and deletion policy
☐ Transparency about training data sources
☐ Opt-out of student data use for model training

REQUIRED (tools used with students under 13):
☐ COPPA compliance documentation
☐ Verifiable age-gating mechanism
☐ No behavioral advertising

PREFERRED:
☐ SOC 2 Type II certification
☐ Accessibility compliance (WCAG 2.1 AA)
☐ Evidence of efficacy (peer-reviewed or independent research)
☐ Transparent bias testing and mitigation documentation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: EQUITY COMMITMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[District Name] commits to:
• Ensuring AI tools do not create or amplify disparities in educational access or outcomes
• Conducting annual equity audits of AI tool usage patterns across demographic groups
• Providing device and connectivity access to all students before deploying AI-dependent instruction
• Monitoring AI-generated content for bias, stereotyping, or culturally insensitive material
• Ensuring AI professional development is accessible to all staff, including part-time and paraprofessional staff

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: ANNUAL REVIEW CYCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each [MONTH], the AI Oversight Committee will:
1. Review all approved tools against updated procurement criteria
2. Audit incident log and identify systemic issues
3. Survey staff and students on AI tool effectiveness and concerns
4. Update the Approved Tools List
5. Present findings and recommendations to the Board of Education
6. Publish a public-facing AI Annual Report on the district website`,
  },
  {
    id: "academic-integrity",
    title: "AI Academic Integrity Policy",
    category: "Academic Integrity",
    audience: "Students",
    urgency: "Critical",
    description:
      "A standalone academic integrity policy specifically addressing AI, including a tiered disclosure framework, consequences matrix, and guidance on the difference between AI assistance and AI misconduct.",
    lastUpdated: "April 2026",
    basedOn: "ISTE AI in Education Framework 2026 + Harvard Graduate School of Education AI Integrity Guidelines",
    template: `[SCHOOL/DISTRICT NAME] AI ACADEMIC INTEGRITY POLICY
Effective Date: [DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[School/District Name] believes that AI tools, used responsibly, can enhance learning. We also believe that authentic intellectual effort — the struggle to understand, to create, and to communicate — is the core of education. This policy exists not to prohibit AI, but to ensure that AI enhances rather than replaces student learning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: THE AI USE SPECTRUM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEVEL 1 — AI-FREE: No AI tools permitted. Student work must be entirely original.
Examples: In-class essays, standardized test preparation, skill-building assessments.

LEVEL 2 — AI-ASSISTED (with disclosure): AI may be used as a research or brainstorming tool. All AI use must be disclosed. Student must substantially transform AI output with their own thinking.
Examples: Research papers (brainstorming phase), creative writing (idea generation), coding (debugging assistance).

LEVEL 3 — AI-INTEGRATED (explicit permission): AI is a core part of the assignment. Students are evaluated on their ability to prompt, evaluate, and improve AI output.
Examples: AI prompt engineering projects, comparative analysis of AI responses, AI-assisted multimedia projects.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: DISCLOSURE REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For all Level 2 and Level 3 assignments, students must complete the AI Disclosure Statement:
• Tool(s) used and purpose
• Specific prompts or queries submitted (can be summarized)
• How the student modified, verified, or built upon AI output
• Student's attestation that they can explain and defend all submitted content

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: CONSEQUENCES MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Undisclosed AI use on a Level 1 assignment:
→ First offense: Zero on assignment, parent notification, mandatory meeting with teacher
→ Second offense: Zero on assignment, administrative referral, parent conference
→ Third offense: [DISTRICT PROCESS], potential course failure, notation in record

Undisclosed AI use on a Level 2 assignment:
→ First offense: Assignment revision required with full disclosure; grade reduction
→ Second offense: Zero on assignment, parent notification

Note: AI detection software results alone are never sufficient evidence of misconduct. All determinations require a conversation with the student.`,
  },
  {
    id: "data-privacy",
    title: "Student Data Privacy & AI Vendor Policy",
    category: "Data Privacy",
    audience: "Administrators",
    urgency: "High",
    description:
      "A comprehensive data privacy policy governing AI vendor relationships, DPA requirements, incident response procedures, and parent notification obligations under FERPA and state privacy laws.",
    lastUpdated: "April 2026",
    basedOn: "FERPA 2026 Guidance + Student Data Privacy Consortium (SDPC) Model Terms",
    template: `[DISTRICT NAME] STUDENT DATA PRIVACY AND AI VENDOR POLICY
Effective Date: [DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This policy governs all AI tools and vendors that collect, process, or store student education records as defined by FERPA (20 U.S.C. § 1232g) and applicable state student privacy laws.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: DATA PROCESSING AGREEMENT REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All AI vendors with access to student data must execute a Data Processing Agreement (DPA) that includes:

1. PURPOSE LIMITATION: Vendor may only process student data for the specific educational purpose for which it was shared. Vendor may not use student data for advertising, product development, or model training without explicit written consent.

2. DATA MINIMIZATION: Vendor collects only the minimum data necessary for the stated educational purpose.

3. RETENTION AND DELETION: Vendor must delete all student data within [30/60/90] days of contract termination, and provide written certification of deletion.

4. BREACH NOTIFICATION: Vendor must notify [DISTRICT CONTACT] within 72 hours of discovering any unauthorized access to student data.

5. SUBPROCESSOR DISCLOSURE: Vendor must disclose all subprocessors with access to student data and ensure equivalent protections apply.

6. AI TRAINING PROHIBITION: Student data may not be used to train, fine-tune, or improve AI models without explicit, informed, opt-in consent from parents/guardians (or students 18+).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: INCIDENT RESPONSE PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Upon learning of a potential data breach involving student data:

Hour 0–4: AI Coordinator notifies Superintendent and District Counsel
Hour 4–24: Assess scope; determine if FERPA breach notification is required
Hour 24–72: If breach confirmed, notify affected families per FERPA requirements
Day 3–30: Conduct root cause analysis; implement remediation; report to Board`,
  },
  {
    id: "family-communication",
    title: "Family AI Communication Template",
    category: "Family Communication",
    audience: "Families",
    urgency: "Standard",
    description:
      "A parent/guardian communication template explaining the school's AI approach, what tools students will use, privacy protections in place, and how families can support responsible AI use at home.",
    lastUpdated: "April 2026",
    basedOn: "Common Sense Media Parent AI Guide 2026 + NAEYC Family Engagement Framework",
    template: `Dear [School Name] Families,

Subject: How We Are Using Artificial Intelligence at [School Name] — What You Need to Know

As AI tools become increasingly present in education and daily life, [School Name] is committed to helping your student develop the skills to use AI responsibly, critically, and ethically. We want to share what this looks like in our classrooms and how we are protecting your child's privacy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT AI TOOLS YOUR CHILD MAY USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[LIST APPROVED TOOLS BY GRADE LEVEL]

All tools used in our classrooms have been reviewed for student privacy compliance and have signed Data Processing Agreements with our district. Your child's data is never used to train AI models.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW WE TEACH RESPONSIBLE AI USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We teach students to:
• Always verify information AI provides — AI can be wrong
• Never share personal information with AI tools
• Disclose when they have used AI in their schoolwork
• Think critically about AI-generated content, including images and text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW YOU CAN SUPPORT AT HOME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Ask your child what AI tools they are using and what they are learning about AI
• Remind your child that AI tools are not always accurate — encourage them to check sources
• Review our Student AI Acceptable Use Policy with your child (available at [LINK])
• Contact [TEACHER/PRINCIPAL NAME] at [EMAIL] with any questions or concerns

We are committed to preparing your child for a world where AI literacy is as essential as reading and writing. Thank you for your partnership.

Sincerely,
[PRINCIPAL NAME]
[SCHOOL NAME]
[DATE]`,
  },
];

// ─── Color maps ──────────────────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  "Acceptable Use": "bg-red-100 text-red-800",
  "Staff Guidelines": "bg-teal-100 text-teal-800",
  Governance: "bg-indigo-100 text-indigo-800",
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

// ─── PolicyCard ──────────────────────────────────────────────────────────────
function PolicyCard({
  policy,
  unlocked,
  onRequestUnlock,
}: {
  policy: PolicyTemplate;
  unlocked: boolean;
  onRequestUnlock: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const UrgencyIcon = urgencyConfig[policy.urgency].icon;

  const handleCopy = () => {
    if (!unlocked) {
      onRequestUnlock();
      return;
    }
    navigator.clipboard.writeText(policy.template);
    setCopied(true);
    toast.success("Template copied to clipboard!", {
      description: "Paste into a document and customize the bracketed fields.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    if (!unlocked) {
      onRequestUnlock();
      return;
    }
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

  // Preview text — first 300 chars for locked, full 1200 for unlocked
  const previewText = unlocked
    ? policy.template.slice(0, 1200)
    : policy.template.slice(0, 300);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      {/* Top accent bar */}
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
          {unlocked ? (
            <Unlock className="w-4 h-4 text-green-500 shrink-0 mt-1" />
          ) : (
            <Lock className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-3">{policy.description}</p>

        <div className="text-xs text-gray-400 mb-4">
          <span className="font-medium text-gray-500">Updated:</span> {policy.lastUpdated} ·{" "}
          <span className="font-medium text-gray-500">Based on:</span> {policy.basedOn}
        </div>

        {/* Template preview */}
        <div className="mb-4">
          <button
            onClick={() => {
              if (!unlocked) {
                onRequestUnlock();
                return;
              }
              setExpanded(!expanded);
            }}
            className="text-sm font-medium text-[#2563EB] hover:text-blue-800 transition-colors flex items-center gap-1"
          >
            <FileText className="w-4 h-4" />
            {expanded ? "Hide template preview" : "Preview template"}
          </button>
          {expanded && unlocked && (
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                {previewText}
                {policy.template.length > 1200 && (
                  <span className="text-gray-400">
                    {"\n\n"}[...template continues — copy to see full version]
                  </span>
                )}
              </pre>
            </div>
          )}
          {/* Locked blurred preview */}
          {!unlocked && (
            <div className="mt-3 relative">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-32 overflow-hidden">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed blur-sm select-none">
                  {previewText}
                </pre>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-lg">
                <button
                  onClick={onRequestUnlock}
                  className="flex items-center gap-2 bg-[#E8533A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#d44530] transition-colors shadow-sm"
                >
                  <Lock className="w-3 h-3" />
                  Unlock to preview
                </button>
              </div>
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
                : unlocked
                ? "bg-[#E8533A] text-white hover:bg-[#d44530]"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Copied!
              </>
            ) : unlocked ? (
              <>
                <Copy className="w-4 h-4" />
                Copy Template
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Unlock to Copy
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
              unlocked
                ? "border-gray-200 text-gray-700 hover:bg-gray-50"
                : "border-gray-200 text-gray-400 hover:bg-gray-50"
            }`}
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Email Gate Modal ────────────────────────────────────────────────────────
function EmailGateModal({
  open,
  onUnlocked,
  onClose,
}: {
  open: boolean;
  onUnlocked: () => void;
  onClose: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});

  const subscribeMutation = trpc.newsletter.subscribePolicyTemplates.useMutation({
    onSuccess: () => {
      sessionStorage.setItem(SESSION_KEY, "true");
      toast.success("Templates unlocked!", {
        description: "All 6 policy templates are now available to copy and download.",
      });
      onUnlocked();
    },
    onError: (err) => {
      toast.error("Something went wrong", {
        description: err.message || "Please try again.",
      });
    },
  });

  const validate = () => {
    const newErrors: { firstName?: string; email?: string } = {};
    if (!firstName.trim()) newErrors.firstName = "Please enter your first name.";
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    subscribeMutation.mutate({ firstName: firstName.trim(), email: email.trim() });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-[#E8533A]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#E8533A]" />
            </div>
            <DialogTitle className="font-display text-[#0F2A4A] text-xl">
              Access the Policy Library
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-600 leading-relaxed">
            Get free access to all 6 AI policy templates — ready to customize for your school or district. Enter your name and email to unlock.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              First Name
            </label>
            <Input
              placeholder="e.g. Sarah"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? "border-red-400" : ""}
              disabled={subscribeMutation.isPending}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Work Email
            </label>
            <Input
              type="email"
              placeholder="you@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-400" : ""}
              disabled={subscribeMutation.isPending}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            By unlocking, you'll also receive occasional updates from the AI Classroom Hub when new templates are added. Unsubscribe anytime.
          </p>

          <div className="flex gap-3 pt-1">
            <Button
              type="submit"
              disabled={subscribeMutation.isPending}
              className="flex-1 bg-[#E8533A] hover:bg-[#d44530] text-white font-semibold"
            >
              {subscribeMutation.isPending ? "Unlocking…" : "Unlock Free Access →"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={subscribeMutation.isPending}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function PolicyTemplates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAudience, setActiveAudience] = useState("All");
  const [unlocked, setUnlocked] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

  // Check session storage on mount — if the visitor already unlocked this session, skip the gate
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  const categories = ["All", ...Array.from(new Set(templates.map((t) => t.category)))];
  const audiences = ["All", ...Array.from(new Set(templates.map((t) => t.audience)))];

  const filtered = templates.filter((t) => {
    const catMatch = activeCategory === "All" || t.category === activeCategory;
    const audMatch = activeAudience === "All" || t.audience === activeAudience;
    return catMatch && audMatch;
  });

  const criticalCount = templates.filter((t) => t.urgency === "Critical").length;

  const handleUnlocked = () => {
    setUnlocked(true);
    setGateOpen(false);
  };

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

      {/* Access banner — shown when locked */}
      {!unlocked && (
        <section className="py-5 bg-[#0F2A4A] border-b border-blue-900">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-blue-300 shrink-0" />
              <p className="text-sm text-blue-100">
                <span className="font-semibold text-white">Free access</span> — enter your name and email to copy or download any template.
              </p>
            </div>
            <button
              onClick={() => setGateOpen(true)}
              className="shrink-0 bg-[#E8533A] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#d44530] transition-colors"
            >
              Unlock All Templates →
            </button>
          </div>
        </section>
      )}

      {/* Unlocked confirmation banner */}
      {unlocked && (
        <section className="py-3 bg-green-50 border-b border-green-200">
          <div className="container flex items-center gap-2">
            <Unlock className="w-4 h-4 text-green-600 shrink-0" />
            <p className="text-sm text-green-800 font-medium">
              Templates unlocked — copy or download any template below.
            </p>
          </div>
        </section>
      )}

      {/* How to use */}
      <section className="py-8 bg-amber-50 border-b border-amber-100">
        <div className="container">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">How to use these templates</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Every template contains bracketed fields like{" "}
                <code className="bg-amber-100 px-1 rounded text-xs">[SCHOOL NAME]</code> and{" "}
                <code className="bg-amber-100 px-1 rounded text-xs">[DATE]</code> that you customize for your context. These are starting points — not final documents. Review with your legal counsel, union representatives, and school board before adoption.
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
              <PolicyCard
                key={policy.id}
                policy={policy}
                unlocked={unlocked}
                onRequestUnlock={() => setGateOpen(true)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="font-medium">No templates match those filters.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setActiveAudience("All");
                }}
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

      {/* Email Gate Modal */}
      <EmailGateModal
        open={gateOpen}
        onUnlocked={handleUnlocked}
        onClose={() => setGateOpen(false)}
      />
    </Layout>
  );
}
