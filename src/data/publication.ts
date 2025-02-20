export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2023",
    conference: "Technical Report",
    title: "GPT4All: An Ecosystem of Open Source Compressed Language Models",
    authors: "Yuvanesh Anand, et al.",
    paperUrl: "https://azkurs.org/pars_docs/refs/138/137480/137480.pdf",
    codeUrl: "https://github.com/nomic-ai/gpt4all",
    tldr: "Detailed technical report on GPT4All's development, architecture, and its journey from a model to an open-source ecosystem promoting LLM accessibility.",
    imageUrl: "/images/gpt4all.png",
  },
  {
    year: "2023",
    conference: "NLP-OSS @ EMNLP",
    title: "Towards Explainable and Accessible AI",
    authors: "Brandon Duderstadt, Yuvanesh Anand",
    paperUrl: "https://aclanthology.org/2023.nlposs-1.28/",
    codeUrl: "https://github.com/nomic-ai/gpt4all",
    tldr: "Overview of Nomic AI's efforts to address LLM accessibility and explainability challenges through GPT4All and Atlas initiatives.",
    award: "Invited Speaker",
    imageUrl: "/images/emnlp_2.png",
  },
];
