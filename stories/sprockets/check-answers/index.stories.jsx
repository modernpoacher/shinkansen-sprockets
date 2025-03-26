import React from 'react'
import {
  MemoryRouter
} from 'react-router'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

/**
 *  @type {Array<(Story: () => React.JSX.Element) => React.JSX.Element>}
 */
const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )
]

export default {
  title: 'Stories/Sprockets/Check Answers',
  component: CheckAnswersSprocket,
  decorators
}

export function OneAnswer () {
  return (
    <CheckAnswersSprocket
      title='One Answer'
      checkAnswers={[
        {
          type: 'UNKNOWN',
          params: {
            answer: { title: 'Title', value: 'Value' },
            changeAnswer: { text: 'Link text', href: '#cog-route', visuallyHiddenText: 'Visually hidden text' }
          }
        }
      ]}
    />
  )
}

OneAnswer.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export function NoAnswers () {
  return (
    <CheckAnswersSprocket
      title='No Answers'
    />
  )
}

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
