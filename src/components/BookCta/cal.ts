/**
 * The booking link, in its own module so data and pages (the /card contact
 * facts) can build a tagged cal.com URL without importing the whole button.
 */
export const CAL_URL = "https://cal.com/kannah/30min";

export type CtaVariant =
  | "assessment"
  | "project"
  | "retainer"
  | "close"
  | "card"
  | "about"
  | "vsaas";

export function calUrl(variant: CtaVariant): string {
  return `${CAL_URL}?variant=${variant}`;
}
