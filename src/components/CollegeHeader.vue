<template>
  <div class="college-header bg-umn-neutral-100 md:bg-white">
    <div
      class="flex max-w-[90em] w-full mx-auto justify-between items-center p-4"
    >
      <div class="branding-block flex flex-col justify-center gap-1">
        <span class="link-wrapper">
          <CLAWordmark />
        </span>
        <h1
          class="text-lg sm:text-2xl leading-none font-semibold text-umn-maroon"
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
import MenuButton from "./MenuButton.vue";

defineProps<{
  href?: string;
  isMenuOpen: boolean;
}>();

defineEmits<{
  (event: "clickMenu"): void;
}>();
</script>
