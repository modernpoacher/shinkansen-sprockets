declare module '#sprockets/super/components/description' {
  import React from 'react'

  export type DescriptionProps = SprocketsTypes.Super.Components.Description.DescriptionProps

  export default class Description extends React.Component<DescriptionProps> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: DescriptionProps): boolean
  }
}

declare module 'shinkansen-sprockets/super/components/description' {
  export { default } from '#sprockets/super/components/description'
  export * from '#sprockets/super/components/description'
}
