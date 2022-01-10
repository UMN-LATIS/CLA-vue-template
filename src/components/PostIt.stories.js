
import PostIt from './PostIt.vue';

export default {
  component: PostIt,
  title: 'PostIt',
  argTypes: {
  },
};

const Template = args => ({
  components: { PostIt },
  setup() {
    return { args };
  },
  template: `<PostIt>${args.slot}</PostIt>`,
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  slot: '<h1>Hello World</h1>',
};
