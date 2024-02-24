declare module 'shinkansen-sprockets/components/error-message' {
  import React from 'react'

  export interface ErrorMessageProps {
    errorMessage: string
  }

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}
