declare namespace SprocketsTypes {
  export type OnChangeType = () => void

  export interface AnswerDefinitionType {
    answer: {
      title: string
      value: string | string[]
    }
    changeAnswer: {
      text: string
      href: string
      visuallyHiddenText?: string
    }
  }

  export interface ErrorDefinitionType {
    type: string
    uri: string
    params: {
      expectedType: string
    }
  }

  export interface FieldChangeType {
    text: string
    href: string
  }

  export interface FieldErrorType {
    text: string
    href: string
  }
}

declare module 'shinkansen-sprockets' {
  export { default as CheckAnswersSprocket } from 'shinkansen-sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from 'shinkansen-sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from 'shinkansen-sprockets/sprockets/fieldset'
}
