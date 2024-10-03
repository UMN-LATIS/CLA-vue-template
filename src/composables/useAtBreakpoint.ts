import { useBreakpoints } from "@vueuse/core";
import { BREAKPOINTS } from "../constants";
import { computed } from "vue";

export const useAtBreakpoint = (breakpoint: keyof typeof BREAKPOINTS) => {
  const breakpoints = useBreakpoints(BREAKPOINTS);
  const atBreakpoint = computed(() => breakpoints.isGreaterOrEqual(breakpoint));

  return { atBreakpoint };
};
