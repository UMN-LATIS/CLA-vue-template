import { Meta, StoryFn } from "@storybook/vue3";
import HelloWorld from "./HelloWorld.vue";

export default {
  component: HelloWorld,
} as Meta<typeof HelloWorld>;

const Template: StoryFn<typeof HelloWorld> = (args) => ({
  components: { HelloWorld },
  setup() {
    return { args };
  },
  template: `
    <HelloWorld v-bind="args">
    </HelloWorld>
  `,
});

export const Default = Template.bind({});
Default.args = {};
