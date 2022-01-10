<template>
    <div class="outer-block">
        <div class="header-block">
            <div class="header-block-inner">
                <div class="branding-block">
                    <a href="https://umn.edu" class="wordmark-link">
                    <img :src="wordmark" />
                    </a>
                </div>
            </div>
            <div class="header-block-inner">
                <div class="link-block">
                    <UniversityHeaderButtonContainer>
                        <UniversityHeaderButton linkTarget="http://myu.umn.edu" :showBorder="false">MyU</UniversityHeaderButton> 
                        <UniversityHeaderButton linkTarget="http://onestop.umn.edu" :showBorder="false">OneStop</UniversityHeaderButton> 
                        <UniversityHeaderButton linkTarget="http://search.umn.edu" :showBorder="false">Search</UniversityHeaderButton>
                    </UniversityHeaderButtonContainer>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.outer-block {
    display: flex;
    justify-content: center;
    background-color: white;
}

.header-block {
    flex-wrap: wrap;
    max-width: 90em;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    width: 100%;
}

.header-block-inner {
    /* height:100%; */
}

@media (min-width: 49em) {
    .header-block {
        flex-wrap: nowrap;
    }
    .header-block-inner {
        flex: 0 1 50%;
        max-width: 50%;

    }
}

.branding-block {
    /* max-width: fit-content; */
    align-items: center;
    display: flex;
    height: 100%;
}

.link-block {
    display: flex;
    justify-content: flex-end;
}

.wordmark-link {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    align-items: center;
    max-width: 21.25rem;
    padding: 0.25rem;
}
.wordmark-link img {
    width: 100%;
    /* height: auto; */
    /* min-height: 1px; */
    max-width: 100%;
    /* display: block; */
    /* overflow: hidden; */
}

</style>

<script>
 import UniversityHeaderButtonContainer from "./UniversityHeaderButtonContainer.vue";
 import UniversityHeaderButton from "./UniversityHeaderButton.vue";
  
  export default {
    name: 'UniversityHeader',
    components: {
      UniversityHeaderButtonContainer,
      UniversityHeaderButton,
    },
    props: {
     
    },
    setup() {
        let wordmark = require('./assets/UMNWordmark.svg');
       return {
        wordmark
       }
    },
  };
</script>