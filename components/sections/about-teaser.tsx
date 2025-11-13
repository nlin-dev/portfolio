"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/content/home";
import { staggerContainer, slideUpVariants } from "@/lib/motion";

export function AboutTeaser() {
  // Helper function to highlight emphasized phrases
  const renderParagraphWithEmphasis = (paragraph: string) => {
    const result = paragraph;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Find and replace emphasized phrases
    homeContent.about.emphasizedPhrases.forEach((phrase) => {
      const index = result.indexOf(phrase, lastIndex);
      if (index !== -1) {
        // Add text before the phrase
        if (index > lastIndex) {
          parts.push(result.substring(lastIndex, index));
        }
        // Add the emphasized phrase
        parts.push(
          <strong key={`${phrase}-${index}`} className="font-semibold" style={{ color: 'var(--fg-primary)' }}>
            {phrase}
          </strong>
        );
        lastIndex = index + phrase.length;
      }
    });

    // Add remaining text
    if (lastIndex < result.length) {
      parts.push(result.substring(lastIndex));
    }

    return parts.length > 0 ? parts : paragraph;
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="mb-16 lg:mb-20"
    >
      <div className="space-y-6">
        {homeContent.about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={slideUpVariants}
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--fg-muted)' }}
          >
            {renderParagraphWithEmphasis(paragraph)}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
