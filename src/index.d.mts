declare module '#sprockets' {
  export type AnswerDefinitionType = SprocketsTypes.AnswerDefinitionType
  export type FieldChangeType = SprocketsTypes.FieldChangeType
  export type ErrorDefinitionType = SprocketsTypes.ErrorDefinitionType
  export type FieldErrorType = SprocketsTypes.FieldErrorType

  export { default as CheckAnswersSprocket } from '#sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from '#sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from '#sprockets/sprockets/fieldset'
}

declare module 'shinkansen-sprockets' {
  export * from '#sprockets'
}
