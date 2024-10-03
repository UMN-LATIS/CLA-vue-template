import type { InjectionKey, Ref } from "vue";

export const BREAKPOINTS = {
  always: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440, // 90rem UMN header max width
  none: Infinity,
} as const;

export const atBreakpointRefInjectionKey = Symbol(
  "menuBreakpoint"
) as InjectionKey<Ref<boolean>>;
