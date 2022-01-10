<template>
    <nav role="navigation" class="university-header-nav">
        <h2 class="visually-hidden">University Header Menu</h2>

        <ul class="university-header-button-container">
            <slot></slot>
        </ul>
    </nav>
</template>

<style scoped>

.university-header-nav {
    padding: 1rem 0;
    max-width: fit-content;
}

.university-header-button-container {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
}

.visually-hidden {
    position: absolute !important;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
    width: 1px;
    height: 1px;
    word-wrap: normal;
}

</style>

<script>

  export default {
    name: 'UniversityHeaderButtonContainer',
    props: {
    },

    setup() {
      
    },
  };
</script>