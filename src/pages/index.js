import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";
import { StaticImage } from "gatsby-plugin-image";

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

export const Head = () => <title>Home</title>;
