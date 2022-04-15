import React from "react";
import styled, { useTheme } from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "../About/Image";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    flex-direction: column;
  }
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
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    align-self: center;
  }
`;

const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

const ProjectLinksList = styled.div`
  display: grid;
  height: fit-content;
  width: fit-content;
  grid-gap: 8px;
  padding: 8px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    grid-auto-flow: column;
    align-self: center;
  }
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

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    align-self: center;
  }
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
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.mediaQueries.mobile})`);

  if (isMobile) {
    console.log("Mobile");
  }

  return (
    <Container>
      <InfoContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        {!isMobile && <ProjectButton>See more</ProjectButton>}
      </InfoContainer>
      <Spacer />
      <ProjectImage src={imageSrc} />
      <ProjectLinksList>
        {links?.map((link, index) => (
          <ProjectLink
            key={`ProjectLink-${link.name}-${index}`}
            name={link.name}
            href={link.href}
            imageSrc={link.imageSrc}
          />
        ))}
      </ProjectLinksList>
      {isMobile && <ProjectButton>See more</ProjectButton>}
    </Container>
  );
};

export default ProjectsListItem;
