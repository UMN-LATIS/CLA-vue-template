import UniversityHeaderButton from './UniversityHeaderButton.vue';


export default {
  component: UniversityHeaderButton,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'UniversityHeaderButton',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {

  },
};


const Template = args => ({
  components: { UniversityHeaderButton },
  setup() {
    return { args };
  },
  template: '<UniversityHeaderButton v-bind="args">{{ args.slotText }}</UniversityHeaderButton>',
});
export const Default = Template.bind({});
Default.args = {
  linkTarget: "http://www.google.com",
  slotText: 'Google',
  showBorder: false
};
