/*
 * What the showcase says about each project, in one place: the index rows
 * and the five write-ups read the same facts. Sources:
 *   - ai-assistant: the American Growth Insurance case study (approved
 *     as written) and the old SuperAgent Integration page.
 *   - videoarchiver: the live landing page (videoarchiver.mrkannah.com, the
 *     dashboard's pages/index.vue) for every product claim and price, and the
 *     VideoArchiver repo's git history and docs for the build numbers (see
 *     VIDEOARCHIVER_BUILD). Its recording runs on the dashboard's demo mode,
 *     with made-up cameras and clips (see VIDEOARCHIVER_RECORDING). How it is
 *     built stays private: the page names tools in its stack and nothing more.
 *   - agent-platform: the old Customizable Agentic Platform page.
 *   - ifolio: the old iFolio page and the public repo and live app; its
 *     recording is a made-up portfolio (see IFOLIO_RECORDING).
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

export const VIDEOARCHIVER_URL = "https://videoarchiver.mrkannah.com";

export type ShowcaseSlug =
  | "ai-assistant"
  | "videoarchiver"
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
    slug: "videoarchiver",
    path: "/showcase/videoarchiver",
    rowTitle: "VideoArchiver",
    when: ["Since June 2026", "Live product"],
    summary:
      "My own live product. VideoArchiver saves every Ring motion event and doorbell press to your own Google Drive, Dropbox or S3-compatible storage, automatically. Clips are streamed, never stored on our servers.",
    facts: [
      {
        label: "Live site",
        value: "videoarchiver.mrkannah.com",
        href: VIDEOARCHIVER_URL,
      },
      { label: "Length", value: "Since June 2026" },
      {
        label: "Plans",
        value: "Free, and Pro at $2.99 per device per month",
      },
      {
        label: "Storage",
        value: "Google Drive, Dropbox and S3-compatible",
      },
    ],
  },
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
      {
        label: "Outcome",
        value: "Went live; the client tested the market, then pivoted",
      },
      { label: "Built on", value: "Suna agent framework", href: SUNA_URL },
      { label: "Stack", value: "Next.js, FastAPI, Supabase, AWS CDK" },
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
      "I have presented at TechAlley multiple times, sharing my story with the community there. The most recent was in 2024. The cover is from the Vegas Edition of June 2022.",
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
    title: "Selected as a STEM leader from SDSU’s MESA program",
    detail:
      "SDSU’s MESA program sent 24 students to the invitation-only MESA Student Leadership Conference, chosen for their leadership skills. The university’s news release lists me among them.",
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
  label: "MeetingHero.ai launch demo",
  note: "At launch, May 17, 2025",
  poster: "/img/showcase/meetinghero-launch.jpg",
};

export const MEETINGHERO_RELAUNCH_URL = "https://www.youtube.com/watch?v=6ZWbnt96Who";

export type ScreenRecording = {
  /** Site path of the MP4. */
  src: string;
  /** Site path of the poster still, a frame of the cut. */
  poster: string;
  /** Intrinsic pixel size of the file. */
  width: number;
  height: number;
  /** One short line, shown under the recording. */
  caption: string;
  /**
   * The details (what happens, and when) for assistive tech only: the
   * video's description, never shown. It doesn't repeat the caption.
   */
  description: string;
  /** What the recording shows, for assistive tech. */
  label: string;
};

/*
 * The two screen recordings that carry the AI work. Both are cuts of longer
 * original captures; the originals are in git at 8adc5ac (static/img/showcase).
 * Cut with ffmpeg 7.0 (H.264, crf 25, no audio, fast-start), 2026-10-21.
 *
 * superAgent.mp4 (the AI assistant), 29.8 s at normal speed: original 7.9-18.3 s
 * and 24.3-43.7 s. Left out: the opening (a browser tooltip with the client's QA
 * hostname, and the model picker), a detour to the conversations list (other chat
 * titles), and the jump to an older chat for another agency after 43.88 s (its
 * address and phone were on screen). It ends on the 12-slide outline, not on
 * rendered slides, so the American Growth Insurance case study's approved caption
 * ("gets the finished slides back") says a little more than this clip shows.
 * ai-assistant-poster.jpg is the frame at the end of the cut.
 *
 * agentic.mp4 (the agent platform), 50.0 s: a highlight cut of the 2:15 original.
 * Landing page 0-8.5 s at normal speed (the testimonials strip, 8.5-13 s, is the
 * demo product's own marketing copy and is cut); 13-19.5 s at 2x; the prompt and
 * send 19.5-26.1 s at normal speed; then the agent's work at 2x to 4x (26.1-37 s
 * at 4x, 37-45 s at 2x, 45-80 s at 3x, 80-103 s at 4x); ending on the rendered
 * report at normal speed (103-110.5 s). The caption says it is sped up.
 * agent-platform-poster.jpg is the frame at 49 s, the report.
 *
 * The timestamps in the descriptions are positions in the cuts, checked against
 * frames.
 */
export const AI_ASSISTANT_RECORDING: ScreenRecording = {
  src: "/img/showcase/superAgent.mp4",
  poster: "/img/showcase/ai-assistant-poster.jpg",
  width: 1266,
  height: 912,
  caption:
    "The assistant researching a topic and drafting a sales deck, inside the app.",
  description:
    "The assistant takes the request at 0:03, asks follow-up questions at 0:11, runs its tools from 0:13, and has the slide outline by 0:26.",
  label:
    "Recording of the AI assistant researching a topic and drafting a sales deck inside American Growth Insurance’s app",
};

/*
 * iFolio's launch video, made with the brag tool from the real app running on a
 * generated vault (brag-output/work/gen-data.mjs in the InvestmentFolio repo):
 * 6 accounts, 1,844 transactions and every number synthetic, so it shows no real
 * balances or account numbers. That is why the caption says the portfolio is
 * made up. The soundtrack (music and key ticks) is kept; it plays only on
 * click. Re-encoded from the 23.5 s 1080p original (5.4 MB) with ffmpeg:
 * 1280x720, H.264 crf 24, AAC 128k, fast-start, 2026-10-21.
 * ifolio-poster.jpg is the frame at 7 s, the dashboard.
 *
 * The timestamps in the description are positions in the video, checked
 * against frames: the passphrase is typed from 0:01 and "Decrypting key" runs at 0:03;
 * the dashboard lands at 0:04, positions at 0:08, the NVDA filter at 0:12,
 * income at 0:15, the lock at 0:17, and the end card from 0:20.
 */
export const IFOLIO_RECORDING: ScreenRecording = {
  src: "/img/showcase/ifolio.mp4",
  poster: "/img/showcase/ifolio-poster.jpg",
  width: 1280,
  height: 720,
  caption: "A walkthrough of iFolio with a made-up portfolio, not mine.",
  description:
    "iFolio unlocks the encrypted vault at 0:03, shows the dashboard at 0:04, the open positions at 0:08, filters the 1,844 transactions by symbol at 0:12 and the monthly income at 0:15, then locks again at 0:17.",
  label:
    "Recording of iFolio with a made-up portfolio: unlocking the encrypted vault, then the dashboard, positions, transactions and income, then locking it again",
};

/*
 * VideoArchiver's 60-second walkthrough, made with the brag-slim tool from the
 * real dashboard running in its demo mode (the VideoArchiver repo's
 * docs/demo-mode.md): the cameras Front Door, Driveway and Backyard and every
 * clip, time and file path are the demo's made-up seed, so it shows no real
 * footage, accounts or email addresses. That is why the caption says the
 * cameras and clips are made up. What the video changes in the real screens:
 *   - The support address under the setup picker and in the portal footer is
 *     removed, and so are the setup page's demo note, the pricing cards'
 *     buttons and Pro's store line. The page names no store.
 *   - The custody chain shows three of its five tags (verified source, never
 *     stored, timestamped log).
 *   - Rows are re-dated to the demo's day, 2026-09-18. The arriving Driveway
 *     row is built from the real row markup and the real retrying chip. The
 *     hook's fifth sample row and the Storage cards' latest clips read Saved.
 *   - Setup ends on the press of Connect: the demo can't finish a real
 *     storage connection.
 * The narration is the earlier 22.5-second video's voice (edge-tts, en-US
 * Andrew), and the music and effects are original, written for this cut in
 * A major. The soundtrack plays only on click. Re-encoded from the 60 s 1080p master
 * (12.6 MB) with ffmpeg: 1280x720, H.264 crf 24, AAC 128k, fast-start,
 * 2026-10-24 (3.4 MB). videoarchiver-poster.jpg is the frame at 5 s, the
 * events landing, also baked in as the video's first frame.
 *
 * The timestamps in the description are positions in the video, checked
 * against frames of the site encode: setup from 0:06, the clip saved at 0:16,
 * the clip passing through from 0:22, the retrying row at 0:29 and saved at
 * 0:32, Replay pressed at 0:35, Devices at 0:37 and the plans at 0:45.
 */
export const VIDEOARCHIVER_RECORDING: ScreenRecording = {
  src: "/img/showcase/videoarchiver.mp4",
  poster: "/img/showcase/videoarchiver-poster.jpg",
  width: 1280,
  height: 720,
  caption:
    "A walkthrough of VideoArchiver with made-up cameras and clips from its demo mode.",
  description:
    "Setup starts at 0:06, a front-door clip is saved at 0:16, and from 0:22 a clip passes through without being stored. In the Events log a failed save retries at 0:29 and is saved at 0:32, and a failed clip is replayed at 0:35. Devices and Storage follow at 0:37, then the plans at 0:45.",
  label:
    "Recording of VideoArchiver with made-up cameras and clips: events landing, the three setup steps, one clip saved to Google Drive, the clip passing through without being stored, the Events log with a retry and a replay, the Devices and Storage pages, and the Free and Pro plans",
};

export type TranscriptPart = {
  /** Where the part starts in the video. */
  at: string;
  /** The text burned into the picture. */
  screen: string;
  /** What the narrator says. */
  voice: string;
};

/** The walkthrough's narration and on-screen text, scene by scene. */
export const VIDEOARCHIVER_TRANSCRIPT: readonly TranscriptPart[] = [
  {
    at: "0:00",
    screen:
      "Every motion event. Every doorbell press. Saved to your own cloud, automatically.",
    voice:
      "Every Ring motion event and doorbell press, saved to your own cloud.",
  },
  {
    at: "0:06",
    screen:
      "Three steps, then it runs itself. Install. Link your Ring account. Choose your storage.",
    voice:
      "Three steps: install, link your Ring account, and choose your storage. Then it runs itself.",
  },
  {
    at: "0:13",
    screen:
      "Saved as it happens. Each clip lands in a folder named for the camera.",
    voice:
      "Each clip is saved as it happens, in a folder named for the camera.",
  },
  {
    at: "0:20",
    screen:
      "Streamed, never stored. Clips pass through our servers without being saved. We never keep a copy.",
    voice:
      "Clips stream straight through, and are never stored on our servers.",
  },
  {
    at: "0:28",
    screen:
      "Every clip, logged. Failures retry on their own. Anything that still can’t be saved gets a Replay button.",
    voice:
      "Every clip gets a row and a status. Failures retry on their own. And anything that still can’t be saved gets a Replay button.",
  },
  {
    at: "0:37",
    screen:
      "Each device archives on its own. To Google Drive, Dropbox or S3-compatible storage.",
    voice:
      "Each device archives on its own, to Google Drive, Dropbox or S3-compatible storage.",
  },
  {
    at: "0:45",
    screen:
      "Simple, per-device pricing. Free: 50 events per device each month, no credit card. Pro: $2.99 per device per month, unlimited.",
    voice:
      "Free covers fifty events per device a month. Pro removes the limit, for $2.99 per device.",
  },
  {
    at: "0:52",
    screen:
      "VideoArchiver. Your Ring clips, automatically in your own cloud. videoarchiver.mrkannah.com. Free plan, no credit card required. Ring is a trademark of Amazon.com, Inc. VideoArchiver is not affiliated with or endorsed by Ring or Amazon.",
    voice: "VideoArchiver. Your Ring clips, automatically in your own cloud.",
  },
];

/*
 * VideoArchiver's build, counted on 2026-10-24 from the VideoArchiver repo's
 * main branch (its last commit is from 2026-10-22):
 *   - commits: git rev-list --count main (932); first commit 2026-06-28;
 *     days with a commit: the distinct author dates (60).
 *   - AI: commits whose Co-Authored-By trailer names a Claude model (219:
 *     Claude Sonnet 5.5 on 160, Claude Opus 5.5 on 59) and commits authored
 *     by Google's Jules agent (16). The rest name no AI model (six carry a
 *     Paperclip co-author line), so the history can't say which of them an
 *     agent wrote; no session count is claimed.
 *   - tests: tracked *.test.* and *.spec.* files (390). CI: the CI workflow
 *     runs on every pull request and every push to main, and one of its
 *     steps checks that every page has a demo version.
 *   - decision records: docs/adr, 0001 to 0021.
 *   - release records: docs/release-2026-10-09-pass-3.md and
 *     docs/release-2026-10-16-db-audit.md (17 issues).
 */
export const VIDEOARCHIVER_BUILD = {
  commits: 932,
  firstCommit: "June 28, 2026",
  commitDays: 60,
  claudeCommits: 219,
  julesCommits: 16,
  testFiles: 390,
  decisionRecords: 21,
} as const;

export const AGENT_PLATFORM_RECORDING: ScreenRecording = {
  src: "/img/showcase/agentic.mp4",
  poster: "/img/showcase/agent-platform-poster.jpg",
  width: 1100,
  height: 792,
  caption:
    "The financial advisors version, sped up 2 to 4 times while the agent works.",
  description:
    "Its landing page first, then the agent working through a research task. It plans its tasks at 0:20, researches the web from 0:24, and has written its report by 0:44.",
  label:
    "Recording of the financial advisors version of the agent platform: its landing page, then the agent researching a topic and writing a report",
};
