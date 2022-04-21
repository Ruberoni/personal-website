import * as React from "react";
import { graphql } from "gatsby";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/rouge-script";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

const IndexPage = () => {
  return (
    <Layout>
      <title>Ruben Paredes</title>
      <Hero />
      <Projects />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
