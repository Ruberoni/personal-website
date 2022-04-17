import { Trans } from "gatsby-plugin-react-i18next";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;

  background-color: black;
  opacity: 0.9;
  width: 100%;
  height: 55px;

  z-index: 999;

  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TopBarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500%;
  max-width: 500px;
`;

const TopBarItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0 3.5%;

  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 500;
  text-decoration: none;
  text-align: center;
`;

const Topbar = () => {
  return (
    <Container>
      <TopBarButtons>
        <TopBarItem href="#Home">
          <Trans>Home</Trans>
        </TopBarItem>
        <TopBarItem href="#About">
          <Trans>About</Trans>
        </TopBarItem>
        <TopBarItem href="#Projects">
          <Trans>Projects</Trans>
        </TopBarItem>
        <TopBarItem href="#Contact">
          <Trans>Contact me</Trans>
        </TopBarItem>
      </TopBarButtons>
    </Container>
  );
};

export default Topbar;
