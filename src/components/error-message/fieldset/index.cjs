require('@babel/register')({ configFile: require.resolve('../../../../babel.config.cjs') })

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/error-message/fieldset')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
