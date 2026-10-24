import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type JSX,
  type ReactNode,
} from "react";
import { useMotionTier } from "@site/src/components/MotionTier";
import type { ViewerProps } from "./viewer";
import styles from "./styles.module.css";

/*
 * Click-to-zoom for screenshots. One provider holds the screenshots of a
 * page section (the order is the arrow-key order); each `ZoomTile` is the
 * button that opens the viewer at its screenshot. The viewer is the
 * lightbox library, fetched on the first click or hover so it stays out of
 * the page's initial bundle. It shows the full source file, not the tile's
 * crop. Used by the homepage proof strip and the case-study frames.
 */

export type ZoomShot = {
  /** Full URL of the source file (base URL applied). */
  src: string;
  alt: string;
  /** Intrinsic pixel size of the file. */
  width: number;
  height: number;
};

type ZoomContext = {
  shots: readonly ZoomShot[];
  open: (index: number) => void;
  preload: () => void;
  register: (index: number, el: HTMLButtonElement | null) => void;
};

const Context = createContext<ZoomContext | null>(null);

type ViewerModule = { default: ComponentType<ViewerProps> };
let viewerLoad: Promise<ViewerModule> | undefined;

function loadViewer(): Promise<ViewerModule> {
  if (!viewerLoad) {
    viewerLoad = import("./viewer");
    // A failed fetch must not stick: the next click tries again.
    viewerLoad.catch(() => {
      viewerLoad = undefined;
    });
  }
  return viewerLoad;
}

type ScreenshotZoomProps = {
  shots: readonly ZoomShot[];
  children: ReactNode;
};

export default function ScreenshotZoom({
  shots,
  children,
}: ScreenshotZoomProps): JSX.Element {
  const tier = useMotionTier();
  const [Viewer, setViewer] = useState<ComponentType<ViewerProps> | null>(null);
  const [index, setIndex] = useState(-1);
  const tiles = useRef<(HTMLButtonElement | null)[]>([]);
  // The screenshot being viewed, so focus can go back to its tile on close.
  const current = useRef(0);

  const open = useCallback(
    (at: number) => {
      current.current = at;
      loadViewer().then(
        (mod) => {
          setViewer(() => mod.default);
          setIndex(at);
        },
        // The chunk did not load (offline): the file itself still opens.
        () => window.open(shots[at].src, "_blank", "noopener,noreferrer"),
      );
    },
    [shots],
  );

  const preload = useCallback(() => {
    loadViewer().catch(() => undefined);
  }, []);

  const register = useCallback((at: number, el: HTMLButtonElement | null) => {
    tiles.current[at] = el;
  }, []);

  const close = useCallback(() => {
    setIndex(-1);
    // Wait a frame so the viewer has released focus before it moves.
    window.requestAnimationFrame(() => tiles.current[current.current]?.focus());
  }, []);

  const value = useMemo(
    () => ({ shots, open, preload, register }),
    [shots, open, preload, register],
  );

  return (
    <Context.Provider value={value}>
      {children}
      {Viewer ? (
        <Viewer
          shots={shots}
          index={index}
          reducedMotion={tier === "reduced"}
          onView={(at) => {
            current.current = at;
          }}
          onClose={close}
        />
      ) : null}
    </Context.Provider>
  );
}

function ZoomIcon(): JSX.Element {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6" />
    </svg>
  );
}

type ZoomTileProps = {
  /** Position in the provider's `shots`. */
  index: number;
  /** Frame classes from the caller: the tile keeps its frame's look. */
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** The screenshot's frame, as a button that opens the zoomable view. */
export function ZoomTile({
  index,
  className,
  style,
  children,
}: ZoomTileProps): JSX.Element {
  const zoom = useContext(Context);
  if (!zoom) {
    throw new Error("ZoomTile must sit inside a ScreenshotZoom");
  }
  const { shots, open, preload, register } = zoom;
  return (
    <button
      type="button"
      ref={(el) => register(index, el)}
      className={`${styles.tile} ${className ?? ""}`}
      style={style}
      aria-label={`Open a larger view: ${shots[index].alt}`}
      aria-haspopup="dialog"
      onClick={() => open(index)}
      onPointerEnter={preload}
      onFocus={preload}
    >
      {children}
      <span className={styles.badge} aria-hidden="true">
        <ZoomIcon />
      </span>
    </button>
  );
}
