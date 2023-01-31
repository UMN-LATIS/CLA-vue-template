<template>
  <NavbarItem ref="itemContainer">
    <button
      @click="isOpen = !isOpen"
      class="tw-flex tw-w-full tw-h-full tw-px-5 tw-items-center tw-gap-2 tw-whitespace-nowrap tw-justify-between"
      :class="{
        'tw-text-umn-maroon tw-bg-neutral-200 md:tw-bg-white': isOpen,
        'tw-text-umn-neutral-700': !isOpen,
      }"
      tabindex="0"
    >
      <span>{{ label }}</span>
      <Icons.ChevronDown
        class="tw-transition-transform"
        :class="{
          'tw-transform tw-rotate-180 md:tw-rotate-0': isOpen,
          'tw-transform tw-rotate-0': !isOpen,
        }"
      />
    </button>
    <Transition
      enterFromClass="tw-max-h-0 tw-scale-y-95 md:tw-max-h-fit tw-opacity-0"
      enterActiveClass="tw-transition-all tw-ease-in"
      enterToClass="tw-max-h-64 tw-scale-y-100 tw-opacity-100 md:tw-max-h-fit"
      leaveFromClass="tw-max-h-64 tw-scale-y-100 tw-opacity-100 md:tw-max-h-fit"
      leaveActiveClass="tw-transition-all tw-ease-out"
      leaveToClass="tw-max-h-0 tw-scale-y-95 tw-opacity-0 md:tw-max-h-fit"
    >
      <ul
        v-if="isOpen"
        class="tw-bg-neutral-100 md:tw-bg-white md:tw-absolute md:tw-top-full md:tw-left-0 md:tw-w-64 md:tw--mt-1 md:tw-shadow-md tw-overflow-hidden tw-origin-top md:tw-rounded-md"
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
