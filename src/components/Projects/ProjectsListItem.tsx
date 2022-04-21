import React from "react";
import styled, { useTheme } from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "../About/Image";
import GitHubLogoIcon from "../icons/GitHubLogoIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    flex-direction: column;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 5em;
  margin: 0;
  color: black;
`;

const ProjectDescription = styled.p`
  font-size: ${({theme}) => theme.fontSizes.body};
  color: black;
`;

const ProjectImage = styled.img`
  width: 654px;
  align-self: center;
`;


interface ProjectLinkProps {
  name?: "GitHub" | "Website" | string;
  imageSrc?: string;
  href: string;
}

const getProjectLinkImage = (linkName: ProjectLinkProps["name"]) => {
  const theme = useTheme();

  switch (linkName) {
    case "GitHub":
      return <GitHubLogoIcon fill={theme.colors["7"]} />;
    case "Website":
      return <ExternalLinkIcon fill={theme.colors["7"]} />;
    default:
      return <></>;
  }
};

const TagsList = styled.ul`
  background-color: black;
  
  padding: 10px;
  margin: 0;
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
`

const Tag = styled.li`
  font-size: ${({theme}) => theme.fontSizes.body};
  color: white;

  list-style-type: none;
`
export interface ProjectsListItemProps {
  title: string;
  description: string;
  imageSrc: string;
  links?: ProjectLinkProps[];
  tags?: string[]
}

const ProjectsListItem = ({
  title,
  description,
  imageSrc,
  links,
  tags
}: ProjectsListItemProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.mediaQueries.mobile})`);

  if (isMobile) {
    console.log("Mobile");
  }

  return (
    <Container>
      <TagsList>
        {tags?.map(tag => <Tag>{tag.toUpperCase()}</Tag>)}
      </TagsList>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectImage src={imageSrc} />
    </Container>
  );
};

export default ProjectsListItem;
