import AppHeader from "./AppHeader.vue";
import NavbarItem from "./NavbarItem.vue";
import NavbarDropdown from "./NavbarDropdown.vue";

export default {
  component: AppHeader,
  title: "AppHeader",
  argTypes: {
    menuBreakpoint: {
      options: ["sm", "md", "lg", "xl", "2xl", "none"],
      control: { type: "radio" },
    },
    appslot: {
      type: "string",
      default: "Default Slot Text",
    },
    navslot: {
      type: "string",
      default: "Default Slot Text",
    },
  },
};

const Template = (args) => ({
  components: { AppHeader, NavbarItem, NavbarDropdown },
  setup() {
    return { args };
  },
  template: `<AppHeader :menuBreakpoint="args.menuBreakpoint"><template #app-link>${args.appslot}</template><template #navbar-links>${args.navslot}</template></AppHeader>`,
});

export const Default = Template.bind({});
Default.args = {
  menuBreakpoint: "md",
  appslot: '<a href="/">MyLink</a>',
  navslot: `
      <NavbarItem class="active"><a href="/">Home</a></NavbarItem>
      <NavbarItem><a href="/">Away</a></NavbarItem>
      <NavbarItem><a href="/">Really Away</a></NavbarItem>`,
};

const SplitNavTemplate = (args) => ({
  components: { AppHeader, NavbarItem },
  setup() {
    return { args };
  },
  template: `<AppHeader><template #app-link>${args.appslot}</template><template #navbar-links>${args.navslot}</template><template #navbar-links-right>${args.navslotRight}</template></AppHeader>`,
});

export const SplitNav = SplitNavTemplate.bind({});
SplitNav.args = {
  ...Default.args,
  appslot: '<a href="/">MyLink</a>',
  navslot:
    '<NavbarItem class="active"><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really Away</a></NavbarItem>',
  navslotRight:
    '<NavbarItem><a href="/">Help</a></NavbarItem><NavbarItem><a href="/">Logout</a></NavbarItem>',
};

export const WithDropdownItems = Template.bind({});
WithDropdownItems.args = {
  ...Default.args,
  navslot: `
      <NavbarItem><a href="#">Item</a></NavbarItem>
      <NavbarDropdown label="Dropdown 1">
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
      </NavbarDropdown>
      <NavbarDropdown label="Dropdown 2">
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
      </NavbarDropdown>
      `,
};

export const WithLargeMenu = Template.bind({});
WithLargeMenu.args = {
  ...Default.args,
  navslot: `
      <NavbarItem v-for="idx in 8"><a href="#">My Nav Item {{ idx }} </a></NavbarItem>
      <NavbarDropdown label="Dropdown 1">
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
      </NavbarDropdown>
      <NavbarDropdown label="Dropdown 2">
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
        <NavbarItem><a href="#">Dropdown Item</a></NavbarItem>
      </NavbarDropdown>
      `,
};
