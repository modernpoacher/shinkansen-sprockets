import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from 'shinkansen-sprockets/sprockets/check-answers'

import BOOLEAN_BOOLEAN from 'stories/definitions/check-answers/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/check-answers/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/boolean-boolean-all-of'

const BOOLEAN = {
  BOOLEAN_BOOLEAN: [BOOLEAN_BOOLEAN],
  BOOLEAN_BOOLEAN_ENUM: [BOOLEAN_BOOLEAN_ENUM],
  BOOLEAN_BOOLEAN_ANY_OF: [BOOLEAN_BOOLEAN_ANY_OF],
  BOOLEAN_BOOLEAN_ONE_OF: [BOOLEAN_BOOLEAN_ONE_OF],
  BOOLEAN_BOOLEAN_ALL_OF: [BOOLEAN_BOOLEAN_ALL_OF]
}

export default {
  title: 'Components/Check Answers/Boolean',
  component: CheckAnswersSprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    title: 'Check Answers',
    checkAnswers: 'BOOLEAN_BOOLEAN'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(BOOLEAN),
      mapping: BOOLEAN,
      control: {
        type: 'radio',
        labels: {
          BOOLEAN_BOOLEAN: 'Boolean',
          BOOLEAN_BOOLEAN_ENUM: 'Boolean - Enum',
          BOOLEAN_BOOLEAN_ANY_OF: 'Boolean - Any Of',
          BOOLEAN_BOOLEAN_ONE_OF: 'Boolean - One Of',
          BOOLEAN_BOOLEAN_ALL_OF: 'Boolean - All Of'
        }
      }
    }
  }
}

export const Default = (args) => (
  <CheckAnswersSprocket
    {...args}
  />
)

export const AllAnswers = () => (
  <CheckAnswersSprocket
    title='All Answers'
    checkAnswers={Object.values(BOOLEAN).map(([b]) => b)}
  />
)

AllAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export const NoAnswers = () => (
  <CheckAnswersSprocket
    title='No Answers'
    checkAnswers={[]}
  />
)

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
