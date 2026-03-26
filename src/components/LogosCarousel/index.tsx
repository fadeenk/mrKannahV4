import React, { type JSX } from "react";

type LogoItem = {
  name: string;
  logoUrl?: string;
};

const logos: LogoItem[] = [
  { name: "CourseKey", logoUrl: "/img/logos/ck.png" },
  { name: "American Growth Insurance", logoUrl: "/img/logos/agi.png" },
  { name: "Verity", logoUrl: "/img/logos/verity.png" },
  { name: "Atomic", logoUrl: "/img/logos/atomic.png" },
  { name: "Portico", logoUrl: "/img/logos/portico.png" },
  { name: "MeetingHero", logoUrl: "/img/logos/mh.png" },
];

export default function LogosCarousel(): JSX.Element {
  return (
    <div className="logos-carousel">
      <div className="logos-carousel-track-wrapper">
        <div className="logos-carousel-track">
          {logos.map((logo, index) => (
            <div key={`a-${index}`} className="logos-carousel-item">
              {logo.logoUrl ? (
                <img src={logo.logoUrl} alt={logo.name} />
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`b-${index}`} className="logos-carousel-item" aria-hidden="true">
              {logo.logoUrl ? (
                <img src={logo.logoUrl} alt={logo.name} />
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
