# CLA Vue Templates

This repository contains basic VueJS components for the College of Liberal Arts web template. This includes the header with navigation, footer, and the main content container (or "PostIt").

These components should work in both Vue2 and Vue3 applications. 

## Development

This repository uses [Storybook](http://storybook.js.org) for component development and testing. To get started with storybook, follow the steps below.

```shell
> npm install
> npm run storybook
```

## Integration into a Vue app

This is not a package. Instead, its intended to be deployed within an existing app as a submodule. Add it to your project using a submodule include like this:

```git
git submodule add https://github.com/UMN-LATIS/CLA-vue-template.git resources/js/cla-vue-template
```

Applicatons hosting these templates will also need to include [Vue-Demi](https://github.com/vueuse/vue-demi). Vue2 applications will additionally need the [Vue Composition API](https://github.com/vuejs/composition-api). Be sure you're using webpack5 or the SVG images won't work properly. 

```shell
npm install --save vue-demi
npm install --save @vue/composition-api 
```

Within your Vue2 application's JS entrypoint, be sure to import and use the Compositon API.

```vue
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
```

Finally, you can begin loading the components, either globally or locally
```vue
Vue.component('app-header', require('./cla-vue-template/src/components/AppHeader.vue').default);
Vue.component('navbar-item', require('./cla-vue-template/src/components/NavbarItem.vue').default);
Vue.component('app-footer', require('./cla-vue-template/src/components/AppFooter.vue').default);
Vue.component('postit', require('./cla-vue-template/src/components/PostIt.vue').default);
```

In your applications's CSS file, import the global CSS values
```scss
@import "../js/cla-vue-template/src/index.css";
```

## Using the components


The AppHeader component has two named slots, to include the application title (with an optional link) as well as the nav components. See the AppHeader storybook story for an example of that view in production. The other components have no external props or slots. They should have no impact on the overall CSS of your application. As long as your application isn't setting styles on markup elements, it should be able to coexist with other UI libraries. 

You probably want to wrap all of your components in a `<div class="cla-template-wrapper"></div>` block to set the minimum height to 100vh and ensure your footer is at the bottom. 

## Updating components

If it's the first time you check-out a repo that uses this submodule, you'll need to use --init to initialize:

```
git submodule update --init --recursive
```

After that, to pull changes from the template library into your application, update the submodule:

```git
git submodule update --recursive --remote
```

## Other Notes

### Github Actions

Remember that you need to checkout submodules when adding this to an app. If using GitHub actions, you can adjust your checkout action:

```
- name: Checkout code
uses: actions/checkout@v2
with:
    submodules: recursive
```

### Deployer

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
