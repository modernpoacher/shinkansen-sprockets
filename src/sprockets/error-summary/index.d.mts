declare module '#sprockets/sprockets/error-summary' {
  import Sprocket from '#sprockets/sprockets'

  export default class ErrorSummarySprocket extends Sprocket {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary' {
  export { default } from '#sprockets/sprockets/error-summary'
}
