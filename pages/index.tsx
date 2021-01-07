import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import matter from "gray-matter";

import path from "path";
import fs from "fs";
import Hero from "../components/Hero";
import { SkillCategory, Skill } from "../data/skills/types";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Project } from "../data/projects/types";
import AboutMe from "../components/AboutMe";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

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
  ) as Skill[];

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
      const technologies_used = data.technologies_used.split(",");
      let project = ({
        ...data,
        technologies_used,
        markdownContent,
      } as unknown) as Project;

      project.technologies = project.technologies_used.map((techId) =>
        skills.find((s) => s.id === techId)
      );

      return project;
    });

  return { props: { categories, skills, projects } };
};

const metaTitle = "Maximilian Torggler's Website";
const metaDescription = `I am a Fullstack Web Developer with a focus on React, TypeScript, and Serverless technologies. Follow my journey into the wild desert of modern Fullstack development.`;
const ogImageUrl = "https://maximilian-torggler.dev/og_image.jpg";

export default function Home({
  skills,
  categories,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Hero />
        <div className="max-w-screen-md mx-auto mt-12 p-2 sm:p-0">
          <Skills skills={skills} categories={categories} />
          <Projects projects={projects} />
          <AboutMe />
          <HireMe />
        </div>
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}
