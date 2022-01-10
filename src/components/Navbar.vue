<template>
        <div class="nav-container">
            <div class="hamburger-button" @click="revealNav = !revealNav">
                <div role="button" aria-pressed="false" aria-expanded="false" title="Toggle Section Menu Visibility" tabindex="0" >
                <span>Menu</span>
                    <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </div>
            </div>
            <ul class="mobile-navbar-block" :class="isOpen">
                <slot name="navbar-links"></slot>
            </ul>
        </div>
        <div class="outer-block">
            <div class="header-block">
                <div class="header-block-inner">
                    <nav role="navigation" class="app-nav">
                        <h2 class="visually-hidden">App Navigation</h2>
                        <div class="branding-block">
                            <ul class="navbar-block">
                                <slot name="navbar-links"></slot>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

</template>

<style scoped>

.nav-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: start;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding: 0 1rem;
    min-width:100%;
}

.hamburger-button div{
    position: absolute;
    z-index: 100;
    right: 1.5rem;
    top: -4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: visible;
    cursor: pointer;
}

.hamburger-button span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
}

.hamburger-button svg {
    font-size: 1.75rem;
    width: .875rem;
    height: 1em;
}

.navbar-block {
    flex-direction: row;
    gap: 0;
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.mobile-navbar-block {
    flex-direction: column;
    gap: 0.625rem;
    list-style-type: none;
    display: flex;
    margin: 1rem;
    padding: 0;
    width: 100%;
    transition: all .5s ease-in-out;
    max-height: 0rem;
    overflow: hidden;
}

.mobile-navbar-block-open {
    max-height: 64rem;
}

.app-nav {
    /* padding: 1rem 0; */
    max-width: fit-content;
    min-width: 100%;
}


.visually-hidden {
    position: absolute !important;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
    width: 1px;
    height: 1px;
    word-wrap: normal;
}

.outer-block {
    display: none;
    justify-content: center;
    min-width: 100%;
    background-color: var(--light-gray);
}

@media (min-width: 62.5em) {
    .outer-block {
        display: flex;
    }
    .hamburger-button {
        display: none;
    }
    .nav-container {
        display: none;
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
    min-width: 100%;
}


</style>

<script>

import { ref, computed } from 'vue';
  export default {
    name: 'Navbar',
    components: {
    },
    props: {
    },
    setup(props) {
        let revealNav = ref(false);
       return {
        revealNav,
        "isOpen": computed(() => {
            return revealNav.value ? 'mobile-navbar-block-open' : '';
        })
       }
    },
  };
</script>