import React, { type JSX } from "react";
import LogosCarousel from "@site/src/components/LogosCarousel";
import styles from "./styles.module.css";

/** Stats band + client logos. Rest builder owns the count-up + drenched look. */
export default function StatsBand(): JSX.Element {
  return (
    <div className={styles.statsBand}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className={styles.statNumber}>18+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className={styles.statNumber}>$45M+</span>
            <span className="stat-label">Raised for Clients</span>
          </div>
          <div className="stat-item">
            <span className={styles.statNumber}>40-60%</span>
            <span className="stat-label">Infrastructure Cost Reduction</span>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </div>
  );
}
