require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/check-answers/title')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
