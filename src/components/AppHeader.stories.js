import AppHeader from './AppHeader.vue';
import NavbarItem from './NavbarItem.vue';


export default {
  component: AppHeader,
  title: 'AppHeader',
  argTypes: {
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

const Template = args => ({
  components: { AppHeader, NavbarItem },
  setup() {
    return { args };
  },
  template: `<AppHeader><template #app-link>${args.appslot}</template><template #navbar-links>${args.navslot}</template></AppHeader>`,
});

export const Default = Template.bind({});
Default.args = {
    appslot: '<a href="/">MyLink</a>',
    navslot: '<NavbarItem class="active"><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really Away</a></NavbarItem>'
};

const Template2 = args => ({
  components: { AppHeader, NavbarItem },
  setup() {
    return { args };
  },
  template: `<AppHeader><template #app-link>${args.appslot}</template><template #navbar-links>${args.navslot}</template><template #navbar-links-right>${args.navslotRight}</template></AppHeader>`,
});


export const SplitNav = Template2.bind({});
SplitNav.args = {
    appslot: '<a href="/">MyLink</a>',
    navslot: '<NavbarItem class="active"><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really Away</a></NavbarItem>',
    navslotRight: '<NavbarItem><a href="/">Help</a></NavbarItem><NavbarItem><a href="/">Logout</a></NavbarItem>'
};
