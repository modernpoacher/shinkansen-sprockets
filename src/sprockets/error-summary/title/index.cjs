require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/error-summary/title')

log('`shinkansen` is awake')

const {
  default: component // @ts-ignore
} = require('./index.jsx')

module.exports = component
