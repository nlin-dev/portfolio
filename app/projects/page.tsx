import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects - Nicholas Lin",
  description: "What I've worked on before and why I spent my time working on it.",
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
