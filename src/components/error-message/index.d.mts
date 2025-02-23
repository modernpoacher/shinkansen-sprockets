declare module '#sprockets/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = SprocketsTypes.Components.ErrorMessage.ErrorMessageProps
  export type ErrorMessageState = SprocketsTypes.Components.ErrorMessage.ErrorMessageState

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

declare module 'shinkansen-sprockets/components/error-message' {
  export { default } from '#sprockets/components/error-message'
  export * from '#sprockets/components/error-message'
}
