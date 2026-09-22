import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
// import Button from "@/components/ui/Button";
// import { cn } from "@/lib/utils";
// import { projects } from "@/data/projects";
// import { FaGithub } from "react-icons/fa";
// import { ExternalLinkIcon } from "lucide-react";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="flex w-full flex-col items-start gap-8">
        <SectionTitle>Projects</SectionTitle>

        <article className="w-full rounded-2xl border border-border bg-background-secondary p-5 md:p-6">
          <span className="text-sm font-bold tracking-widest text-primary">
            SOON
          </span>
          <h3 className="mt-2 font-bold text-foreground">Coming soon</h3>
          <p className="mt-1 text-sm text-muted">
            Selected projects will show up here shortly.
          </p>
        </article>

        {/*
        <div className="flex w-full flex-col gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="w-full rounded-2xl border border-border bg-background-secondary p-5 md:p-6"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="pt-0.5 text-sm font-bold tracking-widest text-primary">
                  {project.index}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {project.description}
                  </p>
                </div>
              </div>

              <ul
                className={cn(
                  "flex flex-wrap gap-2",
                  (project.githubUrl || project.demoUrl) && "mb-5",
                )}
              >
                {project.tags.map((tag) => {
                  const TagIcon = tag.icon;

                  return (
                    <li
                      key={tag.id}
                      className="group flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 transition-colors hover:border-primary/50 hover:bg-surface-hover"
                    >
                      <TagIcon
                        size={14}
                        className="text-muted transition-colors group-hover:text-primary"
                        aria-hidden
                      />
                      <span className="text-xs font-medium text-foreground">
                        {tag.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {project.githubUrl || project.demoUrl ? (
                <div className="flex flex-wrap items-center gap-3">
                  {project.githubUrl ? (
                    <Button
                      href={project.githubUrl}
                      variant="outline"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2 h-4 w-4" aria-hidden />
                      GitHub
                    </Button>
                  ) : null}

                  {project.demoUrl ? (
                    <Button
                      href={project.demoUrl}
                      variant="outline"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon className="mr-2 h-4 w-4" aria-hidden />
                      Live Demo
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
        */}
      </div>
    </Section>
  );
};

export default Projects;
