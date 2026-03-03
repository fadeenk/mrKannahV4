import React, { useState } from "react";
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

import type { JSX } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [showQR, setShowQR] = useState(false);

  const toggleQR = () => setShowQR(!showQR);
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
          {!showQR && <div id={styles.front}>
            <img
              src="/img/fadee.jpg"
              alt="profile-sample1"
              className={styles.profile}
            />
            <h3>
              Fadee Kannah<span>Chief Software Architect</span>
            </h3>
            <div className={styles.icons}>
              <a href="tel:7023373306">
                <FontAwesomeIcon icon={faMobileScreen} />
              </a>
              <a href="mailto:fadeekannah@gmail.com">
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
                />
              </a>
              <a href="https://github.com/fadeenk">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faQrcode} onClick={toggleQR} />
              </div>
            </div>
          </div>}

          {showQR && <div id={styles.back}>
            <img src="/img/qr.jpg" style={{ padding: "10px", maxWidth: "100%" }} />
            <div className={styles.iconWrapper} style={{ marginTop: "20px" }}>
              <FontAwesomeIcon icon={faEyeSlash} onClick={toggleQR} />
            </div>
          </div>}
        </div>
      </div>
    </Layout>
  );
}
