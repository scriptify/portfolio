import { GetStaticProps, InferGetStaticPropsType } from "next";
import matter from "gray-matter";

import path from "path";
import fs from "fs";
import Hero from "../components/Hero";
import { SkillCategory, Skill } from "../data/skills/types";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Project } from "../data/projects/types";

interface StaticDataType {
  categories: SkillCategory[];
  skills: Skill[];
  projects: Project[];
}

export const getStaticProps: GetStaticProps<StaticDataType> = async () => {
  const categories = JSON.parse(
    fs
      .readFileSync(path.resolve(process.cwd(), "data/skills/categories.json"))
      .toString()
  );
  const skills = JSON.parse(
    fs
      .readFileSync(
        path.resolve(process.cwd(), "data/skills/technologies.json")
      )
      .toString()
  );

  const projectsFolder = path.resolve(process.cwd(), "data/projects");
  const projects = fs
    .readdirSync(projectsFolder)
    .map((folderItem) => path.join(projectsFolder, folderItem))
    .filter(
      (folderItem) =>
        !fs.statSync(folderItem).isDirectory() && folderItem.endsWith(".md")
    )
    .map((markdownFile) => {
      const fileContent = fs.readFileSync(markdownFile).toString();
      const { content: markdownContent, data } = matter(fileContent);
      return ({
        ...data,
        markdownContent,
      } as unknown) as Project;
    });

  return { props: { categories, skills, projects } };
};

export default function Home({
  skills,
  categories,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ projects });
  return (
    <div>
      <Hero />
      <div className="max-w-screen-md mx-auto mt-12 p-2 sm:p-0">
        <Skills skills={skills} categories={categories} />
        <Projects projects={projects} />
      </div>
    </div>
  );
}
