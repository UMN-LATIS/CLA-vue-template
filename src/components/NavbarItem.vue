<template>
  <li
    class="navbar-item flex-1 list-none m-0 transition-colors relative hover:bg-umn-neutral-50 bg-umn-neutral-100"
    :class="{
      'bg-neutral-300 font-bold text-neutral-800': isActive,
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
