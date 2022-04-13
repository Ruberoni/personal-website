import React from "react";
import styled, { CSSProperties } from "styled-components";
import { Body, Heading as HeadingText } from "../common/text";
import Circle from "../common/Circle";
import Heading from "./Heading";
import Image from "./Image";
import SkillsListItem from "./SkillsListItem";

// @ts-ignore
import reactLogoImg from "../../images/1200px-react.png";

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledBody = styled(Body)`
  max-width: calc(100% - 500px - 30px);
  text-align: justify;
`;

const SkillsContainer = styled.div`
  width: 90%;
  min-height: 200px;

  padding: 1em 0;
  background-color: ${({ theme }) => theme.colors["3"]};
  margin: 90px auto 0 auto;
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
  width: 80%;
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
    image: reactLogoImg,
    name: "React",
  },
  {
    image: reactLogoImg,
    name: "React",
  },
  {
    image: reactLogoImg,
    name: "React",
  },
  {
    image: reactLogoImg,
    name: "React",
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        efficitur risus vel ligula consequat, in congue lectus auctor. Sed
        facilisis est odio. Praesent luctus, enim ac ultricies placerat, est
        erat dignissim libero, vitae rhoncus metus justo eget urna. Sed feugiat
        dolor nec nulla gravida faucibus eget nec nunc. Ut egestas augue eget
        neque vestibulum tempus. Nullam eu semper orci. Vivamus eget ullamcorper
        diam, ut euismod tortor. Vivamus vel maximus metus, sed fringilla lacus.
        Curabitur eu leo nisl. Cras sollicitudin hendrerit lacus, nec efficitur
        arcu tempus quis. In sit amet condimentum lorem. Mauris sollicitudin
        faucibus fringilla. Nam elementum lacus at lacus interdum sodales. Duis
        eu commodo erat. Nam eget tincidunt risus. Proin dapibus in leo sed
        consequat.
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
