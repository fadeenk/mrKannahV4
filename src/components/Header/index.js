import React from "react";
import ParticlesBackground from "./visualEffect";
import "./header.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Header() {
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
        <h1 className="hero-headline">
          18+ Years Building Tech Companies.<br />
          I Help You Launch Faster, Scale Smarter.
        </h1>
        <p className="hero-subheadline">
          From MVP to enterprise — get senior technical leadership without the full-time cost.
        </p>
        <div className="hero-ctas">
          <a href="https://cal.com/kannah/30min" target="_blank" rel="noopener noreferrer" className="ctaButton primary">
            Book Free Consultation
          </a>
          <a href="/showcase" className="ctaButton secondary">
            See My Work
          </a>
        </div>
        <ul className="hero-trust">
          <li>$30M+ raised for clients</li>
          <li>40-60% infrastructure cost reduction</li>
          <li>Built teams from 2 to 50</li>
        </ul>
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
