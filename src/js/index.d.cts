import type CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

import type {
  CheckAnswersProps
} from '#sprockets/sprockets/check-answers'

import type ErrorSummarySprocket from '#sprockets/sprockets/error-summary'

import type {
  ErrorSummaryProps
} from '#sprockets/sprockets/error-summary'

import type FieldsetSprocket from '#sprockets/sprockets/fieldset'

import type {
  FieldsetProps
} from '#sprockets/sprockets/fieldset'

export type AnswerDefinitionType = SprocketsTypes.AnswerDefinitionType
export type FieldChangeType = SprocketsTypes.FieldChangeType
export type ErrorDefinitionType = SprocketsTypes.ErrorDefinitionType
export type FieldErrorType = SprocketsTypes.FieldErrorType

export { default as CheckAnswersSprocket } from '#sprockets/sprockets/check-answers'
export { default as ErrorSummarySprocket } from '#sprockets/sprockets/error-summary'
export { default as FieldsetSprocket } from '#sprockets/sprockets/fieldset'

declare const sprockets: {
  CheckAnswersSprocket: CheckAnswersSprocket<CheckAnswersProps>
  ErrorSummarySprocket: ErrorSummarySprocket<ErrorSummaryProps>
  FieldsetSprocket: FieldsetSprocket<FieldsetProps>
}

export default sprockets
