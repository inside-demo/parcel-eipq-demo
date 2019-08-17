const sequence = require('post-sequence');

const plugins = {
  "posthtml-expressions": {
    "locals": {
      "active": "OK"
    }
  },
  "posthtml-include": {}
}

const posthtmlConfig = {
  plugins: sequence(plugins, {processor: 'posthtml', namespace: true})
};

module.exports = posthtmlConfig;