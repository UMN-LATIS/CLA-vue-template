import CLAWordmark from './CLAWordmark.vue';


export default {
  component: CLAWordmark,
  title: 'CLAWordmark',
  argTypes: {

  },
};

const Template = args => ({
  components: { CLAWordmark },
  setup() {
    return { args };
  },
  template: `<CLAWordmark></CLAWordmark>`,
});

export const Default = Template.bind({});
Default.args = {
};
