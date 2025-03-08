import debug from 'debug'

import CheckAnswersSprocket from './sprockets/check-answers/index.cjs'
import ErrorSummarySprocket from './sprockets/error-summary/index.cjs'
import FieldsetSprocket from './sprockets/fieldset/index.cjs'

const log = debug('shinkansen-sprockets')

log('`shinkansen` is awake')

export { default as CheckAnswersSprocket } from './sprockets/check-answers/index.cjs'
export { default as ErrorSummarySprocket } from './sprockets/error-summary/index.cjs'
export { default as FieldsetSprocket } from './sprockets/fieldset/index.cjs'

export default {
  CheckAnswersSprocket,
  ErrorSummarySprocket,
  FieldsetSprocket
}
