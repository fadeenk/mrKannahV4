import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./showcase.module.css";

type App = {
  title: string;
  link?: string;
  description: string;
  thumbnail?: string;
};

const alive: App[] = [
  {
    title: "My Personal Private Cloud Services",
    description:
      "I have a personal server that I use to host my own cloud services. I have my own Google Photos (PhotoPrism), Netflix (JellyFin), Backup (Duplicati), and Content management (Sonarr & Radarr). I also have a few other smaller services that are running.",
    thumbnail: "/img/showcase/servers.png",
  },
  {
    title: "Crypto Taxes and Tracker",
    description:
      "I built a crypto tax tracker that allows you to track your crypto transactions and calculate taxes. This was a fun project that I did because I didn't want to pay for a service to do it for me especially since I had crypto in multiple exchanges. I built the tracker and made it pull the latest information from the exchanges to calculate the taxes. Additionally, I added the functionality for it to update a Google sheet with the latest information.",
    thumbnail: "/img/showcase/crypto.png",
  },
];

const NotMaintained: App[] = [
  {
    title: "Primus Rooms plugins",
    link: "https://github.com/fadeenk?tab=repositories&q=rooms&type=source&language=&sort=",
    description:
      "I built a couple of plugins for Primus (a real-time communication framework). I built a plugin that allowed you to use Redis for caching for the rooms increasing the performance considerably when compared to the alternatives. The other plugin I built was to allow leveraging a powerful feature in a scalable way and make it work seamlessly within the rooms.",
  },
  {
    title: "Warframe Farmer Assistant",
    link: "https://play.google.com/store/apps/details?id=com.warframe.app",
    description:
      "My first public cross platform app. This was a tool to help optimize playing the game Warframe. It would help you find the best missions to farm for resources and parts. I built and published this app on the Google play store and the Microsoft app store for both Windows 8 and Windows phones. I also had a web app for it to support users who didn't want to download an app and for iOS users.",
    thumbnail: "/img/showcase/warframe.png",
  },
  {
    title: "Youtube Redirector",
    link: "https://chromewebstore.google.com/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp",
    description:
      "An extension that redirects logged-in users from the Youtube homepage to their subscriptions page automatically.",
    thumbnail: "/img/showcase/youRedirect.png",
  },
  {
    title: "Aztec course snatcher Chrome app",
    description:
      "This app will display a notification and play a sound when there is a class opening in your course registration wishlist. It will also automatically add it if you have the auto add enabled by clicking the links and filling in the captcha automatically. This was taken down because of San Diego State University's policies and them threatening me with expulsion.",
    thumbnail: "/img/showcase/aztec.png",
  },
  {
    title: "Slack theme userscript and chrome extension",
    link: "https://github.com/fadeenk?tab=repositories&q=slack&type=source&language=&sort=",
    description:
      "This is a user script that allows the user to have better control of the slack theme on the web client. I built this because I was tired of the theming not working how I expected it to and it not being as flexible.",
    thumbnail: "/img/showcase/slack.png",
  },
  {
    title: "Anime Merch Price Converter",
    link: "https://github.com/fadeenk/Anime-merch-price-converter",
    description:
      "This is a user script that displays prices on anime merch websites in local currency. I built this because I was tired of having to convert the prices manually and wanted to see the prices in my local currency. It supported multiple currencies and websites.",
    thumbnail: "/img/showcase/anime.png",
  },
  {
    title: "Math.Roman",
    link: "https://github.com/fadeenk/math.roman",
    description:
      "A simple library to convert numbers to Roman numerals and vice versa. I built this as a fun project.",
    thumbnail: "/img/showcase/roman.png",
  },
  {
    title: "Mouse Picker",
    link: "https://www.mediafire.com/file/2a53y943ct2g5be/Mouse_Picker.exe/file",
    description:
      "A simple tool that allows you to pick get color and position of any pixel from the screen and save it to the clipboard. I built this tool because I needed to get screen information from videogames that are running using directX which other tools could not capture the info. I used the information from my picker to build macros that would automate the game for me.",
    thumbnail: "/img/showcase/mouse.png",
  },
  {
    title: "Investment Helper",
    description:
      "A script that helps me pick stocks to invest in. I built this script to help me pick stocks to invest in. I used the Ichimoku Cloud method of analysis to build an investment portfolio. This method allowed me to analyze many stocks all at once and pick the top stocks in terms of momentum over the last 100 days and two weeks.",
  },
  {
    title: "Alexa youtube skill",
    description:
      "I built an Alexa skill that allows you to play Youtube videos on my Alexa devices. I used the Youtube API to search for videos and play them on the device.",
  },
];

const Abandoned: App[] = [
  {
    title: "Unnamed Android game",
    description:
      "A simple Android game that I built to learn Android development. I built this game because I wanted to learn how to build Android games and I wanted to build a game that was fun to play and has no ads/ pay to win stuff. The plan was to have it be a cross between Tamagotchi and a Pokemon game. I worked on this with a friend who helped with the art and created baby Andy the main character (waving at you right now). I stopped working on it because we got too busy with school and other projects.",
    thumbnail: "/img/showcase/android.gif",
  },
  {
    title: "Project X",
    description:
      "Craiglist clone for university students to sell and trade textbooks for reasonable prices. I built this app because I wanted to help students save money on textbooks and make it easier for them to find the books they need. I stopped working on this project because I found other alternatives/competitors.",
  },
  {
    title: "DJ companion App",
    description:
      "An app that allows people to request songs and vote on them in real-time. The app would have used the iTunes API to get the songs and their information. I built this app because I wanted to help my friend who was a DJ at the time.",
  },
  {
    title: "Rewards App",
    description:
      "An app that allows you to manage customers and award them points with each purchase. Another app I built for a friend who was running a business and wanted to reward his customers for their loyalty.",
  },
  {
    title: "Appointment Scheduler",
    description:
      "An app that allows you to schedule appointments with people. I built this app for a friend who was running a business and wanted to allow his customers to schedule appointments directly with his employees online.",
  },
  {
    title: "Contact Management System",
    description:
      "An app that allows you to manage your contacts and keep track of your interactions with them. I wanted to build this app to track my contacts and manage my relationships with them.",
  },
  {
    title: "FixQuicker",
    description:
      "An app that allows you to request services from local businesses and have them come to you. I built this app because I wanted to help people get services faster and easier.",
  },
];

function renderApp(app: App): JSX.Element {
  return (
    <div className={styles.app} key={app.title}>
      {app.thumbnail && <img src={app.thumbnail} alt={app.title} />}
      <h3>{app.link ? <a href={app.link}>{app.title}</a> : app.title}</h3>
      <p>{app.description}</p>
      <hr style={{ clear: "both" }} />
    </div>
  );
}

export default function Apps(): JSX.Element {
  return (
    <Layout title={`My Apps`} description={`Showcasing my work`}>
      <div className="container" style={{ marginTop: "10px" }}>
        <Tabs className="tabs--block" groupId="section" queryString>
          <TabItem value="Alive" label="Alive">
            {alive.map(renderApp)}
          </TabItem>
          <TabItem value="Not Maintained" label="Not Maintained">
            {NotMaintained.map(renderApp)}
          </TabItem>
          <TabItem value="Abandoned" label="Abandoned">
            {Abandoned.map(renderApp)}
          </TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}
