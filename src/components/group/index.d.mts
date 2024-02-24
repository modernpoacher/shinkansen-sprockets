declare module 'shinkansen-sprockets/components/group' {
  import React from 'react'

  export interface GroupProps {
    onChange: SprocketsTypes.OnChangeType
    groupRef: object
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Group extends React.Component<GroupProps> {}
}
