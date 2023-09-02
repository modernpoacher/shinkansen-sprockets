require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/check-answers/group/visually-hidden-text')

log('`shinkansen` is awake')

module.exports = require('./visually-hidden-text.jsx')
