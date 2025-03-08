require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets')

log('`shinkansen` is awake')

const CheckAnswersSprocket = require('./sprockets/check-answers/index.cjs')
const ErrorSummarySprocket = require('./sprockets/error-summary/index.cjs')
const FieldsetSprocket = require('./sprockets/fieldset/index.cjs')

module.exports.CheckAnswersSprocket = CheckAnswersSprocket
module.exports.ErrorSummarySprocket = ErrorSummarySprocket
module.exports.FieldsetSprocket = FieldsetSprocket
