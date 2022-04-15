import React from "react";
import styled, { useTheme } from "styled-components";
import Heading from "../About/Heading";
import Stack from "../common/Stack";
import Triangle from "../icons/Triangle";
import ProjectsListItem, { ProjectsListItemProps } from "./ProjectsListItem";

const ProjectsListSeparatorContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-self: center;
  grid-gap: 0.3em;
  filter: drop-shadow(4px 0px 0px #000000);
`;

interface StyledTriangleProps {
  rotationTurn?: number;
}

const StyledTriangle = styled(Triangle)<StyledTriangleProps>`
  transform: rotate(${({ rotationTurn }) => `${rotationTurn || 0.25}turn`});
`;

const ProjectsListSeparator = () => {
  const theme = useTheme();

  return (
    <ProjectsListSeparatorContainer>
      <StyledTriangle fill={theme.colors[3]} rotationTurn={-0.25} />
      <StyledTriangle fill={theme.colors[3]} rotationTurn={-0.25} />
      <StyledTriangle fill={theme.colors[3]} rotationTurn={-0.25} />
      <StyledTriangle fill={theme.colors[8]} />
      <StyledTriangle fill={theme.colors[8]} />
      <StyledTriangle fill={theme.colors[8]} />
    </ProjectsListSeparatorContainer>
  );
};

const ProjectsList = styled(Stack)`
  display: grid;
  grid-gap: 2em;
  margin-top: 2em;
`;

const links = [
  {
    href: "#",
    imageSrc: "http://placekitten.com/15/15",
    name: "GitHub",
  },
  {
    href: "#",
    imageSrc: "http://placekitten.com/15/15",
    name: "Website",
  },
];
const projects: ProjectsListItemProps[] = [
  {
    title: "Drama Keeper",
    description: "Keep a record of the films watched",
    imageSrc: "http://placekitten.com/250/300",
    links,
  },
  {
    title: "Notes Project",
    description: "Notes-taking app. A fast and open-source alternative!",
    imageSrc: "http://placekitten.com/250/300",
    links: [links[0]],
  },
  {
    title: "Notes Project",
    description: "Notes-taking app. A fast and open-source alternative!",
    imageSrc: "http://placekitten.com/250/300",
    links: [links[0]],
  },
];

const Projects = () => {
  return (
    <div style={{}}>
      <Heading>Projects</Heading>
      <ProjectsList Separator={<ProjectsListSeparator />}>
        {projects.map((project) => (
          <ProjectsListItem
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            links={project.links}
          />
        ))}
      </ProjectsList>
    </div>
  );
};

export default Projects;
