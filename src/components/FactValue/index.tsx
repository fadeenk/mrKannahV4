import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
import { CaseExternalLink } from "@site/src/components/CaseStudy";
import type { ProjectFact } from "@site/src/data/showcase";

/**
 * The value of a showcase fact: plain text, or a link, with optional plain
 * text after it. A path that starts with "/" is a same-site link; anything
 * else opens in a new tab and says so.
 */
export default function FactValue({ fact }: { fact: ProjectFact }): JSX.Element {
  const rest = fact.rest ? <> {fact.rest}</> : null;
  if (!fact.href) {
    return (
      <>
        {fact.value}
        {rest}
      </>
    );
  }
  return (
    <>
      {fact.href.startsWith("/") ? (
        <Link to={fact.href}>{fact.value}</Link>
      ) : (
        <CaseExternalLink href={fact.href}>{fact.value}</CaseExternalLink>
      )}
      {rest}
    </>
  );
}
