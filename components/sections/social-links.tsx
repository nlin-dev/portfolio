"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { homeContent } from "@/content/home";
import { staggerContainer, slideUpVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SocialLinks() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="border-t pt-8 mt-16 lg:mt-20"
      style={{ borderColor: 'var(--divider)' }}
    >
      <motion.div
        variants={slideUpVariants}
        className="flex flex-wrap items-center gap-4"
      >
        {homeContent.socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="transition-colors focus-ring rounded-lg p-2 -ml-2"
              style={{ color: 'var(--fg-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--fg-muted)';
              }}
            >
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
