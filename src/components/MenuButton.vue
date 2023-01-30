<template>
  <button
    aria-pressed="false"
    aria-expanded="false"
    title="Toggle Section Menu Visibility"
    tabindex="0"
    class="bg-transparent border flex gap-2 flex-col place-items-center p-2 focus:outline-none focus:border-2 focus:border-umn-maroon focus:border-offset-2 focus:border-dashed"
  >
    <span class="uppercase text-xs font-semibold text-umn-neutral-700"
      >Menu</span
    >
    <Bars />
  </button>
</template>
<script setup lang="ts">
import { Bars } from "../icons";
</script>
<style scoped></style>
