<template>
    <a href="https://cla.umn.edu" class="wordmark-link">
        <img :src="wordmark" alt="College of Liberal Arts" />
    </a>
</template>

<style scoped>

.wordmark-link {
    max-width: fit-content;
    display: flex;
    color: var(--maroon);
    transition: all 0.2s;
    position: relative;
    text-decoration-color: var(--medium-gray);
    text-decoration-thickness: 2px;
    text-decoration-style: dotted;
    text-underline-offset: 2px;
}

.wordmark-link img {
    min-width: 14.0625rem;
    max-width: 14.0625rem;
    min-height: 0.97562rem;
    max-height: 0.97562rem;
}



</style>

<script>
import CLAWordmark from './assets/CollegeWordmark.svg';
  export default {
    name: 'CLAWordmark',
    components: {
    },
    props: {
    },
    setup() {
        let wordmark = CLAWordmark;
       return {
        wordmark
       }
    },
  };
</script>

