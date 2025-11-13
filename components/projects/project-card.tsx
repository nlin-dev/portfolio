"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectItem } from "@/content/projects";
import { slideUpVariants } from "@/lib/motion";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, year, imageUrl, isPlaceholder } = project;

  return (
    <motion.article
      variants={slideUpVariants}
      className="group relative"
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
        style={{
          boxShadow: '0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-0.25rem)';
          e.currentTarget.style.boxShadow = '0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.4), 0 0.25rem 0.375rem -0.25rem rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.3)';
        }}
      >
        {/* Image Area */}
        <div
          className="relative w-full bg-card"
          style={{
            aspectRatio: '16 / 10',
            backgroundColor: 'var(--bg-sidebar)',
            border: '0.1875rem solid #1A1A1A',
          }}
        >
          {isPlaceholder ? (
            <div
              className="w-full h-full"
              style={{
                background: 'repeating-linear-gradient(45deg, var(--bg-sidebar), var(--bg-sidebar) 0.625rem, var(--bg-sidebar-elev) 0.625rem, var(--bg-sidebar-elev) 1.25rem)',
              }}
              aria-label="Placeholder for upcoming project"
            />
          ) : imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-sidebar)' }}
            >
              <span style={{ color: 'var(--fg-subtle)' }}>No image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className="p-6"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          <h3
            className="text-lg font-semibold"
            style={{ color: 'var(--fg-primary)' }}
          >
            {title}
          </h3>
          {year && (
            <p
              className="text-sm mt-1"
              style={{ color: 'var(--fg-muted)' }}
            >
              {year}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
