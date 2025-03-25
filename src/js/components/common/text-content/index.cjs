require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/common/text-content')

log('`shinkansen` is awake')

const {
  default: TextContent
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = TextContent
