require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/description')

log('`shinkansen` is awake')

const {
  default: Description // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Description
