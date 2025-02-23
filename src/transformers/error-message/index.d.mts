declare module '#sprockets/transformers/error-message' {
  export type ErrorDefinitionType = SprocketsTypes.ErrorDefinitionType
  export type FieldErrorType = SprocketsTypes.FieldErrorType

  export default function transform (error: SprocketsTypes.ErrorDefinitionType): SprocketsTypes.FieldErrorType
}

declare module 'shinkansen-sprockets/transformers/error-message' {
  export { default } from '#sprockets/transformers/error-message'
  export * from '#sprockets/transformers/error-message'
}
