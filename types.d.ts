declare module "@site/docs/*";
declare module "@site/static/*";

/** gtag.js, loaded by the preset's gtag plugin in production builds only. */
interface Window {
  gtag?: (...args: unknown[]) => void;
}
