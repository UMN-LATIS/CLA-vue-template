<template>
    <div class="outer-block">
        <div class="header-block">
            <div class="header-block-inner">
                <div class="branding-block">
                    <UMNWordmark />
                </div>
            </div>
            <div class="header-block-inner">
                <div class="link-block">
                    <UniversityHeaderButtonContainer>
                        <UniversityHeaderButton linkTarget="http://myu.umn.edu" :showBorder="false"><span id="header-myu">MyU</span></UniversityHeaderButton> 
                        <UniversityHeaderButton linkTarget="http://onestop.umn.edu" :showBorder="false">OneStop</UniversityHeaderButton> 
                        <UniversityHeaderButton linkTarget="http://search.umn.edu" :showBorder="false"><span id="header-search">Search</span></UniversityHeaderButton>
                    </UniversityHeaderButtonContainer>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

#header-myu::after {
    position: relative;
    content: '\f023';
    font-family: "Font Awesome 5 Free";
    margin-left: 0.25rem;
}

#header-search::before {
    position: relative;
    content: '\f002';
    font-family: "Font Awesome 5 Free";
    margin-right: 0.25rem;
}

.outer-block {
    display: flex;
    justify-content: center;
    background-color: var(--light-gold);
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


</style>

<script>
 import UniversityHeaderButtonContainer from "./UniversityHeaderButtonContainer.vue";
 import UniversityHeaderButton from "./UniversityHeaderButton.vue";
 import UMNWordmark from "./UMNWordmark.vue";

  export default {
    name: 'UniversityHeader',
    components: {
      UniversityHeaderButtonContainer,
      UniversityHeaderButton,
      UMNWordmark
    },
    props: {
     
    },
    setup() {
     
    },
  };
</script>