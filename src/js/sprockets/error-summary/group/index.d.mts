declare module '#sprockets/sprockets/error-summary/group' {
  import Group from '#sprockets/super/components/group'

  export type ErrorSummaryProps = SprocketsTypes.Sprockets.ErrorSummary.Group.ErrorSummaryProps
  export type ErrorSummaryState = SprocketsTypes.Sprockets.ErrorSummary.Group.ErrorSummaryState

  export default class ErrorSummaryGroup<P extends ErrorSummaryProps, S extends ErrorSummaryState> extends Group<P, S> {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary/group' {
  export { default } from '#sprockets/sprockets/error-summary/group'
  export * from '#sprockets/sprockets/error-summary/group'
}
