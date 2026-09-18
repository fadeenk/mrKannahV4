import { useEffect, type JSX } from "react";
import Layout from "@theme/Layout";

export default function Consulting(): JSX.Element {
  useEffect(() => {
    window.location.replace("/#engagements");
  }, []);

  return (
    <Layout
      title="AI Delivery Consulting for SaaS Teams"
      description="Kannah Consulting has moved to the home page."
    >
      <div className="container margin-vert--lg text--center">
        <p>
          Consulting now lives on the <a href="/#engagements">home page</a>.
        </p>
        <p>
          <a href="/#engagements" className="button button--primary">
            Continue to engagements
          </a>
        </p>
      </div>
    </Layout>
  );
}
