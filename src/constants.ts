import type { InjectionKey } from "vue";

export const BREAKPOINTS = {
  none: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const menuBreakpointInjectionKey = Symbol(
  "menuBreakpoint"
) as InjectionKey<keyof typeof BREAKPOINTS>;
