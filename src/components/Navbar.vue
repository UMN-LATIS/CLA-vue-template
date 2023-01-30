<template>
  <div class="w-full bg-umn-neutral-100">
    <div
      class="mobile-nav-container w-full flex md:hidden"
      :class="{
        'max-h-[64rem]': isOpen,
        'max-h-0': !isOpen,
      }"
    >
      <ul class="mobile-navbar-block">
        <slot name="navbar-links"></slot>
        <slot name="navbar-links-right"></slot>
      </ul>
    </div>
    <nav role="navigation" class="max-w-[90em] w-full mx-auto hidden md:block">
      <h2 class="sr-only">App Navigation</h2>
      <div class="flex justify-between">
        <ul class="navbar-block">
          <slot name="navbar-links"></slot>
        </ul>
        <ul class="navbar-block">
          <slot name="navbar-links-right"></slot>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.mobile-nav-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding: 0 0rem;
  min-width: 100%;
  max-height: 0;
  transition: all 0.5s ease-in-out;
}

.hamburger-button div {
  position: absolute;
  z-index: 100;
  right: 1rem;
  top: -4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: visible;
  cursor: pointer;
}

.hamburger-button span {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
}

.hamburger-button svg {
  font-size: 1.75rem;
  width: 0.875rem;
  height: 1em;
}

.navbar-block {
  flex-direction: row;
  gap: 0;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.mobile-navbar-block {
  flex-direction: column;
  gap: 0.625rem;
  list-style-type: none;
  display: flex;
  margin: 1rem;
  padding: 0;
  width: 100%;
  overflow: hidden;
}

.mobile-navbar-block-open {
  max-height: 64rem;
}

@media (min-width: 62.5em) {
  .outer-block {
    display: flex;
  }
  .hamburger-button {
    display: none;
  }
  .nav-container {
    display: none;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>
