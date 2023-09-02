declare namespace SprocketsTypes {
  export type OnChangeType = () => void

  export type AnswerDefinitionType = {
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

  export type ErrorDefinitionType = {
    type: string,
    uri: string,
    params: {
      expectedType: string
    }
  }

  export type ComponentsType = {}

  export type FieldChangeType = {
    text: string,
    href: string
  }

  export type FieldErrorType = {
    text: string,
    href: string
  }
}

declare module 'shinkansen-sprockets/components/common/text-content' {
  import React from 'react'

  export type TextContentProps = {
    textContent: string
  }

  export default function TextContent(props: TextContentProps): React.JSX.Element
}

declare module 'shinkansen-sprockets/components/description' {
  import React from 'react'

  export type DescriptionProps = {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}

declare module 'shinkansen-sprockets/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = {
    errorMessage: string
  }

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}

declare module 'shinkansen-sprockets/components/title' {
  import React from 'react'

  export type TitleProps = {
    title: string
  }

  export default class Title extends React.Component<TitleProps> {}
}

declare module 'shinkansen-sprockets/components/group' {
  import React from 'react'

  export type GroupProps = {
    onChange: SprocketsTypes.OnChangeType,
    groupRef: object,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Group extends React.Component<GroupProps> {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers/title' {
  import Title from 'shinkansen-sprockets/components/title'

  export default class CheckAnswersTitle extends Title {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers/group' {
  import Group from 'shinkansen-sprockets/components/group'

  export default class CheckAnswersGroup extends Group {}
}

declare module 'shinkansen-sprockets/sprockets/check-answers' {
  import Sprocket from 'shinkansen-sprockets/sprockets'

  export default class ErrorSummarySprocket extends Sprocket {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary/title' {
  import Title from 'shinkansen-sprockets/components/title'

  export default class ErrorSummaryTitle extends Title {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary/group' {
  import Group from 'shinkansen-sprockets/components/group'

  export default class ErrorSummaryGroup extends Group {}
}

declare module 'shinkansen-sprockets/sprockets/error-summary' {
  import Sprocket from 'shinkansen-sprockets/sprockets'

  export default class CheckAnswersSprocket extends Sprocket {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/description' {
  import Description from 'shinkansen-sprockets/components/description'

  export default class FieldsetDescription extends Description {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/error-message' {
  import ErrorMessage from 'shinkansen-sprockets/components/error-message'

  export default class FieldsetErrorMessage extends ErrorMessage {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/title' {
  import Title from 'shinkansen-sprockets/components/title'

  export default class FieldsetTitle extends Title {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset/group' {
  import Group from 'shinkansen-sprockets/components/group'

  export default class FieldsetGroup extends Group {}
}

declare module 'shinkansen-sprockets/sprockets/fieldset' {
  import Sprocket from 'shinkansen-sprockets/sprockets'

  export default class FieldsetSprocket extends Sprocket {}
}

declare module 'shinkansen-sprockets/sprockets' {
  import React from 'react'

  export type SprocketProps = {
    title: string,
    onChange: SprocketsTypes.OnChangeType,
    groupRef: object,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Sprocket extends React.Component<SprocketProps> {}
}

declare module 'shinkansen-sprockets/transformers/check-answers' {
  export default function transform (answer: SprocketsTypes.AnswerDefinitionType): SprocketsTypes.FieldChangeType
}

declare module 'shinkansen-sprockets/transformers/error-message' {
  export default function transform (error: SprocketsTypes.ErrorDefinitionType): SprocketsTypes.FieldErrorType
}

declare module 'shinkansen-sprockets/transformers/error-summary' {
  export default function transform (error: SprocketsTypes.ErrorDefinitionType): SprocketsTypes.FieldErrorType
}

declare module 'shinkansen-sprockets/transformers/common' {
  export function getKey(href: string, text: string, index: number): string
}

declare module 'shinkansen-sprockets' {
  export { default as CheckAnswersSprocket } from 'shinkansen-sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from 'shinkansen-sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from 'shinkansen-sprockets/sprockets/fieldset'
}
