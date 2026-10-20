/*
 * What the showcase says about each project, in one place: the index rows
 * and the four write-ups read the same facts. Sources:
 *   - ai-assistant: the American Growth Insurance case study (approved
 *     as written) and the old SuperAgent Integration page.
 *   - agent-platform: the old Customizable Agentic Platform page.
 *   - ifolio: the old iFolio page and the public repo and live app.
 *   - meetinghero: its shutdown statement (fadeenk.github.io/meetinghero.ai/
 *     shutdown), its landing page, and the 2025 recap's demo videos.
 *   - Suna: Fadee built both AI projects on it. The link is his fork
 *     (fadeenk/suna), taken from kortix-ai/suna under its Apache-2.0 license;
 *     the upstream project has since moved to a custom license, so the copy
 *     never says "open source" and names no license, at Fadee's request.
 *   - recognition and smaller builds: the old Awards and Apps pages, the
 *     patents on Google Patents, and the public GitHub repos.
 */

export const SUNA_URL = "https://github.com/fadeenk/suna";
export const MEETINGHERO_SHUTDOWN_URL =
  "https://fadeenk.github.io/meetinghero.ai/shutdown";
export const AGI_CASE_STUDY = "/case-studies/american-growth-insurance";

export type ShowcaseSlug =
  | "ai-assistant"
  | "agent-platform"
  | "ifolio"
  | "meetinghero";

export type ProjectFact = {
  label: string;
  value: string;
  /** Internal path or external URL. */
  href?: string;
  /** Plain text set after the value, outside the link. */
  rest?: string;
};

export type ShowcaseProject = {
  slug: ShowcaseSlug;
  path: `/showcase/${ShowcaseSlug}`;
  /** The index row's H2. Short: it sets in a narrow column. */
  rowTitle: string;
  /** Lines under the row's H2: time to ship, and who for. */
  when: readonly string[];
  /** One or two sentences, set at the top of the index row. */
  summary: string;
  /** The index row's facts; the write-up's header adds to them. */
  facts: readonly ProjectFact[];
};

export const PROJECTS: readonly ShowcaseProject[] = [
  {
    slug: "ai-assistant",
    path: "/showcase/ai-assistant",
    rowTitle: "AI assistant in a client’s app",
    when: ["4 weeks", "American Growth Insurance"],
    summary:
      "I built an AI assistant into American Growth Insurance’s existing app as a fixed-scope project, on the Suna agent framework. In the recording it researches a topic and drafts a sales deck.",
    facts: [
      {
        label: "Client",
        value: "American Growth Insurance",
        href: AGI_CASE_STUDY,
      },
      { label: "Length", value: "4 weeks, fixed scope" },
      {
        label: "Built on",
        value: "Suna agent framework",
        href: SUNA_URL,
        rest: "and AGI’s React, Express and PostgreSQL codebase",
      },
    ],
  },
  {
    slug: "agent-platform",
    path: "/showcase/agent-platform",
    rowTitle: "White-label agent platform",
    when: ["8 days", "Four industries"],
    summary:
      "One AI agent platform, deployed for four industries: therapy, home health, pharmacists and financial advisors. Each has its own domain and branding. I built it on the Suna agent framework in 8 days.",
    facts: [
      {
        label: "Industries",
        value: "Therapy, home health, pharmacists, financial advisors",
      },
      { label: "Length", value: "8 days" },
      { label: "Built on", value: "Suna agent framework", href: SUNA_URL },
      { label: "Stack", value: "Next.js, FastAPI, Supabase, AWS CDK" },
    ],
  },
  {
    slug: "ifolio",
    path: "/showcase/ifolio",
    rowTitle: "iFolio",
    when: ["48 days", "Built with AI agents"],
    summary:
      "An investment portfolio tracker that runs in your browser. Your portfolio is encrypted on your device with AES-256-GCM. I built it with AI agents in 48 days.",
    facts: [
      {
        label: "Live app",
        value: "ifolio.mrkannah.com",
        href: "https://ifolio.mrkannah.com",
      },
      {
        label: "Source",
        value: "github.com/fadeenk/InvestmentFolio",
        href: "https://github.com/fadeenk/InvestmentFolio",
      },
      { label: "Length", value: "48 days" },
      { label: "Stack", value: "Nuxt, Vue, TypeScript, Cloudflare Worker" },
    ],
  },
  {
    slug: "meetinghero",
    path: "/showcase/meetinghero",
    rowTitle: "MeetingHero.ai",
    when: ["December 2024 to October 2025", "Shut down"],
    summary:
      "An AI tool that researched the people you were about to meet and put a briefing in your calendar or inbox. I launched it in May 2025 and shut it down in October with 39 users.",
    facts: [
      { label: "Launched", value: "May 17, 2025" },
      { label: "Users", value: "39" },
      { label: "Plans", value: "$4.99 to $9.99 a month" },
      {
        label: "Status",
        value: "Shut down, with a written statement",
        href: MEETINGHERO_SHUTDOWN_URL,
      },
    ],
  },
];

export function getProject(slug: ShowcaseSlug): ShowcaseProject {
  const project = PROJECTS.find((entry) => entry.slug === slug);
  if (!project) {
    throw new Error(`Unknown showcase project: ${slug}`);
  }
  return project;
}

export type SmallBuildLink = { label: string; href: string };

export type BuildMedia = {
  /** Site path of the recording. */
  src: string;
  /** Site path of the still shown before play. */
  poster: string;
  /** The file's pixel size. */
  width: number;
  height: number;
  /** What the recording shows. */
  label: string;
  /** The widest the frame gets, in rem: keeps a phone capture small. */
  maxWidth: number;
};

export type SmallBuild = {
  name: string;
  text: string;
  links: readonly SmallBuildLink[];
  media?: BuildMedia;
};

export const SMALL_BUILDS: readonly SmallBuild[] = [
  {
    name: "PureFrame",
    text: "A beta desktop app, made with Lawrence Benjamin, that finds glitches in video. A detection model runs locally on an NVIDIA GPU (CUDA) when there is one, and every frame with an anomaly is written out in several formats.",
    links: [],
    media: {
      src: "/img/showcase/pureframe.mp4",
      poster: "/img/showcase/pureframe-poster.jpg",
      width: 1100,
      height: 782,
      label: "Recording of PureFrame analyzing a video: choosing the input and output, then the progress bar as it runs",
      maxWidth: 30,
    },
  },
  {
    name: "Primus rooms adapter",
    text: "Plugins for Primus, a real-time communication framework. The Redis adapter (MIT licensed, 6 stars) lets primus-rooms work across multiple servers. Both repos were last updated in 2020 and are now archived.",
    links: [
      {
        label: "primus-rooms-redis-adapter",
        href: "https://github.com/fadeenk/primus-rooms-redis-adapter",
      },
      {
        label: "omega-supreme-rooms-middleware",
        href: "https://github.com/fadeenk/omega-supreme-rooms-middleware",
      },
    ],
  },
  {
    name: "Lab results dashboard",
    text: "A dashboard I built for myself that pulls my lab results from several portals into one place, flags the values that are out of range, and shows each result’s trend over time.",
    links: [],
    media: {
      src: "/img/showcase/lab-dashboard.mp4",
      poster: "/img/showcase/lab-dashboard-poster.jpg",
      width: 886,
      height: 1008,
      label: "Recording of the lab results dashboard: the table of results, then one result’s history chart",
      maxWidth: 22,
    },
  },
  {
    name: "DJ request app",
    text: "An app for my DJ sets. Guests request songs and vote on them live, it prepares each song to play and has it ready on my laptop, and it searches YouTube so a guest can find any track or remix.",
    links: [],
    media: {
      src: "/img/showcase/dj-app.mp4",
      poster: "/img/showcase/dj-app-poster.jpg",
      width: 520,
      height: 908,
      label: "Recording of the DJ request app: an event’s requests, a song search, and the list of requested songs",
      maxWidth: 14,
    },
  },
];

export type RecognitionImage = {
  /** Site path of the full-size image, opened from the thumbnail. */
  src: string;
  /** Site path of the small image the ledger shows. */
  thumb: string;
  /** The thumbnail's pixel size. */
  width: number;
  height: number;
  alt: string;
  /** A badge with its own edge: shown without the frame. */
  bare?: boolean;
};

export type RecognitionItem = {
  year: string;
  title: string;
  detail: string;
  /** Where to check it. */
  source?: { label: string; href: string };
  image?: RecognitionImage;
};

/** The patents lead, then the rest newest first. */
export const RECOGNITION: readonly RecognitionItem[] = [
  {
    year: "2020",
    title:
      "US patent, “Systems and methods for verifying participation in a meeting using sound signals”",
    detail:
      "Co-inventor. It confirms an attendee is in the room by decoding an encoded sound sent from the leader’s device.",
    source: {
      label: "US10551496B2",
      href: "https://patents.google.com/patent/US10551496B2",
    },
    image: {
      src: "/img/showcase/recognition-patent-2020.jpg",
      thumb: "/img/showcase/recognition-patent-2020-thumb.jpg",
      width: 320,
      height: 414,
      alt: "The certificate for the 2020 patent, with the system diagram from it",
    },
  },
  {
    year: "2019",
    title: "US patent, “Facilitating a meeting or education session”",
    detail:
      "Co-inventor. It confirms attendees are physically present by checking their devices against a geofence around the meeting.",
    source: {
      label: "US10212542B2",
      href: "https://patents.google.com/patent/US10212542B2/en",
    },
    image: {
      src: "/img/showcase/recognition-patent-2019.jpg",
      thumb: "/img/showcase/recognition-patent-2019-thumb.jpg",
      width: 320,
      height: 414,
      alt: "The certificate for the 2019 patent, with the app screen from it",
    },
  },
  {
    year: "2024",
    title: "Speaker at TechAlley Las Vegas",
    detail:
      "I have presented at TechAlley several times, sharing my story with the community there. The most recent was in 2024. The cover is from the Vegas Edition of June 2022.",
    image: {
      src: "/img/showcase/recognition-techalley-2022.jpg",
      thumb: "/img/showcase/recognition-techalley-2022-thumb.jpg",
      width: 320,
      height: 414,
      alt: "The cover of TechAlley’s Vegas Edition, June 18, 2022, with me on it",
    },
  },
  {
    year: "2021",
    title: "TechCrunch on CourseKey’s $9M Series B",
    detail:
      "The article names me as a co-founder who architected the platform.",
    source: {
      label: "TechCrunch",
      href: "https://techcrunch.com/2021/03/03/after-200-arr-growth-in-2020-coursekey-raises-9m-to-digitize-trade-schools/",
    },
    image: {
      src: "/img/showcase/recognition-techcrunch-2021.jpg",
      thumb: "/img/showcase/recognition-techcrunch-2021-thumb.jpg",
      width: 320,
      height: 180,
      alt: "The education technology illustration TechCrunch ran at the top of the article: a globe of learning icons",
    },
  },
  {
    year: "2019",
    title: "San Diego Venture Group Cool Companies",
    detail: "CourseKey was awarded Cool Company three years in a row, including 2019.",
    source: {
      label: "San Diego Business Journal",
      href: "https://www.sdbj.com/finance/venture-capital/san-diego-venture-group-names-33-cool-companies/",
    },
    image: {
      src: "/img/showcase/recognition-cool-companies-2019.png",
      thumb: "/img/showcase/recognition-cool-companies-2019-thumb.png",
      width: 320,
      height: 316,
      alt: "The San Diego Venture Group Cool Companies 2019 badge",
      bare: true,
    },
  },
  {
    year: "2014",
    title: "Selected as a student leader, San Diego State University",
    detail:
      "The university’s news release lists me among the students selected to attend a student leadership conference.",
    source: {
      label: "SDSU News",
      href: "https://www.sdsu.edu/news/2014/12/leaders-stem",
    },
    image: {
      src: "/img/showcase/recognition-sdsu-2014.jpg",
      thumb: "/img/showcase/recognition-sdsu-2014-thumb.jpg",
      width: 320,
      height: 214,
      alt: "A group photo of the student leaders, from the SDSU news release",
    },
  },
];

export type MeetingHeroDemo = {
  /** YouTube video id. */
  id: string;
  label: string;
  note: string;
  /** Local 16:9 thumbnail (site path). */
  poster: string;
};

/**
 * The product demo from its landing page, and the launch demo. The alpha and
 * beta demos are left out: their frames show other people's names, calendar
 * entries and work email addresses. The relaunch demo is only linked, since
 * its frame repeats the landing demo's.
 */
export const MEETINGHERO_INTRO: MeetingHeroDemo = {
  id: "IDNpZuoeIOU",
  label: "Meet MeetingHero.ai",
  note: "The product demo from its landing page",
  poster: "/img/showcase/meetinghero-demo.jpg",
};

export const MEETINGHERO_LAUNCH: MeetingHeroDemo = {
  id: "Oz72TtdGw-w",
  label: "Launch demo",
  note: "At launch, May 17, 2025",
  poster: "/img/showcase/meetinghero-launch.jpg",
};

export const MEETINGHERO_RELAUNCH_URL = "https://www.youtube.com/watch?v=6ZWbnt96Who";
