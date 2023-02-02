import Navbar from "./Navbar.vue";
import NavbarItem from "./NavbarItem.vue";
import NavbarDropdown from "./NavbarDropdown.vue";

export default {
  component: Navbar,
  title: "Navbar",
  argTypes: {
    slot: {
      type: "string",
      default: "Default Slot Text",
    },
    rightSlot: {
      type: "string",
      default: "Default Slot Text",
    },
  },
};

const Template = (args) => ({
  components: { Navbar, NavbarItem, NavbarDropdown },
  setup() {
    return { args };
  },
  template: `
    <Navbar><template v-slot:navbar-links>${args.slot}</template></Navbar>`,
});

export const Default = Template.bind({});
Default.args = {
  slot: '<NavbarItem><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really</a></NavbarItem>',
};

const Template2 = (args) => ({
  components: { Navbar, NavbarItem },
  setup() {
    return { args };
  },
  template: `<Navbar><template v-slot:navbar-links>${args.slot}</template><template v-slot:navbar-links-right>${args.slotRight}</template></Navbar>`,
});

export const SplitBar = Template2.bind({});
SplitBar.args = {
  slot: '<NavbarItem><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really</a></NavbarItem>',
  slotRight: '<NavbarItem><a href="/">Logout</a></NavbarItem>',
};

export const WithDropdownItems = Template.bind({});
WithDropdownItems.args = {
  slot: `
    <NavbarItem><a href="#">Item</a></NavbarItem>
    <NavbarDropdown label="Dropdown">
      <NavbarItem><a href="#">Item</a></NavbarItem>
      <NavbarItem><a href="#">Item</a></NavbarItem>
      <NavbarItem><a href="#">Item</a></NavbarItem>
    </NavbarDropdown>
    <NavbarItem><a href="#">Item</a></NavbarItem>
    <NavbarItem><a href="#">Item</a></NavbarItem>
 `,
};
