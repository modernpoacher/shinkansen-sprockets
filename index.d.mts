import type React from 'react'

declare global {
  namespace SprocketsTypes {
    interface AnswerChangeAnswerType {
      href: string
      text: string
      visuallyHiddenText?: string
    }

    export interface AnswerDefinitionType {
      type: string
      params: {
        answer: {
          title: string
          value: string | string[]
        }
        changeAnswer: AnswerChangeAnswerType
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

    export namespace Super {
      export namespace Sprockets {
        export interface SprocketProps extends React.PropsWithChildren {
          groupRef?: React.RefObject<any> // eslint-disable-line @typescript-eslint/no-explicit-any -- Simplicity
        }

        export type SprocketState = Record<PropertyKey, unknown>
      }

      export namespace Components {
        export namespace Description {
          export interface DescriptionProps {
            description?: string
          }
        }

        export namespace ErrorMessage {
          export interface ErrorMessageProps {
            errorMessage?: ErrorDefinitionType
          }

          export interface ErrorMessageState {
            errorMessage?: ErrorDefinitionType
          }
        }

        export namespace Group {
          export type GroupProps = Sprockets.SprocketProps

          export type GroupState = Sprockets.SprocketState
        }

        export namespace Title {
          export interface TitleProps {
            title?: string
          }
        }
      }
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
        export type DescriptionProps = Super.Components.Description.DescriptionProps
      }

      export namespace ErrorMessage {
        export type ErrorMessageProps = Super.Components.ErrorMessage.ErrorMessageProps

        export type ErrorMessageState = Super.Components.ErrorMessage.ErrorMessageState
      }

      export namespace Group {
        export type GroupProps = Super.Components.Group.GroupProps

        export type GroupState = Super.Components.Group.GroupState
      }

      export namespace Title {
        export type TitleProps = Super.Components.Title.TitleProps
      }
    }

    export namespace Sprockets {
      export type SprocketProps = Super.Sprockets.SprocketProps

      export type SprocketState = Super.Sprockets.SprocketState

      export namespace CheckAnswers {
        export interface CheckAnswersProps extends SprocketProps {
          title?: string
          checkAnswers?: AnswerDefinitionType[]
        }

        export namespace Group {
          export interface CheckAnswersProps extends Super.Components.Group.GroupProps {
            title?: string
            checkAnswers?: AnswerDefinitionType[]
          }

          export interface CheckAnswersState extends Super.Components.Group.GroupState {
            title?: string
            checkAnswers?: AnswerDefinitionType[]
          }
        }

        export namespace Title {
          export type CheckAnswersProps = Super.Components.Title.TitleProps
        }
      }

      export namespace ErrorSummary {
        export interface ErrorSummaryProps extends SprocketProps {
          title?: string
          errorSummary?: ErrorDefinitionType[]
        }

        export namespace Group {
          export interface ErrorSummaryProps extends Super.Components.Group.GroupProps {
            title?: string
            errorSummary?: ErrorDefinitionType[]
          }

          export interface ErrorSummaryState extends Super.Components.Group.GroupState {
            title?: string
            errorSummary?: ErrorDefinitionType[]
          }
        }

        export namespace Title {
          export type ErrorSummaryProps = Super.Components.Title.TitleProps
        }
      }

      export namespace Fieldset {
        export interface FieldsetProps extends SprocketProps {
          title?: string
          description?: string
          errorMessage?: ErrorDefinitionType
        }

        export interface FieldsetState extends SprocketState {
          title?: string
          description?: string
          errorMessage?: ErrorDefinitionType
        }

        export namespace Group {
          export interface FieldsetProps extends Super.Components.Group.GroupProps {
            title?: string
            description?: string
            errorMessage?: ErrorDefinitionType
          }

          export interface FieldsetState extends Super.Components.Group.GroupState {
            title?: string
            description?: string
            errorMessage?: ErrorDefinitionType
          }
        }

        export namespace Title {
          export type FieldsetProps = Super.Components.Title.TitleProps
        }
      }
    }
  }
}

export {}
