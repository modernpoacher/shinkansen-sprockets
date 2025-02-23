declare module '#sprockets/sprockets/error-summary' {
  import Sprocket from '#sprockets/sprockets'

  export type ErrorSummaryProps = SprocketsTypes.Sprockets.Sprocket.ErrorSummary.ErrorSummaryProps

  export default class ErrorSummarySprocket<P extends ErrorSummaryProps> extends Sprocket<P> {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary' {
  export { default } from '#sprockets/sprockets/error-summary'
  export * from '#sprockets/sprockets/error-summary'
}
