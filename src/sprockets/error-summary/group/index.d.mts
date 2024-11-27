declare module '#sprockets/sprockets/error-summary/group' {
  import Group from '#sprockets/components/group'

  export default class ErrorSummaryGroup extends Group {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary/group' {
  export { default } from '#sprockets/sprockets/error-summary/group'
}
