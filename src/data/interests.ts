import type { IconType } from "react-icons";
import { FaBookOpen, FaCoffee, FaGamepad, FaPlane } from "react-icons/fa";

export type InterestItem = {
  id: string;
  label: string;
  icon: IconType;
};

export const interests: InterestItem[] = [
  { id: "gaming", label: "Gaming", icon: FaGamepad },
  { id: "reading", label: "Reading", icon: FaBookOpen },
  { id: "coffee", label: "Coffee", icon: FaCoffee },
  { id: "traveling", label: "Traveling", icon: FaPlane },
];
