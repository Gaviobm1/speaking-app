import * as React from "react";
import Layout from "../../components/Layout/layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo/seo";

export default function BlogPage({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="blog post" />;
