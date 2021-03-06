import { useTranslation } from "react-i18next";
import { ProjectsListItemProps } from "../components/Projects/ProjectsListItem";
// @ts-ignore
import projectDramaKeeperImage from "../images/drama-keeper-showcase.png";
// @ts-ignore
import projectNotesProjectImage from "../images/notes-project-showcase.png";

const useProjectsList = (): ProjectsListItemProps[] => {
  const { t } = useTranslation("", { keyPrefix: "projects" });

  return [
    {
      title: "Drama Keeper",
      description: t("drama-keeper.description"),
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
      tags: ["React.js", "TypeScript", "Express", "MongoDB"],
    },
    {
      title: "Notes Project",
      description: t("notes-project.description"),
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
      tags: ["React.js", "TypeScript", "GraphQL", "MySQL", "Apollo"],
    },
  ];
};

export default useProjectsList;
