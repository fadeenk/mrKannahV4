import React, { type JSX } from "react";
import Heading from "@theme/Heading";
import Reveal from "@site/src/components/Reveal";
import SectionHeader from "@site/src/components/SectionHeader";
import styles from "./styles.module.css";

type Faq = {
  question: string;
  answer: string;
};

const faqs: readonly Faq[] = [
  {
    question: "Who owns the code?",
    answer:
      "You do. The work happens in your repo, and your engineers review every pull request before it merges.",
  },
  {
    question: "What access do you need?",
    answer:
      "Your repo, your CI, and one engineer on your side to work with. Nobody has to reorganize around me.",
  },
  {
    question: "Do you only do AI work?",
    answer:
      "No. At Portico it was reporting and LMS integrations. American Growth Insurance needed an AI assistant, so that’s what I built.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the scope, so the price comes in the written proposal, within 48\u00a0hours of our call. The call is free.",
  },
];

/**
 * FAQ. Every answer visible: they are the last objections before the close,
 * so nothing sits behind a disclosure. Ruled rows rather than
 * cards (the engagements above are the page's cards); each rule starts with
 * a short 2px signal segment, the release line's stroke.
 */
export default function FitFaq(): JSX.Element {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <SectionHeader title="Before you book" />
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60} className={styles.row}>
              <Heading as="h3" className={styles.question}>
                {faq.question}
              </Heading>
              <p className={styles.answer}>{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
