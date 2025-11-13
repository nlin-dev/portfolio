"use client";

import { motion } from "framer-motion";
import { projectsContent } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { staggerContainer } from "@/lib/motion";

export function ProjectsGrid() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-12"
    >
      {/* Header */}
      <div className="space-y-2">
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: 'var(--fg-primary)' }}
        >
          {projectsContent.title}
        </h1>
        <p
          className="text-base md:text-lg"
          style={{ color: 'var(--fg-muted)' }}
        >
          {projectsContent.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {projectsContent.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
