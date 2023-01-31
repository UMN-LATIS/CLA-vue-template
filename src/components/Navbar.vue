<template>
  <div class="w-full bg-umn-neutral-100">
    <!-- mobile nav menu -->
    <Transition
      enterFromClass="max-h-0"
      enterActiveClass="transition-all ease-in"
      enterToClass=" max-h-fit"
      leaveActiveClass="transition-all ease-out"
      leaveFromClass="max-h-fit"
      leaveToClass="max-h-0"
    >
      <div
        v-if="isOpen"
        class="mobile-nav-container w-full flex flex-col md:hidden overflow-hidden bg-white inset-shadow"
      >
        <ul class="mobile-nav__list m-4">
          <slot name="navbar-links"></slot>
          <slot name="navbar-links-right"></slot>
        </ul>
      </div>
    </Transition>

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
.inset-shadow {
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
}
.inset-shadow-none {
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0);
}

.mobile-nav__list :slotted(li) {
  margin: 0.5rem auto;
}
</style>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>
