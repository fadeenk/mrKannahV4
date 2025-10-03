import Layout from "@theme/Layout";
import styles from "./showcase.module.css";

type Section = {
  title: string;
  desc: string;
  to: string;
  thumbnail?: string;
};

const sections: Section[] = [
  {
    title: "Apps",
    desc: "SaaS, tools and scripts.",
    to: "/showcase/Apps",
    thumbnail: "/img/showcase/MeetingHero.png",
  },
  {
    title: "Websites",
    desc: "Recent, portfolio and client sites.",
    to: "/showcase/Websites",
    thumbnail: "/img/showcase/v4.png",
  },
  {
    title: "Businesses",
    desc: "Companies and ventures.",
    to: "/showcase/Businesses",
    thumbnail: "/img/showcase/servers.png",
  },
  {
    title: "Hardware",
    desc: "Arduino and hardware tinkering.",
    to: "/showcase/Hardware",
    thumbnail: "/img/showcase/car.jpg",
  },
  {
    title: "Other",
    desc: "Experiments, AI, tools.",
    to: "/showcase/Other",
    thumbnail: "/img/showcase/pureframe.gif",
  },
];

function renderSection(section: Section): JSX.Element {
  return (
    <div className={`card ${styles.websiteCard}`} key={section.title}>
      {section.thumbnail && (
        <div className="card__image">
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
            Explore apps, websites, hardware and more.
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
