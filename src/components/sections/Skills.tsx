import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="flex w-full flex-col items-start gap-8">
        <SectionTitle>Skills</SectionTitle>

        <div className="flex w-full flex-col gap-5">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="w-full rounded-2xl border border-border bg-background-secondary p-5 md:p-6"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="pt-0.5 text-sm font-bold tracking-widest text-primary">
                  {category.index}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {category.items.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <li
                      key={skill.id}
                      className="group flex flex-col items-center gap-1.5 rounded-lg border border-border bg-surface px-2 py-2.5 transition-colors hover:border-primary/50 hover:bg-surface-hover"
                    >
                      <SkillIcon
                        size={18}
                        className="text-muted transition-colors group-hover:text-primary"
                        aria-hidden
                      />
                      <span className="text-xs font-medium text-foreground">
                        {skill.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
