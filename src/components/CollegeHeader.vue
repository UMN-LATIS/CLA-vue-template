<template>
  <div class="college-header tw-bg-umn-neutral-100 md:tw-bg-white">
    <div
      class="tw-flex tw-max-w-[90em] tw-w-full tw-mx-auto tw-justify-between tw-items-center tw-p-4"
    >
      <div class="branding-block tw-flex tw-flex-col tw-gap-1">
        <span class="link-wrapper">
          <CLAWordmark />
        </span>
        <h1
          class="tw-text-2xl tw-leading-none tw-font-semibold tw-text-umn-maroon"
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
import CLAWordmark from "./CLAWordmark.vue";

defineProps<{
  href?: string;
  isMenuOpen: boolean;
}>();

defineEmits<{
  (event: "clickMenu"): void;
}>();
</script>
