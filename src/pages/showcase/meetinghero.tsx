import React, { type JSX } from "react";
import CaseStudyLayout, {
  CaseExternalLink,
  CaseFootLink,
  CaseHeader,
  CaseList,
  SpineSection,
  type CaseFactRow,
  type CaseListItem,
} from "@site/src/components/CaseStudy";
import LiteYouTube from "@site/src/components/LiteYouTube";
import {
  MEETINGHERO_INTRO,
  MEETINGHERO_LAUNCH,
  MEETINGHERO_RELAUNCH_URL,
  MEETINGHERO_SHUTDOWN_URL,
} from "@site/src/data/showcase";
import styles from "./showcase.module.css";

/*
 * MeetingHero.ai, from its shutdown statement, its landing page and the
 * 2025 recap's demo videos. The statement is Fadee's own. No testimonials
 * (a shut-down product quoting praise reads oddly) and no stack section
 * until one is supplied. Each demo loads only when played. The alpha and
 * beta demos are not shown: their frames show other people's names, calendar
 * entries and work emails.
 */

const FACTS: readonly CaseFactRow[] = [
  { label: "Built", value: "December 2024 to October 2025" },
  { label: "Launched", value: "May 17, 2025" },
  { label: "Users", value: "39 served, 7,402 meetings analyzed" },
  { label: "Plans", value: "$4.99 to $9.99 a month, with a 7-day trial" },
  {
    label: "Status",
    value: (
      <CaseExternalLink href={MEETINGHERO_SHUTDOWN_URL}>
        Shut down, with a written statement
      </CaseExternalLink>
    ),
  },
];

const FEATURES: readonly CaseListItem[] = [
  {
    fact: "Discussion starters.",
    detail:
      "Talking points based on each attendee’s background and their company’s news.",
  },
  {
    fact: "Company deep dives.",
    detail: "The context and recent news of the company you were meeting.",
  },
  {
    fact: "Attendee profiles.",
    detail: "Education, career history and recent achievements.",
  },
];

const NUMBERS: readonly CaseListItem[] = [
  { fact: "39 users served.", detail: "In the product’s life." },
  {
    fact: "7,402 meetings analyzed.",
    detail: "And 1,674 briefings completed.",
  },
];

export default function MeetingHero(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="work"
      title="MeetingHero.ai, and why I shut it down"
      description="MeetingHero.ai researched the people you were about to meet and put a briefing in your calendar or inbox. I launched it in May 2025 and shut it down in October."
    >
      <CaseHeader
        title="MeetingHero.ai, and why I shut it down"
        lede={
          <>
            MeetingHero.ai researched the people you were about to meet and put
            a briefing in your calendar or inbox. I launched it in May 2025 and
            shut it down in October. I{" "}
            <CaseExternalLink href={MEETINGHERO_SHUTDOWN_URL}>
              wrote up why
            </CaseExternalLink>{" "}
            when I did.
          </>
        }
        facts={FACTS}
      />

      <div className={styles.lead}>
        <LiteYouTube
          priority
          videoId={MEETINGHERO_INTRO.id}
          title={MEETINGHERO_INTRO.label}
          poster={MEETINGHERO_INTRO.poster}
          caption={MEETINGHERO_INTRO.note}
        />
      </div>

      <SpineSection scrub title="What it did">
        <p>
          You connected a Google or Outlook calendar. MeetingHero found your
          upcoming meetings, researched the attendees and their companies, and
          sent a short briefing to your email or calendar before each one.
        </p>
        <CaseList items={FEATURES} />
      </SpineSection>

      <SpineSection scrub title="Launch and relaunch">
        <p>
          I launched on May 17, 2025. When it didn’t take off, I relaunched in
          July with a redesigned site, free tools and a trial, and made videos
          and blog posts to find users.
        </p>
        <div className={styles.lead}>
          <LiteYouTube
            videoId={MEETINGHERO_LAUNCH.id}
            title={MEETINGHERO_LAUNCH.label}
            poster={MEETINGHERO_LAUNCH.poster}
            caption={MEETINGHERO_LAUNCH.note}
          />
        </div>
        <p>
          <CaseExternalLink href={MEETINGHERO_RELAUNCH_URL}>
            Watch the relaunch demo
          </CaseExternalLink>
          .
        </p>
      </SpineSection>

      <SpineSection scrub title="What the numbers said">
        <p>I had passionate users, and there weren’t enough of them.</p>
        <CaseList items={NUMBERS} />
      </SpineSection>

      <SpineSection scrub title="Why I shut it down">
        <p>
          It never became a business. Heavy users cost more in AI usage than
          the lighter users could cover, and AI costs fell more slowly than I
          had assumed. People had grown tired of paying for AI tools, I
          couldn’t explain why mine was better than asking ChatGPT directly,
          and referrals and outreach didn’t bring in enough new users.
        </p>
        <p>
          <CaseExternalLink href={MEETINGHERO_SHUTDOWN_URL}>
            Read the full statement
          </CaseExternalLink>
          .
        </p>
      </SpineSection>

      <CaseFootLink to="/showcase">Back to all work</CaseFootLink>
    </CaseStudyLayout>
  );
}
