import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
  status?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "pulse",
    index: "01",
    title: "Pulse",
    status: "In development",
    description:
      "Fitness tracker for workouts, progress, and daily goals. The project is in development: the dashboard shows weekly stats, and pages for workouts, goals, reports, and settings are already in place.",
    tags: [
      { id: "nextjs", label: "Next.js", icon: SiNextdotjs },
      { id: "react", label: "React", icon: SiReact },
      { id: "typescript", label: "TypeScript", icon: SiTypescript },
      { id: "tailwind", label: "Tailwind", icon: SiTailwindcss },
    ],
    githubUrl: "https://github.com/siyana-dafova/pulse-nextjs",
  },
];
