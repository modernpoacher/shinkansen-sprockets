declare module '#sprockets/transformers/error-summary' {
  export default function transform (error: SprocketsTypes.ErrorDefinitionType): SprocketsTypes.FieldErrorType
}

declare module 'shinkansen-sprockets/transformers/error-summary' {
  export type ErrorDefinitionType = SprocketsTypes.ErrorDefinitionType

  export type FieldErrorType = SprocketsTypes.FieldErrorType

  export { default } from '#sprockets/transformers/error-summary'
}
