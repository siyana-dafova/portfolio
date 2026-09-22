import React from "react";
import { interests } from "@/data/interests";
import { skills } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

const HeroContent = () => {
  return (
    <div className="flex w-full flex-col items-start gap-8">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2">
        <p className="text-muted">
          I&apos;m a frontend developer with over 10 years of experience
          building web applications people use every day. I care about clean,
          maintainable code and interfaces that stay fast, accessible, and easy
          to work with as they grow.
        </p>

        <div className="flex flex-col items-start gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-subtle">Location:</span>
            <span className="text-foreground">Varna, Bulgaria</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-subtle">Language:</span>
            <span className="text-foreground">English, Bulgarian</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-subtle">Skills:</span>
            <div className="flex flex-wrap items-center gap-2">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <SkillIcon
                    key={skill.id}
                    size={20}
                    aria-label={skill.label}
                    title={skill.label}
                    className="text-muted transition-colors hover:text-primary"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>What I Do</SectionTitle>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-bold text-foreground">Frontend Development</h3>
          <p className="text-sm text-muted">
            I build responsive, type-safe web applications with React, Next.js,
            and Tailwind CSS — from reusable components to production-ready UIs.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-bold text-foreground">WordPress Development</h3>
          <p className="text-sm text-muted">
            I create custom WordPress sites with PHP and MySQL, including
            themes, content-driven layouts, and backend logic that editors can
            use.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-bold text-foreground">UI Development</h3>
          <p className="text-sm text-muted">
            I turn Figma designs into clean, accessible interfaces with React
            and Tailwind CSS, keeping layouts consistent across breakpoints.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-bold text-foreground">Performance</h3>
          <p className="text-sm text-muted">
            I tune SEO, Lighthouse, and Core Web Vitals so pages load faster,
            rank better, and stay smooth for real users.
          </p>
        </div>
      </div>

      <SectionTitle>Interests</SectionTitle>
      <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
        {interests.map((interest) => {
          const InterestIcon = interest.icon;

          return (
            <li
              key={interest.id}
              className="group flex flex-col items-center gap-1.5 rounded-lg border border-border bg-background-secondary px-2 py-2.5 transition-colors hover:border-primary/50 hover:bg-surface-hover"
            >
              <InterestIcon
                size={18}
                className="text-muted transition-colors group-hover:text-primary"
                aria-hidden
              />
              <span className="text-xs font-medium text-foreground">
                {interest.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroContent;
