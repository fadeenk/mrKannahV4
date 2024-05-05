import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import config from "./config";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      initParticlesEngine((engine) => loadSlim(engine)).then(() =>
        setInit(true)
      );
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(() => {
    config.fullScreen = { enable: false, zIndex: -5 };
    const color = getComputedStyle(document.body)
      .getPropertyValue("--particles-color")
      .trim();
    const linksColor = getComputedStyle(document.body)
      .getPropertyValue("--particles-links-color")
      .trim();
    config.particles.color = color;
    config.particles.shape.stroke.color = color;
    config.particles.links.color = linksColor;

    return config;
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="vistualEffect"
        particlesLoaded={particlesLoaded}
        options={options}
        width="100%"
      />
    );
  }
  return null;
}
