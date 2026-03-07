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
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import type { JSX } from "react";

interface SocialLink {
  href: string;
  icon: typeof faLinkedin;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "https://www.linkedin.com/in/fadeek/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/fadeekannah/", icon: faInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/FadeeKannah/", icon: faFacebookSquare, label: "Facebook" },
  { href: "https://github.com/fadeenk", icon: faGithub, label: "GitHub" },
];

const contactLinks: { href: string; icon: typeof faMobileScreen; label: string; tooltip: string }[] = [
  { href: "tel:7023373306", icon: faMobileScreen, label: "Call", tooltip: "Call: (702) 337-3306" },
  { href: "mailto:fadeekannah@gmail.com", icon: faEnvelope, label: "Email", tooltip: "Email: fadeekannah@gmail.com" },
  { href: "https://mrkannah.com", icon: faGlobe, label: "Website", tooltip: "Visit: mrkannah.com" },
];

export default function Card(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <Layout title={`Virtual Business Card`} description={`${siteConfig.tagline}`}>
      <div className={styles.pageWrapper}>
        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
            <div className={styles.cardFront}>
              <div className={styles.cardBackground}>
                <div className={styles.gradientOrb} />
                <div className={styles.gradientOrb2} />
              </div>
              
              <div className={styles.profileSection}>
                <div className={styles.profileImageWrapper}>
                  <img
                    src="/img/fadee.jpg"
                    alt="Fadee Kannah"
                    className={styles.profileImage}
                  />
                </div>
                
                <h2 className={styles.name}>Fadee Kannah</h2>
                <p className={styles.title}>Chief Software Architect</p>
              </div>

              <div className={styles.linksSection}>
                <div className={styles.linkGroup}>
                  {contactLinks.map((link) => {
                    const isHttp = link.href.startsWith("http");
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className={styles.linkButton}
                        target={isHttp ? "_blank" : undefined}
                        rel={isHttp ? "noopener noreferrer" : undefined}
                        aria-label={link.label}
                      >
                        <FontAwesomeIcon icon={link.icon} />
                        <span className={styles.tooltip}>{link.tooltip}</span>
                      </a>
                    );
                  })}
                </div>

                <div className={styles.linkGroup}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={styles.linkButton}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <FontAwesomeIcon icon={link.icon} />
                      <span className={styles.tooltip}>{link.label}</span>
                    </a>
                  ))}
                </div>

                <div className={styles.linkGroup}>
                  <a
                    href="/fadeekannah.vcf"
                    download="/fadeekannah.vcf"
                    className={styles.actionButton}
                    aria-label="Save Contact"
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Save Contact</span>
                    <span className={styles.tooltip}>Download vCard</span>
                  </a>
                  <button
                    onClick={handleFlip}
                    className={styles.actionButton}
                    aria-label="Show QR Code"
                  >
                    <FontAwesomeIcon icon={faQrcode} />
                    <span>QR Code</span>
                    <span className={styles.tooltip}>Show QR Code</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.cardBack}>
              <div className={styles.cardBackground}>
                <div className={styles.gradientOrb} />
                <div className={styles.gradientOrb2} />
              </div>
              
              <button
                onClick={handleFlip}
                className={styles.backButton}
                aria-label="Back to profile"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className={styles.tooltip}>Back to Profile</span>
              </button>

              <div className={styles.qrSection}>
                <img
                  src="/img/qr.jpg"
                  alt="QR Code"
                  className={styles.qrImage}
                />
                <p className={styles.qrLabel}>Scan to access contact info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
