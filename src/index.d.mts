declare module '#sprockets' {
  export { default as CheckAnswersSprocket } from '#sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from '#sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from '#sprockets/sprockets/fieldset'
}

declare module 'shinkansen-sprockets' {
  export * from '#sprockets'
}
