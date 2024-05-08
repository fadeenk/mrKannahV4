import React, { useState, useEffect, useMemo } from "react";
import Particles, {
  IParticlesProps,
  initParticlesEngine,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine((engine) => loadSlim(engine)).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    const config: IParticlesProps["options"] & {
      particles: {
        links: {
          enable: boolean;
          distance: number;
          opacity: number;
          color: string;
          width: number;
        };
      };
    } = {
      detectRetina: false,
      fullScreen: { enable: false, zIndex: -5 },
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
          },
        },
        shape: {
          type: ["circle", "triangle", "polygon", "square"],
        },
        color: {},
        opacity: {
          value: 0.5,
        },
        size: {
          value: 5,
        },
        move: {
          enable: true,
          speed: 3,
        },
        links: {
          enable: true,
          distance: 150,
          color: "set in code",
          opacity: 0.4,
          width: 1,
        },
        collisions: { enable: true },
      },
    };
    const color = getComputedStyle(document.body)
      .getPropertyValue("--particles-color")
      .trim();
    const linksColor = getComputedStyle(document.body)
      .getPropertyValue("--particles-links-color")
      .trim();
    config.particles.color.value = color;
    config.particles.links.color = linksColor;

    return config;
  }, []);

  if (init) {
    return (
      <Particles id="tsparticles" className="vistualEffect" options={options} />
    );
  }
  return null;
}
