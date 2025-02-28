declare module '#sprockets/sprockets/check-answers/group/change-answer' {
  import type React from 'react'

  export default function ChangeAnswer (props: { changeAnswer: { href: string; text: string; visuallyHiddenText?: string } }): React.JSX.Element
}

declare module 'shinkansen-sprockets/sprockets/check-answers/group/change-answer' {
  export { default } from '#sprockets/sprockets/check-answers/group/change-answer'
}
