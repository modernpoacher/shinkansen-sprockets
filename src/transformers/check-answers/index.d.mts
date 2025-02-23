declare module '#sprockets/transformers/check-answers' {
  export type AnswerDefinitionType = SprocketsTypes.AnswerDefinitionType
  export type FieldChangeType = SprocketsTypes.FieldChangeType

  export default function transform (answer: SprocketsTypes.AnswerDefinitionType): SprocketsTypes.FieldChangeType
}

declare module 'shinkansen-sprockets/transformers/check-answers' {
  export { default } from '#sprockets/transformers/check-answers'
  export * from '#sprockets/transformers/check-answers'
}
