
import NavbarItem from './NavbarItem.vue';

export default {
  component: NavbarItem,
  title: 'NavbarItem',
  argTypes: {
    slot: {
      type: "string",
      default: "Default Slot Text",
    },
  },
};

const Template = args => ({
  components: { NavbarItem },
  setup() {
    return { args };
  },
  template: `<NavbarItem>${args.slot}</NavbarItem>`,
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  slot: '<a href="/">Home</a>',
};
