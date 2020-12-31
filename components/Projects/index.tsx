import React from "react";
import { Project } from "../../data/projects/types";
import TitleDivider from "../TitleDivider";

interface Props {
  projects: Project[];
}

const Projects = ({}: Props) => {
  return (
    <section className="mt-12">
      <TitleDivider size="w-1/12">
        <h2 className="text-4xl">Projects</h2>
      </TitleDivider>
      <TitleDivider size="w-1/12 invisible">
        <h3 className="text-lg text-gray-400 font-secondary">
          A sample of the work I've done. Some projects can't be shown due to
          client agreements.
        </h3>
      </TitleDivider>
    </section>
  );
};

export default Projects;
