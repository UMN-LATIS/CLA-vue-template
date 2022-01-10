<template>
  <li class="university-header-button">
        <a :href="linkTarget" :class="classes">          
            <span class="link-inner"><slot></slot></span>
        </a>
    </li>
</template>

<style scoped>

.university-header-button {

}

.university-header-button a {
  background-color: var(--light-gray);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: -0.01em;
  text-align: center;
  justify-content: center;
  border: none;
  white-space: nowrap;
  color: unset;
  color: var(--dark-gray);
  padding: 0.875rem 1.4375rem;
  background: unset;
  padding: 0 1rem;
  font-size: 12.5px;
  transition: all 0.2s;
  text-decoration-color: var(--medium-gray);
  text-decoration-thickness: 2px;
  text-decoration-style: dotted;
  text-underline-offset: 2px;
  min-height: 44px;
}

.university-header-button a::before {
  margin-right: 0.625rem;
}

.university-header-button a:active {
  outline: 2px dashed;
}

.university-header-button .bordered-button {
  border: 1px solid rgb(189, 191, 199);
}

</style>

<script>
  import { computed } from 'vue';
  export default {
    name: 'UniversityHeaderButton',
    props: {
      linkTarget: {
        type: String,
        required: true,
      },
      showBorder: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
       return {
        classes: computed(() => ({
          'bordered-button': props.showBorder === true,
        })),
       }
    },
  };
</script>