import { Default as AppHeaderDefault } from './AppHeader.stories';
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import PostIt from './PostIt.vue';
import NavbarItem from './NavbarItem.vue';

export default {
  title: 'SamplePage',
  argTypes: {

  },
};


const Template = args => ({
  components: { AppFooter, AppHeaderDefault,AppHeader, NavbarItem, PostIt },
  setup() {
    return { args, AppHeaderDefault };
  },
  template: `<div class="cla-template-wrapper"><AppHeader><template #app-link>${AppHeaderDefault.args.appslot}</template><template #navbar-links>${AppHeaderDefault.args.navslot}</template></AppHeader><PostIt>${args.postitContent}</PostIt><AppFooter></AppFooter></div>`,
});

export const Default = Template.bind({});
Default.args = {
  postitContent: "<h1>Hello World!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
  
};
