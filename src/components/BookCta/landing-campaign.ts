import { useMemo, useSyncExternalStore } from "react";
import { calUrl, type Campaign, type CtaVariant } from "./cal";

/**
 * Forwards a visitor's own UTM tags (QR, LinkedIn, the /card link) to every
 * booking link, so the booking in Cal.com says where they came from.
 *
 * The first tagged landing in a browser session wins: it is kept in
 * sessionStorage, so a booking from /about after landing on a tagged /vsaas
 * still carries the /vsaas tags. Untagged pages never overwrite it.
 *
 * Also a Docusaurus client module (docusaurus.config.ts `clientModules`):
 * `onRouteDidUpdate` stores the tags on landing, even on a page with no
 * booking link, before client-side navigation drops the query string.
 */

const KEY = "mrkannah-landing-utm-v1";

/** Longest tag value forwarded; anything longer is cut. */
const MAX_LENGTH = 100;

function tag(params: URLSearchParams, name: string): string {
  return (params.get(name) ?? "").trim().slice(0, MAX_LENGTH);
}

/** The URL's utm trio as JSON, or null when it has no utm_source. */
function fromSearch(search: string): string | null {
  const params = new URLSearchParams(search);
  const campaign: Campaign = {
    source: tag(params, "utm_source"),
    medium: tag(params, "utm_medium"),
    campaign: tag(params, "utm_campaign"),
  };
  return campaign.source ? JSON.stringify(campaign) : null;
}

function stored(): string | null {
  try {
    return window.sessionStorage.getItem(KEY);
  } catch {
    // Storage blocked: only the current URL's tags can be used.
    return null;
  }
}

/** Keeps the URL's tags unless the session already has some. */
function capture(search: string): void {
  const tags = fromSearch(search);
  if (!tags || stored()) {
    return;
  }
  try {
    window.sessionStorage.setItem(KEY, tags);
  } catch {
    // Storage blocked: nothing to keep.
  }
}

export function onRouteDidUpdate({
  location,
}: {
  location: { search: string };
}): void {
  capture(location.search);
}

function parse(json: string | null): Campaign | null {
  if (!json) {
    return null;
  }
  try {
    const value: unknown = JSON.parse(json);
    if (
      value &&
      typeof value === "object" &&
      "source" in value &&
      "medium" in value &&
      "campaign" in value &&
      typeof value.source === "string" &&
      typeof value.medium === "string" &&
      typeof value.campaign === "string" &&
      value.source
    ) {
      return {
        source: value.source.slice(0, MAX_LENGTH),
        medium: value.medium.slice(0, MAX_LENGTH),
        campaign: value.campaign.slice(0, MAX_LENGTH),
      };
    }
  } catch {
    // Malformed entry: fall back to the defaults.
  }
  return null;
}

/* The snapshot is the JSON string itself, so it compares stable by value. */
const subscribe = () => () => {};
const clientSnapshot = (): string | null =>
  stored() ?? fromSearch(window.location.search);
const serverSnapshot = (): null => null;

/**
 * The booking URL for one button. The server render (and hydration) always
 * has the default tags, so every href works without JS and the markup
 * matches; the visitor's own tags replace them right after mount.
 */
export function useCalUrl(variant: CtaVariant): string {
  const json = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  return useMemo(
    () => calUrl(variant, parse(json) ?? undefined),
    [variant, json],
  );
}
