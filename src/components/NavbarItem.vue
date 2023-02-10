<template>
  <li
    class="navbar-item tw-flex-1 tw-list-none tw-m-0 tw-transition-colors tw-relative hover:tw-bg-umn-neutral-200 tw-bg-umn-neutral-100"
    :class="{
      'tw-bg-neutral-300 tw-font-bold tw-text-neutral-800': isActive,
    }"
  >
    <slot></slot>
  </li>
</template>

<style scoped>
:slotted(a),
:slotted(button) {
  display: flex;
  align-items: center;
  outline-offset: -4px;
  padding: 1rem;
  text-decoration: none;
  white-space: nowrap;
}

:slotted(a) {
  color: var(--dark-gray);
}

:slotted(a:hover) {
  text-decoration: none;
  color: var(--dark-gray);
}
</style>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isActive?: boolean;
  }>(),
  {
    isActive: false,
  }
);
</script>
