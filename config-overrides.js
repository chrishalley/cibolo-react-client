const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
// const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
// const postcssNested = require('postcss-nested');

module.exports = (config) => {

  reactAppRewirePostcss(config, {
    map: true,
    plugins: () => [
      postcssImport(),
      postcssPresetEnv({
        stage: 0,
        features: {
          'nesting-rules': true,
        },
      }),
      postcssSimpleVars()
    ]
  });

  return config
}


// module.exports = (config) => reactAppRewirePostcss(config, {
//   map: true,
//   plugins: () => [
//     postcssImport(),
//     postcssPresetEnv({
//       stage: 0,
//       features: {
//         'nesting-rules': true,
//       },
//     }),
//     postcssSimpleVars()
//   ]
// });