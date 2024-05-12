import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Businesses from "@site/src/components/Showcase/Businesses";
import Apps from "@site/src/components/Showcase/Apps";

export default function Showcase(): JSX.Element {
  return (
    <Layout title={`My Showcase`} description={`Showcasing my work`}>
      <div className="container" style={{ marginTop: "10px" }}>
        <Tabs className="tabs--block">
          <TabItem value="Businesses" label="Businesses">
            <Businesses />
          </TabItem>
          <TabItem value="Apps" label="Apps">
            <Apps />
          </TabItem>
          <TabItem value="Websites" label="Websites">
            <p>Websites</p>
          </TabItem>
          <TabItem value="Hardware" label="Hardware">
            <p>Hardware</p>
          </TabItem>
          <TabItem value="Other" label="Other">
            <p>Other</p>
          </TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}
