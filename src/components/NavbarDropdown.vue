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
    <Transition
      enterFromClass="max-h-0 scale-y-95 md:max-h-fit opacity-0"
      enterActiveClass="transition-all ease-in"
      enterToClass="max-h-64 scale-y-100 opacity-100 md:max-h-fit"
      leaveFromClass="max-h-64 scale-y-100 opacity-100 md:max-h-fit"
      leaveActiveClass="transition-all ease-out"
      leaveToClass="max-h-0 scale-y-95 opacity-0 md:max-h-fit"
    >
      <ul
        v-if="isOpen"
        class="bg-neutral-100 md:bg-white md:absolute md:top-full md:left-0 md:w-64 md:-mt-1 md:shadow-md overflow-hidden origin-top md:rounded-md"
      >
        <slot></slot>
      </ul>
    </Transition>
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
