declare module '#sprockets/sprockets' {
  import React from 'react'

  export type SprocketProps = SprocketsTypes.Sprockets.Sprocket.SprocketProps

  export default class Sprocket<P extends SprocketProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: SprocketProps): boolean

    renderTitle (): React.JSX.Element | null

    renderGroup (): React.JSX.Element | null
  }
}

declare module 'shinkansen-sprockets/sprockets' {
  export { default } from '#sprockets/sprockets'
  export * from '#sprockets/sprockets'
}
