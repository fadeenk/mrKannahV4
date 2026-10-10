import { useEffect, useSyncExternalStore } from "react";

/**
 * Motion tiers for the /consulting page.
 * - full: fine pointer, no reduced-motion. Everything runs.
 * - touch: coarse pointer, no reduced-motion. Effects settle once, no pointer
 *   effects.
 * - reduced: prefers-reduced-motion. Every effect shows its finished state.
 * The server (and the first client render) is always "reduced", so markup
 * hydrates in the finished, fully visible state.
 */
export type MotionTier = "full" | "touch" | "reduced";

const FINE_QUERY = "(pointer: fine)";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void): () => void {
  const queries = [FINE_QUERY, REDUCED_QUERY].map((q) => window.matchMedia(q));
  queries.forEach((mq) => mq.addEventListener("change", onChange));
  return () =>
    queries.forEach((mq) => mq.removeEventListener("change", onChange));
}

function getSnapshot(): MotionTier {
  if (window.matchMedia(REDUCED_QUERY).matches) {
    return "reduced";
  }
  return window.matchMedia(FINE_QUERY).matches ? "full" : "touch";
}

function getServerSnapshot(): MotionTier {
  return "reduced";
}

export function useMotionTier(): MotionTier {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Mirrors tier "full" onto <html class="hasMotion"> for CSS hooks.
 * Call once, from the page shell.
 */
export function useHasMotionClass(): void {
  const tier = useMotionTier();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("hasMotion", tier === "full");
    return () => root.classList.remove("hasMotion");
  }, [tier]);
}
