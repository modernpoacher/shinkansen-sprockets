require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/fieldset')

log('`shinkansen` is awake')

const {
  default: Fieldset
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Fieldset
