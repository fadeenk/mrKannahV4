import React, { type JSX } from "react";
import Heading from "@theme/Heading";
import SectionHeader from "@site/src/components/SectionHeader";
import styles from "./styles.module.css";

/** "04": FAQ. Rest builder owns this folder. */
export default function FitFaq(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader index="04" label="FAQ" title="FAQ" />
        <div className={styles.grid2}>
          <div className="card--elevated">
            <Heading
              as="h3"
              style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
            >
              Who owns the code?
            </Heading>
            <p style={{ marginBottom: 0 }}>
              You do — I work in your repo, on your cadence, with scope,
              ownership, and success measures defined in writing.
            </p>
          </div>
          <div className="card--elevated">
            <Heading
              as="h3"
              style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
            >
              What access do you need?
            </Heading>
            <p style={{ marginBottom: 0 }}>
              Repo, CI, and one engineering counterpart. No reorg required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
