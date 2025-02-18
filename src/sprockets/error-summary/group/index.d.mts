declare module '#sprockets/sprockets/error-summary/group' {
  import Group from '#sprockets/components/group'

  type ErrorSummaryProps = SprocketsTypes.Components.Group.ErrorSummary.ErrorSummaryProps
  type ErrorSummaryState = SprocketsTypes.Components.Group.ErrorSummary.ErrorSummaryState

  export default class ErrorSummaryGroup<P extends ErrorSummaryProps, S extends ErrorSummaryState> extends Group<P, S> {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary/group' {
  export type ErrorSummaryProps = SprocketsTypes.Components.Group.ErrorSummary.ErrorSummaryProps
  export type ErrorSummaryState = SprocketsTypes.Components.Group.ErrorSummary.ErrorSummaryState

  export { default } from '#sprockets/sprockets/error-summary/group'
}
