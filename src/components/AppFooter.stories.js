import AppFooter from './AppFooter.vue';


export default {
  component: AppFooter,
  title: 'AppFooter',
  argTypes: {
    contact: {
      type: "string",
      default: "Contact",
    }
  },
};

const Template = args => ({
  components: { AppFooter },
  setup() {
    return { args };
  },
  template: `<AppFooter v-bind="args"></AppFooter>`,
});

export const Default = Template.bind({});
Default.args = {
  contact: 'latistecharch@umn.edu'
};
