import UMNWordmark from './UMNWordmark.vue';


export default {
  component: UMNWordmark,
  title: 'UMNWordmark',
  argTypes: {

  },
};

const Template = args => ({
  components: { UMNWordmark },
  setup() {
    return { args };
  },
  template: `<UMNWordmark></UMNWordmark>`,
});

export const Default = Template.bind({});
Default.args = {
};
