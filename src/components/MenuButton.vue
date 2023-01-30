<template>
  <button
    :aria-pressed="isOpen"
    :aria-expanded="isOpen"
    title="Toggle Section Menu Visibility"
    class="flex flex-col items-center justify-center gap-1 p-2 text-umn-neutral-700"
  >
    <span class="uppercase text-xs font-semibold">Menu</span>
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
