declare module '#sprockets/sprockets/fieldset/title' {
  import Title from '#sprockets/super/components/title'

  export type FieldsetProps = SprocketsTypes.Sprockets.Fieldset.Title.FieldsetProps

  export default class FieldsetTitle<P extends FieldsetProps> extends Title<P> {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/title' {
  export { default } from '#sprockets/sprockets/fieldset/title'
  export * from '#sprockets/sprockets/fieldset/title'
}
