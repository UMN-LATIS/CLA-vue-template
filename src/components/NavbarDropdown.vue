<template>
  <NavbarItem ref="itemContainer" class="navbar-dropdown">
    <button
      :id="triggerButtonId"
      @click="toggleDropdown"
      @keydown="handleKeydown"
      class="navbar-dropdown__button tw-flex tw-w-full tw-h-full tw-px-5 tw-items-center tw-gap-2 tw-whitespace-nowrap tw-justify-between tw-border-0 tw-text-base hover:tw-bg-umn-neutral-200"
      :class="{
        'navbar-dropdown__button--is-open tw-text-umn-maroon tw-bg-neutral-200':
          isOpen,
        'tw-bg-neutral-50': isOpen && atBreakpoint,
        'tw-text-umn-neutral-700': !isOpen,
      }"
      :aria-expanded="isOpen"
      :aria-controls="dropdownMenuId"
      aria-haspopup="true"
      tabindex="0"
    >
      <span>{{ label }}</span>
      <Icons.ChevronDown
        class="tw-transition-transform chevron-down-icon"
        :class="{
          'tw-transform tw-rotate-180': isOpen,
          'tw-rotate-0': isOpen && atBreakpoint,
          'tw-transform tw-rotate-0': !isOpen,
        }"
        aria-hidden="true"
      />
    </button>
    <Transition
      :enterFromClass="`tw-scale-y-95 ${
        atBreakpoint ? 'tw-max-h-fit' : 'tw-max-h-0'
      } tw-opacity-0`"
      enterActiveClass="tw-transition-all tw-ease-in"
      :enterToClass="`tw-scale-y-100 tw-opacity-100 ${
        atBreakpoint ? 'tw-max-h-fit' : 'tw-max-h-64'
      }`"
      :leaveFromClass="`w-scale-y-100 tw-opacity-100 ${
        atBreakpoint ? 'tw-max-h-fit' : 'tw-max-h-64'
      }`"
      leaveActiveClass="tw-transition-all tw-ease-out"
      :leaveToClass="`tw-scale-y-95 tw-opacity-0 ${
        atBreakpoint ? 'tw-max-h-fit' : 'tw-max-h-0'
      }`"
    >
      <ul
        v-if="isOpen"
        :id="dropdownMenuId"
        class="tw-bg-neutral-100 tw-overflow-hidden tw-origin-top tw-z-40 tw-p-0"
        :class="{
          'tw-bg-neutral-50 tw-absolute tw-top-full tw-right-0 tw-w-48 tw--mt-1 tw-shadow-md tw-rounded-md':
            atBreakpoint,
        }"
        role="menu"
        :aria-labelledby="triggerButtonId"
        @keydown="handleDropdownKeydown"
      >
        <slot></slot>
      </ul>
    </Transition>
  </NavbarItem>
</template>
<script setup lang="ts">
import NavbarItem from "./NavbarItem.vue";
import * as Icons from "../icons";
import { ref, inject, computed, watch } from "vue";
import { onClickOutside, useFocusWithin } from "@vueuse/core";
import { atBreakpointRefInjectionKey } from "../constants";
import { useAtBreakpoint } from "../composables/useAtBreakpoint";
import { useId } from "../composables/useId";

defineProps<{
  label: string;
}>();

const isOpen = ref(false);
const itemContainer = ref<InstanceType<typeof NavbarItem> | null>(null);
const triggerButtonId = useId('navbar-dropdown-button');
const dropdownMenuId = useId('navbar-dropdown-menu');

const { atBreakpoint: atFallbackBreakpoint } = useAtBreakpoint("always");
const atBreakpoint = inject(atBreakpointRefInjectionKey, atFallbackBreakpoint);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
    case ' ': // Space key
      event.preventDefault();
      toggleDropdown();
      break;
    case 'Escape':
      if (isOpen.value) {
        event.preventDefault();
        closeDropdown();
      }
      break;
    case 'ArrowDown':
      if (!isOpen.value) {
        event.preventDefault();
        isOpen.value = true;
      }
      break;
  }
};

const handleDropdownKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeDropdown();
    // Focus back on the button after closing
    const button = document.getElementById(triggerButtonId);
    button?.focus();
  }
};

// Close dropdown when clicked outside
onClickOutside(itemContainer, () => {
  if (!itemContainer.value || !isOpen.value) return;
  isOpen.value = false;
});

// Close dropdown when focus moves outside the component
const { focused } = useFocusWithin(itemContainer);
watch(focused, (isFocused) => {
  if (!isFocused && isOpen.value) {
    closeDropdown();
  }
});
</script>
<style scoped>
:slotted(li) {
  background: var(--umn-neutral-50);
}
:slotted(li:hover) {
  background: var(--umn-neutral-200);
}

button {
  font-family: inherit;
  background: transparent;
}
</style>
