import React from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { education, experience } from "@/data/resume";
import ResumeTimeline from "./ResumeTimeline";

const Resume = () => {
  return (
    <Section id="resume">
      <div className="flex w-full flex-col items-start gap-8">
        <SectionTitle>Resume</SectionTitle>
        <ResumeTimeline heading="Experience" items={experience} />
        <ResumeTimeline heading="Education" items={education} />
      </div>
    </Section>
  );
};

export default Resume;
