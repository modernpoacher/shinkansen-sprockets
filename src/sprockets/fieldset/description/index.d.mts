declare module '#sprockets/sprockets/fieldset/description' {
  import Description from '#sprockets/super/components/description'

  export default class FieldsetDescription extends Description {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/description' {
  export { default } from '#sprockets/sprockets/fieldset/description'
}
