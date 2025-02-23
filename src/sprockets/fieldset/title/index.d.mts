declare module '#sprockets/sprockets/fieldset/title' {
  import Title from '#sprockets/components/title'

  export type FieldsetProps = SprocketsTypes.Components.Title.Fieldset.FieldsetProps

  export default class FieldsetTitle<P extends FieldsetProps> extends Title<P> {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/title' {
  export { default } from '#sprockets/sprockets/fieldset/title'
  export * from '#sprockets/sprockets/fieldset/title'
}
