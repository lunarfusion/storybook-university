# Storybook University Overview

An experimental university design system built with Storybook for Drupal theme integration.

# Starting

Storybook University uses Storybook with Vite and type of HTML. It uses the storybook sdc addon provided by iberdinsky: https://github.com/iberdinsky-skilld/sdc-addon

Clone this repo and do:

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

Run Storybook:

<code>npm run storybook</code>
