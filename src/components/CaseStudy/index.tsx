import React, {
  useEffect,
  useRef,
  type CSSProperties,
  type JSX,
  type ReactNode,
} from "react";
import "@fontsource-variable/besley/wght.css";
import besleyLatin from "@fontsource-variable/besley/files/besley-latin-wght-normal.woff2";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import CountValue, {
  STAGGER_MS,
  useCountPhase,
} from "@site/src/components/CountUp";
import FinalCta from "@site/src/components/FinalCta";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "@site/src/components/Icons";
import { useMotionTier } from "@site/src/components/MotionTier";
import Reveal from "@site/src/components/Reveal";
import SectionHeader from "@site/src/components/SectionHeader";
import {
  otherCaseStudies,
  type CaseLogo,
  type CaseSlug,
  type CaseStudyEntry,
} from "./registry";
import styles from "./styles.module.css";

export { CASE_STUDIES, getCaseStudy } from "./registry";
export type { CaseLogo } from "./registry";

/*
 * Case-study pages: the homepage world extended to its proof pages.
 * Every study composes the same parts in the same order (see
 * docs/superpowers/specs/2026-10-15-case-studies-redesign.md). The About page
 * (src/pages/about.tsx) composes the same shell and parts in its own order:
 * the `page` layout variant with a full-bleed AboutHero, CaseBody, CaseStats
 * (`countUp`), SpineSection chapters (`when`, `scrub`), CaseFold, CaseFootLink:
 *
 *   <CaseStudyLayout>        back link ... More case studies, FinalCta
 *     <CaseMasthead />       H1, lede, facts ledger
 *     <CaseStats />          numeral ledger + footnote
 *     <CaseQuote lead />     the quote most useful to the reader
 *     <CaseSection /> x4     the story on the spine, fixed H2s
 *     <CaseStack />          tech stack disclosure
 *     <CaseFootLink />       optional quiet link, e.g. a technical write-up
 *
 * The /case-studies index uses the same shell (`variant="index"`) with
 * CaseIntro and its own ledger of the registry entries.
 */

/** Where every engagement label points. */
const ENGAGEMENTS_HREF = "/#engagements";

/* ── Layout ── */

type CaseStudyLayoutProps = {
  /** Document title (Docusaurus appends the site name). */
  title: string;
  /** Meta description. */
  description: string;
  children: ReactNode;
} & (
  | {
      /** A study page (the default). */
      variant?: "study";
      /** This study's registry slug: the "More case studies" row skips it. */
      slug: CaseSlug;
    }
  | {
      /** The /case-studies index: no back link, no "More case studies". */
      variant: "index";
      slug?: undefined;
    }
  | {
      /**
       * A page that opens full-bleed (the About hero) and sets its own
       * container with CaseBody: the shell and the closing band, nothing else.
       */
      variant: "page";
      slug?: undefined;
    }
);

/**
 * Page shell: owns the homepage tokens (they cascade from the
 * `<main>`), loads Besley the way the homepage does, and closes every study
 * with the other study and the shared drenched CTA band. The index
 * variant keeps the shell and the band and drops the study-only parts.
 */
export default function CaseStudyLayout(
  props: CaseStudyLayoutProps,
): JSX.Element {
  const { title, description, children } = props;
  const tier = useMotionTier();
  return (
    <Layout title={title} description={description}>
      <Head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={besleyLatin}
          crossOrigin="anonymous"
        />
      </Head>
      <main className={styles.root} data-tier={tier}>
        {props.variant === "page" ? (
          children
        ) : props.variant === "index" ? (
          <div className={`container ${styles.page} ${styles.pageIndex}`}>
            {children}
          </div>
        ) : (
          <>
            <div className={`container ${styles.page}`}>
              <Link to="/case-studies" className={styles.back}>
                <ArrowLeft className={styles.backArrow} />
                All case studies
              </Link>
              <article>{children}</article>
            </div>
            <MoreCaseStudies slug={props.slug} />
          </>
        )}
        <FinalCta />
      </main>
    </Layout>
  );
}

/**
 * The content container for a `page` layout, sitting under a full-bleed
 * hero: the same width and bottom padding as a study, no top padding.
 */
export function CaseBody({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={`container ${styles.page} ${styles.pageBody}`}>
      {children}
    </div>
  );
}

/* ── Logo plate ── */

type PlateProps = {
  logo: CaseLogo;
  client: string;
  /** Above the fold: load at once instead of lazily. */
  eager?: boolean;
};

/** The light plate sits behind the logo only; text stays on the page ground. */
function Plate({ logo, client, eager = false }: PlateProps): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <span className={`${styles.plate} ${logo.wide ? styles.plateWide : ""}`}>
      <img
        src={withBaseUrl(logo.src)}
        alt={`${client} logo`}
        width={logo.width}
        height={logo.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </span>
  );
}

export { Plate as CasePlate };

/* ── Masthead ── */

type CaseIntroProps = {
  /** The page's H1. */
  title: ReactNode;
  lede: ReactNode;
};

/** H1 and lede in the masthead's type, for a page with no facts ledger. */
export function CaseIntro({ title, lede }: CaseIntroProps): JSX.Element {
  return (
    <header className={styles.masthead}>
      <Heading as="h1" className={styles.headline}>
        {title}
      </Heading>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}

type CaseMastheadProps = {
  /** Registry entry: client name, logo, and engagement label. */
  study: CaseStudyEntry;
  /** H1, the outcome as a sentence. Required: `study.headline` is the
   *  shorter index phrase, not the H1. */
  headline: ReactNode;
  /** One or two first-person sentences. */
  lede: ReactNode;
  /** The client's site; opens in a new tab. Without one, the name is plain. */
  clientUrl?: string;
  /** One line on what the client does, set under the linked name. */
  about: ReactNode;
  length: ReactNode;
  industry: ReactNode;
};

/**
 * H1, lede, and the facts ledger (Client, Engagement, Length, Industry): the
 * first viewport answers what changed, for whom, how, and how long. From
 * 997px the ledger stands beside the H1 and lede as a column of rows.
 */
export function CaseMasthead({
  study,
  headline,
  lede,
  clientUrl,
  about,
  length,
  industry,
}: CaseMastheadProps): JSX.Element {
  return (
    <header className={`${styles.masthead} ${styles.mastheadSplit}`}>
      <Heading as="h1" className={styles.headline}>
        {headline}
      </Heading>
      <p className={styles.lede}>{lede}</p>
      <dl className={styles.facts}>
        <div className={`${styles.fact} ${styles.factClient}`}>
          <dt>Client</dt>
          <dd>
            <Plate logo={study.logo} client={study.client} eager />
            <p className={styles.about}>
              {clientUrl ? (
                <a
                  href={clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.clientLink}
                >
                  {study.client}
                  <ArrowUpRight className={styles.clientArrow} />
                  <span className={styles.srOnly}>, opens in a new tab</span>
                </a>
              ) : (
                <span className={styles.clientName}>{study.client}</span>
              )}{" "}
              {about}
            </p>
          </dd>
        </div>
        <div className={styles.fact}>
          <dt>Engagement</dt>
          <dd>
            <Link to={ENGAGEMENTS_HREF} className={styles.textLink}>
              {study.engagement}
            </Link>
          </dd>
        </div>
        <div className={styles.fact}>
          <dt>Length</dt>
          <dd>{length}</dd>
        </div>
        <div className={styles.fact}>
          <dt>Industry</dt>
          <dd>{industry}</dd>
        </div>
      </dl>
    </header>
  );
}

/* ── Numbers ── */

export type CaseStat = {
  /** Exactly as published. */
  value: string;
  label: ReactNode;
  note?: ReactNode;
};

type CaseStatsProps = {
  /** Three or four. */
  stats: readonly CaseStat[];
  /** One line for windows and estimates. */
  footnote?: ReactNode;
  /**
   * Count the numerals up once on first view, as the homepage stats band
   * does (components/CountUp). Off by default: the studies keep static
   * numerals.
   */
  countUp?: boolean;
};

/** Ruled numeral ledger: columns at desktop, ledger rows on phones. */
export function CaseStats({
  stats,
  footnote,
  countUp = false,
}: CaseStatsProps): JSX.Element {
  const listRef = useRef<HTMLUListElement>(null);
  const phase = useCountPhase(listRef, countUp);
  return (
    <div className={styles.stats}>
      <ul className={styles.statList} role="list" ref={listRef}>
        {stats.map((stat, i) => (
          <li key={stat.value} className={styles.stat}>
            {countUp ? (
              <CountValue
                value={stat.value}
                phase={phase}
                delay={i * STAGGER_MS}
                className={styles.statValue}
              />
            ) : (
              <span className={styles.statValue}>{stat.value}</span>
            )}
            <span className={styles.statText}>
              <span className={styles.statLabel}>{stat.label}</span>
              {stat.note ? (
                <span className={styles.statNote}>{stat.note}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
      {footnote ? <p className={styles.footnote}>{footnote}</p> : null}
    </div>
  );
}

/* ── Quote ── */

type CaseQuoteProps = {
  /** The words only: the component sets the curly marks. */
  children: ReactNode;
  name: string;
  /** Job title. Leave out while it is unconfirmed. */
  title?: string;
  company: string;
  /** "lead" under the numbers; "inline" inside a story section. */
  variant?: "lead" | "inline";
};

/** Besley pull quote with the opening mark hung outside the text edge. */
export function CaseQuote({
  children,
  name,
  title,
  company,
  variant = "inline",
}: CaseQuoteProps): JSX.Element {
  return (
    <figure
      className={`${styles.quote} ${variant === "lead" ? styles.quoteLead : styles.quoteInline}`}
    >
      <blockquote className={styles.quoteText}>
        <p>&ldquo;{children}&rdquo;</p>
      </blockquote>
      <figcaption className={styles.quoteBy}>
        <span className={styles.quoteName}>
          {name}
          {/* The gap separates them on screen; a reader hears the comma. */}
          <span className={styles.srOnly}>,</span>
        </span>
        <span className={styles.quoteRole}>
          {title ? `${title}, ${company}` : company}
        </span>
      </figcaption>
    </figure>
  );
}

/* ── Story on the spine ── */

/** The four fixed H2s, the same in every study. */
export type CaseSectionTitle =
  | "Where things stood"
  | "How we worked"
  | "What I built"
  | "What changed";

/**
 * The release line arriving: disordered ticks that straighten into the
 * spine above the first section (the ProofShowcase lead-in). [y, angle,
 * length, opacity] in a 20x56 box.
 */
const TICKS: readonly (readonly [number, number, number, number])[] = [
  [5, 64, 7, 0.3],
  [14, -50, 8, 0.42],
  [23.5, 36, 9, 0.55],
  [33, -22, 10, 0.7],
  [41.5, 9, 10, 0.85],
];

/** `className` replaces the spine's own placement (the index ledger's). */
function TickRun({
  className = styles.ticks,
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg
      className={className}
      width="20"
      height="56"
      viewBox="0 0 20 56"
      aria-hidden="true"
      focusable="false"
    >
      {TICKS.map(([y, angle, length, opacity]) => (
        <line
          key={y}
          x1="10"
          y1={y - length / 2}
          x2="10"
          y2={y + length / 2}
          transform={`rotate(${angle} 10 ${y})`}
          opacity={opacity}
        />
      ))}
      <line x1="10" y1="49" x2="10" y2="56" strokeWidth="2" />
    </svg>
  );
}

export { TickRun as CaseTicks };

type SpineSectionProps = {
  title: ReactNode;
  /**
   * Optional date line under the H2 (a page that tells its own story: when
   * the chapter happened). Set under the heading, never above it.
   */
  when?: ReactNode;
  /**
   * Draw the line with scroll, as the homepage's proof spine does: each
   * segment draws as a reading line at 62% of the viewport passes through it
   * and each node fills as the line reaches it (CSS scroll-driven animation,
   * from 997px, when motion is allowed). Off for the case studies, whose
   * nodes fill as their section reveals.
   */
  scrub?: boolean;
  /**
   * Prose, CaseList, CaseQuote: capped near 68ch. CaseFigure runs the body
   * column; CaseFrames runs the full content width.
   */
  children: ReactNode;
};

/**
 * One chapter on the spine: a node per section, the 2px line joining them,
 * and the node filling as the section reveals. From 997px the H2 sits in a
 * left column beside the body; under 997px the two stack and the spine
 * becomes a 2px stroke opening each section. A study uses CaseSection (its
 * four fixed titles); a page that tells its own story uses this.
 */
export function SpineSection({
  title,
  when,
  scrub = false,
  children,
}: SpineSectionProps): JSX.Element {
  const heading = (
    <Heading as="h2" className={styles.spineTitle}>
      {title}
    </Heading>
  );
  // One line, or several: each is its own block, so a screen reader pauses
  // between them where a <br> would run them together.
  const whenLines: ReactNode[] = Array.isArray(when)
    ? when
    : when
      ? [when]
      : [];
  return (
    <section
      className={scrub ? `${styles.spine} ${styles.spineScrub}` : styles.spine}
    >
      <TickRun />
      <span className={styles.node} aria-hidden="true" />
      <Reveal className={styles.spineContent}>
        {whenLines.length > 0 ? (
          <div className={styles.spineHead}>
            {heading}
            <p className={styles.spineWhen}>
              {whenLines.map((line, i) => (
                <span key={i} className={styles.spineWhenLine}>
                  {line}
                </span>
              ))}
            </p>
          </div>
        ) : (
          heading
        )}
        <div className={styles.body}>{children}</div>
      </Reveal>
    </section>
  );
}

/** A case-study section: `SpineSection` with the four fixed titles. */
export function CaseSection({
  title,
  children,
}: Pick<SpineSectionProps, "children"> & {
  title: CaseSectionTitle;
}): JSX.Element {
  return <SpineSection title={title}>{children}</SpineSection>;
}

/* ── Lists ── */

export type CaseListItem = {
  /** A fact, stated in bold. Not a slogan. */
  fact: ReactNode;
  /** One or two sentences. */
  detail: ReactNode;
};

/** Bold-fact list, five items at most. */
export function CaseList({
  items,
}: {
  items: readonly CaseListItem[];
}): JSX.Element {
  return (
    <ul className={styles.list} role="list">
      {items.map((item, i) => (
        <li key={i} className={styles.listItem}>
          <strong className={styles.listFact}>{item.fact}</strong>{" "}
          {item.detail}
        </li>
      ))}
    </ul>
  );
}

/* ── Media ── */

export type CaseShot = {
  /** Site path, without the base URL. */
  src: string;
  alt: string;
  /** Intrinsic pixel size of the file. */
  width: number;
  height: number;
  /**
   * Frame height in file pixels when it differs from `height`. Shorter crops
   * rows (see `crop`); taller trims the sides instead, evenly.
   */
  frameHeight?: number;
  /**
   * Which rows a shorter `frameHeight` keeps: "top" (the default) trims a
   * tall capture, "bottom" drops a capture's browser chrome, and a number is
   * the file row the frame starts at (skips a header).
   */
  crop?: "top" | "bottom" | number;
};

type CaseFramesProps = {
  /**
   * One array per row. A row is justified: its frames share one height and
   * take widths in proportion to their aspect, so captures of different
   * shapes sit level without stretching.
   */
  rows: readonly (readonly CaseShot[])[];
  caption?: ReactNode;
};

/** Custom properties only: the one inline style the system allows. */
type CssVars = CSSProperties & Record<`--${string}`, number | string>;

const round = (n: number): number => Math.round(n * 1e4) / 1e4;

/** A frame's aspect and the size at which its capture renders 1:1. */
function frameGeometry(shot: CaseShot): {
  aspect: number;
  /** Frame height (CSS px) that shows the capture at its file size. */
  fullHeight: number;
  /** Object-position y, in percent, for a row crop. */
  cropY: number;
} {
  const frameHeight = shot.frameHeight ?? shot.height;
  const spare = shot.height - frameHeight;
  let cropY = 0;
  if (spare > 0 && shot.crop === "bottom") {
    cropY = 100;
  } else if (spare > 0 && typeof shot.crop === "number") {
    cropY = (Math.min(Math.max(shot.crop, 0), spare) / spare) * 100;
  }
  return {
    aspect: shot.width / frameHeight,
    // Taller than the file, the cover fit scales to the file's height.
    fullHeight: Math.min(frameHeight, shot.height),
    cropY,
  };
}

/**
 * Static screenshot frames in justified rows, the full content width. A row
 * never grows past the height at which its smallest capture renders 1:1, and
 * on phones each frame stands alone, capped at its file width. The aspect
 * comes from custom properties, so nothing shifts when the image loads.
 */
export function CaseFrames({ rows, caption }: CaseFramesProps): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <figure className={`${styles.wide} ${styles.figure} ${styles.bleed}`}>
      <div className={styles.frames}>
        {rows.map((row) => {
          const frames = row.map((shot) => ({
            shot,
            ...frameGeometry(shot),
          }));
          const rowHeight = Math.min(...frames.map((f) => f.fullHeight));
          const rowAspect = frames.reduce((sum, f) => sum + f.aspect, 0);
          const rowVars: CssVars = {
            "--row-w": round(rowHeight * rowAspect),
            "--row-gaps": frames.length - 1,
          };
          return (
            <div
              key={row.map((shot) => shot.src).join()}
              className={styles.frameRow}
              style={rowVars}
            >
              {frames.map(({ shot, aspect, fullHeight, cropY }) => {
                const frameVars: CssVars = {
                  "--ar": round(aspect),
                  "--full-w": round(aspect * fullHeight),
                  "--crop-y": `${round(cropY)}%`,
                };
                return (
                  <div key={shot.src} className={styles.frame} style={frameVars}>
                    <img
                      src={withBaseUrl(shot.src)}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {caption ? (
        <figcaption className={styles.caption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

type CaseFigureProps = {
  children: ReactNode;
  caption?: ReactNode;
  /** Put the media in the screenshot frame (radius and resting shadow). */
  framed?: boolean;
};

/**
 * A chart, a video, or other media with a caption, the body column's full
 * width (past the prose measure).
 */
export function CaseFigure({
  children,
  caption,
  framed = false,
}: CaseFigureProps): JSX.Element {
  return (
    <figure className={`${styles.wide} ${styles.figure}`}>
      {framed ? <div className={styles.figureFrame}>{children}</div> : children}
      {caption ? (
        <figcaption className={styles.caption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

type CaseVideoProps = {
  /** Site path, without the base URL. */
  src: string;
  /** Intrinsic pixel size of the file: reserves the box before metadata. */
  width: number;
  height: number;
  /** What the recording shows. */
  label: string;
  /** Second to show as the still before play (a media fragment). */
  still?: number;
};

/**
 * A screen recording with native controls, for a framed CaseFigure. Only
 * metadata loads up front; the fragment makes the browser paint a real
 * frame as the still. Capped in width so a tall capture leaves room to read.
 */
export function CaseVideo({
  src,
  width,
  height,
  label,
  still = 1,
}: CaseVideoProps): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <video
      className={styles.video}
      src={`${withBaseUrl(src)}#t=${still}`}
      width={width}
      height={height}
      controls
      preload="metadata"
      playsInline
      aria-label={label}
    />
  );
}

/** A source link in the copy: opens in a new tab and says so. */
export function CaseExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight className={styles.sourceArrow} />
      <span className={styles.srOnly}>, opens in a new tab</span>
    </a>
  );
}

type CaseFootLinkProps = {
  /**
   * Which edge it sits on from 997px: the spine's (the default, a study) or
   * the chapters' body column (a page whose last block, a CaseFold, is in it).
   */
  align?: "spine" | "body";
  to: string;
  /** The link text; it stands on its own. */
  children: ReactNode;
  /** An optional sentence before the link. */
  note?: ReactNode;
};

/** A quiet same-site link at the end of the page body. */
export function CaseFootLink({
  align = "spine",
  to,
  children,
  note,
}: CaseFootLinkProps): JSX.Element {
  return (
    <p
      className={`${styles.footLink} ${align === "body" ? styles.footLinkBody : ""}`}
    >
      {note ? <>{note} </> : null}
      <Link to={to} className={styles.textLink}>
        {children}
        <ArrowRight className={styles.footArrow} />
      </Link>
    </p>
  );
}

/* ── Tech stack ── */

export type CaseStackGroup = {
  title: string;
  items: readonly string[];
};

type CaseStackProps = {
  groups: readonly CaseStackGroup[];
  /** Summary text. */
  label?: string;
};

/**
 * Tech stack behind a native disclosure. The summary holds the H2 so the
 * H3 groups sit under it in the outline, not under "What changed".
 */
export function CaseStack({
  groups,
  label = "Tech stack",
}: CaseStackProps): JSX.Element {
  return (
    <details className={styles.stack}>
      <summary className={styles.stackSummary}>
        <Heading as="h2" className={styles.stackTitle}>
          {label}
        </Heading>
        <ChevronDown className={styles.stackChevron} />
      </summary>
      <div className={styles.stackGroups}>
        {groups.map((group) => (
          <div key={group.title}>
            <Heading as="h3" className={styles.stackGroupTitle}>
              {group.title}
            </Heading>
            <ul className={styles.stackItems} role="list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

/* ── Folded prose ── */

type CaseFoldProps = {
  /** Summary text: the disclosure's H2. */
  label: string;
  /** Prose and H3s, set on a reading measure. */
  children: ReactNode;
};

/**
 * Longer reading behind a native disclosure, in the stack's frame. The
 * summary holds the H2. A URL or in-page link whose hash names an id inside
 * opens the fold and scrolls to it; the browser alone scrolls to the closed
 * fold's summary and stops, before the content has a position.
 */
export function CaseFold({ label, children }: CaseFoldProps): JSX.Element {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const reveal = (hash: string): void => {
      const fold = ref.current;
      let target: HTMLElement | null = null;
      try {
        target = hash ? document.getElementById(decodeURIComponent(hash)) : null;
      } catch {
        // A malformed escape (a lone "%") names nothing; leave the page be.
        return;
      }
      if (fold && target && fold.contains(target)) {
        fold.open = true;
        target.scrollIntoView();
      }
    };
    const onHashChange = (): void => reveal(window.location.hash.slice(1));
    // Clicking the same in-page link again, after the fold was closed, fires
    // no hashchange, so catch the click itself.
    const onClick = (event: MouseEvent): void => {
      const link = (event.target as Element | null)?.closest("a[href^='#']");
      reveal(link?.getAttribute("href")?.slice(1) ?? "");
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <details ref={ref} className={styles.fold}>
      <summary className={styles.stackSummary}>
        <Heading as="h2" className={styles.stackTitle}>
          {label}
        </Heading>
        <ChevronDown className={styles.stackChevron} />
      </summary>
      <div className={styles.foldBody}>{children}</div>
    </details>
  );
}

/* ── More case studies ── */

/** The other studies, from the registry, before the closing band. */
function MoreCaseStudies({ slug }: { slug: CaseSlug }): JSX.Element {
  return (
    <section className={styles.more}>
      <div className="container">
        <SectionHeader title="More case studies" />
        <ul className={styles.moreList} role="list">
          {otherCaseStudies(slug).map((study) => (
            <li key={study.slug} className={styles.moreItem}>
              <Plate logo={study.logo} client={study.client} />
              <Heading as="h3" className={styles.moreTitle}>
                <Link to={study.path} className={styles.moreLink}>
                  {study.headline}
                  {" "}
                  <ArrowRight className={styles.moreArrow} />
                </Link>
              </Heading>
              <p className={styles.moreMeta}>
                {study.client} · {study.engagement}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
