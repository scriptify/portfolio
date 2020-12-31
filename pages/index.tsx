import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import fs from "fs";
import Hero from "../components/Hero";
import { SkillCategory, Skill } from "../data/skills/types";
import Skills from "../components/Skills";

interface StaticDataType {
  categories: SkillCategory[];
  skills: Skill[];
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

  return { props: { categories, skills } };
};

export default function Home({
  skills,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Hero />
      <div className="max-w-screen-md mx-auto mt-12 p-2 sm:p-0">
        <Skills skills={skills} categories={categories} />
      </div>
    </div>
  );
}
