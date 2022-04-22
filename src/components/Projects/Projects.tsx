import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled, { useTheme } from "styled-components";
import useProjectsList from "../../hooks/useProjectsList";
import Stack from "../common/Stack";
import Triangle from "../icons/Triangle";
import ProjectsListItem from "./ProjectsListItem";
import SectionLayout from "../Layout/SectionLayout";

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

const ProjectsListSeparator = styled.div`
  width: 300px;
  height: 1px;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.body};
`

const ProjectsList = styled(Stack)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: 2em;
`;

const Projects = () => {
  const projects = useProjectsList();
  const { t } = useTranslation();

  return (
    <SectionLayout title={t("Projects")}>
      <ProjectsList Separator={<ProjectsListSeparator />}>
        {projects.map((project, index) => (
          <ProjectsListItem
            key={`ProjectListItem-${project.title}-${index}`}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            links={project.links}
            tags={project.tags}
          />
        ))}
      </ProjectsList>
    </SectionLayout>
  );
};

export default Projects;
