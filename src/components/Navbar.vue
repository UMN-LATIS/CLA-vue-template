<template>
  <div :class="`umn-navbar tw-w-full tw-bg-umn-neutral-100`">
    <!-- mobile nav menu -->
    <Transition
      enterFromClass="tw-max-h-0"
      enterActiveClass="tw-transition-all tw-ease-in"
      enterToClass="tw-max-h-fit"
      leaveActiveClass="tw-transition-all tw-ease-out"
      leaveFromClass="tw-max-h-fit"
      leaveToClass="tw-max-h-0"
    >
      <div
        v-if="isOpen"
        class="mobile-nav-container inset-shadow tw-flex tw-w-full tw-flex-col tw-overflow-hidden tw-bg-white"
        :class="{
          'tw-hidden': atBreakpoint,
        }"
      >
        <ul class="mobile-nav__list tw-m-4 tw-flex tw-flex-col tw-gap-2 tw-p-0">
          <slot name="navbar-links"></slot>
          <slot name="navbar-links-right"></slot>
        </ul>
      </div>
    </Transition>

    <!-- navbar menu -->
    <nav
      role="navigation"
      class="tw-mx-auto tw-w-full tw-max-w-[90em]"
      :class="[atBreakpoint ? 'tw-block' : 'tw-hidden']"
    >
      <h2 class="tw-sr-only">App Navigation</h2>
      <div class="tw-flex tw-justify-between tw-flex-wrap">
        <ul
          class="navbar-links-container tw-flex tw-m-0 tw-p-0 tw-items-center tw-flex-wrap"
        >
          <slot name="navbar-links"></slot>
        </ul>
        <ul
          class="navbar-links-right-container tw-flex tw-m-0 tw-p-0 tw-items-center"
        >
          <slot name="navbar-links-right"></slot>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.inset-shadow {
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
}
.inset-shadow-none {
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0);
}

.mobile-nav__list :slotted(li) {
  width: 100%;
}

.navbar-links-container :slotted(li) {
  flex-grow: 0; /*  prevent wrapped link items from growing */
}
</style>

<script setup lang="ts" async>
import { computed, watch } from "vue";
import { BREAKPOINTS } from "../constants";
import { useBreakpoints } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    menuBreakpoint?: keyof typeof BREAKPOINTS;
  }>(),
  {
    isOpen: false,
    menuBreakpoint: "md",
  }
);

const breakpoints = useBreakpoints(BREAKPOINTS);
let atBreakpoint = breakpoints.greaterOrEqual(props.menuBreakpoint);

watch(
  () => props.menuBreakpoint,
  () => {
    atBreakpoint = breakpoints.greaterOrEqual(props.menuBreakpoint);
  }
);
</script>
