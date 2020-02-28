'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev_env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
