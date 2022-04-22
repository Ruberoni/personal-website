import React from "react";
import styled, { useTheme } from "styled-components";
import useMediaQuery from "../../hooks/useMediaQuery";
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
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    font-size: 4em;
  }
`;

const ProjectDescription = styled.p`
  font-size: ${({theme}) => theme.fontSizes.body};
  color: black;
`;

const ProjectImage = styled.img`
  max-width: 654px;
  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    width: inherit;
  }
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
  
  padding: 0;
  margin: 0;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.li`
  font-size: ${({theme}) => theme.fontSizes.body};
  color: white;
  background-color: black;
  padding: 10px;
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
