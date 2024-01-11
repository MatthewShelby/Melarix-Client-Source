const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
      alias({
            '@co': './src/component',
            '@as': './src/asset/'
      })(config)

      return config
}