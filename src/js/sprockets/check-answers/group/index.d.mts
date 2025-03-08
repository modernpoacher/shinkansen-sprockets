declare module '#sprockets/sprockets/check-answers/group' {
  import Group from '#sprockets/super/components/group'

  export type CheckAnswersProps = SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersProps
  export type CheckAnswersState = SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersState

  export default class CheckAnswersGroup<P extends CheckAnswersProps, S extends CheckAnswersState> extends Group<P, S> {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers/group' {
  export { default } from '#sprockets/sprockets/check-answers/group'
  export * from '#sprockets/sprockets/check-answers/group'
}
