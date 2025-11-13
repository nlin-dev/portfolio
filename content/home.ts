import { Home, Drill, MessageSquareMore, Dumbbell, Github, Linkedin } from "lucide-react";
import { XIcon } from "@/components/ui/icons";
import { LucideIcon } from "lucide-react";

/**
 * Type-safe content schema for the Home page
 * All strings are placeholders - replace with real content later
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
}

export interface HomeContent {
  hero: {
    name: string;
    introParagraphs: string[];
  };
  about: {
    paragraphs: string[];
    emphasizedPhrases: string[];
  };
  navigation: NavGroup[];
  socialLinks: SocialLink[];
}

export const homeContent: HomeContent = {
  hero: {
    name: "Nicholas Lin",
    introParagraphs: [
      "I am the cofounder and CEO of Guava, We're building AI agents to fix broken prior authorization systems, one of the biggest cost and compliance bottlenecks in healthcare. Guava automates the entire prior authorization workflow without needing to access EHR, built specifically with the tight compliance and governance restrictions enterprise health systems need to have in mind.",
      "Before this I studied data science and computer science at NYU before getting my master's at Columbia. During this time, I focused on building meaningful tools that made a real impact such as predictive models for educational equity to ML platforms to help people get advanced insights on their insurance options.",
    ],
  },
  about: {
    paragraphs: [
      "Outside of work, I'm a competitive powerlifter and coach, artist, MMA fighter, and writer",
    ],
    emphasizedPhrases: [
      "competitive powerlifter",
      "coach",
      "artist",
      "MMA fighter",
      "writer",
    ],
  },
  navigation: [
    {
      title: "Navigation",
      items: [
        {
          id: "home",
          label: "Home",
          href: "/",
          icon: Home,
        },
        {
          id: "projects",
          label: "Projects",
          href: "/projects",
          icon: Drill,
        },
        {
          id: "blog",
          label: "Blog",
          href: "/blog",
          icon: MessageSquareMore,
        },
        {
          id: "powerlifting",
          label: "Powerlifting",
          href: "/powerlifting",
          icon: Dumbbell,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          id: "twitter",
          label: "X (Twitter)",
          href: "https://x.com/braregorn",
          icon: XIcon,
        },
        {
          id: "github",
          label: "GitHub",
          href: "https://github.com/nlin-dev",
          icon: Github,
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          href: "https://linkedin.com/in/nicholxslin",
          icon: Linkedin,
        },
      ],
    },
  ],
  socialLinks: [
    {
      id: "twitter",
      label: "X (Twitter)",
      href: "https://x.com/braregorn",
      icon: XIcon,
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/nlin-dev",
      icon: Github,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/nicholxslin",
      icon: Linkedin,
    },
  ],
};
