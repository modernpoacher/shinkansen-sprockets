declare module '#sprockets/components/description' {
  import React from 'react'

  type DescriptionProps = SprocketsTypes.Components.Description.DescriptionProps

  export default class Description extends React.Component<DescriptionProps> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: DescriptionProps): boolean
  }
}

declare module 'shinkansen-sprockets/components/description' {
  export type DescriptionProps = SprocketsTypes.Components.Description.DescriptionProps

  export { default } from '#sprockets/components/description'
}
