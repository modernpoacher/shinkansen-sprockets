import debug from 'debug'

const log = debug('shinkansen-sprockets/components')

log('`shinkansen` is awake')

export { default as Description } from './description/index.cjs'
export { default as ErrorMessage } from './error-message/index.cjs'
export { default as Group } from './group/index.cjs'
export { default as Title } from './title/index.cjs'
