import React, { type JSX } from "react";
import Head from "@docusaurus/Head";

/**
 * Keeps a page that is reachable only by direct link out of search results.
 * The page must stay crawlable (no robots.txt rule) so a search engine can
 * see this tag and drop a URL it already holds.
 */
export default function NoIndex(): JSX.Element {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
