import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>Made with Gatsby tutorial</p>
    </Layout>
  );
}

export const Head = () => <title>Home</title>;
