declare module '#sprockets/components/error-message' {
  import React from 'react'

  export interface ErrorMessageProps {
    errorMessage: string
  }

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}

declare module 'shinkansen-sprockets/components/error-message' {
  export { default } from '#sprockets/components/error-message'
  export * from '#sprockets/components/error-message'
}
