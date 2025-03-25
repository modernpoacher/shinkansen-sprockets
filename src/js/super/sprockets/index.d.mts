declare module '#sprockets/super/sprockets' {
  import React from 'react'

  export type SprocketProps = SprocketsTypes.Super.Sprockets.SprocketProps

  export default class Sprocket<P extends SprocketProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: SprocketProps): boolean

    renderTitle (): React.JSX.Element | null

    renderGroup (): React.JSX.Element | null
  }
}

declare module 'shinkansen-sprockets/super/sprockets' {
  export { default } from '#sprockets/super/sprockets'
  export * from '#sprockets/super/sprockets'
}
