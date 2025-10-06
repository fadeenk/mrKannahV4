import Layout from "@theme/Layout";
import styles from "./showcase.module.css";
import soundPatent from "@site/docs/Yearly/2024/images/SoundPatent.jpg";

type Section = {
  title: string;
  desc: string;
  to: string;
  thumbnail?: string;
};

const sections: Section[] = [
  {
    title: "Apps",
    desc: "My innovative SaaS solutions, productivity tools, and automation scripts that I've built to solve real-world problems and enhance digital workflows.",
    to: "/showcase/Apps",
    thumbnail: "/img/showcase/MeetingHero.png",
  },
  {
    title: "Websites",
    desc: "Beautiful, responsive web experiences I've created including my personal portfolio, client projects, and interactive digital platforms that combine form and function.",
    to: "/showcase/Websites",
    thumbnail: "/img/showcase/v4.png",
  },
  {
    title: "Businesses",
    desc: "My entrepreneurial ventures and business initiatives that demonstrate my leadership, innovation, and ability to transform ideas into successful enterprises.",
    to: "/showcase/Businesses",
    thumbnail: "/img/logo.svg",
  },
  {
    title: "Hardware",
    desc: "My electronics projects, IoT innovations, and hands-on hardware experiments that bridge the gap between software and the physical world.",
    to: "/showcase/Hardware",
    thumbnail: "/img/showcase/car.jpg",
  },
  {
    title: "Other",
    desc: "My creative experiments, AI-powered solutions, and innovative tools that push the boundaries of what's possible with technology.",
    to: "/showcase/Other",
    thumbnail: "/img/showcase/businesscards.jpg",
  },
  {
    title: "Awards",
    desc: "My professional recognition, industry certifications, and achievements that validate my expertise and commitment to continuous learning and excellence.",
    to: "/showcase/Awards",
    thumbnail: soundPatent,
  },
];

function renderSection(section: Section): JSX.Element {
  return (
    <div className={`card ${styles.websiteCard}`} key={section.title}>
      {section.thumbnail && (
        <div className={styles.websiteCardImage}>
          <img src={section.thumbnail} alt={section.title} />
        </div>
      )}
      <div className="card__body">
        <h3>
          <a href={section.to}>{section.title}</a>
        </h3>
        <p>{section.desc}</p>
      </div>
    </div>
  );
}

export default function ShowcaseIndex(): JSX.Element {
  return (
    <Layout title="Showcase" description="Showcasing my work">
      <div className="hero hero--primary" style={{ display: "block" }}>
        <div className="container" style={{ marginTop: "10px" }}>
          <h1 className="hero__title">Showcase</h1>
          <p className="hero__subtitle">
            My collection of innovative projects, cutting-edge applications, and
            creative ventures that showcase my journey at the intersection of
            technology, entrepreneurship, and continuous learning.
          </p>
        </div>
      </div>
      <div className="container" style={{ marginTop: "10px" }}>
        <div
          className={styles.websiteCardHero}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {sections.map(renderSection)}
        </div>
      </div>
    </Layout>
  );
}
