<template>
  <div class="tw-w-full tw-bg-umn-neutral-100">
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
        class="mobile-nav-container inset-shadow tw-flex tw-w-full tw-flex-col tw-overflow-hidden tw-bg-white md:tw-hidden"
      >
        <ul class="mobile-nav__list tw-m-4 tw-flex tw-flex-col tw-gap-2">
          <slot name="navbar-links"></slot>
          <slot name="navbar-links-right"></slot>
        </ul>
      </div>
    </Transition>

    <!-- navbar menu -->
    <nav
      role="navigation"
      class="tw-mx-auto tw-hidden tw-w-full tw-max-w-[90em] md:tw-block"
    >
      <h2 class="tw-sr-only">App Navigation</h2>
      <div class="tw-flex tw-justify-between">
        <ul class="tw-flex">
          <slot name="navbar-links"></slot>
        </ul>
        <ul class="tw-flex">
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
