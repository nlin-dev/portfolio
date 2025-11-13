"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { sheetVariants } from "@/lib/motion";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: 'var(--bg-sidebar)',
          borderColor: 'var(--sidebar-border)',
        }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>
            {homeContent.hero.name}
          </div>
          <Dialog.Trigger asChild>
            <button
              className="p-2 rounded-lg transition-colors focus-ring"
              style={{ color: 'var(--fg-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-sidebar-elev)';
                e.currentTarget.style.color = 'var(--fg-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--fg-muted)';
              }}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sheetVariants}
                className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] border-l z-50 lg:hidden sidebar-gradient-bg"
                style={{ borderColor: 'var(--sidebar-border)' }}
              >
                <div className="flex flex-col h-full">
                  <div
                    className="flex items-center justify-between p-4 border-b"
                    style={{ borderColor: 'var(--divider)' }}
                  >
                    <Dialog.Title className="text-lg font-semibold" style={{ color: 'var(--fg-primary)' }}>
                      Navigation
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        className="p-2 rounded-lg transition-colors focus-ring"
                        style={{ color: 'var(--fg-muted)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--bg-sidebar-elev)';
                          e.currentTarget.style.color = 'var(--fg-secondary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'var(--fg-muted)';
                        }}
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav
                    className="flex-1 overflow-y-auto p-4 custom-scrollbar"
                    aria-label="Main navigation"
                  >
                    <div className="space-y-6">
                      {homeContent.navigation.map((group) => (
                        <div key={group.title}>
                          <h2
                            className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider"
                            style={{ color: 'var(--fg-muted)' }}
                          >
                            {group.title}
                          </h2>
                          <ul className="space-y-1" role="list">
                            {group.items.map((item) => {
                              const isActive = pathname === item.href;
                              const Icon = item.icon;
                              return (
                                <li key={item.id}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors focus-ring"
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
                                    <Icon
                                      className="w-5 h-5 shrink-0"
                                      aria-hidden="true"
                                    />
                                    <span className="text-sm font-medium">
                                      {item.label}
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </nav>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
