require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/error-summary')

log('`shinkansen` is awake')

const {
  default: ErrorSummary
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = ErrorSummary
