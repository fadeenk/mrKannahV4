import React, { useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { useColorMode } from "@docusaurus/theme-common";
import {
  type Container,
  type Engine,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const particlesInit = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

export default function ParticlesBackground() {
  const { colorMode } = useColorMode();
  const [particleColor, setParticleColor] = useState<string>("");
  const [linksColor, setLinksColor] = useState<string>("");

  const particlesLoaded = async (container?: Container): Promise<void> => {
    void container;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const style = getComputedStyle(document.body);
    setParticleColor(style.getPropertyValue("--particles-color").trim());
    setLinksColor(style.getPropertyValue("--particles-links-color").trim());
  }, [colorMode]);

  const options: ISourceOptions = useMemo(() => {
    return {
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
        paint: {
          fill: {
            enable: true,
            color: {
              value: particleColor,
            },
          },
        },
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
          color: linksColor,
          opacity: 0.8,
          width: 1,
        },
        collisions: { enable: true },
      },
    };
  }, [linksColor, particleColor]);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        key={colorMode}
        id="tsparticles"
        className="vistualEffect"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
}
