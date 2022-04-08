import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import HeroLogoAnimation from "../components/Hero/HeroLogoAnimation";

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: ${(props) => props.theme.colors.heading};
`;

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <title>{t("Home Page")}</title>
      <Heading>
        <Trans>Congratulations</Trans>
      </Heading>
      <HeroLogoAnimation />
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
