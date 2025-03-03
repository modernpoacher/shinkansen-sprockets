declare module '#sprockets/sprockets/check-answers/title' {
  import Title from '#sprockets/super/components/title'

  export type CheckAnswersProps = SprocketsTypes.Sprockets.CheckAnswers.Title.CheckAnswersProps

  export default class CheckAnswersTitle<P extends CheckAnswersProps> extends Title<P> {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers/title' {
  export { default } from '#sprockets/sprockets/check-answers/title'
  export * from '#sprockets/sprockets/check-answers/title'
}
