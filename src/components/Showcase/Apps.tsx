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
      "I have a personal server that I use to host my own cloud services. I have my own Google Photos (PhotoPrism), Netflix (JellyFin), Backup (Duplicati), Content managment (Sonarr & Radarr). I also have few other smaller services that are running.",
    thumbnail: "/img/showcase/servers.png",
  },
  {
    title: "Crypto Taxes and Tracker",
    description:
      "I built a crypto tax tracker that allows you to track your crypto transactions and calculate taxes. This was a fun project that I did because I didnt want to pay for a service to do it for me especially since I had crypto in multiple exchanges. I built the tracker and made it pull latest information from the exchanges to calculate the taxes. Additonally, I added the functionality for it to update a google sheet with the latest information.",
    thumbnail: "/img/showcase/crypto.png",
  },
];

const NotMaintained: App[] = [
  {
    title: "Investment Helper",
    description:
      "Script that helps me pick stocks to invest in. I built this script to help me pick stocks to invest in. I used the Ichimoku Cloud method of analysis to build an investment protfolio. This method allowed me to analyze many stocks all at ones and pick top stocks in terms of memontem over the last 100 days and two weeks.",
  },
  {
    title: "Alexa youtube skill",
    description:
      "I built an alexa skill that allows you to play youtube videos on my alexa devices. I used the youtube api to search for videos and play them on the device.",
  },
  {
    title: "Warframe Farmer Assistant",
    link: "https://play.google.com/store/apps/details?id=com.warframe.app",
    description:
      "My first public cross platform app. This was a tool to help optimize playing the game Warframe. It would help you find the best missions to farm for resources and parts. I built and published this app on the Google play store and the Microsoft app store for both Windows 8 and windows phones. I also had a webapp for it to support users who didn't want to download an app and for iOS users.",
    thumbnail: "/img/showcase/warframe.png",
  },
  {
    title: "Youtube Redirector",
    link: "https://chromewebstore.google.com/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp",
    description:
      "An extension that redirects logged in users from the youtube homepage to their subscriptions page automatically.",
    thumbnail: "/img/showcase/youRedirect.png",
  },
  {
    title: "Aztec course snatcher Chrome app",
    description:
      "This app will display a notification and play a sound when there is a class opening in your course registration wishlist. It will also automatically add it if you have the auto add enabled by clicking the links and filling the captcha automatically. This was taken down because of San Diego State University's policies and them threatening me with expulsion.",
    thumbnail: "/img/showcase/aztec.png",
  },
  {
    title: "Slack theme userscript and chrome extension",
    link: "https://github.com/fadeenk?tab=repositories&q=slack&type=source&language=&sort=",
    description:
      "This is a user script that allowed you to have better control of the slack theme on the web client. I built this because I was tired of the themeing not working how I expected it to and it not being as flexible.",
    thumbnail: "/img/showcase/slack.png",
  },
];

function renderApp(app: App): JSX.Element {
  return (
    <div className={styles.app}>
      {app.thumbnail && <img src={app.thumbnail} alt={app.title} />}
      <h3>{app.link ? <a href={app.link}>{app.title}</a> : app.title}</h3>
      <p>{app.description}</p>
      <hr style={{ clear: "both" }} />
    </div>
  );
}

export default function Apps(): JSX.Element {
  return (
    <Tabs className="tabs--block">
      <TabItem value="Alive" label="Alive">
        {alive.map(renderApp)}
      </TabItem>
      <TabItem value="Not Maintained" label="Not Maintained">
        {NotMaintained.map(renderApp)}
      </TabItem>
      <TabItem value="Abandoned" label="Abandoned">
        <p>Abandoned</p>
      </TabItem>
    </Tabs>
  );
}
