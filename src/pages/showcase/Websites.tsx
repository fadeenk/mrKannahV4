import Layout from "@theme/Layout";
import styles from "./showcase.module.css";

type Website = {
  title: string;
  link?: string;
  description: string;
  thumbnail?: string;
};

const myPortfolios: Website[] = [
  {
    title: "V4 Portfolio",
    description:
      "Built with React using Docusaurus framework. Added a showcase section to show my past work, UI/UX improvements.",
    thumbnail: "/img/showcase/v4.png",
    link: "https://mrkannah.com/",
  },
  {
    title: "V3 Portfolio",
    description:
      "Built with React using Gatsby framework. Relatively new build and added a blog to it.",
    thumbnail: "/img/showcase/v3.png",
    link: "https://v3.mrkannah.com/",
  },
  {
    title: "V2 Portfolio",
    description:
      "Built with React create app. I simplified it by removing old projects and other irrelevant information.",
    thumbnail: "/img/showcase/v2.png",
    link: "https://v2.mrkannah.com/",
  },
  {
    title: "V1 Portfolio",
    description:
      "Built with Php and jQuery. This website showcased a lot about me. It had not only my work and projects for clients but also my volunteering and awards.",
    thumbnail: "/img/showcase/v1.png",
    link: "https://v1.mrkannah.com/",
  },
  {
    title: "V0 Portfolio",
    link: "https://v1.mrkannah.com/samples/old/",
    description:
      "Built using Flash and ActionScript. One of my favorite websites. It had some animations and interactivity. It was the first website I built for myself. Requires Flash Player to view.",
    thumbnail: "https://v1.mrkannah.com/images/kannah.jpg",
  },
];

const funSites: Website[] = [
  {
    title: "Online shop",
    description:
      "I don't remember how I built it, all I could recover from this project was thanks to the waybackmachine. I set it up to sell some of my stuff online. It was a fully featured store that worked and I even managed to sell some stuff to people organically through Google search. This was all before Shopify even existed.",
    thumbnail: "/img/showcase/shop.png",
    link: "https://web.archive.org/web/20160403042844/http://shop.mrkannah.com/",
  },
  {
    title: "Community Forums",
    description:
      "I built a few forums using different frameworks. Most of those forums were videogames related. It was a place where we could share our ideas and coordinate things. It was also used as a tool to recruit people to our in-game clans.",
    thumbnail: "/img/showcase/forum.png",
  },
];

const clientSites: Website[] = [
  {
    title: "California Health Escort Service",
    description:
      "I built this website using HTML and this was my first website that was multi-lingual. I also designed the logo, brochures, letterheads and a few other things.",
    link: "/healthEscort",
    thumbnail: "https://v1.mrkannah.com/images/ches.jpg",
  },
  {
    title: "Alaa Kana",
    description:
      "I built a few websites for Alaa Kana. He was my first client and I have been updating his website as things continued to evolve. The first one was built using ActionScript (Flash) which was removed. The screenshot is the old one and this will take you to the most recent version.",
    link: "https://alaakana.com/",
    thumbnail: "https://v1.mrkannah.com/images/alaa.jpg",
  },
  {
    title: "Brian Allen Carpet Cleaning",
    description: "",
    thumbnail: "https://v1.mrkannah.com/images/bacc.jpg",
  },
  {
    title: "Washington Dentistry",
    description: "",
    thumbnail: "https://v1.mrkannah.com/images/wash.jpg",
  },
  {
    title: "StarSmile Dental Plan",
    description: "",
    thumbnail: "/img/showcase/starsmile.png",
  },
  {
    title: "SDSU's MechaTronics Club",
    description: "",
    thumbnail: "https://v1.mrkannah.com/images/mecha.jpg",
  },

  {
    title: "Dr. Yacoub",
    description: "",
    thumbnail: "/img/showcase/yacoub.png",
  },
  {
    title: "SDSU's CASU Club",
    description: "",
    thumbnail: "https://v1.mrkannah.com/images/casu.jpg",
  },
];

function renderWebsite(website: Website): JSX.Element {
  return (
    <div className={`card ${styles.websiteCard}`} key={website.title}>
      {website.thumbnail && (
        <div className="card__image">
          <img src={website.thumbnail} alt={website.title} />
        </div>
      )}
      <div className="card__body">
        <h3>
          {website.link ? (
            <a href={website.link}>{website.title}</a>
          ) : (
            website.title
          )}
        </h3>
        <p>{website.description}</p>
      </div>
    </div>
  );
}

export default function Apps(): JSX.Element {
  return (
    <Layout title={`My Websites`} description={`Showcasing my work`}>
      <div className="container" style={{ marginTop: "10px" }}>
        <div>
          <h2>My Portfolio websites</h2>
          <p>
            Those are the websites I have built for myself. And used to test
            different technologies and showcase different things about me.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {myPortfolios.map(renderWebsite)}
          </div>
        </div>
      </div>
      <div className="hero hero--primary" style={{ display: "block" }}>
        <div className="container">
          <h2>Fun websites</h2>
          <p>
            Those are things I did for fun and learning purposes. Most of those
            projects are/were lost to time and I have had forgotten about them.
          </p>
          <div
            className={styles.websiteCardHero}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {funSites.map(renderWebsite)}
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "10px" }}>
        <div>
          <h2>Client's websites</h2>
          <p>
            Those are the websites I have built for clients. Most of those
            clients no longer exist. I was able to recover some of the work and
            link to it. However, there are many more that are lost to time.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {clientSites.map(renderWebsite)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
