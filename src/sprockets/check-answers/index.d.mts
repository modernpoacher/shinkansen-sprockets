declare module '#sprockets/sprockets/check-answers' {
  import Sprocket from '#sprockets/sprockets'

  export type CheckAnswersProps = SprocketsTypes.Sprockets.Sprocket.CheckAnswers.CheckAnswersProps

  export default class CheckAnswersSprocket<P extends CheckAnswersProps> extends Sprocket<P> {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers' {
  export { default } from '#sprockets/sprockets/check-answers'
  export * from '#sprockets/sprockets/check-answers'
}
