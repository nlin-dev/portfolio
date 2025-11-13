/**
 * Type-safe content schema for the Projects page
 * All strings are placeholders - replace with real content later
 */

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  description?: string;
  year?: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
}

export interface ProjectsContent {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
}

export const projectsContent: ProjectsContent = {
  title: "Projects",
  subtitle: "What I've worked on before and why I spent my time working on it.",
  projects: [
    {
      id: "guava-medical",
      slug: "guava",
      title: "Guava",
      imageUrl: "/images/projects-guava.png",
    },
    {
      id: "tetrisly-design-system",
      slug: "tldr-health",
      title: "TLDR Health",
      imageUrl: "/images/projects-tldr.png",
    },
    {
      id: "deep-learning-options",
      slug: "options",
      title: "Deep Learning for Options Valuation",
      imageUrl: "/images/projects-options.png",
    },
  ],
};
