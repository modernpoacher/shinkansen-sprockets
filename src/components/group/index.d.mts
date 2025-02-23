declare module '#sprockets/components/group' {
  import React from 'react'

  export type GroupProps = SprocketsTypes.Components.Group.GroupProps
  export type GroupState = SprocketsTypes.Components.Group.GroupState

  export default class Group<P extends GroupProps, S extends GroupState> extends React.Component<P, S> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: GroupProps, state: GroupState): boolean
  }
}

declare module 'shinkansen-sprockets/components/group' {
  export { default } from '#sprockets/components/group'
  export * from '#sprockets/components/group'
}
