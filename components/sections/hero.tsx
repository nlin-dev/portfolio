"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/content/home";
import { staggerContainer, slideUpVariants } from "@/lib/motion";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mb-16 lg:mb-20"
    >
      <div className="space-y-6">
        {homeContent.hero.introParagraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={slideUpVariants}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--fg-secondary)' }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
