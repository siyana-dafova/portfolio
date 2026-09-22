import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export type SocialItem = {
  id: string;
  label: string;
  href: string;
  icon: IconType;
};

export const socials: SocialItem[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.github,
    icon: FaGithub,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
];
