require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/fieldset/error-message')

log('`shinkansen` is awake')

const {
  default: ErrorMessage // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = ErrorMessage
