import { Meta, StoryFn } from "@storybook/vue3";
import MenuButton from "./MenuButton.vue";

export default {
  component: MenuButton,
} as Meta<typeof MenuButton>;

const Template: StoryFn<typeof MenuButton> = (args) => ({
  components: { MenuButton },
  setup() {
    return { args };
  },
  template: `
    <MenuButton v-bind="args" />
    </MenuButton>
  `,
});

export const Default = Template.bind({});
Default.args = {};
