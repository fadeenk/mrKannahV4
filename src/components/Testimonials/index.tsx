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
    img: "https://assets-prospeo.s3.us-east-2.amazonaws.com/lead_E5TL0OE058OCK9WZAEVY.jpg",
    description:
      "Looking for a 10xer? Look no further. Fadee has been one of the best I've worked with over the course of my career. \nCurious, determined, passionate, resilient, communicative, caring, and gritty, he's phenomenal at the software game and a joy to work with.\nWe partnered well to tackle the people, process, and architecture aspects of Engineering, with all engineers admiring his technical abilities. Their loyalty has been reflective of his to them and the company.",
    title: "VP of Engineering",
    link: "https://www.linkedin.com/in/fadeek/#:~:text=the%20same%20team-,Looking%20for%20a%2010xer%3F%20Look%20no%20further.%20Fadee%20has%20been%20one,loyalty%20has%20been%20reflective%20of%20his%20to%20them%20and%20the%20company.,-Looking%20for%20a",
  },
  {
    name: "Cathy Pucher",
    img: "https://assets-prospeo.s3.us-east-2.amazonaws.com/lead_6J0ZRDJ3T0PGEN0G4KXB.jpg",
    description:
      "Fadee is an exceptional CTO and entrepreneur. I have known him for close to 10 years. Besides being crazy smart, he is exceptionally generous with his time. He is passionate about giving back and mentoring future technologists. He inspires others and his journey has inspired me.",
    title: "Executive Director",
  },
  {
    name: "Irving Barajas",
    img: "https://assets-prospeo.s3.us-east-2.amazonaws.com/lead_NWBJMJOOTKGAE6P4I07Z.jpg",
    description:
      "It really is rare to come across an individual like Fadee. I had the pleasure of knowing him as our CTO, Back End engineer, and mentor. He is able to be CTO, mentor 3 teams, code while watching some educational video open and manage to complete a million points on his sprint. Fadee would be an asset for any company and I’m pretty sure he is half android.",
    title: "Software Engineer",
    link: "https://www.linkedin.com/in/fadeek/#:~:text=directly%20to%20Fadee-,It%20really%20is%20rare,he%20is%20half%20android.,-It%20really%20is",
  },
  {
    name: "Michael Habeeb",
    img: "https://assets-prospeo.s3.us-east-2.amazonaws.com/lead_8FT08RB5M1CVMH6ASHTS.jpg",
    description:
      "Since I started working with Fadee for coaching and mentorship, my growth has been remarkable. With his guidance, I have advanced my career, secured new opportunities, and gained the confidence to tackle complex challenges. The impact on my career trajectory has been substantial, and I couldn't be happier!",
    title: "Student",
  },
  {
    name: "Luke Sophinos",
    img: "https://assets-prospeo.s3.us-east-2.amazonaws.com/lead_KKW3QCENF3VX0LX162GU.jpg",
    description: "...",
    title: "CEO",
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
