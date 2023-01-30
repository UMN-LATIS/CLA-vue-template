<template>
  <li
    class="navbar-item flex-1 list-none m-0 hover:bg-neutral-50 transition-colors relative"
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
  justify-content: flex-start;
  align-items: center;
  outline-offset: -4px;
  padding: 1rem;
  text-decoration: none;
  white-space: nowrap;
}

::v-slotted(a) {
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
