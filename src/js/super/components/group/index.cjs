require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/super/components/group')

log('`shinkansen` is awake')

const {
  default: Group
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Group
