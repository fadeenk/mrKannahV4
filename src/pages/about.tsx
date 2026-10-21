import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import AboutHero from "@site/src/components/AboutHero";
import CaseStudyLayout, {
  CaseBody,
  CaseExternalLink,
  CaseFold,
  CaseFootLink,
  CasePlate,
  CaseQuote,
  CaseStats,
  SpineSection,
  getCaseStudy,
  type CaseLogo,
  type CaseStat,
} from "@site/src/components/CaseStudy";
import { TestimonialList } from "@site/src/components/Testimonials";
import styles from "./about.module.css";

/*
 * The About page: the homepage world told as a record. Every dated fact has a
 * source on the page or is Fadee's own statement:
 *   - CourseKey raise, customers, "architected the platform": TechCrunch,
 *     2021-03-03.
 *   - PSG's investment: PSG's announcement, 2025-01-07.
 *   - Patents: Google Patents (Fadee is a named co-inventor on both).
 *   - MeetingHero dates, reasons and the 39 users: its shutdown statement.
 *   - Portico and American Growth Insurance: the two published case studies.
 * Atomic is named as a client with no engagement detail until one is
 * supplied. CourseKey's founding year is left out: TechCrunch says 2015, the
 * Businesses page says 2014.
 */

const PORTICO = getCaseStudy("portico-embedded-retainer");
const AGI = getCaseStudy("american-growth-insurance");
const ATOMIC_LOGO: CaseLogo = {
  src: "/img/logos/atomic.png",
  width: 250,
  height: 48,
};

const PSG_ANNOUNCEMENT =
  "https://www.businesswire.com/news/home/20250107388998/en/PSG-Announces-Strategic-Growth-Investment-in-CourseKey-to-Help-Build-a-Comprehensive-Solution-for-Career-Focused-Education";
const TECHCRUNCH =
  "https://techcrunch.com/2021/03/03/after-200-arr-growth-in-2020-coursekey-raises-9m-to-digitize-trade-schools/";
const PATENT_GEOFENCE = "https://patents.google.com/patent/US10212542B2/en";
const PATENT_SOUND = "https://patents.google.com/patent/US10551496B2";
const MEETINGHERO_SHUTDOWN = "https://fadeenk.github.io/meetinghero.ai/shutdown";

const STATS: readonly CaseStat[] = [
  {
    value: "$30M",
    label: "CourseKey exit to private equity",
    note: "PSG, January 2025",
  },
  {
    value: "$9M",
    label: "Series B led by SignalFire",
    note: "March 2021",
  },
  {
    value: "200+",
    label: "career colleges on CourseKey",
    note: "By March 2021",
  },
  {
    value: "2",
    label: "US patents as co-inventor",
    note: "Granted 2019 and 2020",
  },
];

/** The first three sentences of Luke's homepage testimonial, word for word. */
const LUKE = TestimonialList.find((t) => t.name === "Luke Sophinos");
const LUKE_QUOTE = LUKE?.description
  .match(/[^.]+\./g)
  ?.slice(0, 3)
  .join("")
  .trim();

export default function About(): JSX.Element {
  // The fold's headings are plain <h3 id>s (no hover anchor link), so tell
  // Docusaurus's anchor check they exist; /about#school is linked from the blog.
  const brokenLinks = useBrokenLinks();
  brokenLinks.collectAnchor("school");
  brokenLinks.collectAnchor("early-code");
  return (
    <CaseStudyLayout
      variant="page"
      title="About Fadee Kannah"
      description="Fadee Kannah built CourseKey's platform, which exited to private equity for $30M, and now consults for SaaS teams including Portico and American Growth Insurance."
    >
      <AboutHero />

      <CaseBody>
        <CaseStats
          countUp
          stats={STATS}
          footnote={
            <>
              PSG announced its investment in CourseKey on January 7, 2025 (
              <CaseExternalLink href={PSG_ANNOUNCEMENT}>
                announcement
              </CaseExternalLink>
              ). The raise and the college count are from{" "}
              <CaseExternalLink href={TECHCRUNCH}>TechCrunch</CaseExternalLink>.
              The patents are{" "}
              <CaseExternalLink href={PATENT_GEOFENCE}>
                US10212542B2
              </CaseExternalLink>{" "}
              and{" "}
              <CaseExternalLink href={PATENT_SOUND}>
                US10551496B2
              </CaseExternalLink>
              .
            </>
          }
        />

        <SpineSection scrub title="Where I started" when="2006 to 2014">
          <p>
            I was born in Bartella, a small town east of Mosul, and spent my
            childhood in Baghdad. In 2006 my family moved back to Bartella
            because Baghdad was no longer safe. In 2008 we moved to Turkey and
            applied through the United Nations to be refugees in the United
            States. Within nine months we had visas.
          </p>
          <p>
            I started US high school as a sophomore, with no records for my
            first year and a half, and the placement exams put me in the lowest
            level of English as a second language. A deal I made with the
            counselors got me through the whole program in half a year, and I
            graduated on time, at the top of my class.{" "}
            <a href="#school">The full story is further down.</a>
          </p>
          <p>
            At San Diego State I studied computer engineering with a computer
            science minor, ran student organizations and computer labs, and
            worked as a teaching assistant. On the side I built websites and
            software for paying clients. That is where I met the people I
            started CourseKey with.
          </p>
        </SpineSection>

        <SpineSection
          scrub
          title="CourseKey, and the exit"
          when={["2014 to 2025", "2021 raise"]}
        >
          <p>
            CourseKey is software for career schools. Luke Sophinos and I
            started it while I was still at San Diego State. I was the
            technical co-founder: I architected the platform and led the
            engineers who built and ran it. When CourseKey raised a $9M Series
            B in March 2021, more than 200 career colleges were using it, and{" "}
            <CaseExternalLink href={TECHCRUNCH}>TechCrunch</CaseExternalLink>{" "}
            credited me with architecting the platform.
          </p>
          <p>
            I&rsquo;m a named co-inventor on two US patents for verifying
            attendance:{" "}
            <CaseExternalLink href={PATENT_GEOFENCE}>
              one that uses a geofence
            </CaseExternalLink>{" "}
            (granted 2019) and{" "}
            <CaseExternalLink href={PATENT_SOUND}>
              one that uses sound
            </CaseExternalLink>{" "}
            (granted 2020).
          </p>
          <p>
            In January 2025, CourseKey took a $30M exit to private equity firm
            PSG, which{" "}
            <CaseExternalLink href={PSG_ANNOUNCEMENT}>
              announced its investment
            </CaseExternalLink>{" "}
            on January 7.
          </p>
          {LUKE && LUKE_QUOTE ? (
            <CaseQuote name={LUKE.name} company="CourseKey">
              {LUKE_QUOTE}
            </CaseQuote>
          ) : null}
        </SpineSection>

        <SpineSection
          scrub
          title="MeetingHero, and why I shut it down"
          when="December 2024 to October 2025"
        >
          <p>
            In December 2024 I started building MeetingHero.ai, an AI tool that
            researched the people you were about to meet and put a briefing in
            your calendar or inbox. I launched it in May 2025 and relaunched it
            in July.
          </p>
          <p>
            It never became a business. I served 39 users. Heavy users cost
            more in AI usage than the lighter users could cover, and AI costs
            fell more slowly than I had assumed. People had grown tired of
            paying for AI tools, I couldn&rsquo;t explain why mine was better
            than asking ChatGPT directly, and referrals and outreach
            didn&rsquo;t bring in enough new users. I shut it down in October
            2025, and I{" "}
            <CaseExternalLink href={MEETINGHERO_SHUTDOWN}>
              wrote up what went wrong
            </CaseExternalLink>
            .
          </p>
        </SpineSection>

        <SpineSection scrub title="Consulting today" when="Now">
          <p>
            For two years I&rsquo;ve been the embedded engineer for the Success
            team at Portico, whose four products include CourseKey (
            <Link to={PORTICO.path}>Portico case study</Link>). For American
            Growth Insurance I built an AI assistant into their existing app in
            4 weeks (
            <Link to={AGI.path}>American Growth Insurance case study</Link>). I
            also work with Atomic and other SaaS teams.
          </p>
          <ul className={styles.clients} role="list" aria-label="Clients">
            <li>
              <Link
                to={PORTICO.path}
                className={styles.plateLink}
                tabIndex={-1}
                aria-hidden="true"
              >
                <CasePlate logo={PORTICO.logo} client={PORTICO.client} />
              </Link>
            </li>
            <li>
              <Link
                to={AGI.path}
                className={styles.plateLink}
                tabIndex={-1}
                aria-hidden="true"
              >
                <CasePlate logo={AGI.logo} client={AGI.client} />
              </Link>
            </li>
            <li>
              <CasePlate logo={ATOMIC_LOGO} client="Atomic" />
            </li>
          </ul>
          <p className={styles.after}>
            <Link to="/#engagements">The three ways I work with a team</Link>{" "}
            are on the homepage.
          </p>
        </SpineSection>

        <CaseFold label="The longer story: school and early code">
          <h3 id="school">School</h3>
          <p>
            For me, education is an ongoing process. From an early age I have
            wanted to learn about everything, from how history shaped our
            societies to how atoms work. From sneaking out of class to spend
            time in the library, to reading my dad&rsquo;s college books, I
            always found a way to learn something new. That passion led me to
            programming, to co-founding CourseKey, and to where I am now.
          </p>
          <p>
            I spent fifteen years in school in Iraq. My elementary school was
            nothing special, but my effort did not go unnoticed. I ranked top
            of my school, which let me apply to{" "}
            <CaseExternalLink href="https://en.wikipedia.org/wiki/Al_Mutamayizeen_Secondary">Al Mutamayizeen Secondary</CaseExternalLink>
            . To get in, I had to pass multiple comprehensive academic and IQ
            tests and score in the top 100 of the applicants. It was the
            hardest thing I had done, and I spent my entire summer preparing.
            The tests covered science, math and language, and ran for multiple
            days, eight hours each.
          </p>
          <p>
            Because of the war I had to move from Baghdad to{" "}
            <CaseExternalLink href="https://en.wikipedia.org/wiki/Bartella">Bartella</CaseExternalLink>
            , so I could not continue there. I kept teaching myself about
            computers and technology. My time at the new secondary school was
            short, because I left the country.
          </p>
          <p>
            When I came to the US I started as a sophomore, which meant I had
            missed a year and a half of school. After the placement exams I was
            put in the lowest level of the English as a second language (ESL)
            program. I would have had to go through all four years of it before
            taking regular freshman English, and the counselors and teachers
            expected me to spend my remaining high school years finishing it.
          </p>
          <p>
            I did not like that plan. After a couple of weeks in the entry class
            I had become a translator and teaching assistant for my
            classmates. My teacher noticed and moved me up to the beginner
            level. I was still not satisfied. I knew I could be in a higher
            level, and spending years to get there was not an option.
          </p>
          <p>
            I spent most of those months in front of the counseling office,
            trying to convince them to move me up. Because of how I did in the
            beginner class, my teacher helped me skip not one but two classes.
            Then I made a deal with the counselors. During the summer I would
            take regular freshman English, skipping the rest of the ESL
            program. If I passed, I would continue normally. If I failed, I
            would stop bothering them and take every ESL class.
          </p>
          <p>
            I passed, ranking first in the class with an A+. Within half a year
            I had finished the whole ESL program and freshman English. After
            that I set my goals higher. Catching up to my peers was no longer
            enough, and I wanted to go straight from high school to university,
            which meant making up almost two years.
          </p>
          <p>
            I never missed a summer school session and took every opportunity
            to take a class: online classes, after-school classes, even college
            classes, plus honors and Advanced Placement courses. I graduated
            within two and a half years, ranked at the top of my graduating
            class.
          </p>
          <p>
            San Diego State accepted me as a computer engineering major. I soon
            found it was not challenging enough, so I added a computer science
            minor, joined student organizations, started my own, managed
            computer labs, became a teaching assistant and worked for the
            university. Alongside all of that I ran my own software development
            business and managed another.
          </p>
          <p>
            Classes started to feel slow, because I already knew the material
            before taking them. I needed an environment where I was always
            learning, and building CourseKey was that environment. I took a
            break from school to do it, and finished my computer engineering
            degree in 2019.
          </p>
          <h3 id="early-code">Teaching myself to code</h3>
          <p>
            Since I was a kid, I liked solving problems, breaking things and
            putting them back together. When I got my first computer, I took it
            all apart and put it back together. The next day, my curiosity got
            the better of me and I deleted Windows. I spent my allowance on
            software and video games, and playing with them taught me editing,
            animation, 3D modeling, working with data and much more.
          </p>
          <p>
            When I came to the US, I got access to the internet, the only thing
            that could satisfy my curiosity. As a teenager I went headfirst into
            gaming, and I started modding game files: my own models, skins and
            maps. That pushed me to learn how memory, assembly and machine code
            work, and then to start writing my own programs.
          </p>
          <p>
            I started making websites, which forced me to learn how everything
            underneath them worked: compiled versus run-time languages,
            client-server communication, networking, and how TCP works. By the
            time I was a freshman at the university I had joined computer
            science and engineering student organizations, from robotics to
            mobile and game development.
          </p>
          <p>
            In my intro to C programming class I used an Arduino Uno for my
            projects instead of a plain C program. I wanted to control things
            from my phone, so I built a{" "}
            <CaseExternalLink href="https://www.youtube.com/watch?v=8vLEkw8au64">Wireless Arduino LED Piano</CaseExternalLink>{" "}
            with three pieces of software.
          </p>
          <p>
            My classes were teaching me things I already knew, in a more
            structured way, so I had free time to experiment. I made apps from
            simple to-do lists to an online shopping store. I bought a Raspberry
            Pi and built a server that hosted Git, ownCloud, network file
            sharing, a PHP web server and a MySQL database, and later turned it
            into a media center and a personal streaming server.
          </p>
          <p>
            I made many apps over the years. Some I forgot about, some were
            valuable to me and to others, and some just satisfied my curiosity.
            I built an app for Warframe that helped players spend less time
            researching and more time playing, and{" "}
            <CaseExternalLink href="https://chromewebstore.google.com/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp">YouTube Redirector</CaseExternalLink>
            , a Chrome extension I made to learn how extensions work.
          </p>
          <p>
            Most of what I built back then was experimentation, to learn tools
            and feed my hunger for code. That is how I went from a curious gamer
            to a software developer.
          </p>
        </CaseFold>

        <CaseFootLink
          align="body"
          to="/showcase"
          note="The technical write-ups behind this work are in the showcase."
        >
          Browse the technical showcase
        </CaseFootLink>
      </CaseBody>
    </CaseStudyLayout>
  );
}
