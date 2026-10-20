import React, { useEffect, useRef, useState, type JSX, type ReactNode } from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import { Play } from "@site/src/components/Icons";
import styles from "./styles.module.css";

type LiteYouTubeProps = {
  videoId: string;
  /** What the video is; names the play button and the player. */
  title: string;
  /** A local 16:9 thumbnail (site path): nothing from YouTube loads before play. */
  poster: string;
  /** Set under the frame. */
  caption?: ReactNode;
  /** Above the fold: load the poster at once instead of lazily. */
  priority?: boolean;
};

/**
 * A YouTube video that costs nothing until it is played: a local poster and a
 * play button, swapped for the privacy-enhanced player on click (focus moves
 * to it). The frame is the same screenshot frame the case studies use.
 */
export default function LiteYouTube({
  videoId,
  title,
  poster,
  caption,
  priority = false,
}: LiteYouTubeProps): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils();
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playing) {
      frameRef.current?.querySelector("iframe")?.focus();
    }
  }, [playing]);

  return (
    <figure className={styles.figure}>
      <div className={styles.frame} ref={frameRef}>
        {playing ? (
          <iframe
            className={styles.player}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className={styles.play}
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <img
              className={styles.poster}
              src={withBaseUrl(poster)}
              alt=""
              width={1280}
              height={720}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
            />
            <span className={styles.badge}>
              <Play className={styles.icon} />
            </span>
          </button>
        )}
      </div>
      <noscript>
        <a href={`https://www.youtube.com/watch?v=${videoId}`}>
          Watch {title} on YouTube
        </a>
      </noscript>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
