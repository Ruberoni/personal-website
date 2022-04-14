import React from "react";
import styled from "styled-components";
import Image from "../About/Image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h2`
  font-size: 2em;
  margin: 0;
  color: ${({ theme }) => theme.colors.heading};
`;

const ProjectDescription = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.body};
`;

const ProjectImage = styled(Image)`
  height: 230px;
`;

const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

const ProjectLinksList = styled.div`
  display: grid;
  height: fit-content;
  grid-gap: 8px;
  padding: 8px;
`;

const ProjectButton = styled.button`
  width: 160px;
  height: 50px;
  margin-top: auto;

  background: #345b63;
  box-shadow: -5px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border-width: 0;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.body};
  font-size: 0.9em;
`;

interface ProjectLinkProps {
  name?: string;
  imageSrc: string;
  href: string;
}

const ProjectLink = ({ name, imageSrc, href }: ProjectLinkProps) => {
  return (
    <a href={href} title={name}>
      <img style={{ width: "20px" }} src={imageSrc} />
    </a>
  );
};

export interface ProjectsListItemProps {
  title: string;
  description: string;
  imageSrc: string;
  links?: ProjectLinkProps[];
}

const ProjectsListItem = ({
  title,
  description,
  imageSrc,
  links,
}: ProjectsListItemProps) => {
  return (
    <Container>
      <InfoContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectButton>See more</ProjectButton>
      </InfoContainer>
      <Spacer />
      <ProjectImage src={imageSrc} />
      <ProjectLinksList>
        {links?.map((link) => (
          <ProjectLink
            name={link.name}
            href={link.href}
            imageSrc={link.imageSrc}
          />
        ))}
      </ProjectLinksList>
    </Container>
  );
};

export default ProjectsListItem;
