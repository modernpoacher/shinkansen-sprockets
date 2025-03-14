require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/super/components')

log('`shinkansen` is awake')

module.exports.Description = require('./description/index.cjs')
module.exports.ErrorMessage = require('./error-message/index.cjs')
module.exports.Group = require('./group/index.cjs')
module.exports.Title = require('./title/index.cjs')
