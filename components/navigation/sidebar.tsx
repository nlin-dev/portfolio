"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { NavItem } from "./nav-item";
import { sidebarVariants } from "@/lib/motion";

const STORAGE_KEY = "sidebar-collapsed";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load collapsed state from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    // Only allow collapsed state if explicitly set, otherwise default to expanded
    if (stored === "true") {
      setCollapsed(true);
    }
  }, []);

  // Save collapsed state to localStorage
  const toggleCollapsed = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem(STORAGE_KEY, String(newState));
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="hidden lg:flex w-60 border-r sidebar-gradient-bg" style={{ borderColor: 'var(--sidebar-border)' }} />
    );
  }

  return (
    <motion.aside
      initial={false}
      animate={collapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      className="hidden lg:flex flex-col border-r sidebar-gradient-bg h-screen sticky top-0"
      style={{
        borderColor: 'var(--sidebar-border)',
        boxShadow: '0.0625rem 0 0 0 var(--sidebar-border)'
      }}
    >
      <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
        {!collapsed && (
          <div className="px-7 pt-8 pb-6">
            <h1 className="text-xl font-bold tracking-tight" style={{ color: 'var(--fg-primary)' }}>
              {homeContent.hero.name}
            </h1>
          </div>
        )}
        {collapsed && <div className="h-8" aria-hidden="true" />}

        <nav className="flex-1 px-4 pb-4 space-y-6" aria-label="Main navigation">
          {homeContent.navigation.map((group) => (
            <div key={group.title}>
              {!collapsed && (
                <h2 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg-muted)' }}>
                  {group.title}
                </h2>
              )}
              <ul className="space-y-1" role="list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <NavItem item={item} collapsed={collapsed} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t" style={{ borderColor: 'var(--divider)' }}>
        <button
          onClick={toggleCollapsed}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors focus-ring"
          )}
          style={{
            color: 'var(--fg-muted)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-sidebar-elev)';
            e.currentTarget.style.color = 'var(--fg-secondary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--fg-muted)';
          }}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-medium"
              >
                Collapse
              </motion.span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
