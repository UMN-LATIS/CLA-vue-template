import UniversityHeader from './UniversityHeader.vue';


export default {
  component: UniversityHeader,
  title: 'UniversityHeader',
  argTypes: {
    
  },
};

const Template = args => ({
  components: { UniversityHeader },
  setup() {
    return { args };
  },
  template: `<UniversityHeader/>`,
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  
};
