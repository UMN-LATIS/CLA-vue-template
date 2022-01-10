import CollegeHeader from './CollegeHeader.vue';


export default {
  component: CollegeHeader,
  title: 'CollegeHeader',
  argTypes: {
    slot: {
            type: "string",
            default: "Default Slot Text",
    },
  },
};

const Template = args => ({
  components: { CollegeHeader },
  setup() {
    return { args };
  },
  template: `<CollegeHeader><template v-slot:app-link>${args.slot}</template></CollegeHeader>`,
});

export const Default = Template.bind({});
Default.args = {
    slot: '<a href="/">MyLink</a>'
};
