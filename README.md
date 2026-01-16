# CLA Vue Templates

This repository contains basic Vue3 components for the College of Liberal Arts web template. This includes the header with navigation, footer, and the main content container (or "PostIt").


### Installation

Add the package to your project using npm or yarn:

```sh
npm install @umn-latis/cla-vue-template
```

### Usage

Import the global stylesheet into your application's js entrypoint (or your main css file):

```ts
// application.ts
import "@umn-latis/cla-vue-template/dist/index.css";
```

Once the global stylesheet is imported, you can use the components within any other `.vue` file:

```ts
// App.vue
import { AppHeader, AppFooter } from "@umn-latis/cla-vue-template";
```

### Usage within `blade` and `erb` templates

You can also use the components "globally" within your templates.

#### Prep your build tool

To use the components outside of a `.vue` single file component (SFC), you'll need to configure your build tool (e.g. Vite) so that it uses `vue.esm-bundler.js` for `vue`. With Vite, you'll alias `vue` to `vue/dist/vue.esm-bundler.js`, like so:

```js
// vite.config.js
import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [RubyPlugin(), vue()],
  resolve: {
    alias: {
      // use vue's runtime compiler to support vue components
      // directly within blade templates
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});
```

#### Import components into your entrypoint

Once this is done, import your components into your entrypoint and make them globally available within your app:

```ts
// application.ts
import { createApp } from "vue";
import * as UMNComponents from "@umn-latis/cla-vue-template";
import "@umn-latis/cla-vue-template/dist/style.css";

const components = {
  "umn-app-header": UMNComponents.AppHeader,
  "umn-app-footer": UMNComponents.AppFooter,
};

// create the app with the components, mount it,
// then use the components anywhere within <div id="app">
createApp({ components }).mount("#app");
```

#### Update Your Template file

Wrap your content with `<div id="app">`, so that you can use vue content any place within:

```diff
<!-- application.html.erb -->
<!DOCTYPE html>
<html lang="en">
  <head>
    ... <%= vite_client_tag %> <%= vite_typescript_tag 'application' %>
  </head>
  <body>
+    <div id="app">
        <div class="container"><%= flash_messages %> <%= yield %></div>
+    </div>
  </body>
</html>
```

Then use your components within the Vue app mount point:

```diff
<!-- application.html.erb -->
<!DOCTYPE html>
<html lang="en">
  <head>
    ... <%= vite_client_tag %> <%= vite_typescript_tag 'application' %>
  </head>
  <body>
    <div id="app">
+       <umn-app-header />
           <div class="container"><%= flash_messages %> <%= yield %></div>
+       <umn-app-footer />
    </div>
  </body>
</html>
```
## Other usage notes

The AppHeader component has two named slots, to include the application title (with an optional link) as well as the nav components. See the AppHeader storybook story for an example of that view in production. The other components have no external props or slots. They should have no impact on the overall CSS of your application. As long as your application isn't setting styles on markup elements, it should be able to coexist with other UI libraries.

You probably want to wrap all of your components in a `<div class="cla-template-wrapper"></div>` block to set the minimum height to 100vh and ensure your footer is at the bottom.

## Local development

```sh
# install dependencies
npm install

# start dev page
npm run dev
```

## Build and Release

```sh
# build and release
npm run release
```

## `npm link` for local testing in projects

You can build and test locally before releasing with `npm link`:

```sh
# in this package directory
npm link

# in your local project
npm link @umn-latis/cla-vue-template

# to unlink later from your local project
npm unlink @umn-latis/cla-vue-template

# to remove the link from this package directory
npm unlink
```

