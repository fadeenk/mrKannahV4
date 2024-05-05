import React, { Component } from "react";
import ParticlesBackground from "./VisualEffect";
// import ProfilePicture from "./profilePicture";
// import MyTypist from "./myTypist";
// import config from "../../../data/SiteConfig";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="transition header">
        <div style={{ position: "relative", width: "100%" }}>
          <div
            className="transition header"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 5,
              position: "relative",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <div className="transition glassContainer">
              <img
                src="/img/fadee.jpg"
                alt="Fadee Kannah"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className="transition profilePicture"
              />
            </div>
            <div className="transition glassContainer">
              <h1>Hi, I'm Fadee.</h1>
              <p style={{ maxWidth: "800px" }}>
                As a seasoned software architect and technical advisor, I use my
                expertise in software design, team building, and career
                development to guide teams and individuals to success.
              </p>
            </div>
          </div>
          <ParticlesBackground />
        </div>
      </header>
    );
  }
}

export default Header;
