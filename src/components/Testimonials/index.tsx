import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type Testimonial = {
  name: string;
  img: string;
  description: string;
  title: string;
  link?: string;
};

const TestimonialList: Testimonial[] = [
  {
    name: "Anthony Bull",
    img: "https://media.licdn.com/dms/image/D4E03AQHxNVy1fYiLDw/profile-displayphoto-shrink_200_200/0/1698980292022?e=1720656000&v=beta&t=ktBDh5ukd1ogSovwg0tn8yONIRJjXeE4T4oe-Z6FMik",
    description:
      "Looking for a 10xer? Look no further. Fadee has been one of the best I've worked with over the course of my career. \nCurious, determined, passionate, resilient, communicative, caring, and gritty, he's phenomenal at the software game and a joy to work with.\nWe partnered well to tackle the people, process, and architecture aspects of Engineering, with all engineers admiring his technical abilities. Their loyalty has been reflective of his to them and the company.",
    title: "VP of Engineering",
    link: "https://www.linkedin.com/in/fadeek/#:~:text=the%20same%20team-,Looking%20for%20a%2010xer%3F%20Look%20no%20further.%20Fadee%20has%20been%20one,loyalty%20has%20been%20reflective%20of%20his%20to%20them%20and%20the%20company.,-Looking%20for%20a",
  },
  {
    name: "Irving Barajas",
    img: "https://media.licdn.com/dms/image/D5603AQHre9x2TsHg0A/profile-displayphoto-shrink_200_200/0/1697583433925?e=1720656000&v=beta&t=pLVjsksEE8bREYbuQeVqrnu5EVoiWbts9uB1NQZpdXc",
    description:
      "It really is rare to come across an individual like Fadee. I had the pleasure of knowing him as our CTO, Back End engineer, and mentor. He is able to be CTO, mentor 3 teams, code while watching some educational video open and manage to complete a million points on his sprint. Fadee would be an asset for any company and I’m pretty sure he is half android.",
    title: "Software Engineer",
    link: "https://www.linkedin.com/in/fadeek/#:~:text=directly%20to%20Fadee-,It%20really%20is%20rare,he%20is%20half%20android.,-It%20really%20is",
  },
  {
    name: "Michael Habeeb",
    img: "https://media.licdn.com/dms/image/C5635AQHwu44l1gYhqw/profile-framedphoto-shrink_200_200/0/1618216292194?e=1715569200&v=beta&t=y71W380UwgGwza44sZsVCAN9DgbxCPE988HhSwkkrh4",
    description:
      "Since I started working with Fadee for coaching and mentorship, my growth has been remarkable. With his guidance, I have advanced my career, secured new opportunities, and gained the confidence to tackle complex challenges. The impact on my career trajectory has been substantial, and I couldn't be happier!",
    title: "Student",
  },
  {
    name: "Luke Sophinos",
    img: "https://media.licdn.com/dms/image/C5603AQGbkt9gO3g8vg/profile-displayphoto-shrink_200_200/0/1608532052662?e=1720656000&v=beta&t=9DYg6aXnB---3L4a61J3rJ97F69pffk4KqPYt8jqsv0",
    description: "TBD",
    title: "CEO",
  },
  {
    name: "Cathy Pucher",
    img: "https://ziplaunchpad.sdsu.edu/_resources/images/cathy-headshot.jpeg",
    description: "TBD",
    title: "Executive Director",
  },
];

function Testimonial({ name, img, description, link, title }: Testimonial) {
  return (
    <li className={styles.member}>
      <div className={styles.thumb}>
        <img src={img} />
      </div>
      <div className={styles.description}>
        <h3 className={styles.testimonialName}>{name}</h3>
        <p>{description}</p>
        {link && <a href={link}>Source</a>}
        <span>{title}</span>
      </div>
    </li>
  );
}

export default function Testimonials(): JSX.Element {
  return (
    <section className="hero hero--primary">
      <div className="container">
        <Heading as="h2" className="hero__title">
          What People I have worked with say
        </Heading>
        <ul className={styles.team}>
          {TestimonialList.map((props, idx) => (
            <Testimonial key={idx} {...props} />
          ))}
        </ul>
      </div>
    </section>
  );
}
