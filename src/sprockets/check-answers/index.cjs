require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/sprockets/check-answers')

log('`shinkansen` is awake')

const {
  default: CheckAnswers // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = CheckAnswers
