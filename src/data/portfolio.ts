export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "GPT4ALL",
    description: "An open-source ecosystem of compressed language models trained on diverse data including code, narratives, and dialogues. The project focuses on making LLMs accessible and CPU-friendly, garnering over 60K GitHub stars and significant academic recognition with 100+ citations in its opening year.",
    technologies: ["Python", "TypeScript", "Next.js", "Machine Learning", "PyTorch"],
    projectUrl: "https://gpt4all.io",
    codeUrl: "https://github.com/nomic-ai/gpt4all",
    // imageUrl: "https://raw.githubusercontent.com/nomic-ai/gpt4all/main/gpt4all-banner.png",
  }
];
