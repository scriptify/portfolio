import React from "react";
import Image from "next/image";
import { Project } from "../../../data/projects/types";

interface Props {
  project: Project;
}

const ProjectTile = ({ project }: Props) => {
  return (
    <div className="bg-white rounded-lg p-4 flex mb-2">
      <div className="w-1/6 relative mr-4" style={{ maxWidth: "60px" }}>
        <Image src={project.icon} layout="fill" objectFit="contain" />
      </div>
      <div className="w-5/6">
        <a
          href={project.website}
          target="_blank"
          className="font-secondary md:text-xl text-gray-600 flex items-center"
        >
          <div>{project.name}</div>
          <div className="ml-1">
            <Image src="/icon_link.png" height={15} width={15} />
          </div>
        </a>
        <h3 className="text-sm md:text-base font-secondary text-gray-400">
          {project.short_description}
        </h3>
        <ul className="flex flex-wrap mt-2" style={{ filter: "grayscale(1)" }}>
          {project.technologies?.map((technology) => (
            <li key={technology.id} className="mr-2 mt-1 w-4 h-4 relative">
              <Image src={technology.icon} layout="fill" objectFit="contain" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectTile;
