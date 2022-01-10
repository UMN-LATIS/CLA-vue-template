import AppFooter from './AppFooter.vue';


export default {
  component: AppFooter,
  title: 'AppFooter',
  argTypes: {

  },
};

const Template = args => ({
  components: { AppFooter },
  setup() {
    return { args };
  },
  template: `<AppFooter></AppFooter>`,
});

export const Default = Template.bind({});
Default.args = {
};
