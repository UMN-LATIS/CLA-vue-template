# CLA Vue Templates

This repository contains basic VueJS components for the College of Liberal Arts web template. This includes the header with navigation, footer, and the main content container (or "PostIt").

These components should work in both Vue2 and Vue3 applications.

There are two methods of using this library:

1. NPM package
2. Git submodule

Instructions for both methods below.

## Option 1: As an NPM Package

### Installation

Add the package to your project using npm or yarn:

```sh
yarn add @umn-latis/cla-vue-template
```

### Usage

Import the global stylesheet into your application's js entrypoint (or your main css file):

```ts
// application.ts
import "@umn-latis/cla-vue-template/dist/style.css";
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

## Option 2: As a git submodule

### Installation

As an alternative to an NPM install, you can use this repo as a git submodule. Add it to your project using a submodule include like this:

```git
git submodule add https://github.com/UMN-LATIS/CLA-vue-template.git resources/js/cla-vue-template
```

Applicatons hosting these templates will also need to include [Vue-Demi](https://github.com/vueuse/vue-demi). Vue2 applications will additionally need the [Vue Composition API](https://github.com/vuejs/composition-api). Be sure you're using webpack5 or the SVG images won't work properly.

```shell
npm install --save vue-demi
npm install --save @vue/composition-api
```

### Usage

Within your Vue2 application's JS entrypoint, be sure to import and use the Compositon API.

```vue
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
```

Finally, you can begin loading the components, either globally or locally

```vue
Vue.component('app-header',
require('./cla-vue-template/src/components/AppHeader.vue').default);
Vue.component('navbar-item',
require('./cla-vue-template/src/components/NavbarItem.vue').default);
Vue.component('app-footer',
require('./cla-vue-template/src/components/AppFooter.vue').default);
Vue.component('postit',
require('./cla-vue-template/src/components/PostIt.vue').default);
```

In your applications's CSS file, import the global CSS values

```scss
@import "../js/cla-vue-template/src/index.css";
```

### Updating the git submodule

If it's the first time you check-out a repo that uses this submodule, you'll need to use --init to initialize:

```
git submodule update --init --recursive
```

After that, to pull changes from the template library into your application, update the submodule:

```git
git submodule update --recursive --remote
```

### Add a Github Action for the git submodule

Remember that you need to checkout submodules when adding this to an app. If using GitHub actions, you can adjust your checkout action:

```
- name: Checkout code
uses: actions/checkout@v2
with:
    submodules: recursive
```

### Configure Deployer for the Git Submodule

If you're using deployer, you'll need to adjust your `deploy.php` as well:

1. Make sure you're `update_code_strategy` is set ot `clone`:

   ```php
   set('update_code_strategy', 'clone');
   ```

2. Create a `deploy:git:submodules` task, and sequence it to run after `deploy:update_code`:

   ```php
   task('deploy:git:submodules', function () {
       $git = get('bin/git');

       cd('{{release_path}}');
       run("$git submodule update --init");
   });

   after('deploy:update_code', 'deploy:git:submodules');
   ```

## Other usage notes

The AppHeader component has two named slots, to include the application title (with an optional link) as well as the nav components. See the AppHeader storybook story for an example of that view in production. The other components have no external props or slots. They should have no impact on the overall CSS of your application. As long as your application isn't setting styles on markup elements, it should be able to coexist with other UI libraries.

You probably want to wrap all of your components in a `<div class="cla-template-wrapper"></div>` block to set the minimum height to 100vh and ensure your footer is at the bottom.

## Development

### Storybook

This repository uses [Storybook](http://storybook.js.org) for component development and testing. To get started with storybook, follow the steps below.

```shell
> yarn install
> yarn storybook
```

### Building and releasing the NPM package

You can build the npm package with `yarn build`. This will create the files and type definitions within `/dist`.

To test your local build, use `yarn link` and then try it out on a local project of your choice.

To deploy the updated package, run `npx release-it` and follow the prompts.
