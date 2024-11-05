# Storybook University Overview

An experimental university design system built with Storybook for Drupal theme integration.

# Starting

Storybook University uses Storybook with Vite and type of HTML. It uses the storybook sdc addon provided by iberdinsky: https://github.com/iberdinsky-skilld/sdc-addon

## After cloning this repo, navigate to the directory and run
<code>npm create vite@latest vitejs -- --template vanilla</code>
<code>npx storybook@latest init --type html</code>

- When prompted, select Vite.
- Storybook will run. On iOS, enter "CTL + C" to cancel and continue this setup.

<code>npm i storybook-addon-sdc</code>

## Add this content to .storybook/main.js:

<code>
const config = {
  stories: ["../components/**/*.component.yml"], // Your components directory.
  addons: [
    {
      name: "storybook-addon-sdc",
      options: {
        sdcStorybookOptions: {
          namespace: "emory" // Your namespace.
        },
        vitePluginTwigDrupalOptions: {}, // vite-plugin-twig-drupal options.
        jsonSchemaFakerOptions: {} // json-schema-faker options
      }
    },
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {}
  }
}
export default config
</code>

## Run storybook

<code>npm run storybook</code>


# Using PostCSS

<code>npm install autoprefixer</code>
<code>npm i postcss-nested</code>
<code>npm i postcss-import</code>
<code>npm i -D postcss-load-config</code>

## postcss.config.js
Create a file named postcss.config.js in the root of your project, and add this content:

<code>
module.exports = {
  // Add your installed PostCSS plugins here:
  plugins: [
    require('postcss-import'), // postcss-import must be first
    require('autoprefixer'),
    require('postcss-nested')
    // don't put devDependencies here, only dependencies
  ],
};
</code>

## Dependencies
Add to your package.json devDependencies:

<code>
    "postcss-load-config": "^6.0.1",
    "postcss-loader": "^8.1.1",
</code>

Add to your package.json dependencies:

<code>
  "dependencies": {
  "autoprefixer": "^10.4.20",
  "postcss-import": "^16.1.0",
  "postcss-nested": "^6.2.0",
  "storybook-addon-sdc": "^0.1.5"
}
</code>

## Run Storybook

<code>npm run storybook</code>
