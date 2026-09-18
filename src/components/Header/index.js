import React from "react";
import ParticlesBackground from "./visualEffect";
import "./header.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

/**
 * @param {Object} props
 * @param {string | null} [props.eyebrow]
 * @param {React.ReactNode} [props.headline]
 * @param {React.ReactNode} [props.subheadline]
 * @param {{ label: string, href: string, external: boolean }} [props.primaryCta]
 * @param {{ label: string, href: string, external: boolean }} [props.secondaryCta]
 * @param {string | null} [props.microcopy]
 */
export default function Header({
  eyebrow = null,
  headline = (
    <>
      18+ Years Building Tech Companies.
      <br />
      I Help You Launch Faster, Scale Smarter.
    </>
  ),
  subheadline = (
    <>
      From MVP to enterprise — plus AI delivery consulting that helps SaaS
      engineering teams ship AI into production without breaking reliability.
    </>
  ),
  primaryCta = {
    label: "Book Free Consultation",
    href: "https://cal.com/kannah/30min",
    external: true,
  },
  secondaryCta = {
    label: "See My Work",
    href: "/showcase",
    external: false,
  },
  microcopy = null,
}) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const element = document.querySelector("#myProfilePicture");
        if (!element) return;
        element.classList.add("hovered");
        setTimeout(() => {
          element.classList.remove("hovered");
        }, 3000);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="transition header">
      <div className="container header-container">
      <div className="hero-content">
        {eyebrow && (
          <p style={{ marginBottom: "0.5rem" }}>
            <span className="tag--pill" style={{ color: "inherit", borderColor: "currentColor" }}>
              {eyebrow}
            </span>
          </p>
        )}
        <h1 className="hero-headline">
          {headline}
        </h1>
        <p className="hero-subheadline">
          {subheadline}
        </p>
        <div className="hero-ctas">
          <a
            href={primaryCta.href}
            {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="ctaButton primary"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            {...(secondaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="ctaButton secondary"
          >
            {secondaryCta.label}
          </a>
        </div>
        {microcopy && (
          <p style={{ fontSize: "1rem", marginTop: "0.5rem", marginBottom: 0 }}>
            {microcopy}
          </p>
        )}
      </div>
      <div className="profileSection">
        <div id="myProfilePicture" className="profilePicture">
          <div className="wrapper">
            <img
              src="./img/fadee.jpg"
              className="cover-image"
              alt="Fadee Kannah in black & white"
            />
          </div>
          <img
            src="./img/fadee.png"
            className="character"
            alt="Fadee Kannah in color"
          />
        </div>
      </div>
      </div>
      <BrowserOnly>{() => <ParticlesBackground />}</BrowserOnly>
    </header>
  );
}
