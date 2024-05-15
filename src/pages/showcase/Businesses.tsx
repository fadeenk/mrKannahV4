import Layout from "@theme/Layout";
import styles from "./showcase.module.css";

const details: { years: string; title: string; description: string }[] = [
  {
    years: "2009-2012",
    title: "Tech repair and support",
    description:
      "I started my journey in tech by fixing computers and providing tech support to friends and family. In the process, I managed to upgrade my computer for free and make some money on the side. I also learned a lot about computers and how to fix them.",
  },
  {
    years: "2010",
    title: "International Candy Business",
    description:
      'As part of my high school pathway technical program. I started a candy business with a friend. He brought candy from Mexico and sold it at school. I created a website to sell the candy online and set up Google Ads on it. I managed to make money from the ads and got a paycheck from Google. However, I didn\'t read the terms of service, and might have told the entire school to click on the ads to make money for "our team". That resulted in me getting banned from using Google Adsense.',
  },
  {
    years: "2010-2014",
    title: "Web development and design",
    description:
      "I created websites for myself, friends and eventually businesses. I used all sorts of technologies to build websites from Flash to jQuery to more complex web apps with client-server. I even built my own online store for fun.",
  },
  {
    years: "2013-2014",
    title: "HiTech EdVentures",
    description:
      "I partnered up with my professor at San Diego State University to start and run the company. This was my first real business experience where I actually led multiple teams and managed different projects. We got clients who wanted engineering projects done but couldn't afford engineering costs. I would get a team of students, guide them, and manage the project to completion.",
  },
  {
    years: "2014-2020",
    title: "Kannah Consulting and Software services",
    description:
      "I started my own consulting company where I provided software services to businesses. I worked with clients to build and maintain their websites, web apps, and mobile apps. I also provided consulting services to help them with their business needs.",
  },
  {
    years: "2014-ongoing",
    title: "CourseKey",
    description:
      "While I was studying for my degree, I realized the education system was broken. I wanted to fix it. I met Luke and together we came up with CourseKey to help students and teachers have a better learning experience. We built the first version of the product and got our first customers. We slowly grew the team and raised money to grow the company. I am currently the Chief Architect and co-founder. We have helped over 400,000 students and teachers have a better learning experience.",
  },
];

export default function Showcase(): JSX.Element {
  return (
    <Layout title={`My Businesses`} description={`Showcasing my work`}>
      <div className="container" style={{ marginTop: "10px" }}>
        <ul className={styles.timeline}>
          {details.reverse().map((detail) => (
            <li className={styles["timeline-item"]}>
              <div className={styles["timeline-info"]}>
                <span>{detail.years}</span>
              </div>
              <div className={styles["timeline-marker"]}></div>
              <div className={styles["timeline-content"]}>
                <h3 className={styles["timeline-title"]}>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
