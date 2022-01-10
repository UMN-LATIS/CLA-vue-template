import Navbar from './Navbar.vue';
import NavbarItem from './NavbarItem.vue';


export default {
  component: Navbar,
  title: 'Navbar',
  argTypes: {
    slot: {
            type: "string",
            default: "Default Slot Text",
    },
  },
};

const Template = args => ({
  components: { Navbar, NavbarItem },
  setup() {
    return { args };
  },
  template: `<Navbar><template v-slot:navbar-links>${args.slot}</template></Navbar>`,
});

export const Default = Template.bind({});
Default.args = {
    slot: '<NavbarItem><a href="/">Home</a></NavbarItem><NavbarItem><a href="/">Away</a></NavbarItem><NavbarItem><a href="/">Really</a></NavbarItem>'
};
