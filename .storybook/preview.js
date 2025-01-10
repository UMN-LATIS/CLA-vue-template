import "../src/index.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  backgrounds: {
    default: "umn-neutral-bg",
    values: [
      {
        name: "transparent",
        value: "transparent",
      },
      {
        name: "white",
        value: "#fff",
      },
      {
        name: "umn-neutral-bg",
        value: "#f9f7f6",
      },
    ],
  },
};
