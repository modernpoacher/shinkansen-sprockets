require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-sprockets/super/components')

log('`shinkansen` is awake')

const {
  default: Description
} = require('./description/index.jsx')

const {
  default: ErrorMessage
} = require('./error-message/index.jsx')

const {
  default: Group
} = require('./group/index.jsx')

const {
  default: Title
} = require('./title/index.jsx')

module.exports.Description = Description
module.exports.ErrorMessage = ErrorMessage
module.exports.Group = Group
module.exports.Title = Title
