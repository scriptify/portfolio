import { Skill } from "../skills/types";

export interface Project {
  name: string;
  short_description: string;
  website: string;
  type: string;
  icon: string;
  technologies_used: string[];
  technologies?: Skill[];
  markdownDescription: string;
}
