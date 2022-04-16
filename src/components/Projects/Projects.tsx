import React from "react";
import styled, { useTheme } from "styled-components";
import Heading from "../About/Heading";
import Stack from "../common/Stack";
import Triangle from "../icons/Triangle";
import ProjectsListItem, { ProjectsListItemProps } from "./ProjectsListItem";
// @ts-ignore
import projectDramaKeeperImage from "../../images/project-drama-keeper.png";
// @ts-ignore
import projectNotesProjectImage from "../../images/project-notes-project.png";

const ProjectsListSeparatorContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-self: center;
  grid-gap: 0.3em;
  filter: drop-shadow(4px 0px 0px #000000);
`;

interface StyledTriangleProps {
  rotationturn?: number;
}

const StyledTriangle = styled(Triangle)<StyledTriangleProps>`
  transform: rotate(${({ rotationturn }) => `${rotationturn || 0.25}turn`});
`;

const ProjectsListSeparator = () => {
  const theme = useTheme();

  return (
    <ProjectsListSeparatorContainer>
      <StyledTriangle fill={theme.colors[3]} rotationturn={-0.25} />
      <StyledTriangle fill={theme.colors[3]} rotationturn={-0.25} />
      <StyledTriangle fill={theme.colors[3]} rotationturn={-0.25} />
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

const projects: ProjectsListItemProps[] = [
  {
    title: "Drama Keeper",
    description: "Keep a record of the films watched",
    imageSrc: projectDramaKeeperImage,
    links: [
      {
        href: "https://github.com/Ruberoni/drama-keeper",
        name: "GitHub",
      },
      {
        href: "http://drama-keeper-client.vercel.app/",
        name: "Website",
      },
    ],
  },
  {
    title: "Notes Project",
    description: "Notes-taking app. A fast and open-source alternative!",
    imageSrc: projectNotesProjectImage,
    links: [
      {
        href: "https://github.com/Ruberoni/notes-project",
        name: "GitHub",
      },
      {
        href: "https://notes-project-1.netlify.app/",
        name: "Website",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div id="Projects">
      <Heading>Projects</Heading>
      <ProjectsList Separator={<ProjectsListSeparator />}>
        {projects.map((project, index) => (
          <ProjectsListItem
            key={`ProjectListItem-${project.title}-${index}`}
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
