require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/error-summary')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
