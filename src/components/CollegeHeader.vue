<template>
  <div
    class="college-header"
    :class="[atBreakpoint ? 'tw-bg-white' : 'tw-bg-umn-neutral-100']"
  >
    <div
      class="tw-flex tw-max-w-[90em] tw-w-full tw-mx-auto tw-justify-between tw-items-center tw-p-4"
    >
      <div class="branding-block tw-flex tw-flex-col tw-gap-2">
        <span class="link-wrapper">
          <CLAWordmark />
        </span>
        <h1
          class="tw-text-2xl tw-leading-none tw-font-semibold tw-text-umn-maroon tw-m-0"
        >
          <slot name="app-link" />
        </h1>
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.branding-block :slotted(a) {
  color: inherit;
  text-decoration: none;
}

.branding-block :slotted(a:hover) {
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { inject } from "vue";
import CLAWordmark from "./CLAWordmark.vue";
import { atBreakpointRefInjectionKey } from "../constants";
import { useAtBreakpoint } from "../composables/useAtBreakpoint";

withDefaults(
  defineProps<{
    isMenuOpen?: boolean;
    href?: string;
  }>(),
  {
    href: "/",
    isMenuOpen: false,
  }
);

const { atBreakpoint: atFallbackBreakpoint } = useAtBreakpoint("always");

const atBreakpoint = inject(atBreakpointRefInjectionKey, atFallbackBreakpoint);

defineEmits<{
  (event: "clickMenu"): void;
}>();
</script>
