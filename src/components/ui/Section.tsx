import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {children}
    </section>
  );
};

export default Section;
