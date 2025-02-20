export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jun 2022 - Aug 2023",
    title: "Software Engineer",
    company: "Nomic",
    description: "Worked on evelopment of Atlas Platform for data visualization, constructed GPT4ALL data pipeline, and steered the open-source project to 60K+ GitHub stars. Worked on migrating enterprise web apps to Next.js",
    companyUrl: "https://nomic.ai",
  },
  {
    date: "Feb 2023 - Present",
    title: "Co-Founder",
    company: "Modet, LLC",
    description: "Spearheaded product development of customized timepieces, managed end-to-end manufacturing processes, and led a self-funded startup to build a sustainable products business",
    // companyUrl: "https://modet.com",
  }
];
