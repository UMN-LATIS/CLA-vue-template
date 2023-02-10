<template>
  <button
    :aria-pressed="isOpen"
    :aria-expanded="isOpen"
    title="Toggle Section Menu Visibility"
    class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 tw-p-2 tw-text-umn-neutral-700 tw-border-0"
  >
    <span class="tw-uppercase tw-text-xs tw-font-semibold">Menu</span>
    <Bars />
  </button>
</template>
<script setup lang="ts">
import { Bars } from "../icons";

defineProps<{
  isOpen: boolean;
}>();
</script>
<style scoped></style>
