require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/fieldset/title')

log('`shinkansen` is awake')

const {
  default: Title // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Title
