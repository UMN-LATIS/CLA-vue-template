import UniversityHeaderButtonContainer from './UniversityHeaderButtonContainer.vue';


import UniversityHeaderButton from './UniversityHeaderButton.vue';

export default {
  component: UniversityHeaderButtonContainer,
  title: 'UniversityHeaderButtonContainer',
  argTypes: {
    slot: {
      type: "string",
      default: "Default Slot Text",
    },
  },
};

const Template = args => ({
  components: { UniversityHeaderButtonContainer, UniversityHeaderButton },
  setup() {
    return { args};
  },
  template: `<UniversityHeaderButtonContainer>${args.slot}</UniversityHeaderButtonContainer>`,
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  slot: '<UniversityHeaderButton linkTarget="http://myu.umn.edu" :showBorder="false">MyU</UniversityHeaderButton> <UniversityHeaderButton linkTarget="http://onestop.umn.edu" :showBorder="false">OneStop</UniversityHeaderButton> <UniversityHeaderButton linkTarget="http://search.umn.edu" :showBorder="true">Search</UniversityHeaderButton>',
};
