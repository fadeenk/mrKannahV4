import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type JSX,
  type ReactNode,
} from "react";
import { useMotionTier } from "@site/src/components/MotionTier";
import styles from "./styles.module.css";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in ms. */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "p";
  className?: string;
};

type RevealState = "visible" | "pending" | "done";

/**
 * One-time reveal (fade + 12px rise). Content is visible by default: the
 * server render and reduced-motion users never see the hidden state, and
 * anything already on screen at mount is never hidden. Only elements below
 * the fold are held back and released by an IntersectionObserver.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps): JSX.Element {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const tier = useMotionTier();
  const [state, setState] = useState<RevealState>("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el || tier === "reduced") {
      setState("visible");
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      setState("visible");
      return;
    }
    setState("pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState("done");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [tier]);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={className ? `${styles.reveal} ${className}` : styles.reveal}
      style={style}
    >
      {children}
    </Tag>
  );
}
