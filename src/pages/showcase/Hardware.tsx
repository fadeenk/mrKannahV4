import Layout from "@theme/Layout";
import styles from "./showcase.module.css";

type Hardware = {
  title: string;
  link?: string;
  description: string;
  thumbnail?: string;
};

const projects: Hardware[] = [
  {
    title: "Upgraded Car Entertainment System",
    description:
      "I replaced the stock infotainment system in my car with a custom Android tablet. The tablet is connected to the car's audio system and has access to the internet through my phone's hotspot. I can use the tablet to play music, watch videos, use navigation and even play games.",
    thumbnail: "/img/showcase/car.jpg",
  },
  {
    title: "Water carbonation system",
    description:
      "I built a system that allows me to carbonate water at home. I got a keg and kegurator and connected it so that I have nice cold fresh sparkling water on tap whenever I want.",
    thumbnail: "/img/showcase/keg.jpg",
  },
  {
    title: "Wireless Arduino LED Piano",
    link: "https://www.youtube.com/watch?v=8vLEkw8au64",
    description:
      "An Arduino application that utilizes a combination of three softwares to make LEDs responds to a piano key press on a phone while playing a specific frequency that is controllable by a physical knob. The piano presses are sent through a phone to the computer then the computer shows the user the presses live on screen. Since the computer is connected to the Arduino it is always communicating with it which provides very low delay and real-time output/input through the LEDs and the potentiometer (knob). The software supports multiple key presses at the same time and it plays a combination of those sounds (like a real piano). Also the Graphical representation has the sound waves drawn at all times.",
    thumbnail: "https://i.ytimg.com/vi/8vLEkw8au64/hqdefault.jpg",
  },
  {
    title: "RGB Guessing Game",
    link: "https://www.youtube.com/watch?v=1TDhtTUMd9Y",
    description:
      "An Arduino game that uses a combination of three knobs (potentiometers) to control a color. The game generates a random color and the user has to generate the same color or a color close to it using the knobs. The game includes multiple difficulty levels and it includes instructions on how to play the game. Each difficulty level has its own time limit and value tolerance. Also the game plays a beeping sound when the user passes the correct value range and the game has background music playing. Information on how to do this is available in the video description along with the code, libraries used, schematic and the wiring of all components.",
    thumbnail: "https://i.ytimg.com/vi/1TDhtTUMd9Y/hqdefault.jpg",
  },
];

function renderApp(project: Hardware): JSX.Element {
  return (
    <div className={styles.app} key={project.title}>
      {project.thumbnail && <img src={project.thumbnail} alt={project.title} />}
      <h3>
        {project.link ? (
          <a href={project.link}>{project.title}</a>
        ) : (
          project.title
        )}
      </h3>
      <p>{project.description}</p>
      <hr style={{ clear: "both" }} />
    </div>
  );
}

export default function Apps(): JSX.Element {
  return (
    <Layout title={`My Hardware projects`} description={`Showcasing my work`}>
      <div className="container" style={{ marginTop: "10px" }}>
        {projects.map(renderApp)}
      </div>
    </Layout>
  );
}
