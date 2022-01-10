<template>
    <div class="outer-container">
        <div class="inner-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

.outer-container {
    max-width: 71.1875em;
    margin: 0 auto;
    margin-top: 1.5rem;
    position:relative;
    padding: 0 1.25rem;
}

@media (min-width: 75em) {
    .outer-container {
        padding: 0;
    }
}

.inner-container {
    background: white;
    padding: 2.5rem 1.5rem;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 0 0 1px rgba(0,0,0,0.08);
    max-width: 100%;
}
.inner-container::before {
    position: absolute;
    content: " ";
    width: 110px;
    height: 18px;
    left: calc(50% - 55px);
    top: -8px;
    background-color: var(--gold);
    z-index: 100;
}

</style>

<script>

  export default {
    name: 'PostIt',
    components: {
    },
    props: {
    },
    setup() {
     
    },
  };
</script>