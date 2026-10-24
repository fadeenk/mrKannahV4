import React, { type JSX } from "react";
import CaseStudyLayout, {
  CaseExternalLink,
  CaseFigure,
  CaseFold,
  CaseFootLink,
  CaseHeader,
  CaseList,
  CaseStack,
  CaseVideo,
  SpineSection,
  type CaseFactRow,
  type CaseListItem,
  type CaseStackGroup,
} from "@site/src/components/CaseStudy";
import FactValue from "@site/src/components/FactValue";
import {
  VIDEOARCHIVER_BUILD,
  VIDEOARCHIVER_RECORDING,
  VIDEOARCHIVER_TRANSCRIPT,
  VIDEOARCHIVER_URL,
  getProject,
} from "@site/src/data/showcase";
import styles from "./showcase.module.css";

/*
 * VideoArchiver, Fadee's own live product. Every product claim uses the
 * wording the live landing page already prints (the VideoArchiver
 * dashboard's pages/index.vue): "your own cloud", "streamed, never stored",
 * "your Ring account" and "storage". How it is built is the product's moat,
 * so the page shows the practice around it (tests, CI, decision records,
 * release records, the commit history) and a stack of tool names, and never
 * how the pieces fit together. The one call to action is the live site; the
 * page names no store, install button or launch date. The recording runs on
 * the dashboard's demo mode (see VIDEOARCHIVER_RECORDING). It shows no
 * caption: its notes are the video's description for assistive tech, and its
 * transcript sits in a fold under it.
 */

const PROJECT = getProject("videoarchiver");

const FACTS: readonly CaseFactRow[] = PROJECT.facts.map((fact) => ({
  label: fact.label,
  value: <FactValue fact={fact} />,
}));

const DOES: readonly CaseListItem[] = [
  {
    fact: "Saved as it happens.",
    detail:
      "Each motion event and doorbell press is picked up the moment Ring reports it, then streamed to your storage. No downloads, no sync schedule.",
  },
  {
    fact: "Streamed, never stored.",
    detail:
      "Clips pass from Ring to your storage through our servers without being saved. We never keep a copy.",
  },
  {
    fact: "Retries without you.",
    detail:
      "Temporary failures retry automatically. Anything that still can’t be saved shows up under Needs attention in Events, with the reason and a Replay button.",
  },
  {
    fact: "Every device on its own plan.",
    detail:
      "Each device archives and counts independently: keep quiet ones on Free and move busy ones to Pro.",
  },
  {
    fact: "Keep clips as long as you like.",
    detail:
      "Clips stay in your cloud until you delete them, even if you stop using VideoArchiver.",
  },
];

const PRACTICE: readonly CaseListItem[] = [
  {
    fact: `${VIDEOARCHIVER_BUILD.testFiles} test files.`,
    detail:
      "CI runs them on every pull request and every push to main.",
  },
  {
    fact: "A demo of every page.",
    detail:
      "The dashboard has a demo mode with made-up cameras and clips, and CI checks that every page has one. The recording above was made in it.",
  },
  {
    fact: `${VIDEOARCHIVER_BUILD.decisionRecords} written decision records.`,
    detail:
      "Choices that shape the product are written down with their reasons, from Ring trials staying on the Free plan to filing clips under the camera’s name.",
  },
  {
    fact: "Written release records.",
    detail:
      "Both October 2026 releases have one: what was checked before the deploy, each step in order, what was verified on the live product afterwards, and what is still to do. The second fixed 17 issues found in an audit.",
  },
];

const BUILT_WITH_AI: readonly CaseListItem[] = [
  {
    fact: `${VIDEOARCHIVER_BUILD.commits} commits since ${VIDEOARCHIVER_BUILD.firstCommit}.`,
    detail: `On ${VIDEOARCHIVER_BUILD.commitDays} different days, counted from the repository’s history in October 2026.`,
  },
  {
    fact: `${VIDEOARCHIVER_BUILD.claudeCommits} commits name a Claude model as co-author.`,
    detail: `Google’s Jules agent wrote ${VIDEOARCHIVER_BUILD.julesCommits} more. The rest name no AI model, so the history can’t say which of them an agent wrote.`,
  },
];

const STACK: readonly CaseStackGroup[] = [
  { title: "Frontend", items: ["Nuxt", "Vue", "TypeScript"] },
  { title: "Platform", items: ["Cloudflare", "Supabase"] },
  {
    title: "Quality",
    items: ["Automated tests", "CI", "Written decision records"],
  },
];

export default function VideoArchiver(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="work"
      title="VideoArchiver: your Ring clips in your own cloud"
      description="VideoArchiver saves every Ring motion event and doorbell press to your own Google Drive, Dropbox or S3-compatible storage. Clips are streamed, never stored on our servers."
      image="/img/og/videoarchiver.png"
    >
      <CaseHeader
        title="VideoArchiver: your Ring clips, automatically in your own cloud"
        lede="VideoArchiver saves every Ring motion event and doorbell press to your own Google Drive, Dropbox or S3-compatible storage. Clips are streamed, never stored on our servers. It is my own product, a live product of Kannah Consulting."
        facts={FACTS}
      />

      <CaseFigure framed>
        <CaseVideo
          src={VIDEOARCHIVER_RECORDING.src}
          poster={VIDEOARCHIVER_RECORDING.poster}
          width={VIDEOARCHIVER_RECORDING.width}
          height={VIDEOARCHIVER_RECORDING.height}
          label={VIDEOARCHIVER_RECORDING.label}
          description={VIDEOARCHIVER_RECORDING.description}
        />
      </CaseFigure>

      <div className={styles.transcriptFold}>
        <CaseFold label="Video transcript">
          <ol className={styles.transcript}>
            {VIDEOARCHIVER_TRANSCRIPT.map((part) => (
              <li key={part.at} className={styles.transcriptPart}>
                <span className={styles.transcriptAt}>{part.at}</span>
                <p>
                  <span className={styles.transcriptLabel}>On screen:</span>{" "}
                  {part.screen}
                </p>
                <p>
                  <span className={styles.transcriptLabel}>Voice:</span>{" "}
                  {part.voice}
                </p>
              </li>
            ))}
          </ol>
        </CaseFold>
      </div>

      <SpineSection scrub title="What it does">
        <p>
          Three steps, then it runs itself: install it, link your Ring
          account and choose your storage. Each clip is saved in a folder
          named for the camera it came from.
        </p>
        <CaseList items={DOES} />
        <p>
          The Free plan covers 50 events per device each calendar month (UTC),
          with no credit card. Pro is $2.99 per device per month, with
          unlimited events. Your storage costs are between you and your cloud
          provider.
        </p>
      </SpineSection>

      <SpineSection scrub title="How I run it">
        <p>
          I keep how VideoArchiver is built private. What I can show is the
          work around the code.
        </p>
        <CaseList items={PRACTICE} />
      </SpineSection>

      <SpineSection scrub title="Built with AI agents">
        <p>
          I build VideoArchiver with AI coding agents. The commit history
          records part of it.
        </p>
        <CaseList items={BUILT_WITH_AI} />
      </SpineSection>

      <CaseStack groups={STACK} />

      <p className={styles.liveCta}>
        <CaseExternalLink href={VIDEOARCHIVER_URL}>
          See VideoArchiver live at videoarchiver.mrkannah.com
        </CaseExternalLink>
      </p>
      <p className={styles.disclaimer}>
        Ring is a trademark of Amazon.com, Inc. VideoArchiver is not affiliated
        with or endorsed by Ring or Amazon.
      </p>

      <CaseFootLink to="/showcase">Back to all work</CaseFootLink>
    </CaseStudyLayout>
  );
}
