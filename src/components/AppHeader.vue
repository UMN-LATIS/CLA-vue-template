<template>
  <div class="masthead umn-app-header">
    <div class="header-row">
      <UniversityHeader class="header-row-internal" />
    </div>
    <div class="header-row">
      <CollegeHeader
        class="header-row-internal header-separator"
        :isMenuOpen="isMenuOpen"
        :menuBreakpoint="menuBreakpoint"
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
      <Navbar :isOpen="isMenuOpen" :menuBreakpoint="menuBreakpoint">
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

<script setup lang="ts">
import CollegeHeader from "./CollegeHeader.vue";
import UniversityHeader from "./UniversityHeader.vue";
import Navbar from "./Navbar.vue";
import MenuButton from "./MenuButton.vue";
import { ref, provide, computed, watch } from "vue";
import { useBreakpoints } from "@vueuse/core";
import { BREAKPOINTS, menuBreakpointInjectionKey } from "../constants";

const props = withDefaults(
  defineProps<{
    menuBreakpoint?: keyof typeof BREAKPOINTS;
  }>(),
  {
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
const isMenuOpen = ref(false);

provide(menuBreakpointInjectionKey, props.menuBreakpoint);

function handleMenuButtonClick() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
