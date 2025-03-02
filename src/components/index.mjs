import debug from 'debug'

const log = debug('shinkansen-sprockets/components')

log('`shinkansen` is awake')

export * as Description from './description/index.cjs'
export * as ErrorMessage from './error-message/index.cjs'
export * as Group from './group/index.cjs'
export * as Title from './title/index.cjs'
