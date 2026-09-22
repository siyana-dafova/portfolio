import type { IconType } from "react-icons";
import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export type SkillItem = {
  id: string;
  label: string;
  icon: IconType;
};

export type SkillCategory = {
  id: string;
  index: string;
  title: string;
  description: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    description:
      "Type-safe interfaces, reusable components, and modern app architecture.",
    items: [
      { id: "react", label: "React", icon: SiReact },
      { id: "nextjs", label: "Next.js", icon: SiNextdotjs },
      { id: "typescript", label: "TypeScript", icon: SiTypescript },
      { id: "javascript", label: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    id: "wordpress",
    index: "02",
    title: "WordPress",
    description: "Custom themes, backend logic, and content-driven sites.",
    items: [
      { id: "wordpress", label: "WordPress", icon: SiWordpress },
      { id: "php", label: "PHP", icon: SiPhp },
      { id: "mysql", label: "MySQL", icon: SiMysql },
    ],
  },
  {
    id: "ui",
    index: "03",
    title: "UI & Design",
    description:
      "Responsive layouts, visual consistency, and design-to-code workflow.",
    items: [
      { id: "tailwind", label: "Tailwind", icon: SiTailwindcss },
      { id: "html", label: "HTML", icon: SiHtml5 },
      { id: "css", label: "CSS", icon: SiCss },
      { id: "figma", label: "Figma", icon: SiFigma },
    ],
  },
];

export const skills: SkillItem[] = skillCategories.flatMap(
  (category) => category.items,
);
