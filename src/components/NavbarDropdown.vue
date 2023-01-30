<template>
  <NavbarItem ref="itemContainer">
    <button
      @click="isOpen = !isOpen"
      class="flex w-full h-full px-5 items-center gap-2 whitespace-nowrap justify-between"
      :class="{
        'text-umn-maroon bg-neutral-200 md:bg-white': isOpen,
        'text-umn-neutral-700': !isOpen,
      }"
      tabindex="0"
    >
      <span>{{ label }}</span>
      <Icons.ChevronDown
        class="transition-transform"
        :class="{
          'transform rotate-180 md:rotate-0': isOpen,
          'transform rotate-0': !isOpen,
        }"
      />
    </button>
    <ul
      class="bg-neutral-100 md:bg-white md:absolute md:top-full md:left-0 md:w-64 md:-mt-1 md:shadow-md transition-all"
      :class="{
        'overflow-auto max-h-64': isOpen,
        'overflow-hidden max-h-0': !isOpen,
      }"
    >
      <slot></slot>
    </ul>
  </NavbarItem>
</template>
<script setup lang="ts">
import NavbarItem from "./NavbarItem.vue";
import * as Icons from "../icons";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

defineProps<{
  label: string;
}>();

const isOpen = ref(false);
const itemContainer = ref<InstanceType<typeof NavbarItem> | null>(null);

onClickOutside(itemContainer, () => {
  // if the container is not mounted or the menu is not
  // open, do nothing
  if (!itemContainer.value || !isOpen.value) return;
  isOpen.value = false;
});
</script>
<style scoped></style>
