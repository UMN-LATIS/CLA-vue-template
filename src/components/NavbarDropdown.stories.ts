import { Meta, StoryFn } from "@storybook/vue3";
import NavbarDropdown from "./NavbarDropdown.vue";
import NavbarItem from "./NavbarItem.vue";

export default {
  component: NavbarDropdown,
  title: "NavbarDropdown",
} as Meta<typeof NavbarDropdown>;

const Template: StoryFn<typeof NavbarDropdown> = (args) => ({
  components: { NavbarDropdown, NavbarItem },

  setup() {
    return { args };
  },
  template: `
    <NavbarDropdown v-bind="args">
      <NavbarItem>
        <a href="#">Item 1</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Item 2</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Item 3</a>
      </NavbarItem>
    </NavbarDropdown>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: "Dropdown Menu",
};
