import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { years } from "./years";

type GoalType =
  | "Family"
  | "Work"
  | "Travel"
  | "Possessions"
  | "Personal"
  | "Charity";

type Goal = {
  goal: string;
  description?: string;
  completed?: number;
};

const goals: {
  [K in GoalType]: Goal[];
} = {
  Family: [
    {
      goal: "Find a partner and get married",
      description: "Fall in love and find the partner that is ideal for me",
    },
    { goal: "Have two children", description: "A girl and a boy" },
    {
      goal: "Take care of my parents and siblings",
      description:
        "Make sure they are compfortable and have the things they need",
    },
    { goal: "Ensure parents retire comfortably" },
    { goal: "Have property for parents to retire in" },
    { goal: "Ensure family is financially set if anything happens to me" },
  ],
  Work: [
    {
      goal: "Publish technical content",
      description:
        '<p>Done a little bit on different places, <a href="https://medium.com/@fadeekannah">medium</a>, <a href="https://dev.to/fadeenk">dev.to</a> and mostly on my <a href="/blog">blog</a>.</p>',
      completed: 2019,
    },
    {
      goal: "Become a millionaire",
      description: "Have a net worth of over a million dollars",
    },
    {
      goal: "Run my own business",
      description: "Kannah software and consulting services.",
      completed: 2018,
    },
    {
      goal: "Become venture backed business",
      description: "CourseKey",
      completed: 2018,
    },
    {
      goal: "Have multiple incomes",
      description: "<ul><li>CourseKey Salary</li><li>Rental income</li></ul>",
      completed: 2021,
    },
    {
      goal: "Become an investor and help small businesses",
      description:
        "Invest in small businesses and help them grow as well as mentoring through ZIP",
      completed: 2021,
    },
  ],
  Travel: [
    {
      goal: "Live in three countries",
      description: "Iraq, Turkey and USA",
      completed: 2008,
    },
    {
      goal: "Visit Japan",
      description: "Visit Japan & explore it minumum 2 weeks",
    },
    {
      goal: "Travel to three different countries",
      description: "Mexico, Bahamas?",
    },
    {
      goal: "Travel to six of the continents",
    },
  ],
  Possessions: [
    {
      goal: "Have a patent",
      description:
        '<a href="https://patents.google.com/patent/US10212542B2/">Facilitating a meeting or education session</a>',
      completed: 2019,
    },
    {
      goal: "Have a second patent",
      description:
        '<a href="https://patents.google.com/?inventor=Fadee+Kannah">All patents</a>',
      completed: 2020,
    },
    {
      goal: "Buy a house",
      description: "Family house",
      completed: 2018,
    },
    {
      goal: "Buy a second house",
      description: "source of income or vacation place",
      completed: 2021,
    },
    {
      goal: "Buy a Predator Thronos",
    },
  ],
  Personal: [
    {
      goal: "Become an engineer",
      description:
        "Childhood goal to become an engineer. Over time it got more specific and decided to become a computer engineer. Although, was working professionally as an engineer I wanted to make it official. As of May 2019, I am a SDSU alumnus computer engineer.",
      completed: 2019,
    },
    {
      goal: "Be in a newspaper",
      description:
        '<p>Part of me always wanted to have my face in a newspaper. That first became true when I was recognized as <a href="https://newscenter.sdsu.edu/sdsu_newscenter/news_story.aspx?sid=75337">a leader in STEM by SDSU</a>. Soon after my name and app were in <a href="http://thedailyaztec.com/47880/opinion/course-snatcher-app-is-an-unfair-advantage/">the school\'s paper</a>. After that my name and picture became associated with coursekey and can be found in bunch of papers, articles and even places I didn\'t expect.</p>',
      completed: 2018,
    },
    {
      goal: "Get mentioned in a major news outlet",
      description:
        '<p>Got mentioned in <a href="https://techcrunch.com/2021/03/03/after-200-arr-growth-in-2020-coursekey-raises-9m-to-digitize-trade-schools/"> TechCrunch</a></p>',
      completed: 2021,
    },
    {
      goal: "Have a retirement plan",
      description: "Ensure easy/early retirement is possible",
    },
    {
      goal: "Have a financial roadmap",
      description:
        "Have a better understanding of where I stand financially. Have a map to get out of dept. Have assets evaluated and documented. Have budget plan.",
      completed: 2021,
    },
    {
      goal: "Become financially independent",
      description: "Won't have to worry about money",
    },
    {
      goal: "Create things",
      description: "Mostly different software",
      completed: 2018,
    },
    { goal: "Solve big complex problems to make the world better" },
    {
      goal: "Become a mentor",
      description: "Mentoring SDSU studnets and Zip entrepreneurs",
      completed: 2021,
    },
  ],
  Charity: [{ goal: "Help my extended family that is in need" }],
};

function getUrlForGoal(goal: Goal): string | JSX.Element {
  if (!goal.completed) {
    return "In progress";
  }
  return (
    <a
      style={{ color: "var(--ifm-color-content)" }}
      href={`blog/Yearly/${goal.completed}/?pass=${years[goal.completed]}`}
    >
      {goal.completed}
    </a>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [attemptedPass, setAttemptedPass] = useState<string>();

  if ("facebook" !== attemptedPass) {
    return (
      <Layout
        title={`Yearly reviews links`}
        description={`${siteConfig.tagline}`}
      >
        <input
          type="text"
          className="passwordProtectedDoc"
          style={{ margin: "10px auto" }}
          placeholder="Enter the password"
          onChange={(e) => setAttemptedPass(e.target.value)}
        />
      </Layout>
    );
  }

  return (
    <Layout title={`Goals information`} description={`${siteConfig.tagline}`}>
      <div className="container">
        <Tabs className="tabs--block">
          {Object.keys(goals).map((category) => (
            <TabItem value={category} label={category}>
              {goals[category]
                .sort((a, b) => {
                  if (a.completed === undefined && b.completed === undefined)
                    return 0;
                  else if (b.completed === undefined) return 1;
                  else if (a.completed === undefined) return -1;
                  else return b.completed - a.completed;
                })
                .map((goal) => (
                  <div className="card" style={{ margin: "10px auto" }}>
                    <div
                      className="card__header"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3>{goal.goal}</h3>
                      {goal.completed ? (
                        <span
                          className="badge badge--success"
                          style={{ height: "fit-content" }}
                        >
                          {getUrlForGoal(goal)}
                        </span>
                      ) : (
                        <span
                          className="badge badge--warning"
                          style={{ height: "fit-content" }}
                        >
                          In progress
                        </span>
                      )}
                    </div>
                    {goal.description && (
                      <div className="card__body">
                        <div
                          dangerouslySetInnerHTML={{ __html: goal.description }}
                        />
                      </div>
                    )}
                  </div>
                ))}
            </TabItem>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
}
