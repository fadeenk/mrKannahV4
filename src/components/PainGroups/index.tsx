import React, { type JSX } from "react";
import RolloutRail, { type RailGate } from "@site/src/components/RolloutRail";
import SectionHeader from "@site/src/components/SectionHeader";

const painGroups: readonly [RailGate, RailGate, RailGate] = [
  {
    title: "Stuck pilots",
    body: "Your AI pilot has lived in staging for weeks. Every rollout plan feels like it risks production.",
    proof:
      "Example: sandboxed rollout, eval harness, rollback plan — shipped to prod without an incident.",
    route: "See assessment details",
    routeLabel:
      "See assessment details: AI Delivery and Reliability Assessment in engagements section",
    href: "#engagements",
  },
  {
    title: "At-risk delivery",
    body: "Legacy constraints and delivery bottlenecks. Adding AI looks like it will destabilize what works.",
    proof:
      "Example: CI and coverage first, then AI-assisted triage — lead time down, prod stable.",
    route: "See project details",
    routeLabel:
      "See project details: Project-Based AI Delivery in engagements section",
    href: "#engagements",
  },
  {
    title: "Overloaded team",
    body: "Roadmap is full and senior bandwidth is thin. AI work waits because no one can own it safely.",
    proof:
      "Example: embedded senior owner for one workstream — in your repo, to prod with your team.",
    route: "See retainer details",
    routeLabel:
      "See retainer details: Embedded AI Delivery Partner in engagements section",
    href: "#engagements",
  },
];

/** "01": the three gates (RolloutRail). Rest builder owns this folder. */
export default function PainGroups(): JSX.Element {
  return (
    <RolloutRail
      gates={painGroups}
      header={
        <SectionHeader
          index="01"
          label="Sound familiar?"
          title="Three gates between your AI pilot and production"
          lede="The teams I get called in for are stuck at one of them."
        />
      }
    />
  );
}
