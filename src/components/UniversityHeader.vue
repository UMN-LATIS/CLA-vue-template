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
            <UniversityHeaderButton
              linkTarget="http://myu.umn.edu"
              :showBorder="false"
            >
              <span class="header-button-contents">
                MyU
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                  />
                </svg>
              </span>
            </UniversityHeaderButton>
            <UniversityHeaderButton
              linkTarget="http://onestop.umn.edu"
              :showBorder="false"
              >OneStop</UniversityHeaderButton
            >
            <UniversityHeaderButton
              linkTarget="http://search.umn.edu"
              :showBorder="false"
            >
              <span class="header-button-contents">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                  />
                </svg>
                Search
              </span>
            </UniversityHeaderButton>
          </UniversityHeaderButtonContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-button-contents {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.header-button-contents svg {
  height: 1em;
  fill: var(--dark-gray);
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
  name: "UniversityHeader",
  components: {
    UniversityHeaderButtonContainer,
    UniversityHeaderButton,
    UMNWordmark,
  },
  props: {},
  setup() {},
};
</script>
