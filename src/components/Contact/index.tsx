import React, { useEffect, useState, type CSSProperties, type JSX } from "react";
import Heading from "@theme/Heading";
import { CTA_MICROCOPY } from "@site/src/components/BookCta/copy";
import { ArrowUpRight } from "@site/src/components/Icons";
import styles from "./styles.module.css";

const WORKER_URL =
  "https://mrkannah-contact-worker.mrkannah.workers.dev";
const myEmail = "fadeekannah@gmail.com";
const DRAFT_KEY = "mrkannah-contact-draft-v1";

type ContactDraft = {
  name: string;
  email: string;
  message: string;
};

function readDraft(): ContactDraft {
  if (typeof window === "undefined") {
    return { name: "", email: "", message: "" };
  }
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return { name: "", email: "", message: "" };
    const parsed = JSON.parse(raw) as Partial<ContactDraft>;
    return {
      name: typeof parsed.name === "string" ? parsed.name.slice(0, 100) : "",
      email: typeof parsed.email === "string" ? parsed.email.slice(0, 254) : "",
      message: typeof parsed.message === "string" ? parsed.message.slice(0, 5000) : "",
    };
  } catch {
    return { name: "", email: "", message: "" };
  }
}

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "100%",
  maxWidth: "480px",
  margin: "0 auto",
  padding: "0 1rem",
  boxSizing: "border-box",
};

const fieldStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  marginBottom: "1rem",
  boxSizing: "border-box",
};

const labelStyle: CSSProperties = {
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: 1.4,
  overflowWrap: "break-word",
};

const inputStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  minHeight: "48px",
  fontSize: "16px",
  lineHeight: 1.5,
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: "1px solid var(--ifm-color-emphasis-300, #ccc)",
  background: "var(--ifm-background-color)",
  color: "inherit",
  fontFamily: "inherit",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "8rem",
  resize: "vertical",
};

type ContactProps = {
  /** Hide the heading + booking button above the form (page already has one). */
  hideBooking?: boolean;
};

export default function Contact({
  hideBooking = false,
}: ContactProps): JSX.Element {
  const [name, setName] = useState(() => readDraft().name);
  const [email, setEmail] = useState(() => readDraft().email);
  const [message, setMessage] = useState(() => readDraft().message);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [restored, setRestored] = useState(false);

  // Restore draft once on mount (lazy init already fills values; flag tells the note).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (raw && (JSON.parse(raw) as ContactDraft).message) {
        setRestored(true);
      }
    } catch {
      // Private mode / blocked storage: form still works, just no persistence.
    }
    // Run once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist draft so a refresh never loses the message.
  useEffect(() => {
    try {
      window.localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ name, email, message })
      );
    } catch {
      // Storage unavailable (private mode, quota): ignore, form remains usable.
    }
  }, [name, email, message]);

  const isFormValid = Boolean(name.trim() && email.trim() && message.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && !result.error) {
        try {
          window.localStorage.removeItem(DRAFT_KEY);
        } catch {
          // Ignore storage errors on success path.
        }
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.error || "Failed to send message. Please try again or email me directly."
        );
      }
    } catch (err) {
      setErrorMessage(
        "Network error. Please check your connection or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="container">
        <Heading as="h2" className="hero__title">
          Thanks for reaching out.
        </Heading>
        <p className="hero__subtitle">I&apos;ll reply within 48 hours.</p>
      </section>
    );
  }
  return (
    <div id="contact" className="hero">
      <section className="container" style={{ minWidth: 0 }}>
        {hideBooking ? null : (
          <>
            <Heading as="h3" className="hero__title text--center">
              Get a scoped plan for your project
            </Heading>
            <div className="text--center" style={{ marginBottom: "2rem" }}>
              <a
                href="https://cal.com/kannah/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free 30-min call, opens in new tab"
                className="button button--primary button--lg"
              >
                Book a free 30-min call
                <ArrowUpRight style={{ marginLeft: "0.4rem", fontSize: "1.05em" }} />
              </a>
              <p style={{ fontSize: "1rem", marginTop: "0.5rem", marginBottom: 0 }}>
                {CTA_MICROCOPY}
              </p>
            </div>
          </>
        )}
        <Heading
          as={hideBooking ? "h3" : "h4"}
          className="text--center"
          style={{ marginBottom: "0.5rem" }}
        >
          Prefer to write?
        </Heading>
        <p className="hero__subtitle text--center" style={{ margin: "0 auto 1.5rem" }}>
          Send a message and I&apos;ll reply within 48 hours.
        </p>
        {restored ? (
          <p
            className="text--center"
            style={{ fontSize: "0.9rem", marginTop: "-0.75rem", marginBottom: "1.5rem", opacity: 0.85 }}
          >
            Draft restored from this device.
          </p>
        ) : null}
        <form onSubmit={handleSubmit} style={formStyle} noValidate={false}>
          {errorMessage && (
            <div
              className="alert alert--danger"
              role="alert"
              aria-live="assertive"
              style={{ marginBottom: "1rem", maxWidth: "100%", width: "100%", boxSizing: "border-box", overflowWrap: "break-word" }}
            >
              {errorMessage}{" "}
              <a href={`mailto:${myEmail}`}>{myEmail}</a>
            </div>
          )}
          <div className={styles.field} style={fieldStyle}>
            <label htmlFor="contact-name" style={labelStyle}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              aria-required="true"
            />
          </div>
          <div className={styles.field} style={fieldStyle}>
            <label htmlFor="contact-email" style={labelStyle}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              aria-required="true"
            />
          </div>
          <div className={styles.field} style={fieldStyle}>
            <label htmlFor="contact-message" style={labelStyle}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={5000}
              placeholder="What are you trying to ship?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={textareaStyle}
              aria-required="true"
              aria-describedby="contact-submit-hint"
            />
          </div>
          <button
            style={{ margin: "20px auto", minHeight: "48px", maxWidth: "100%" }}
            className="button button--lg button--primary"
            type="submit"
            disabled={!isFormValid || isSubmitting}
            aria-describedby="contact-submit-hint"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          <p
            id="contact-submit-hint"
            className="text--center"
            style={{ fontSize: "0.9rem", marginTop: 0, overflowWrap: "break-word" }}
            aria-live="polite"
          >
            {!isFormValid && !isSubmitting
              ? "Fill in your name, a valid email, and a message to enable Send."
              : "Draft auto-saves on this device, so a refresh won't lose your message."}
          </p>
        </form>
      </section>
    </div>
  );
}
