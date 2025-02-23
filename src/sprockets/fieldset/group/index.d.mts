declare module '#sprockets/sprockets/fieldset/group' {
  import Group from '#sprockets/components/group'

  export type FieldsetProps = SprocketsTypes.Components.Group.Fieldset.FieldsetProps
  export type FieldsetState = SprocketsTypes.Components.Group.Fieldset.FieldsetState

  export default class FieldsetGroup<P extends FieldsetProps, S extends FieldsetState> extends Group<P, S> {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/group' {
  export { default } from '#sprockets/sprockets/fieldset/group'
  export * from '#sprockets/sprockets/fieldset/group'
}
