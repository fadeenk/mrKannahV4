import React, { useState, type JSX } from "react";
import Layout from "@theme/Layout";
import styles from "./showcase.module.css";
import Gallery from "@site/src/components/Gallery/Gallery";
import aramic from "@site/docs/Yearly/2023/images/november20239.jpg";
import techAlley from "@site/docs/Yearly/2022/images/techAlley.png";
import soundPatent from "@site/docs/Yearly/2024/images/SoundPatent.jpg";
import diploma from "@site/docs/Personal/sdsu/images/diploma.jpg";

interface Award {
  title: string;
  description: string;
  year: number;
  link?: string;
  image?: string;
}

const awards: Award[] = [
  {
    title: "Recognized as a leader in STEM",
    description:
      "Recognized by San Diego State University as an emerging leader in Science, Technology, Engineering, and Mathematics, highlighting my early commitment to innovation and technical excellence in the STEM fields.",
    year: 2014,
    link: "https://www.sdsu.edu/news/2014/12/leaders-stem",
    image: "https://www.sdsu.edu/news/2014/12/_images/mesaleaders589.jpg",
  },
  {
    title: "First Patent Granted",
    description:
      "A significant milestone in my career establishing me as an inventor, granted on February 19, 2019. This patent represents years of innovation and technical expertise in developing solutions for educational technology.",
    year: 2019,
    link: "https://patents.google.com/patent/US10212542B2/en?inventor=Fadee+Kannah",
    image: "/img/showcase/patent.jpg",
  },
  {
    title: "San Diego Venture Group Cool Companies Award",
    description:
      "CourseKey won the prestigious Cool Companies Award for the third consecutive time, recognizing our innovative approach to educational technology and our impact on the San Diego tech ecosystem.",
    year: 2019,
    link: "https://www.sdbj.com/finance/venture-capital/san-diego-venture-group-names-33-cool-companies//",
  },
  {
    title: "Computer Engineering Degree",
    description:
      "Officially graduated from San Diego State University with a Computer Engineering degree after an interesting journey, completing a rigorous academic program that provided the foundation for my technical career.",
    year: 2019,
    link: "/blog/Personal/sdsu",
    image: diploma,
  },
  {
    title: "Second Patent Granted",
    description:
      "Second patent awarded early in 2020, further establishing my credentials as an inventor and demonstrating continued innovation in educational technology solutions.",
    year: 2020,
    link: "https://patents.google.com/patent/US10551496B2",
    image: soundPatent,
  },
  {
    title: "TechCrunch Mention",
    description:
      "Featured by name and picture in TechCrunch article about CourseKey's Series B raise, gaining recognition in the tech industry for our company's growth and success.",
    year: 2021,
    link: "https://techcrunch.com/2021/03/03/after-200-arr-growth-in-2020-coursekey-raises-9m-to-digitize-trade-schools/",
    image:
      "https://techcrunch.com/wp-content/uploads/2016/08/gettyimages-174573158.png?resize=1097,617",
  },
  {
    title: "Aramic Language Class",
    description:
      "Learned to read and write Aramic, reconnecting with my cultural heritage and expanding my linguistic abilities. This achievement represents personal growth and cultural preservation.",
    year: 2023,
    image: aramic,
  },
  {
    title: "Security Awareness Training, Internet Security for Employees",
    description:
      "Completed comprehensive cybersecurity training covering internet security best practices, threat awareness, and employee security protocols to enhance organizational security posture and personal digital safety.",
    year: 2023,
    link: "https://www.udemy.com/certificate/UC-adc1498d-74a2-4a9a-82c4-4352ac20af9b/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-adc1498d-74a2-4a9a-82c4-4352ac20af9b.jpg?v=1694753951000",
  },
  {
    title: "Karamo's Diversity, Equity and Inclusion Training",
    description:
      "Completed comprehensive diversity, equity, and inclusion training program designed to promote inclusive workplace practices, cultural awareness, and equitable treatment across all professional interactions.",
    year: 2023,
    link: "https://certificate.edapp.com/6542d5dc6e347a8265bfed76/courses/6542d791e66be6524f626ac7/Fadee%20Kannah-2023-11-01T23:24:09.pdf",
  },
  {
    title: "TechAlley Community Speaker",
    description:
      "Presented at multiple TechAlley events, sharing knowledge and insights with the tech community while building connections and contributing to the local startup ecosystem.",
    year: 2024,
    image: techAlley,
  },
  {
    title: "Cyber Awareness Training - for employees and individuals",
    description:
      "Advanced cybersecurity awareness training focusing on modern cyber threats, social engineering prevention, and best practices for both personal and professional digital security in today's interconnected world.",
    year: 2024,
    link: "https://www.udemy.com/certificate/UC-aaed72c6-845b-45dc-ac6b-4c0801b8c6c0/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-aaed72c6-845b-45dc-ac6b-4c0801b8c6c0.jpg?v=1726683712000",
  },
  {
    title: "Cyber Security for Users 101 - Security Awareness",
    description:
      "Completed Udemy certificate in cybersecurity awareness, enhancing my understanding of security best practices and staying current with evolving security threats and protection strategies.",
    year: 2025,
    link: "https://www.udemy.com/certificate/UC-6663a764-a252-4631-9bba-f29b3708a639/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-6663a764-a252-4631-9bba-f29b3708a639.jpg?v=1755881552000",
  },
];

export default function Awards(): JSX.Element {
  const sortedAwards = awards.sort((a, b) => b.year - a.year);

  return (
    <Layout
      title="Awards & Certifications"
      description="My awards, certifications, and recognitions"
    >
      <div className="hero hero--primary" style={{ display: "block" }}>
        <div className="container" style={{ marginTop: "10px" }}>
          <h1 className="hero__title">Awards & Certifications</h1>
          <p className="hero__subtitle">
            Recognition for innovation, achievement, and continuous learning.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "20px" }}>
        <div className={styles.awardsGrid}>
          {sortedAwards.map((award) => (
            <div className={styles.awardCard}>
              {award.image && (
                <div className={styles.awardImage}>
                  <Gallery photos={[award.image]} />
                </div>
              )}

              <div className={styles.awardContent}>
                <div className={styles.awardYear}>{award.year}</div>

                <h3 className={styles.awardTitle}>
                  {award.link ? (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.awardTitleLink}
                    >
                      {award.title}
                    </a>
                  ) : (
                    award.title
                  )}
                </h3>

                <p className={styles.awardDescription}>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
