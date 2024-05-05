import React, { Component } from "react";
import ParticlesBackground from "./VisualEffect";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="transition header">
        <span className="headerTitle">Fadee</span>
        <div class="profilePicture">
          <div class="wrapper">
            <img
              src="/img/fadee.jpg"
              class="cover-image"
              alt="Fadee Kannah in black & white"
            />
          </div>
          <img
            src="/img/fadee.png"
            class="character"
            alt="Fadee Kannah in color"
          />
        </div>
        <span className="headerTitle">Kannah</span>
        <ParticlesBackground />
      </header>
    );
  }
}

export default Header;
