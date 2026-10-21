import React, { type CSSProperties, type JSX } from "react";

type IconProps = {
  className?: string;
  style?: CSSProperties;
};

const baseProps = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/** Outbound link marker (opens in a new tab). */
export function ArrowUpRight({ className, style }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className} style={style}>
      <path d="M6.5 13.5l7-7M8 6.5h5.5V12" />
    </svg>
  );
}

/** In-page / same-site link marker. */
export function ArrowRight({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M4.5 10h11M11 5.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}

/** Back to a parent page (a case study to the case-study index). */
export function ArrowLeft({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M15.5 10h-11M9 5.5L4.5 10 9 14.5" />
    </svg>
  );
}

/** Jump to a section further down the same page. */
export function ArrowDown({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M10 4.5v11M5.5 11l4.5 4.5 4.5-4.5" />
    </svg>
  );
}

/** Play marker on a video poster. */
export function Play({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M6.5 4.5v11l9-5.5z" />
    </svg>
  );
}

/** Disclosure marker: points down when closed; the host rotates it open. */
export function ChevronDown({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M5.5 8l4.5 4.5L14.5 8" />
    </svg>
  );
}

/** Phone number (tel: link). */
export function Phone({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M7 3.5H5a1.5 1.5 0 0 0-1.5 1.6c.5 6 5.4 10.9 11.4 11.4a1.5 1.5 0 0 0 1.6-1.5v-2l-3.4-1.4-1.6 1.6a8.4 8.4 0 0 1-4.2-4.2l1.6-1.6z" />
    </svg>
  );
}

/** Email address (mailto: link). */
export function Mail({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="4.5" width="14" height="11" rx="1.5" />
      <path d="M3.5 5.5l6.5 5.25 6.5-5.25" />
    </svg>
  );
}

/** Booking a call. */
export function Calendar({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3.5" y="4.5" width="13" height="12" rx="1.5" />
      <path d="M3.5 8.5h13M7 3v3M13 3v3" />
    </svg>
  );
}

/** Share or send a link. */
export function Share({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M10 3v9M6.75 6.25L10 3l3.25 3.25M7 9H5.5A1.5 1.5 0 0 0 4 10.5v5A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 14.5 9H13" />
    </svg>
  );
}

/** Show a QR code. */
export function QrCode({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3.5" y="3.5" width="5" height="5" rx="1" />
      <rect x="11.5" y="3.5" width="5" height="5" rx="1" />
      <rect x="3.5" y="11.5" width="5" height="5" rx="1" />
      <path d="M12 12v0M16 12v0M14 14v0M12 16v0M16 16v0" />
    </svg>
  );
}

/** Save a contact (vCard). */
export function UserPlus({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="8" cy="7" r="3" />
      <path d="M2.5 16.5c.6-2.9 2.9-4.5 5.5-4.5s4.9 1.6 5.5 4.5M15.5 6.5v5M13 9h5" />
    </svg>
  );
}

/** Done (a copied link, a saved state). */
export function Check({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
      <path d="M4.5 10.5L8 14l7.5-8" />
    </svg>
  );
}
