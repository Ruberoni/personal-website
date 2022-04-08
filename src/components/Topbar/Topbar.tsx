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

  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TopBarButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 2em;
`;

const TopBarItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0.5em;

  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 500;
  text-decoration: none;
`;

const Topbar = () => {
  return (
    <Container>
      <TopBarButtons>
        <TopBarItem href="#Home">Home</TopBarItem>
        <TopBarItem href="#About">About</TopBarItem>
        <TopBarItem href="#Projects">Projects</TopBarItem>
        <TopBarItem href="#Contact">Contact</TopBarItem>
      </TopBarButtons>
    </Container>
  );
};

export default Topbar;
