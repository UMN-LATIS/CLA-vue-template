<template>
    <div class="outer-block">
        <div class="header-block">
            <div class="header-block-inner">
                <div class="branding-block">
                    <span class="link-wrapper">
                        <CLAWordmark />
                    </span>
                    <span class="app-link-wrapper">
                        <slot name="app-link"></slot>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.outer-block {
    display: flex;
    justify-content: center;
    background-color: var(--light-gray);
}

@media (min-width: 62.5em) {
    .outer-block {
        background-color: white;
    }
}

.header-block {
    flex-wrap: nowrap;
    max-width: 90em;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    width: 100%;
}

.header-block-inner {
    flex: 1 1 auto;
}

.branding-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 5.25rem;
}

.link-block {
    display: flex;
    justify-content: flex-end;
}

.app-link-wrapper {
    font-size: 1.5rem;
    max-width: calc(100% - 40px);
    line-height: 1rem;
    margin-top: 0.25rem;
}

/* this is vue3 only */
::v-slotted(.app-link-wrapper a) {
    text-decoration: none;
    font-weight: 600;
    line-height: 1;
    max-width: calc(100% - 50px);
    color: var(--maroon);
    text-decoration-color: var(--medium-gray);
    text-decoration-thickness: 2px;
    text-decoration-style: dotted;
    text-underline-offset: 2px;
    
}

/* duplicated for vue2 */
.app-link-wrapper a {
    text-decoration: none;
    font-weight: 600;
    line-height: 1;
    max-width: calc(100% - 50px);
    color: var(--maroon);
    text-decoration-color: var(--medium-gray);
    text-decoration-thickness: 2px;
    text-decoration-style: dotted;
    text-underline-offset: 2px;
    
}


::v-slotted(.app-link-wrapper a:hover) {
    text-decoration: underline;
}


.app-link-wrapper a:hover {
    text-decoration: underline;
}
</style>

<script>

import CLAWordmark from "./CLAWordmark.vue";

  export default {
    name: 'CollegeHeader',
    components: {
        CLAWordmark
    },
    props: {
    },
    setup() {
    },
  };
</script>