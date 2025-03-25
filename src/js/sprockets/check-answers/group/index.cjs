require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/check-answers/group')

log('`shinkansen` is awake')

const {
  default: Group
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Group
