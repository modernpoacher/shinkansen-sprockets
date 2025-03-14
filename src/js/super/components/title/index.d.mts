declare module '#sprockets/super/components/title' {
  import React from 'react'

  export type TitleProps = SprocketsTypes.Super.Components.Title.TitleProps

  export default class Title<P extends TitleProps> extends React.Component<P> {
    static propTypes: object

    getClassName (): string

    shouldComponentUpdate (props: TitleProps): boolean

    renderTextContent (textContent: string): React.JSX.Element
  }
}

declare module 'shinkansen-sprockets/super/components/title' {
  export { default } from '#sprockets/super/components/title'
  export * from '#sprockets/super/components/title'
}
