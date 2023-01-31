<template>
  <li
    class="navbar-item tw-flex-1 tw-list-none tw-m-0 tw-transition-colors tw-relative tw-hover:bg-umn-neutral-50 tw-bg-umn-neutral-100"
    :class="{
      'tw-bg-neutral-300 tw-font-bold tw-text-neutral-800': isActive,
    }"
  >
    <slot></slot>
  </li>
</template>

<style scoped>
::v-slotted(a),
::v-slotted(button) {
  display: flex;
  align-items: center;
  outline-offset: -4px;
  padding: 0.75rem 1rem;
  text-decoration: none;
  white-space: nowrap;
  background: transparent;
}

::v-slotted(a) {
  color: var(--dark-gray);
}

::v-slotted(a:hover) {
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
