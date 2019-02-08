import reactAppRewirePostcss from 'react-app-rewire-postcss'

module.exports = function override(config, env) {
  reactAppRewirePostcss(config, {
    
  })
  return config;
}