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
      text: string
      href: string
    }
  }
}

export {}
