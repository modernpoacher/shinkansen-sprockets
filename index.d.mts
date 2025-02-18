import type React from 'react'

declare global {
  namespace SprocketsTypes {
    export interface AnswerDefinitionType {
      type: string,
      params: {
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
    }

    export interface ErrorDefinitionType {
      type: string
      uri: string
      params: Record<PropertyKey, unknown> | Record<PropertyKey, never>
    }

    export interface FieldChangeType {
      text: string
      href: string
    }

    export interface FieldErrorType {
      text: string
      href: string
    }

    export namespace Components {
      export namespace Common {
        export namespace TextContent {
          export interface TextContentProps {
            textContent?: string
          }
        }

        export namespace VisuallyHiddenText {
          export interface VisuallyHiddenTextProps {
            visuallyHiddenText?: string
          }
        }
      }

      export namespace Description {
        export interface DescriptionProps {
          description?: string
        }
      }

      export namespace ErrorMessage {
        export interface ErrorMessageProps {
          errorMessage?: ErrorDefinitionType[]
        }

        export interface ErrorMessageState {
          errorMessage?: ErrorDefinitionType[]
        }
      }

      export namespace Group {
        export interface GroupProps extends React.PropsWithChildren {
          groupRef?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export type GroupState = Record<PropertyKey, unknown>

        export namespace CheckAnswers {
          export interface CheckAnswersProps extends GroupProps {
            checkAnswers?: AnswerDefinitionType[]
          }

          export interface CheckAnswersState extends GroupState {
            checkAnswers?: AnswerDefinitionType[]
          }
        }

        export namespace ErrorSummary {
          export interface ErrorSummaryProps extends GroupProps {
            errorSummary?: ErrorDefinitionType[]
          }

          export interface ErrorSummaryState extends GroupState {
            errorSummary?: ErrorDefinitionType[]
          }
        }

        export namespace Fieldset {
          export type FieldsetProps = GroupProps
          export type FieldsetState = GroupState
        }
      }

      export namespace Title {
        export interface TitleProps {
          title?: string
        }

        export namespace CheckAnswers {
          export type CheckAnswersProps = TitleProps
        }

        export namespace ErrorSummary {
          export type ErrorSummaryProps = TitleProps
        }

        export namespace Fieldset {
          export type FieldsetProps = TitleProps
        }
      }
    }

    export namespace Sprockets {
      export namespace Sprocket {
        export interface SprocketProps extends React.PropsWithChildren {
          title?: string
          groupRe?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export namespace CheckAnswers {
          export interface CheckAnswersProps extends SprocketProps {
            checkAnswers?: AnswerDefinitionType[]
          }
        }

        export namespace ErrorSummary {
          export interface ErrorSummaryProps extends SprocketProps {
            errorSummary?: ErrorDefinitionType[]
          }
        }

        export namespace Fieldset {
          export type FieldsetProps = SprocketProps
        }
      }
    }
  }
}

export {}
