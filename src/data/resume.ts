export type TimelineRole = {
  id: string;
  title: string;
  period?: string;
  description?: string[];
};

export type TimelineItem = {
  id: string;
  title: string;
  organization?: string;
  period: string;
  location?: string;
  description?: string[];
  roles?: TimelineRole[];
};

export const experience: TimelineItem[] = [
  {
    id: "exp-1",
    title: "iRocketAD (formerly LuckyLabzAD)",
    period: "Apr 2016 — Jul 2026",
    location: "Varna, Bulgaria",
    roles: [
      {
        id: "exp-1-frontend",
        title: "Frontend Developer",
        description: [
          "Developed and maintained a large-scale frontend application using Next.js 15,React 19, and TypeScript, leveraging SSR for improved performance and SEO.",
          "Implemented responsive UI with Tailwind CSS and Chakra UI for consistent and visually appealing design.",
          "Built reusable components and hooks to enhance code reusability and maintainability.",
          "Implemented multilingual user experiences using next-intl.",
          "Integrated GraphQL APIs with Apollo Client, focusing on efficient data fetching and type safety.",
          "Collaborated closely with designers and backend teams in an Agile/Scrum environment within an international team.",
          "Optimized website performance and SEO by implementing best practices and performance optimization techniques.",
          "Monitored frontend performance and user issues using Sentry.",
        ],
      },
      {
        id: "exp-1-wordpress",
        title: "WordPress Developer",
        description: [
          "Developed and maintained a custom, in-house WordPress theme built with Laravel, applying OOP principles and the MVC architecture.",
          "Developed frontend and backend functionality using PHP, HTML5, CSS3, JavaScript, and Bootstrap 4.",
          "Integrated third-party services and plugins to enhance website functionality and user experience.",
          "Optimized website performance and SEO by implementing best practices and performance optimization techniques.",
          "Collaborated with the design team to ensure the theme's visual consistency and user interface design.",
          "Maintained and updated the theme's codebase to ensure compatibility with the latest WordPress versions and security updates.",
          "Provided technical support to the content team by troubleshooting issues and providing solutions to content-related questions.",
          "Participated in the planning and execution of website redesign projects to improve user experience and functionality.",
          "Worked closely with the marketing team to understand user needs and implement features that enhance the website's usability and engagement.",
        ],
      },
    ],
  },
  {
    id: "exp-2",
    title: "Casualino JSC",
    period: "Oct 2015 — Apr 2016",
    location: "Varna, Bulgaria",
    roles: [
      {
        id: "exp-2-developer",
        title: "Developer",
        description: [
          "Assisted in the development and maintenance of the company website using modern web technologies",
          "Implemented website features, fixed bugs, and improved overall user experience and responsiveness",
          "Performed game testing by identifying bugs, gameplay issues, and performance problems",
          "Documented and reported issues to the development team with detailed reproduction steps.",
          "Participated in quality assurance processes to help improve product stability and user satisfaction.",
        ],
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    id: "edu-1",
    title: "Master’s degree in Computer Science",
    organization: "University of Economics Varna",
    period: "2014 — 2015",
    location: "Varna, Bulgaria",
  },
  {
    id: "edu-2",
    title: "Bachelor’s degree in Computer Science",
    organization: "University of Economics Varna",
    period: "2010 — 2014",
    location: "Varna, Bulgaria",
  },
  {
    id: "edu-3",
    title: "High School 'St. Kliment Ohridski'",
    period: "2006 — 2010",
    location: "Varna, Bulgaria",
  },
];
