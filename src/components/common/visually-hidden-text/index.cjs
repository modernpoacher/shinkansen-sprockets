require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/common/visually-hidden-text')

log('`shinkansen` is awake')

const {
  default: VisuallyHiddenText // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = VisuallyHiddenText
