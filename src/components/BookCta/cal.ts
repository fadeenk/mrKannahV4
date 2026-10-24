/**
 * The booking link, in its own module so data and pages (the /card contact
 * facts) can build a tagged cal.com URL without importing the whole button.
 *
 * Cal.com saves utm_source, utm_medium, utm_campaign, utm_term and
 * utm_content from the booking link onto the booking, and drops every other
 * parameter. So every link carries the utm_* trio (where the visitor came
 * from) and utm_content (which button they pressed). `variant` stays for
 * the GA book_click event and older reports.
 */
export const CAL_URL = "https://cal.com/kannah/30min";

export type CtaVariant =
  | "assessment"
  | "project"
  | "retainer"
  | "close"
  | "card"
  | "about"
  | "vsaas"
  | "testimonials"
  | "contact";

/** The utm_source / utm_medium / utm_campaign trio. */
export type Campaign = {
  source: string;
  medium: string;
  campaign: string;
};

/** A visitor who arrived with no UTM tags of their own. */
export function defaultCampaign(variant: CtaVariant): Campaign {
  return {
    source: "mrkannah.com",
    medium: "website",
    campaign: variant === "vsaas" ? "vsaas" : "site",
  };
}

/**
 * The booking URL for one button. `campaign` is the visitor's landing tags
 * when they had some (src/components/BookCta/landing-campaign.ts); empty
 * values are left out.
 */
export function calUrl(
  variant: CtaVariant,
  campaign: Campaign = defaultCampaign(variant),
): string {
  const params = new URLSearchParams({ variant });
  const tags: [string, string][] = [
    ["utm_source", campaign.source],
    ["utm_medium", campaign.medium],
    ["utm_campaign", campaign.campaign],
    ["utm_content", variant],
  ];
  for (const [key, value] of tags) {
    if (value) {
      params.set(key, value);
    }
  }
  return `${CAL_URL}?${params.toString()}`;
}
