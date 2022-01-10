<template>
  <div id="app">
  
  <AppHeader><template #app-link>MyApp</template><template #navbar-links><NavbarItem class="active"><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really Away</a></NavbarItem></template></AppHeader>
  <PostIt><h1>HELLO!</h1></PostIt>
  <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import NavbarItem from "./components/NavbarItem.vue";
import PostIt from "./components/PostIt.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    NavbarItem,
    PostIt,
    AppFooter
  }
};
</script>

<style>
@import "./index.css";
</style>
