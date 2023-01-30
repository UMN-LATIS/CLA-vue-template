<template>
  <div class="masthead">
    <div class="header-row">
      <UniversityHeader class="header-row-internal" />
    </div>
    <div class="header-row">
      <CollegeHeader
        class="header-row-internal header-separator"
        :isMenuOpen="isMenuOpen"
      >
        <template v-slot:app-link>
          <slot name="app-link"></slot>
        </template>
        <template #right>
          <MenuButton
            class="md:hidden"
            :isOpen="isMenuOpen"
            @click="handleMenuButtonClick"
          />
        </template>
      </CollegeHeader>
    </div>
    <div class="header-row">
      <Navbar :isOpen="isMenuOpen">
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
import { ref } from "vue";

const isMenuOpen = ref(false);

function handleMenuButtonClick() {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("menu is open now", isMenuOpen.value);
}
</script>
