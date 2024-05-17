import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useState } from "react";

export const years = {
  2024: "partying",
  2023: "eventful",
  2022: "traveling",
  2021: "vegas",
  2020: "covid",
};

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
          type="password"
          className="passwordProtectedDoc"
          style={{ margin: "10px auto" }}
          placeholder="Enter the password"
          onChange={(e) => setAttemptedPass(e.target.value)}
        />
      </Layout>
    );
  }

  return (
    <Layout
      title={`Yearly reviews links`}
      description={`${siteConfig.tagline}`}
    >
      <div className="container">
        {Object.keys(years)
          .reverse()
          .map((year) => (
            <div
              className="card"
              style={{ margin: "10px auto", maxWidth: "400px" }}
            >
              <div className="card__body">
                <p>
                  <a href={"/blog/Yearly/" + year + "/?pass=" + years[year]}>
                    {year}
                  </a>
                  : <b>{years[year]}</b>
                </p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}
