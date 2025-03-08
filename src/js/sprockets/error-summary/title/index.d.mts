declare module '#sprockets/sprockets/error-summary/title' {
  import Title from '#sprockets/super/components/title'

  export type ErrorSummaryProps = SprocketsTypes.Sprockets.ErrorSummary.Title.ErrorSummaryProps

  export default class ErrorSummaryTitle<P extends ErrorSummaryProps> extends Title<P> {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary/title' {
  export { default } from '#sprockets/sprockets/error-summary/title'
  export * from '#sprockets/sprockets/error-summary/title'
}
