declare module '#sprockets/super/components/group' {
  import React from 'react'

  export type GroupProps = SprocketsTypes.Super.Components.Group.GroupProps
  export type GroupState = SprocketsTypes.Super.Components.Group.GroupState

  export default class Group<P extends GroupProps, S extends GroupState> extends React.Component<P, S> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: GroupProps, state: GroupState): boolean
  }
}

declare module 'shinkansen-sprockets/super/components/group' {
  export { default } from '#sprockets/super/components/group'
  export * from '#sprockets/super/components/group'
}
