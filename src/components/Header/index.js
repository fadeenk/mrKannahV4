import React from "react";
import ParticlesBackground from "./VisualEffect";
import "./header.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Header() {
  setTimeout(() => {
    const element = document.querySelector("#myProfilePicture");
    if (!element) return;
    element.classList.add("hovered");
    setTimeout(() => {
      element.classList.remove("hovered");
    }, 3000);
  }, 1000);

  return (
    <header className="transition header">
      <span className="headerTitle">Fadee</span>
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
      <span className="headerTitle">Kannah</span>
      <BrowserOnly>{() => <ParticlesBackground />}</BrowserOnly>
    </header>
  );
}
