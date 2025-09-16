<template>
  <div id="app" class="tw-flex tw-flex-col tw-min-h-[100vh] tw-h-full">
    <AppHeader>
      <template #app-link>MyApp</template>
      <template #navbar-links>
        <NavbarItem class="active"><a href="/">Home</a></NavbarItem>
        <NavbarItem><a href="/">Away</a></NavbarItem>
        <NavbarItem><a href="/">Really Away</a></NavbarItem>
        <NavbarDropdown label="Dropdown">
            <NavbarItem><a href="/">Link 1</a></NavbarItem>
            <NavbarItem><a href="/">Link 2</a></NavbarItem>
            <NavbarItem><a href="/">Link 3</a></NavbarItem>
        </NavbarDropdown>
      </template>
    </AppHeader>
    <PostIt class="tw-flex-1">
      <h1>HELLO!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
    </PostIt>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import NavbarItem from "./components/NavbarItem.vue";
import PostIt from "./components/PostIt.vue";
import AppFooter from "./components/AppFooter.vue";
import NavbarDropdown from "./components/NavbarDropdown.vue";
</script>

<style>
@import "./index.css";
</style>
