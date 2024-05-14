import Layout from "@theme/Layout";
import styles from "./showcase.module.css";

const details: { title: string; description: string }[] = [
  {
    title: "Canvas Course",
    description:
      "While I was mentoring a few students at the same time. I decided to make things more efficient, so I partially created a canvas course that the studnets used at thier own pace. The course was designed to answer and guide students through thier career path, taking on leadership roles and how to prepare for life outside of school. In addtion, the course allowed me to scale my mentorship to more students at the same time while spending less time doing it.",
  },
  {
    title: "Gaming tools",
    description:
      "When I used to play videogames, I created a variety of tools. Some tools helped me track things, others helped me automate things, some played the game for me, and others helped me cheat. I created bots, scripts, mods and macros that either helped me play better or made me enjoy the game more.",
  },
  {
    title: "Modded/hacked Consoles",
    description:
      "My curiousty and love for tinkering with things led me down the path of modding and hacking consoles. I started with figuring out how to play burned games on my PS1, then moved on to trying to do the same on my PS2 which didnt go according to plan and ended up breaking it. I also hacked my Wii to play games from a USB drive.",
  },
];

export default function Showcase(): JSX.Element {
  return (
    <Layout title={`My Other projects`} description={`Showcasing my work`}>
      <div className="container" style={{ marginTop: "10px" }}>
        {details.map((detail) => (
          <div>
            <h3>{detail.title}</h3>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
