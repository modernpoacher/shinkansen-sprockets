declare module '#sprockets/sprockets/fieldset' {
  import Sprocket from '#sprockets/sprockets'

  export default class FieldsetSprocket extends Sprocket {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset' {
  export { default } from '#sprockets/sprockets/fieldset'
}
