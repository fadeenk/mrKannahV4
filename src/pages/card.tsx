import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type JSX,
} from "react";
import "@fontsource-variable/besley/wght.css";
import besleyLatin from "@fontsource-variable/besley/files/besley-latin-wght-normal.woff2";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import {
  ArrowLeft,
  Calendar,
  Mail,
  Phone,
  QrCode,
  UserPlus,
} from "@site/src/components/Icons";
import { useMotionTier } from "@site/src/components/MotionTier";
import ShareButton from "@site/src/components/ShareButton";
import SignalField from "@site/src/components/SignalField";
import {
  BOOKING,
  CARD_NAME,
  CARD_ROLE,
  EMAIL,
  PERSONAL_PROFILES,
  PHONE,
  VCARD_HREF,
  WEBSITE,
  WORK_PROFILES,
  type Profile,
} from "@site/src/data/card-contact";
import styles from "./card.module.css";

/**
 * /card: the digital business card. A frosted glass badge held over the
 * homepage release-line field: the ticks and the line run behind the
 * badge and the glass blurs them. Show QR code turns the badge over in place
 * to the QR. Chromeless (no navbar or footer), so the badge is the page.
 *
 * Rasters, all from static/img/fadee.jpg (3261px square):
 * - static/img/fadee-card-240.webp and -480.webp: the whole frame, Lanczos
 *   downscales, WebP q82.
 * - The vCard PHOTO in static/fadeekannah.vcf: crop (980, 60, 2620, 1700) on
 *   the face, Lanczos to 256px, baseline JPEG q76, base64 folded at 75.
 * The QR is static/img/qr.jpg, unchanged.
 */

const LINE = "I ship the work that keeps slipping.";
const QR_CAPTION = "Scan to access contact info";

/** The page ground per theme, for the phone's browser chrome (mirrors --card-ground). */
const GROUND_HEX = { light: "#f5f6f7", dark: "#1b1b1d" } as const;

/**
 * Half-turn timings (ms): the badge narrows to its edge, swaps faces, opens
 * again. A 2D scaleX turn, not a 3D rotation: browsers drop backdrop-filter
 * on an element turned in 3D, so a rotateY turn would flash clear glass.
 */
const TURN_OUT_MS = 180;
const TURN_IN_MS = 340;
const TURN_OUT_EASE = "cubic-bezier(0.55, 0, 1, 0.45)";
const TURN_IN_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Max pointer lean in px (full motion tier only); 2D for the same reason. */
const LEAN_MAX = 6;

/** Resting angle of the badge's light-catching edge: lit from the top left. */
const EDGE_REST_DEG = 150;

/** The custom properties the pointer sets on the badge's wrapper. */
const LEAN_VARS = [
  "--lean-x",
  "--lean-y",
  "--card-sheen-x",
  "--card-sheen-y",
] as const;

/** `deg` moved by whole turns to lie within half a turn of `near`. */
function nearestTurn(deg: number, near: number): number {
  return deg + 360 * Math.round((near - deg) / 360);
}

type Face = "front" | "back";

/** Tints the phone's browser chrome to the page ground. */
function GroundThemeColor(): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <Head>
      <meta name="theme-color" content={GROUND_HEX[colorMode]} />
    </Head>
  );
}

/**
 * A brand mark drawn from FontAwesome's icon data. Rendered here rather than
 * through FontAwesomeIcon so the mark is sized by this page's CSS in the
 * server render (FontAwesome injects its sizing CSS only at runtime).
 */
function BrandMark({ icon }: { icon: Profile["icon"] }): JSX.Element {
  const [width, height, , , path] = icon.icon;
  const paths = Array.isArray(path) ? path : [path];
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

type ProfileLinkProps = {
  label: string;
  tip: string;
  href: string;
  className: string;
  children: React.ReactNode;
};

/** An icon link to a profile, named for screen readers, with a hover tip. */
function ProfileLink({
  label,
  tip,
  href,
  className,
  children,
}: ProfileLinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      {children}
      <span className={styles.tip} aria-hidden="true">
        {tip}
      </span>
    </a>
  );
}

export default function Card(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const tier = useMotionTier();
  const [face, setFace] = useState<Face>("front");

  const rootRef = useRef<HTMLElement>(null);
  const leanRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const qrButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  /** Set while a turn is half done: the first half's animation. */
  const turning = useRef<Animation | null>(null);
  /** The second half; a new turn waits for it, so the badge never jumps. */
  const opening = useRef<Animation | null>(null);
  /** Move focus to the new face once it is showing (not on first render). */
  const focusAfterTurn = useRef(false);

  const turnTo = useCallback(
    (next: Face): void => {
      const badge = badgeRef.current;
      if (
        next === face ||
        turning.current ||
        opening.current?.playState === "running"
      ) {
        return;
      }
      focusAfterTurn.current = true;
      if (!badge || tier === "reduced" || typeof badge.animate !== "function") {
        setFace(next);
        return;
      }
      const out = badge.animate(
        [{ transform: "scaleX(1)" }, { transform: "scaleX(0)" }],
        { duration: TURN_OUT_MS, easing: TURN_OUT_EASE, fill: "forwards" },
      );
      turning.current = out;
      out.onfinish = () => setFace(next);
    },
    [face, tier],
  );

  /* Second half of a turn: runs after React has swapped the faces and before
     paint, so the badge never shows the old face square-on. */
  useLayoutEffect(() => {
    const badge = badgeRef.current;
    const out = turning.current;
    if (badge && out) {
      turning.current = null;
      out.cancel();
      opening.current = badge.animate(
        [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        { duration: TURN_IN_MS, easing: TURN_IN_EASE },
      );
    }
    if (focusAfterTurn.current) {
      focusAfterTurn.current = false;
      (face === "back" ? backButtonRef : qrButtonRef).current?.focus();
    }
  }, [face]);

  /* Escape turns the badge back to the front. */
  useEffect(() => {
    if (face !== "back") {
      return;
    }
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        turnTo("front");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [face, turnTo]);

  /* Full tier: the badge leans toward a fine pointer and its sheen follows. */
  useEffect(() => {
    const root = rootRef.current;
    const lean = leanRef.current;
    if (!root || !lean || tier !== "full") {
      return;
    }
    let frame = 0;
    let px = 0;
    let py = 0;
    /* Unwrapped, so the eased angle never spins the long way round. */
    let edge = EDGE_REST_DEG;
    const setEdge = (deg: number): void => {
      edge = nearestTurn(deg, edge);
      lean.style.setProperty("--card-edge-angle", `${edge.toFixed(1)}deg`);
    };
    const apply = (): void => {
      frame = 0;
      const r = lean.getBoundingClientRect();
      /* -1..1 across the badge plus a margin, so the lean eases near its edge. */
      const clamp = (n: number): number => Math.max(-1, Math.min(1, n));
      const nx = clamp((px - (r.left + r.width / 2)) / (r.width / 2 + 160));
      const ny = clamp((py - (r.top + r.height / 2)) / (r.height / 2 + 160));
      lean.style.setProperty("--lean-x", `${(nx * LEAN_MAX).toFixed(1)}px`);
      lean.style.setProperty("--lean-y", `${(ny * LEAN_MAX).toFixed(1)}px`);
      lean.style.setProperty("--card-sheen-x", `${(50 + nx * 50).toFixed(1)}%`);
      lean.style.setProperty("--card-sheen-y", `${(50 + ny * 50).toFixed(1)}%`);
      /* The edge's bright end turns to face the pointer. */
      setEdge(
        Math.hypot(nx, ny) < 0.05
          ? EDGE_REST_DEG
          : (Math.atan2(-nx, ny) * 180) / Math.PI,
      );
    };
    const move = (e: PointerEvent): void => {
      if (e.pointerType === "touch") {
        return;
      }
      px = e.clientX;
      py = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    };
    const leave = (): void => {
      cancelAnimationFrame(frame);
      frame = 0;
      for (const name of LEAN_VARS) {
        lean.style.removeProperty(name);
      }
      setEdge(EDGE_REST_DEG);
    };
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      leave();
      lean.style.removeProperty("--card-edge-angle");
    };
  }, [tier]);

  const front = face === "front";
  const workLinks = [
    ...WORK_PROFILES.map((p) => ({
      key: p.label,
      label: p.label,
      tip: p.label,
      href: p.href,
      mark: <BrandMark icon={p.icon} />,
    })),
    {
      key: WEBSITE.label,
      label: WEBSITE.label,
      tip: WEBSITE.display,
      href: WEBSITE.href,
      mark: <BrandMark icon={faGlobe} />,
    },
  ];

  return (
    <Layout
      title="Virtual Business Card"
      description="Fadee Kannah's contact card: call, email, book a free 30-minute call, or save the contact to your phone."
      noFooter
    >
      <Head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={besleyLatin}
          crossOrigin="anonymous"
        />
      </Head>
      <GroundThemeColor />
      <main
        ref={rootRef}
        className={styles.root}
        data-tier={tier}
        data-face={face}
        data-field-host=""
      >
        <SignalField variant="hero" />

        <div ref={leanRef} className={styles.lean}>
          <div ref={badgeRef} className={styles.badge}>
            <section
              className={`${styles.face} ${styles.front}`}
              aria-label="Contact details"
              aria-hidden={!front}
              inert={!front}
            >
              <header className={styles.identity}>
                <div className={styles.portrait} data-field-anchor="" data-field-rise="">
                  <img
                    src="/img/fadee-card-240.webp"
                    srcSet="/img/fadee-card-240.webp 240w, /img/fadee-card-480.webp 480w"
                    sizes="(orientation: portrait) and (max-height: 740px) 92px, (orientation: landscape) and (max-height: 34rem) 88px, (max-width: 360px) 104px, 132px"
                    width={240}
                    height={240}
                    alt=""
                    className={styles.photo}
                    fetchPriority="high"
                  />
                </div>
                <h1 className={styles.name} data-field-quiet="">
                  {CARD_NAME}
                </h1>
                <p className={styles.role} data-field-quiet="">
                  {CARD_ROLE}
                </p>
                <p className={styles.line} data-field-quiet="">
                  {LINE}
                </p>
              </header>

              <div className={styles.details}>
                <ul className={styles.rows} role="list">
                  {[
                    { line: PHONE, Icon: Phone },
                    { line: EMAIL, Icon: Mail },
                  ].map(({ line, Icon }) => (
                    <li key={line.label}>
                      <a href={line.href} className={styles.row}>
                        <span className={styles.rowIcon} aria-hidden="true">
                          <Icon />
                        </span>
                        <span className={styles.rowText}>
                          <span className={styles.rowLabel}>{line.label}</span>
                          <span className={styles.rowValue}>{line.display}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  {/* No `download` attribute: iOS Safari then opens its
                      Add to Contacts sheet for the text/vcard response
                      instead of asking to download a file. */}
                  <a
                    href={VCARD_HREF}
                    className={`${styles.button} ${styles.solid}`}
                  >
                    <UserPlus className={styles.buttonIcon} />
                    <span>Save contact</span>
                  </a>
                  <a
                    href={BOOKING.href}
                    className={`${styles.button} ${styles.outline}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className={styles.buttonIcon} />
                    <span>{BOOKING.label}</span>
                    <span className={styles.srOnly}> (opens in a new tab)</span>
                  </a>
                  <div className={styles.pair}>
                    <ShareButton
                      url={`${siteConfig.url}/card/`}
                      title={CARD_NAME}
                      text={`${CARD_NAME}, ${CARD_ROLE}`}
                      className={`${styles.button} ${styles.quiet}`}
                      iconClassName={styles.buttonIcon}
                    />
                    <button
                      ref={qrButtonRef}
                      type="button"
                      className={`${styles.button} ${styles.quiet}`}
                      aria-label="Show QR code"
                      onClick={() => turnTo("back")}
                    >
                      <QrCode className={styles.buttonIcon} />
                      <span>QR code</span>
                    </button>
                  </div>
                </div>

                <nav className={styles.profiles} aria-label="Profiles">
                  <ul className={styles.work} role="list">
                    {workLinks.map((link) => (
                      <li key={link.key}>
                        <ProfileLink
                          label={link.label}
                          tip={link.tip}
                          href={link.href}
                          className={styles.tile}
                        >
                          {link.mark}
                        </ProfileLink>
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.personal} role="list">
                    {PERSONAL_PROFILES.map((p) => (
                      <li key={p.label}>
                        <ProfileLink
                          label={p.label}
                          tip={p.label}
                          href={p.href}
                          className={styles.mini}
                        >
                          <BrandMark icon={p.icon} />
                        </ProfileLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>

            <section
              className={`${styles.face} ${styles.back}`}
              aria-label="QR code"
              aria-hidden={front}
              inert={front}
            >
              <button
                ref={backButtonRef}
                type="button"
                className={styles.backButton}
                aria-label="Back to contact details"
                onClick={() => turnTo("front")}
              >
                <ArrowLeft />
              </button>
              <figure className={styles.qr}>
                <div className={styles.plate}>
                  <img
                    src="/img/qr.jpg"
                    width={1147}
                    height={1147}
                    alt="QR code for Fadee Kannah's contact info"
                    className={styles.qrImage}
                    decoding="async"
                  />
                </div>
                <figcaption className={styles.qrCaption}>
                  <span className={styles.qrName}>{CARD_NAME}</span>
                  <span>{QR_CAPTION}</span>
                </figcaption>
              </figure>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
