<template>
  <div class="w-full bg-umn-neutral-100">
    <!-- mobile nav menu -->
    <div
      class="mobile-nav-container w-full flex flex-col md:hidden transition-all duration-100 overflow-auto bg-white"
      :class="{
        'max-h-screen': isOpen,
        'max-h-0': !isOpen,
      }"
    >
      <ul class="mobile-nav__list">
        <slot name="navbar-links"></slot>
        <slot name="navbar-links-right"></slot>
      </ul>
    </div>

    <!-- navbar menu -->
    <nav role="navigation" class="max-w-[90em] w-full mx-auto hidden md:block">
      <h2 class="sr-only">App Navigation</h2>
      <div class="flex justify-between">
        <ul class="flex">
          <slot name="navbar-links"></slot>
        </ul>
        <ul class="flex">
          <slot name="navbar-links-right"></slot>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.mobile-nav-container {
  /* inset shadow */
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--light-gray);
}

.mobile-nav__list :slotted(li) {
  margin: 1rem;
  background: var(--light-gray);
}
</style>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>
