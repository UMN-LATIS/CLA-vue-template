<template>
    <li class="navbar-item">
        <slot></slot>
    </li>
</template>



<style scoped>

.navbar-item {
    text-align: center;
    margin-bottom: 0;
}

.navbar-item:not(:first-child):not(:last-child) {
    flex: 1 0 auto;
}

::v-slotted(.active a) {
    background-color: var(--nav-item-active) !important;
}

::v-slotted(.navbar-item a) {
    background-color: var(--light-gray);
    outline-offset: -4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: var(--dark-gray);
    white-space: nowrap
}

::v-slotted(.navbar-item a:hover) {
    background-color: var(--nav-item-active);
}

</style>

<script>
  export default {
    name: 'NavbarItem',
    props: {
    },
    setup(props) {
       return {
        
       }
    },
  };
</script>