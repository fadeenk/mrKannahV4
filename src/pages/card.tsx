import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faGlobe,
  faQrcode,
  faUserPlus,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const toggleQR = () => {
  const element = document.getElementById(styles.back);
  if (element.classList.contains(styles.hideQR))
    element.classList.remove(styles.hideQR);
  else element.classList.add(styles.hideQR);
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Virtual Business Card`}
      description={`${siteConfig.tagline}`}
    >
      <div className="container">
        <div className={styles.virtualBusinessCard}>
          <img
            src="/img/fadee.jpg"
            alt="profile-sample1"
            className={styles.background}
          />
          <div id={styles.front}>
            <img
              src="/img/fadee.jpg"
              alt="profile-sample1"
              className={styles.profile}
            />
            <h3>
              Fadee Kannah<span>Chief Software Architect</span>
            </h3>
            <div className={styles.icons}>
              <a href="tel:7023373306" style={{ width: "38px" }}>
                <FontAwesomeIcon icon={faMobileScreen} />
              </a>
              <a href="mailto:fadeekannah@gmail.com">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://mrkannah.com">
                {" "}
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>
            <div className={styles.icons}>
              <a href="https://www.linkedin.com/in/fadeek/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/fadeekannah/">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/FadeeKannah/">
                {" "}
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </div>
            <div className={styles.icons}>
              <a href="/fadeekannah.vcf" download="/fadeekannah.vcf">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ fontSize: "24px" }}
                />
              </a>
              <a href="https://github.com/fadeenk">
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <FontAwesomeIcon icon={faQrcode} onClick={toggleQR} />
            </div>
          </div>

          <div id={styles.back} className={styles.hideQR}>
            <img src="/img/qr.jpg" style={{ padding: "10px" }} />
            <FontAwesomeIcon icon={faEyeSlash} onClick={toggleQR} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
