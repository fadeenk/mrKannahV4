import React, { useEffect, useRef, useState, type JSX } from "react";
import { Check, Share } from "@site/src/components/Icons";
import styles from "./styles.module.css";

type ShareButtonProps = {
  url: string;
  /** Title and text handed to the native share sheet. */
  title: string;
  text?: string;
  className?: string;
  iconClassName?: string;
};

type Status = "idle" | "copied" | "failed";

const COPIED_MS = 2400;

/**
 * Shares a link through the native share sheet (Web Share API) where the
 * browser has one, and copies it to the clipboard where it does not. The
 * label says which: "Share" on phones and on most desktop Chrome, Edge and
 * Safari, "Copy link" where there is no share sheet (Firefox). It
 * renders "Share" on the server and settles after mount, so hydration
 * matches. The outcome is announced through a polite live region; the host
 * styles the button and can key off `data-status`.
 */
export default function ShareButton({
  url,
  title,
  text,
  className,
  iconClassName,
}: ShareButtonProps): JSX.Element {
  const [native, setNative] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number>(0);

  useEffect(() => {
    setNative(typeof navigator.share === "function");
    return () => window.clearTimeout(timer.current);
  }, []);

  const settle = (next: Status): void => {
    setStatus(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), COPIED_MS);
  };

  const onClick = async (): Promise<void> => {
    const data = { title, text, url };
    if (typeof navigator.share === "function") {
      try {
        await navigator.share(data);
        return;
      } catch (error) {
        // Closing the sheet is a choice, not a failure.
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      settle("copied");
    } catch {
      settle("failed");
    }
  };

  const label =
    status === "copied"
      ? "Link copied"
      : status === "failed"
        ? "Couldn’t copy"
        : native
          ? "Share"
          : "Copy link";

  return (
    <>
      <button
        type="button"
        className={className}
        data-status={status}
        onClick={() => void onClick()}
      >
        {status === "copied" ? (
          <Check className={iconClassName} />
        ) : (
          <Share className={iconClassName} />
        )}
        <span>{label}</span>
      </button>
      <span className={styles.srOnly} role="status" aria-live="polite">
        {status === "copied" ? "Link copied to the clipboard." : ""}
        {status === "failed" ? `Couldn’t copy. The link is ${url}` : ""}
      </span>
    </>
  );
}
