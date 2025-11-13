import { Transition, Variants } from "framer-motion";

/**
 * Motion configuration for consistent animations across the app
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Spring configurations
export const spring = {
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  },
  smooth: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
  gentle: {
    type: "spring" as const,
    stiffness: 120,
    damping: 14,
  },
} satisfies Record<string, Transition>;

// Layout animation configs
export const layoutTransition = {
  layout: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
  },
};

// Fade variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: spring.smooth,
  },
};

// Slide up variants
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: "1.25rem" },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.smooth,
  },
};

// Stagger children container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Sidebar expand/collapse variants
export const sidebarVariants = {
  expanded: {
    width: "15rem",
    transition: spring.snappy,
  },
  collapsed: {
    width: "5rem",
    transition: spring.snappy,
  },
};

// Mobile sheet variants
export const sheetVariants: Variants = {
  hidden: {
    x: "100%",
    transition: spring.snappy,
  },
  visible: {
    x: 0,
    transition: spring.snappy,
  },
};

// Utility to get transition based on reduced motion preference
export const getTransition = (transition: Transition): Transition => {
  if (prefersReducedMotion()) {
    return { duration: 0 };
  }
  return transition;
};

// Utility to conditionally apply animation variants
export const getVariants = <T extends Variants>(variants: T): T | undefined => {
  if (prefersReducedMotion()) {
    return undefined;
  }
  return variants;
};
