import React, { type JSX } from "react";

type IconProps = {
  className?: string;
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
export function ArrowUpRight({ className }: IconProps): JSX.Element {
  return (
    <svg {...baseProps} className={className}>
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
