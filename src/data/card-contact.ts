import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { calUrl } from "@site/src/components/BookCta/cal";

/**
 * Contact facts for the /card page, kept apart from its layout so the
 * numbers are easy to find and change. Visible copy (the line under the
 * name, button labels) stays in the page. Keep these in step with
 * static/fadeekannah.vcf.
 */

export const CARD_NAME = "Fadee Kannah";
export const CARD_ROLE = "Senior engineering for SaaS teams";

/** The vCard, served as-is from static/ (PHOTO provenance: src/pages/card.tsx). */
export const VCARD_HREF = "/fadeekannah.vcf";

export type ContactLine = {
  /** What the line is, for its label: "Phone", "Email". */
  label: string;
  /** What the visitor reads and copies. */
  display: string;
  href: string;
};

export const PHONE: ContactLine = {
  label: "Phone",
  display: "(702) 337-3306",
  href: "tel:+17023373306",
};

export const EMAIL: ContactLine = {
  label: "Email",
  display: "fadeekannah@gmail.com",
  href: "mailto:fadeekannah@gmail.com",
};

export const WEBSITE: ContactLine = {
  label: "Website",
  display: "mrkannah.com",
  href: "https://mrkannah.com",
};

/** Booking link, tagged so a booking from the card is attributable. */
export const BOOKING: ContactLine = {
  label: "Book a free 30-min call",
  display: "cal.com/kannah/30min",
  href: calUrl("card"),
};

/**
 * The page for vertical software people (src/pages/vsaas.tsx), tagged so a
 * visit from the card is attributable in GA.
 */
export const VSAAS_HREF =
  "/vsaas/?utm_source=card&utm_medium=link&utm_campaign=vsaas";

export type Profile = ContactLine & { icon: IconDefinition };

/** Work profiles: shown with the contact lines. */
export const WORK_PROFILES: Profile[] = [
  {
    label: "LinkedIn",
    display: "in/fadeek",
    href: "https://www.linkedin.com/in/fadeek/",
    icon: faLinkedin,
  },
  {
    label: "GitHub",
    display: "fadeenk",
    href: "https://github.com/fadeenk",
    icon: faGithub,
  },
];

/** Personal profiles: a quieter row; left out of the vCard. */
export const PERSONAL_PROFILES: Profile[] = [
  {
    label: "Instagram",
    display: "@fadeekannah",
    href: "https://www.instagram.com/fadeekannah/",
    icon: faInstagram,
  },
  {
    label: "Facebook",
    display: "FadeeKannah",
    href: "https://www.facebook.com/FadeeKannah/",
    icon: faFacebook,
  },
];
