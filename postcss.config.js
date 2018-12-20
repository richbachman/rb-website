const postcssPresetEnv = require('postcss-preset-env')
const normalize = require('postcss-normalize')
const nested = require('postcss-nested')
const pxtorem = require('postcss-pxtorem')
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano');

module.exports = () => ({
  plugins: [
    atImport(),
    normalize(),
    nested(),
    postcssPresetEnv({
      stage: 1
    }),
    pxtorem({
      propList: ['*']
    }),
    // cssnano({
    //     discardComments: {
    //         removeAll: true
    //     }
    // })
  ],
})
