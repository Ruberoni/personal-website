import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import styled from "styled-components";

const TopBarButtons = styled.div`
  background-color: black;
  display: grid;
  width: max-content;
  height: 2em;
  grid-auto-flow: column;

  position: fixed;
  right: 23%;
  top: 1em;
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    right: 1%;
  }
`;

const TopBarItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0.7em;

  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.body};

  text-decoration: none;
`;

const getTopBarHref = (name: string) => {
  const { t } = useTranslation();

  return '#' + t(name).replaceAll(' ', '-')
}

const Topbar = () => {
  const { t } = useTranslation();

  return (
    <TopBarButtons>
      <TopBarItem href='#Home'>{t("Home")}</TopBarItem>
      <TopBarItem href={getTopBarHref('Projects')}>{t("Projects")}</TopBarItem>
      <TopBarItem href={getTopBarHref('Contact me')}>{t("Contact me")}</TopBarItem>
    </TopBarButtons>
  );
};

export default Topbar;
