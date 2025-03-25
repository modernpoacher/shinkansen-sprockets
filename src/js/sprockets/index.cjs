require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets')

log('`shinkansen` is awake')

const {
  default: Sprocket
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Sprocket
