import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import styled from "styled-components";
import EmailIcon from "./icons/EmailIcon";
import GitHubLogoIcon from "./icons/GitHubLogoIcon";

const Container = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.75em;
  font-weight: 100;
`;

const LinksList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  svg {
    width: 20px;
  }
`;

const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      {t("Credits")}
      <Spacer />
      <LinksList>
        <a href="https://github.com/Ruberoni" target="_blank" title="GitHub">
          <GitHubLogoIcon />
        </a>
        <a href="ruben.pardes25@gmail.com" target="_blank" title="Email">
          <EmailIcon />
        </a>
      </LinksList>
    </Container>
  );
};

export default Footer;
