require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-sprockets/components/group/fieldset')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
