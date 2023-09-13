<template>
  <div
    class="masthead umn-app-header"
    :class="{
      'umn-app-header--at-breakpoint': atBreakpoint,
    }"
  >
    <div class="header-row">
      <UniversityHeader class="header-row-internal" />
    </div>
    <div class="header-row">
      <CollegeHeader
        class="header-row-internal header-separator"
        :isMenuOpen="isMenuOpen"
      >
        <template v-slot:app-link>
          <slot name="app-link"></slot>
        </template>
        <template #right>
          <div
            class="menu-button-container"
            :class="{
              'tw-hidden': atBreakpoint,
            }"
          >
            <MenuButton :isOpen="isMenuOpen" @click="handleMenuButtonClick" />
          </div>
        </template>
      </CollegeHeader>
    </div>
    <div class="header-row">
      <Navbar :isOpen="isMenuOpen" ref="navbarRef">
        <template #navbar-links>
          <slot name="navbar-links"></slot>
        </template>
        <template #navbar-links-right>
          <slot name="navbar-links-right"></slot>
        </template>
      </Navbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollegeHeader from "./CollegeHeader.vue";
import UniversityHeader from "./UniversityHeader.vue";
import Navbar from "./Navbar.vue";
import MenuButton from "./MenuButton.vue";
import { ref, provide, computed, watch } from "vue";
import { useBreakpoints } from "@vueuse/core";
import { BREAKPOINTS, atBreakpointRefInjectionKey } from "../constants";

const props = withDefaults(
  defineProps<{
    menuBreakpoint?: keyof typeof BREAKPOINTS;
  }>(),
  {
    menuBreakpoint: "md",
  }
);
const breakpoints = useBreakpoints(BREAKPOINTS);

const atBreakpoint = computed(
  // .greaterOrEqual returns a ref
  // while .isGreaterOrEqual return the raw boolean
  // to ensure the value is recomputed when the window changes size
  // use the .greaterOrEqual ref
  (): boolean => breakpoints.greaterOrEqual(props.menuBreakpoint).value
);

const isMenuOpen = ref(false);

watch(
  atBreakpoint,
  () => {
    // Close the menu when we cross the breakpoint threshold
    // this prevents the mobile menu from remaining open when
    // the user resizes the window to a larger size
    isMenuOpen.value = false;
  },
  { immediate: true }
);

provide(atBreakpointRefInjectionKey, atBreakpoint);

function handleMenuButtonClick() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.masthead {
  border-top: 6px solid var(--gold);
  overflow: visible;
}
.header-row {
  display: flex;
  justify-content: center;
}

.header-row-internal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
}

.header-separator {
  border-top: 1px solid var(--light-gray);
}
</style>
