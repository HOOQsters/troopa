var eslint = require('eslint')
var pkg = require('./package.json')

var config = require('eslint-config-koopa')

module.exports = {
  eslint: eslint,
  cmd: 'troopa',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'ノコノコ',
  eslintConfig: {
    baseConfig: config
  },
  formatter: 'troopa formatter needed'
}
