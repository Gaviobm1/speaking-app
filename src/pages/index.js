import * as React from "react";
import Layout from "../components/Layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo/seo";

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>Made with Gatsby tutorial</p>
      <StaticImage
        alt="A red panda chews a plant"
        src="../images/redpanda.jpg"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
