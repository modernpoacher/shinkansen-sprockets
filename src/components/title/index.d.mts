declare module '#sprockets/components/title' {
  import React from 'react'

  export type TitleProps = SprocketsTypes.Components.Title.TitleProps

  export default class Title<P extends TitleProps> extends React.Component<P> {
    static propTypes: object

    hasTextContent (): boolean

    getTextContent (): string

    getClassName (): string

    shouldComponentUpdate (props: TitleProps): boolean

    renderTextContent (): React.JSX.Element | null
  }
}

declare module 'shinkansen-sprockets/components/title' {
  export { default } from '#sprockets/components/title'
  export * from '#sprockets/components/title'
}
