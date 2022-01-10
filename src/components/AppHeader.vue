<template>
    <div class="masthead">
        <div class="header-row">
            <UniversityHeader class="header-row-internal" />
        </div>
        <div class="header-row">
            <CollegeHeader class="header-row-internal header-separator">
                <template v-slot:app-link>
                    <slot name="app-link"></slot>
                </template>
            </CollegeHeader>
        </div>
        <div class="header-row">
            <Navbar>
                <template v-slot:navbar-links>
                    <slot name="navbar-links"></slot>
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
    max-width: 90em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
}

.header-separator {
    border-top: 1px solid var(--light-gray);
}

</style>

<script>
 import CollegeHeader from "./CollegeHeader.vue";
 import UniversityHeader from "./UniversityHeader.vue";
 import Navbar from "./Navbar.vue";
  
  import { computed } from 'vue';
  export default {
    name: 'AppHeader',
    components: {
      UniversityHeader,
      CollegeHeader,
      Navbar
    },
    props: {
     
    },
    setup(props) {
        
    },
  };
</script>