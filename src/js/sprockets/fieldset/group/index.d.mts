declare module '#sprockets/sprockets/fieldset/group' {
  import Group from '#sprockets/super/components/group'

  export type FieldsetProps = SprocketsTypes.Sprockets.Fieldset.Group.FieldsetProps
  export type FieldsetState = SprocketsTypes.Sprockets.Fieldset.Group.FieldsetState

  export default class FieldsetGroup<P extends FieldsetProps, S extends FieldsetState> extends Group<P, S> {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/group' {
  export { default } from '#sprockets/sprockets/fieldset/group'
  export * from '#sprockets/sprockets/fieldset/group'
}
