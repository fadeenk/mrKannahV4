import React, { type JSX } from "react";

export type SignalFieldProps = {
  /** "hero": animated, pointer-reactive. "settled": rendered once, ordered. */
  variant: "hero" | "settled";
  className?: string;
};

/**
 * STUB (Foundation). The Hero builder replaces this with the canvas tick
 * field. Keep the exported props contract stable: FinalCta already renders
 * <SignalField variant="settled" />.
 */
export default function SignalField({
  className,
}: SignalFieldProps): JSX.Element {
  return <div aria-hidden="true" className={className} />;
}
