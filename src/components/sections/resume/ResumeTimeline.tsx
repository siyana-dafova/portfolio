import React from "react";
import type { TimelineItem, TimelineRole } from "@/data/resume";

type ResumeTimelineProps = {
  heading: string;
  items: TimelineItem[];
};

const DescriptionList = ({
  id,
  description,
}: {
  id: string;
  description?: string[];
}) => {
  if (!description || description.length === 0) {
    return null;
  }

  return (
    <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 text-sm text-muted">
      {description.map((line, index) => (
        <li key={`${id}-${index}`}>{line}</li>
      ))}
    </ul>
  );
};

const RoleTimeline = ({ roles }: { roles: TimelineRole[] }) => {
  return (
    <ol className="relative mt-4 ml-1 flex w-full flex-col border-l border-border">
      {roles.map((role) => (
        <li key={role.id} className="relative pb-6 pl-6 last:pb-0">
          <span
            className="absolute top-1.5 -left-1 size-2 rounded-full bg-primary ring-4 ring-surface"
            aria-hidden
          />

          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h5 className="font-bold text-foreground">{role.title}</h5>
              {role.period ? (
                <p className="text-sm text-primary">{role.period}</p>
              ) : null}
            </div>

            <DescriptionList id={role.id} description={role.description} />
          </div>
        </li>
      ))}
    </ol>
  );
};

const ResumeTimeline = ({ heading, items }: ResumeTimelineProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h3 className="font-bold text-foreground">{heading}</h3>

      <ol className="relative ml-1 flex w-full flex-col border-l border-border">
        {items.map((item) => {
          const meta = [item.organization, item.location]
            .filter(Boolean)
            .join(" · ");

          return (
            <li key={item.id} className="relative pb-8 pl-6 last:pb-0">
              <span
                className="absolute top-1.5 -left-1.25 size-2.5 rounded-full bg-primary ring-4 ring-surface"
                aria-hidden
              />

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary">{item.period}</p>
                </div>

                {meta ? <p className="text-sm text-muted">{meta}</p> : null}

                <DescriptionList id={item.id} description={item.description} />

                {item.roles && item.roles.length > 0 ? (
                  <RoleTimeline roles={item.roles} />
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ResumeTimeline;
