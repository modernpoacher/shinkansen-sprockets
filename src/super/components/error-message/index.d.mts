declare module '#sprockets/super/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = SprocketsTypes.Super.Components.ErrorMessage.ErrorMessageProps
  export type ErrorMessageState = SprocketsTypes.Super.Components.ErrorMessage.ErrorMessageState

  export default class ErrorMessage extends React.Component<ErrorMessageProps, ErrorMessageState> {
    static propTypes: object

    hasTextContent (): boolean

    getTextContent (): string

    getClassName (): string

    static getDerivedStateFromProps (props: ErrorMessageProps, state: ErrorMessageState): ErrorMessageState

    shouldComponentUpdate (props: ErrorMessageProps, state: ErrorMessageState): boolean

    renderTextContent (): React.JSX.Element | null
  }
}

declare module 'shinkansen-sprockets/super/components/error-message' {
  export { default } from '#sprockets/super/components/error-message'
  export * from '#sprockets/super/components/error-message'
}
