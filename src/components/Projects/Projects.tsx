import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled, { useTheme } from "styled-components";
import useProjectsList from "../../hooks/useProjectsList";
import Heading from "../About/Heading";
import Stack from "../common/Stack";
import Triangle from "../icons/Triangle";
import ProjectsListItem from "./ProjectsListItem";

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

const Projects = () => {
  const projects = useProjectsList();
  const { t } = useTranslation();

  return (
    <div id="Projects">
      <Heading>{t("Projects")}</Heading>
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
