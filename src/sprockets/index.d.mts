declare module '#sprockets/sprockets' {
  import React from 'react'

  export interface SprocketProps {
    title: string
    onChange: SprocketsTypes.OnChangeType
    groupRef: object
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Sprocket extends React.Component<SprocketProps> {}
}

declare module 'shinkansen-sprockets/sprockets' {
  export { default } from '#sprockets/sprockets'
  export * from '#sprockets/sprockets'
}
