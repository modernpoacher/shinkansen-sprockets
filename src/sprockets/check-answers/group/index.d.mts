declare module '#sprockets/sprockets/check-answers/group' {
  import Group from '#sprockets/components/group'

  type CheckAnswersProps = SprocketsTypes.Components.Group.CheckAnswers.CheckAnswersProps
  type CheckAnswersState = SprocketsTypes.Components.Group.CheckAnswers.CheckAnswersState

  export default class CheckAnswersGroup<P extends CheckAnswersProps, S extends CheckAnswersState> extends Group<P, S> {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers/group' {
  export type CheckAnswersProps = SprocketsTypes.Components.Group.CheckAnswers.CheckAnswersProps
  export type CheckAnswersState = SprocketsTypes.Components.Group.CheckAnswers.CheckAnswersState

  export { default } from '#sprockets/sprockets/check-answers/group'
}
