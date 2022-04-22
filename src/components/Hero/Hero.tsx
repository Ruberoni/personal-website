import React from "react";
import styled, { CSSProperties } from "styled-components";
import { Body } from "../common/text";

const Container = styled.div`
  background-color: black;
  height: 93vh;
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.body};
  font-weight: normal;
  font-size: 6em;
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    font-size: 5em;
  }

  margin: 0;
`;
const Role = styled.h2`
  color: ${({ theme }) => theme.colors.body};
  font-weight: normal;
  font-style: italic;
  font-size: 4em;
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    font-size: 2em;
  }

  margin: 3% 0 28% 0;
`;

const Center = styled.div``;
// https://stackoverflow.com/questions/3796025/fill-svg-path-element-with-a-background-image
const Hero = (props: { style?: CSSProperties }) => {
  return (
    <Container {...props}>
      <Center>
        <Name>Ruben Paredes</Name>
        <Role>web developer</Role>
        <Body>
          Inspirited by this wind of promise, my daydreams become more fervent
          and vivid.
        </Body>
      </Center>
    </Container>
  );
};

export default Hero;
