import React, { useState, type JSX } from "react";
import Heading from "@theme/Heading";

const WORKER_URL =
  "https://mrkannah-contact-worker.mrkannah.workers.dev";
const myEmail = "fadeekannah@gmail.com";

export default function Contact(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
          Thank you for reaching out!
        </Heading>
        <p className="hero__subtitle">
          I'll get back to you as soon as possible.
        </p>
      </section>
    );
  }
  return (
    <div id="contact" className="hero">
    <section className="container">
      <Heading as="h3" className="hero__title text--center">
        Ready to get started or to take your project to the next level?
      </Heading>
      <p className="hero__subtitle">
        Fill out the form below, reach out to me directly, or{" "}
        <a
          href="https://cal.com/kannah/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          schedule a free 30-min consultation
        </a>
        .
      </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {errorMessage && (
            <div
              className="alert alert--danger"
              role="alert"
              style={{ marginBottom: "1rem", maxWidth: "400px", width: "100%" }}
            >
              {errorMessage}{" "}
              <a href={`mailto:${myEmail}`}>{myEmail}</a>
            </div>
          )}
          <label>
            Name
            <input
              className="passwordProtectedDoc"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              className="passwordProtectedDoc"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Message
            <textarea
              style={{ height: "8rem" }}
              className="passwordProtectedDoc"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button
            style={{ margin: "20px" }}
            className="button button--lg button--primary"
            type="submit"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </section>
    </div>
  );
}
