import type { InjectionKey } from "vue";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  none: Infinity,
} as const;

export const menuBreakpointInjectionKey = Symbol(
  "menuBreakpoint"
) as InjectionKey<keyof typeof BREAKPOINTS>;
