declare module '#sprockets/sprockets/check-answers/title' {
  import Title from '#sprockets/components/title'

  export type CheckAnswersProps = SprocketsTypes.Components.Title.CheckAnswers.CheckAnswersProps

  export default class CheckAnswersTitle<P extends CheckAnswersProps> extends Title<P> {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers/title' {
  export { default } from '#sprockets/sprockets/check-answers/title'
  export * from '#sprockets/sprockets/check-answers/title'
}
