"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavItem as NavItemType } from "@/content/home";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItemProps {
  item: NavItemType;
  collapsed: boolean;
}

export function NavItem({ item, collapsed }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;

  const content = (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors focus-ring group relative"
      )}
      style={{
        backgroundColor: isActive ? 'var(--bg-sidebar-elev)' : 'transparent',
        color: isActive ? 'var(--accent)' : 'var(--fg-muted)',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'var(--bg-sidebar-elev)';
          e.currentTarget.style.color = 'var(--fg-secondary)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--fg-muted)';
        }
      }}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
      {!collapsed && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium overflow-hidden whitespace-nowrap"
        >
          {item.label}
        </motion.span>
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}
