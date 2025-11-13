/**
 * Breakpoint utilities matching the design specifications
 */

export const breakpoints = {
  phone: 500,
  smallTablet: 900,
  tablet: 1300,
  desktop: 1301,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * Get current breakpoint (client-side only)
 */
export const getCurrentBreakpoint = (): Breakpoint => {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;

  if (width <= breakpoints.phone) return "phone";
  if (width <= breakpoints.smallTablet) return "smallTablet";
  if (width <= breakpoints.tablet) return "tablet";
  return "desktop";
};

/**
 * Check if viewport matches a breakpoint
 */
export const isBreakpoint = (breakpoint: Breakpoint): boolean => {
  return getCurrentBreakpoint() === breakpoint;
};

/**
 * Check if viewport is mobile (phone)
 */
export const isMobile = (): boolean => {
  return getCurrentBreakpoint() === "phone";
};

/**
 * Check if viewport should show collapsed sidebar by default
 */
export const shouldCollapseByDefault = (): boolean => {
  const bp = getCurrentBreakpoint();
  return bp === "smallTablet" || bp === "phone";
};
