export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "resume",
    label: "Resume",
    href: "#resume",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];
