import React from "react";
import Image from "next/image";
import classnames from "classnames";
import styles from "./index.module.css";
import { Skill, SkillCategory } from "../../data/skills/types";
import TitleDivider from "../TitleDivider";

interface Props {
  categories: SkillCategory[];
  skills: Skill[];
}

const Skills = ({ skills, categories }: Props) => {
  return (
    <section>
      <TitleDivider size="w-1/12">
        <h2 id="skills" className="text-4xl">
          Skills
        </h2>
      </TitleDivider>
      <TitleDivider size="w-1/12 invisible">
        <h3 className="text-lg text-gray-400 font-secondary">
          A non-exhaustive list of technologies I use for my projects
        </h3>
      </TitleDivider>
      {categories.map((category) => {
        const skillsOfCategory = skills.filter(
          (skill) => skill.category === category.id
        );
        return (
          <section key={category.id}>
            <TitleDivider size="w-3/12">
              <h4 className="text-center mt-4 text-3xl font-secondary">
                {category.name}
              </h4>
            </TitleDivider>

            <div className="flex flex-wrap">
              {skillsOfCategory.map((skill) => (
                <div
                  className={classnames(
                    "flex flex-col items-center justify-center h-24 w-24 mr-4 mt-6 relative",
                    styles["technology-tile"]
                  )}
                  key={skill.id}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      objectFit="contain"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="block text-center text-xs text-gray-400 font-secondary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Skills;
