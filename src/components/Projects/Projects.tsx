import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import useProjectsList from "../../hooks/useProjectsList";
import Stack from "../common/Stack";
import ProjectsListItem from "./ProjectsListItem";
import SectionLayout from "../Layout/SectionLayout";

const ProjectsListSeparator = styled.div`
  width: 53%;
  height: 1px;
  background-color: black;
  opacity: 0.2;
`;

const ProjectsList = styled(Stack)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
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
