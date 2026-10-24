import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import CaseStudyLayout, {
  CaseExternalLink,
  CaseFigure,
  CaseIntro,
  CaseVideo,
  SpineSection,
} from "@site/src/components/CaseStudy";
import FactValue from "@site/src/components/FactValue";
import { ArrowRight } from "@site/src/components/Icons";
import LiteYouTube from "@site/src/components/LiteYouTube";
import ShowcaseRecording from "@site/src/components/ShowcaseRecording";
import {
  AGENT_PLATFORM_RECORDING,
  AI_ASSISTANT_RECORDING,
  IFOLIO_RECORDING,
  MEETINGHERO_INTRO,
  PROJECTS,
  RECOGNITION,
  SMALL_BUILDS,
  VIDEOARCHIVER_RECORDING,
  type RecognitionImage,
  type ShowcaseProject,
} from "@site/src/data/showcase";
import styles from "./showcase.module.css";

/*
 * The showcase index: the proof spine from the homepage, extended to every
 * project, led by the most recent, VideoArchiver. One release line runs down
 * the page with a node per project, each with its recording (iFolio's runs on
 * a made-up portfolio, since the real account data can't be shown, and
 * VideoArchiver's on its dashboard's demo mode, with made-up cameras and
 * clips) and a link to its write-up. Every recording is a ShowcaseRecording:
 * one short caption, and its details read to assistive tech. The smaller builds carry their own recordings
 * and the recognition ledger its certificates and covers. Facts live in
 * src/data/showcase.ts, shared with the write-ups. Case Studies are their own
 * section of the site.
 */

/** A ledger entry's small image; it opens the full-size one in a new tab. */
function RecognitionThumb({ image }: { image: RecognitionImage }): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <a
      className={`${styles.entryImage}${image.bare ? ` ${styles.entryImageBare}` : ""}`}
      href={withBaseUrl(image.src)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={withBaseUrl(image.thumb)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
      />
      <span className={styles.srOnly}>, opens full size in a new tab</span>
    </a>
  );
}

/** A project's recording, when it has one. */
function Media({ project }: { project: ShowcaseProject }): JSX.Element | null {
  switch (project.slug) {
    case "ai-assistant":
      return (
        <ShowcaseRecording recording={AI_ASSISTANT_RECORDING} />
      );
    case "videoarchiver":
      return (
        <ShowcaseRecording recording={VIDEOARCHIVER_RECORDING} />
      );
    case "agent-platform":
      return (
        <ShowcaseRecording recording={AGENT_PLATFORM_RECORDING} />
      );
    case "ifolio":
      return (
        <ShowcaseRecording recording={IFOLIO_RECORDING} />
      );
    case "meetinghero":
      return (
        <div className={styles.lead}>
          <LiteYouTube
            videoId={MEETINGHERO_INTRO.id}
            title={MEETINGHERO_INTRO.label}
            poster={MEETINGHERO_INTRO.poster}
            caption={MEETINGHERO_INTRO.note}
          />
        </div>
      );
    default:
      return null;
  }
}

export default function Showcase(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="index"
      title="Showcase"
      description="The VideoArchiver Ring clip archiver, an AI assistant in a client’s app, the iFolio portfolio tracker, a white-label agent platform and MeetingHero.ai: five projects I built, with write-ups."
      image="/img/og/showcase.png"
    >
      <CaseIntro
        title="Showcase"
        lede={
          <>
            Five projects I built, each with its own write-up, then smaller
            builds and recognition. The{" "}
            <Link to="/case-studies">case studies</Link> cover how I worked
            with clients.
          </>
        }
      />

      {PROJECTS.map((project) => (
        <SpineSection
          key={project.slug}
          scrub
          title={project.rowTitle}
          when={project.when}
        >
          <p>{project.summary}</p>
          <Media project={project} />
          <dl className={styles.facts}>
            {project.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>
                  <FactValue fact={fact} />
                </dd>
              </div>
            ))}
          </dl>
          <p className={styles.links}>
            <Link
              to={project.path}
              aria-label={`Read the write-up: ${project.rowTitle}`}
            >
              Read the write-up
              <ArrowRight className={styles.linkArrow} />
            </Link>
          </p>
        </SpineSection>
      ))}

      <SpineSection scrub title="Smaller builds">
        <ul className={styles.builds} role="list">
          {SMALL_BUILDS.map((build) => (
            <li key={build.name} className={styles.build}>
              <h3 className={styles.buildName}>{build.name}</h3>
              <p className={styles.buildText}>{build.text}</p>
              {build.media ? (
                <div
                  className={styles.buildMedia}
                  style={{ maxWidth: `${build.media.maxWidth}rem` }}
                >
                  <CaseFigure framed>
                    <CaseVideo
                      src={build.media.src}
                      poster={build.media.poster}
                      width={build.media.width}
                      height={build.media.height}
                      label={build.media.label}
                    />
                  </CaseFigure>
                </div>
              ) : null}
              {build.links.length > 0 ? (
                <p className={styles.buildLinks}>
                  {build.links.map((link) => (
                    <CaseExternalLink key={link.href} href={link.href}>
                      {link.label}
                    </CaseExternalLink>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </SpineSection>

      <SpineSection scrub title="Recognition">
        <ul className={styles.ledger} role="list">
          {RECOGNITION.map((item) => (
            <li key={item.title} className={styles.entry}>
              <span className={styles.entryYear}>{item.year}</span>
              <div>
                <p className={styles.entryTitle}>{item.title}</p>
                <p className={styles.entryDetail}>{item.detail}</p>
                {item.source ? (
                  <p className={styles.entrySource}>
                    <CaseExternalLink href={item.source.href}>
                      {item.source.label}
                    </CaseExternalLink>
                  </p>
                ) : null}
              </div>
              {item.image ? <RecognitionThumb image={item.image} /> : null}
            </li>
          ))}
        </ul>
      </SpineSection>
    </CaseStudyLayout>
  );
}
