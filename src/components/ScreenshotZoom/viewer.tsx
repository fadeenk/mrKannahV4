import React, { useMemo, type JSX } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import type { ZoomShot } from "./index";
import styles from "./viewer.module.css";

/*
 * The zoomable view: yet-another-react-lightbox with its Zoom plugin. This
 * module is imported on first use only (see index.tsx), so none of it is in
 * the page's initial bundle. Escape closes, the arrow keys move between the
 * screenshots, a double-click or pinch zooms, and the library keeps focus
 * inside while it is open.
 */

export type ViewerProps = {
  shots: readonly ZoomShot[];
  /** The screenshot showing, or -1 when closed. */
  index: number;
  /** Every transition is instant. */
  reducedMotion: boolean;
  onView: (index: number) => void;
  onClose: () => void;
};

export default function Viewer({
  shots,
  index,
  reducedMotion,
  onView,
  onClose,
}: ViewerProps): JSX.Element {
  const slides = useMemo(
    () =>
      shots.map(({ src, alt, width, height }) => ({ src, alt, width, height })),
    [shots],
  );
  const animation = reducedMotion
    ? { fade: 0, swipe: 0, navigation: 0, zoom: 0 }
    : undefined;

  return (
    <Lightbox
      className={styles.viewer}
      open={index >= 0}
      index={Math.max(index, 0)}
      slides={slides}
      plugins={[Zoom]}
      close={onClose}
      labels={{
        Lightbox: "Screenshot viewer",
        "Photo gallery": "Screenshots",
        Previous: "Previous screenshot",
        Next: "Next screenshot",
      }}
      animation={animation}
      carousel={{ finite: true }}
      // The captures are small, so allow zooming past their own pixels.
      zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      on={{ view: ({ index: at }) => onView(at) }}
    />
  );
}
