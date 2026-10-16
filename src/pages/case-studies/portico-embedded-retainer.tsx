import React, { type JSX } from "react";
import CaseStudyLayout, {
  CaseFrames,
  CaseList,
  CaseMasthead,
  CaseQuote,
  CaseSection,
  CaseStack,
  CaseStats,
  getCaseStudy,
  type CaseShot,
  type CaseStackGroup,
  type CaseStat,
} from "@site/src/components/CaseStudy";

/*
 * Portico approved this page as written (2026-10-15), Tina Tran's quote
 * included. Written so a school reading it would trust Portico more: happier
 * clients, enhanced reporting, and a Success team with its own engineer. A
 * change to the copy needs Portico's sign-off again.
 */

const STUDY = getCaseStudy("portico-embedded-retainer");

const STATS: readonly CaseStat[] = [
  {
    value: "24",
    label: "major initiatives shipped in 9 months",
    note: "Tracked this year",
  },
  {
    value: "2 years",
    label: "embedded with the Success team",
    note: "Ongoing",
  },
  {
    value: "4–100+",
    label: "hours a month, set by each month’s need",
    note: "Started at 10 a month, prepaid",
  },
];

/*
 * Two justified rows: each row's frames share one height, widths in
 * proportion to their aspect. Sizes are the files' intrinsic pixels.
 */
const SHOT_ROWS: readonly (readonly CaseShot[])[] = [
  [
    {
      src: "/img/case-studies/portico-d2l-dynamic-registration.png",
      alt: "Setup dialog for registering CourseKey in D2L Brightspace through LTI 1.3 dynamic registration, with numbered steps and the registration URL to paste.",
      width: 737,
      height: 808,
      // Ends below the registration URL box; drops the footer buttons.
      frameHeight: 558,
      crop: "top",
    },
    {
      src: "/img/case-studies/portico-attendance-technology-setup.png",
      alt: "Attendance setup in CourseKey, technology step: the school chooses which check-in methods students must pass, such as face or fingerprint scan, GPS, sound, or QR code.",
      width: 1237,
      height: 1106,
      // The top of the file is the painted-out browser bar and the app
      // header; show the page below them (same crop as ProofShowcase).
      frameHeight: 936,
      crop: "bottom",
    },
  ],
  [
    {
      src: "/img/case-studies/portico-approval-status-report.png",
      alt: "Approval status report: a table showing each record’s approval status, who approved it, when, and in which time zone.",
      width: 1036,
      height: 727,
      // A touch taller than the file: the cover fit trims the dark margins
      // at the sides instead, and the table stays whole.
      frameHeight: 784,
    },
    {
      src: "/img/case-studies/portico-notifications-inbox.png",
      alt: "Instructor notification inbox on the Unread tab: an alert to certify a class’s attendance at the end of the day, and two alerts about student forms to send or review.",
      width: 417,
      height: 863,
      // The open inbox, from its Unread and Read tabs to the rule under the
      // third alert (rows 48 to 736): about the report's height, so the two
      // render at near the same scale. Drops the app header above it.
      frameHeight: 688,
      crop: 48,
    },
  ],
];

const STACK: readonly CaseStackGroup[] = [
  { title: "Frontend", items: ["React"] },
  { title: "Backend and data", items: ["Node", "MySQL"] },
  {
    title: "Integrations",
    items: [
      "LTI 1.3 with dynamic registration for D2L Brightspace",
      "Canvas integration work",
    ],
  },
  {
    title: "Infrastructure and delivery",
    items: ["AWS Serverless", "Staging validation and deployment support"],
  },
  {
    title: "Where the tracked hours went",
    items: [
      "About 124 hours on attendance and reporting",
      "68+ hours on integrations and data infrastructure",
      "130 logged entries on testing, debugging, pull requests, staging validation, and deployment",
    ],
  },
];

export default function PorticoEmbeddedRetainer(): JSX.Element {
  return (
    <CaseStudyLayout
      slug={STUDY.slug}
      title="Portico case study: 24 customer initiatives in 9 months"
      description="For two years I’ve been the embedded engineer for Portico’s Success team: 24 customer initiatives in 9 months, and reports and fixes that left Portico’s clients happier."
    >
      <CaseMasthead
        study={STUDY}
        headline="24 customer initiatives shipped for Portico’s Success team in 9 months."
        lede="For two years I’ve been the embedded engineer for Portico’s Success team. I take their customer requests from plan to deploy, and the reports and fixes I ship leave Portico’s clients happier."
        clientUrl="https://porticoedu.com/"
        about="Operations software for career schools: attendance, student records and CRM, financial aid, and clinical work."
        length="2 years, ongoing"
        industry="EdTech"
      />

      <CaseStats
        stats={STATS}
        footnote="The 24 covers this year’s tracked work. Year one ran on a prepaid block of hours and wasn’t tracked item by item."
      />

      <CaseQuote
        variant="lead"
        name="Tina Tran"
        title="VP of Success"
        company="Portico"
      >
        When a school asks for something our roadmap can&rsquo;t fit yet, I
        send it to Fadee. He takes it from the ticket to production, and our
        engineers stay on the roadmap. Our schools are happier for it.
      </CaseQuote>

      <CaseSection title="Where things stood">
        <p>
          Portico&rsquo;s four products (Campus Ivy, CourseKey, Verity IQ, and
          Trajecsys) serve nursing, allied health, beauty and wellness, and
          trade and technical schools. The products share customers, and one
          Success team handles roadmap and reporting requests across all of
          them.
        </p>
        <p>
          Portico wanted its Success team to deliver on customer requests
          quickly, while core engineering stayed on the product roadmap. Those
          requests came straight from schools: roadmap features, custom
          reports, and documentation. So the Success team got its own engineer.
        </p>
      </CaseSection>

      <CaseSection title="How we worked">
        <p>
          I sit between Portico&rsquo;s Success team and their engineers.
          Nearly every request reaches me as a Success-team ticket, and I take
          it from plan and design through build, staging, and deploy. I&rsquo;m
          in their chat, meetings, and code review like anyone else on the
          team, and their engineers review and QA everything before it ships.
        </p>
        <p>
          We started with a prepaid block of 10 hours a month. It now runs from
          4 to 100+ hours a month, depending on what the Success team needs.
          Portico signed on before I offered the weekly retainer, which is why
          their terms are in monthly hours.
        </p>
      </CaseSection>

      <CaseSection title="What I built">
        <p>
          I work across their web app, backend, database, and internal
          services, on new features, fixes, and reports for customers and for
          Portico&rsquo;s own staff.
        </p>
        <CaseList
          items={[
            {
              fact: "Portico’s products connect to D2L Brightspace over LTI 1.3.",
              detail:
                "LTI 1.3 is the standard learning management systems (LMSs) use to plug in outside tools. I built it with dynamic registration, where Brightspace registers the tool from a URL, and did integration work for Canvas.",
            },
            {
              fact: "I added new attendance and academic reports, for customers and for Portico’s staff.",
              detail:
                "That meant new calculations, filters, grouping, exports, and administrative data.",
            },
            {
              fact: "Imports and exports validate records and catch duplicates.",
              detail:
                "I added validation, sanitization, and duplicate detection to the import and export workflows.",
            },
            {
              fact: "I resolved edge cases in timezones, course grouping, and filtering.",
              detail:
                "Some sat between the frontend and backend, and I made the two agree on the data.",
            },
            {
              fact: "Every release goes through testing and staging before deploy.",
              detail:
                "I write the tests, fix regressions, and support each deploy.",
            },
          ]}
        />
        <CaseFrames
          rows={SHOT_ROWS}
          caption="Screens from CourseKey, one of Portico’s products, in test environments with test data: LTI 1.3 setup for D2L Brightspace, attendance check-in setup, an approval status report, and the instructor notification inbox."
        />
      </CaseSection>

      <CaseSection title="What changed">
        <CaseList
          items={[
            {
              fact: "Clients got what they asked for, and came away happier.",
              detail:
                "I took on priority accounts across Portico’s products and shipped the reports and fixes they asked for. Together those accounts represent tens of thousands of dollars in revenue.",
            },
            {
              fact: "Enhanced reports give schools more detail.",
              detail:
                "I reworked how reports calculate attendance, missed time, makeup hours, expected hours, and course-level metrics, added new filters and grouping, and set them to generate and send by scheduled email.",
            },
            {
              fact: "Core engineering stayed on its roadmap.",
              detail:
                "Even the LTI 1.3 and Canvas work only needed their standard review and QA.",
            },
            {
              fact: "The Success team has documentation for what shipped.",
              detail:
                "I write it as each piece ships, so the team can answer customer questions on its own.",
            },
          ]}
        />
      </CaseSection>

      <CaseStack groups={STACK} />
    </CaseStudyLayout>
  );
}
