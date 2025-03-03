declare module '#sprockets/sprockets/fieldset/error-message' {
  import ErrorMessage from '#sprockets/super/components/error-message'

  export default class FieldsetErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/error-message' {
  export { default } from '#sprockets/sprockets/fieldset/error-message'
}
