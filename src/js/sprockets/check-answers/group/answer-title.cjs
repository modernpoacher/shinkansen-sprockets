require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/check-answers/group/answer-title')

log('`shinkansen` is awake')

// @ts-ignore
module.exports = require('./answer-title.jsx')
