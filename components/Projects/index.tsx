import React from "react";
import { Project } from "../../data/projects/types";
import TitleDivider from "../TitleDivider";
import ProjectTile from "./ProjectTile";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <section className="mt-12">
      <TitleDivider size="w-1/12">
        <h2 className="text-4xl">Projects</h2>
      </TitleDivider>
      <TitleDivider size="w-1/12 invisible">
        <h3 className="text-lg text-gray-400 font-secondary">
          A sample of the work I've done.
        </h3>
      </TitleDivider>
      <div className="p-4 mt-4">
        {projects.map((project, i) => (
          <ProjectTile key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
