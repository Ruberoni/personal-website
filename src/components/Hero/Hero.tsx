import React, { CSSProperties } from "react";
import styled from "styled-components";
import HeroLogoAnimation from "./HeroLogoAnimation";
import SmileFaceSVG from "../icons/SmileFace";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;

const HeroText = styled.p`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6em;
  font-weight: 500;
  cursor: default;
  margin: 0;
  line-height: 65px;
  text-align: center;
`;

const OccupationText = styled.p`
  font-family: "Rouge Script";
  color: ${({ theme }) => theme.colors.body};
  font-size: 2em;
  margin: 4px 0;
`;

const OccupationContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`;

const Hero = (props: { style: CSSProperties }) => {
  return (
    <Container {...props}>
      <HeroLogoContainer>
        <HeroText>Rubén</HeroText>
        <HeroLogoAnimation />
        <OccupationContainer>
          <OccupationText>web developer</OccupationText>
          <SmileFace />
        </OccupationContainer>
      </HeroLogoContainer>
    </Container>
  );
};

export default Hero;

const SmileFace = styled(SmileFaceSVG).attrs(({ theme }) => ({
  stroke: theme.colors.body,
}))`
  margin-left: 5px;
  margin-top: 25px;
`;
