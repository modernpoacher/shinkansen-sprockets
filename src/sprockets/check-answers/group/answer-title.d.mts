declare module '#sprockets/sprockets/check-answers/group/answer-title' {
  import type React from 'react'

  export default function AnswerTitle (props: { answer: { title: string } }): React.JSX.Element
}

declare module 'shinkansen-sprockets/sprockets/check-answers/group/answer-title' {
  export { default } from '#sprockets/sprockets/check-answers/group/answer-title'
}
