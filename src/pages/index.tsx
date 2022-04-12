import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/rouge-script";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <title>{t("Home Page")}</title>
      <Hero style={{ height: "75vh", marginTop: "70px" }} id="Home" />
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
