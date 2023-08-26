require('@babel/register')({
  ignore: [
    /node_modules\/(?!@modernpoacher\/cogs|@modernpoacher\/sprockets)/
  ]
})

const debug = require('debug')

const log = debug('@modernpoacher/sprockets/components/group/check-answers/answer-title')

log('`sprockets` is awake')

module.exports = require('./answer-title.jsx')
