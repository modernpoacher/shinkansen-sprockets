require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/check-answers/group/change-answer')

log('`shinkansen` is awake')

module.exports = require('./change-answer.jsx')
