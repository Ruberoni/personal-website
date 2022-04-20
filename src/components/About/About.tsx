import React from "react";
import styled, { CSSProperties } from "styled-components";
import { Body, Heading as HeadingText } from "../common/text";
import Circle from "../common/Circle";
import Heading from "./Heading";
import Image from "./Image";
import SkillsListItem from "./SkillsListItem";

// @ts-ignore
import reactLogoImg from "../../images/1200px-react.png";
// @ts-ignore
import typescriptLogoImg from "../../images/typescript-logo.png";
// @ts-ignore
import gatsbyLogoImg from "../../images/gatsby-logo.png";
// @ts-ignore
import nextjsLogoImg from "../../images/next-js-logo.png";
// @ts-ignore
import figmaLogoImg from "../../images/figma-logo.png";
// @ts-ignore
import gitLogoImg from "../../images/git-logo.png";
import { Trans } from "react-i18next";

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledBody = styled(Body)`
  max-width: calc(100% - 500px - 180px);
  text-align: justify;
`;

const SkillsContainer = styled.div`
  width: 100%;
  min-height: 200px;

  padding: 1em 0;
  background-color: ${({ theme }) => theme.colors["3"]};
  margin: 150px auto 0 auto;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const SkillsLeftCircle = styled(Circle)`
  position: absolute;
  left: -25px;
  bottom: -25px;
  background-color: ${({ theme }) => theme.colors["8"]};
`;

const SkillsRightCircle = styled(Circle)`
  position: absolute;
  right: -25px;
  top: -25px;
  background-color: ${({ theme }) => theme.colors["8"]};
`;

const HeadingTextWShadow = styled(HeadingText)`
  text-shadow: -3px 3px 0px rgba(0, 0, 0, 0.25);
  margin-right: 3px;
`;

const SkillsTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  > * {
    display: inline-block;
  }
`;

const SkillsList = styled.div`
  display: flex;
  width: 82%;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 10px 2%;
  }
`;

const skills = [
  {
    image: reactLogoImg,
    name: "React",
  },
  {
    image: typescriptLogoImg,
    name: "TypeScript",
  },
  {
    image: figmaLogoImg,
    name: "Figma",
  },
  {
    image: gitLogoImg,
    name: "Git",
  },
  {
    image: nextjsLogoImg,
    name: "Next.js",
  },
  {
    image: gatsbyLogoImg,
    name: "Gatsby",
  },
];

export interface AboutProps {
  style?: CSSProperties;
}

const About = ({ style }: AboutProps) => {
  return (
    <div style={{ position: "relative", ...style }}>
      <Heading>About</Heading>
      <StyledImage src="http://placekitten.com/500/250" />
      <StyledBody>
        <Trans>About me description</Trans>
      </StyledBody>
      <SkillsContainer>
        <SkillsLeftCircle size={50} />
        <SkillsRightCircle size={50} />
        <SkillsTextContainer>
          <Body>Talking</Body>
          <HeadingTextWShadow>TECH</HeadingTextWShadow>
          <Body>I'm a web developer that works with</Body>
        </SkillsTextContainer>
        <SkillsList>
          {skills.map((skill) => (
            <SkillsListItem imageSrc={skill.image} label={skill.name} />
          ))}
        </SkillsList>
      </SkillsContainer>
    </div>
  );
};

export default About;
