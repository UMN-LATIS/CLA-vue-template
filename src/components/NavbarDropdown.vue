<template>
  <NavbarItem class="navbar-dropdown">
    <button @click="isOpen = !isOpen" class="navbar-dropdown__label-button">
      {{ label }}
      <Icons.ChevronDown />
    </button>
    <ul v-if="isOpen" class="navbar-dropdown__items">
      <slot></slot>
    </ul>
  </NavbarItem>
</template>
<script setup lang="ts">
import NavbarItem from "./NavbarItem.vue";
import * as Icons from "../icons";
import { ref } from "vue";
defineProps<{
  label: string;
}>();

const isOpen = ref(false);
</script>
<style scoped></style>
