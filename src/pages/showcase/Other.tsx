import Layout from "@theme/Layout";
import styles from "./showcase.module.css";

import type { JSX } from "react";

const details: { title: string; description: string }[] = [
  {
    title: "Generative AI",
    description:
      'With the rise of AI, I got more curious about the technology and decided to experiment and play with it. I have created a few projects that use AI to generate art, music, and text. I have setup and used many AI tools and frameworks.\n For image generation, I have self hosted Stable Diffusion Webui and ComfyUi. For text generation, I have used Oobabooga webui, ollama and SillyTavern which allows me to have multiple "characters" with specific personalities and specific skills.\nI have also setup a Private GPT.',
  },
  {
    title: "Self-Hosted Software Experiments",
    description:
      "I maintain a comprehensive self-hosted infrastructure running on my home server. This includes experiments with all sorts of software and services. I have setup many random tools and services to play with and learn more about them.",
  },
  {
    title: "Image processing and face detection",
    description:
      "This was a fun project to place around with image processing. Using OpenCV and Python, I created a program that could detect faces from a webcam stream.",
  },
  {
    title: "Smart NFC Business Card",
    description:
      "I created a smart business card that had an NFC chip embedded in it. When someone tapped their phone on the card, it would open a link to my website. From my website, they can access my info or easily save my contact info to theirdevice.",
  },
  {
    title: "Canvas Course",
    description:
      "While I was mentoring a few students at the same time. I decided to make things more efficient, so I partially created a canvas course that the students used at theirown pace. The course was designed to answer and guide students through theirpersonal and career development, taking on leadership roles and how to prepare for life outside of school. In addition, the course allowed me to scale my mentorship to more students at the same time while spending less time doing it.",
  },
  {
    title: "Gaming tools",
    description:
      "When I used to play video games, I created a variety of tools. Some tools helped me track things, others helped me automate things, some played the game for me, and others helped me cheat. I created bots, scripts, mods and macros that either helped me play better or made me enjoy the game more.",
  },
  {
    title: "Modded/hacked Consoles",
    description:
      "My curiosity and love for tinkering with things led me down the path of modding and hacking consoles. I started with figuring out how to play burned games on my PS1, then moved on to trying to do the same on my PS2 which didn't go according to plan and ended up breaking it. I also hacked my Wii to play games from a USB drive.",
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
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  );
}
