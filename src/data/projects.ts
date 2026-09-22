import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { profile } from "@/data/profile";

export type ProjectTag = {
  id: string;
  label: string;
  icon: IconType;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    index: "01",
    title: "Personal Portfolio",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS, featuring a two-panel layout, themed UI, and dedicated sections for resume, skills, and contact.",
    tags: [
      { id: "nextjs", label: "Next.js", icon: SiNextdotjs },
      { id: "react", label: "React", icon: SiReact },
      { id: "typescript", label: "TypeScript", icon: SiTypescript },
      { id: "tailwind", label: "Tailwind", icon: SiTailwindcss },
    ],
    githubUrl: `${profile.github}/portfolio`,
  },
  {
    id: "wordpress-theme",
    index: "02",
    title: "Custom WordPress Theme",
    description:
      "A custom WordPress theme with reusable templates, content-driven pages, and a responsive layout tailored for a marketing website.",
    tags: [
      { id: "wordpress", label: "WordPress", icon: SiWordpress },
      { id: "php", label: "PHP", icon: SiPhp },
      { id: "tailwind", label: "Tailwind", icon: SiTailwindcss },
    ],
    githubUrl: `${profile.github}/wordpress-theme`,
  },
  {
    id: "react-dashboard",
    index: "03",
    title: "React Dashboard",
    description:
      "A dashboard UI with reusable components, type-safe data views, and a consistent design system for everyday product workflows.",
    tags: [
      { id: "react", label: "React", icon: SiReact },
      { id: "typescript", label: "TypeScript", icon: SiTypescript },
      { id: "tailwind", label: "Tailwind", icon: SiTailwindcss },
    ],
    githubUrl: `${profile.github}/react-dashboard`,
  },
];
