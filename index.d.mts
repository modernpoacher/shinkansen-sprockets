declare global {
  namespace SprocketsTypes {
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
}

export {}
