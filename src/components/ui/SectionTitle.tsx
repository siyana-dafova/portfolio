import { cn } from "@/lib/utils";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "section-title relative pb-5 text-2xl font-bold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
