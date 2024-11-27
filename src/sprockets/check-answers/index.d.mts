declare module '#sprockets/sprockets/check-answers' {
  import Sprocket from '#sprockets/sprockets'

  export default class ErrorSummarySprocket extends Sprocket {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers' {
  export { default } from '#sprockets/sprockets/check-answers'
}
