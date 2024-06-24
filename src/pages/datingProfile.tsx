import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./datingProfile.module.css";
import Gallery from "@site/src/components/Gallery/Gallery";
import photo1 from "@site/docs/Yearly/2023/images/arizona6.jpg";
import photo2 from "@site/docs/Yearly/2023/images/fun11.jpg";
import photo3 from "@site/docs/Yearly/2023/images/fun18.jpg";
import photo4 from "@site/docs/Yearly/2023/images/hawaii27.jpg";
import photo5 from "@site/docs/Yearly/2023/images/hennaF5.jpg";
import photo6 from "@site/static/img/dating/g.jpg";
import photo7 from "@site/docs/Yearly/2023/images/weddingF1.jpg";
import photo8 from "@site/docs/Yearly/2023/images/november20234.jpg";
import photo9 from "@site/docs/Yearly/2023/images/november20231.jpg";
import photo10 from "@site/docs/Yearly/2023/images/hawaii26.jpg";
import photo11 from "@site/static/img/dating/4.png";
import techAlley from "@site/docs/Yearly/2022/images/techAlley.png";
import photo12 from "@site/docs/Yearly/2023/images/fun8.jpg";
import photo13 from "@site/docs/Yearly/2023/images/weddingPrep4.jpg";
import pphoto1 from "@site/static/img/dating/1.jpg";
import pphoto2 from "@site/static/img/dating/b.jpg";
import pphoto3 from "@site/static/img/dating/c.jpg";
import pphoto4 from "@site/static/img/dating/d.png";
import pphoto5 from "@site/static/img/dating/e.png";
import pphoto6 from "@site/static/img/dating/f.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faMartiniGlassCitrus,
  faMobileScreen,
  faPills,
  faSmoking,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
];
const photos2 = [pphoto1, pphoto2, pphoto3, pphoto4, pphoto5, pphoto6];
const flexContainer = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
};
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Fadee's Dating Profile`}
      description={`${siteConfig.tagline}`}
    >
      <div className="hero hero--primary">
        <div className="container" style={{ ...flexContainer }}>
          <div style={{ maxWidth: "600px" }}>
            <h1 className="hero__title">
              Hello 👋
              <br />
              I’m Fadee Kannah
            </h1>
            <p className="hero__subtitle">
              Welcome to my "dating" profile! I’m a computer engineer by
              education and currently the Chief Software Architect, designing
              and building complex software solutions for trade schools and
              colleges. In short, I help people solve problems using software
              and technology.
            </p>
          </div>
          <img src="/img/dating/a.jpg" className={styles.mainImage} />
        </div>
      </div>
      <div
        className="container"
        style={{
          ...flexContainer,
          margin: "20px auto",
        }}
      >
        <img src="/img/dating/2.jpg" className={styles.mainImage} />
        <div>
          <p className="hero__subtitle" style={{ maxWidth: "800px" }}>
            I have a strong commitment to family and traditional values. I’m
            seeking a meaningful connection with a life partner who shares these
            values and is a kind Christian. Open communication, trust, and
            honesty are crucial! If you or someone you know shares these values
            and is interested in a serious and respectful relationship, please
            feel free to contact me here or on my{" "}
            <a href="/card">social media</a>.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <a href="tel:7023373306">
              <FontAwesomeIcon icon={faMobileScreen} size="2xl" />
            </a>
            <a href="https://www.instagram.com/fadeekannah/">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a href="https://www.snapchat.com/add/fadeenk?share_id=YehuIiaVous&locale=en-US">
              <FontAwesomeIcon icon={faSnapchat} size="2xl" />
            </a>
            <a href="https://www.facebook.com/FadeeKannah/">
              <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero hero--primary">
        <div className="container hero__subtitle">
          <div style={flexContainer}>
            <p>
              I have a diverse range of hobbies that keep me engaged and
              curious. I love learning and applying new knowledge through
              various projects. Some of my favorite activities include:
            </p>
            <ul>
              <li>Spending quality time with family and friends</li>
              <li>Playing board games</li>
              <li>Watching anime</li>
              <li>Playing soccer</li>
              <li>Going to the gym</li>
              <li>Taking care of my plants</li>
            </ul>
            <img src="/img/dating/3.png" className={styles.mainImage} />
          </div>
        </div>
      </div>
      <Gallery photos={photos2} />
      <div
        className="container"
        style={{
          margin: "20px auto",
        }}
      >
        <p className="hero__subtitle">
          To get a better sense of who I am, feel free to explore my website,
          especially the <a href="/blog/Yearly/">yearly reviews</a> on my blog.
          Note: the more recent years are protected for privacy reasons, but I’d
          be happy to share them with you if you’re interested. You can also do
          reference checks with any mutual friends, or better yet, just talk to
          me directly.
        </p>
      </div>
      <div className="hero hero--primary">
        <div
          className="container hero__subtitle"
          style={{
            ...flexContainer,
            margin: "20px auto",
          }}
        >
          <img src={techAlley} className={styles.mainImage} />
          <ul style={{ maxWidth: "800px", listStyleType: "none" }}>
            <li>
              <b>Age</b>: 31
            </li>
            <li>
              <b>Religion</b>: Christian ♱ (Syriac Orthodox same as Catholic
              Chaldean except for a few minor differences and dates)
            </li>
            <li>
              <b>From</b>: Bartella, Iraq
            </li>
            <li>
              <b>Location</b>: Henderson, Nevada
            </li>
            <li>
              <b>Languages:</b>{" "}
              <a
                style={{ color: "var(--ifm-footer-background-color)" }}
                href="https://en.wikipedia.org/wiki/Suret_language"
              >
                Suret (Ninevite dialect)
              </a>
              , Arabic, English
            </li>
            <li>
              <b>Education</b>: Bachelor’s in Computer Engineering
            </li>
            <li>
              <b>Politics</b>: Moderate with a common sense views
            </li>
            <li>
              <b>Children</b>: None, Want at some point
            </li>
            <li>
              <b>Height</b>: 5’ 10.5” (179 cm)
            </li>
            <li>
              <FontAwesomeIcon icon={faMartiniGlassCitrus} /> Only socially
              {" | "}
              <FontAwesomeIcon icon={faSmoking} /> Never{" | "}
              <FontAwesomeIcon icon={faCannabis} /> Never{" | "}
              <FontAwesomeIcon icon={faPills} /> Never
            </li>
          </ul>
        </div>
      </div>
      <Gallery photos={photos} />
    </Layout>
  );
}
