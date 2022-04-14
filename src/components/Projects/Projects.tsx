import React from "react";
import styled from "styled-components";
import Heading from "../About/Heading";
import ProjectListItem, { ProjectsListItemProps } from "./ProjectsListItem";

const ProjectsList = styled.div`
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
];

// Stack overflow for to do a grid separator https://stackoverflow.com/questions/54791658/vertical-divider-as-pseudo-element-with-css-grids
const Projects = () => {
  return (
    <div style={{}}>
      <Heading>Projects</Heading>
      <ProjectsList>
        {projects.map((project) => (
          <ProjectListItem
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
