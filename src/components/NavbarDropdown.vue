<template>
  <NavbarItem ref="itemContainer">
    <button
      @click="isOpen = !isOpen"
      class="flex w-full h-full px-5 items-center gap-2 whitespace-nowrap"
      :class="{
        'text-umn-maroon bg-white': isOpen,
        'text-umn-neutral-700': !isOpen,
      }"
    >
      {{ label }}
      <Icons.ChevronDown />
    </button>
    <ul
      v-if="isOpen"
      class="bg-white absolute top-full left-0 w-64 -mt-1 shadow-md"
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
  console.log("clicked outside");
  if (!itemContainer.value) return;
  isOpen.value = false;
});
</script>
<style scoped></style>
