import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

import NULL_NULL from '#stories/definitions/check-answers/null-null'
import NULL_NULL_ENUM from '#stories/definitions/check-answers/null-null-enum'
import NULL_NULL_ANY_OF from '#stories/definitions/check-answers/null-null-any-of'
import NULL_NULL_ONE_OF from '#stories/definitions/check-answers/null-null-one-of'
import NULL_NULL_ALL_OF from '#stories/definitions/check-answers/null-null-all-of'

const NULL = {
  NULL_NULL: [NULL_NULL],
  NULL_NULL_ENUM: [NULL_NULL_ENUM],
  NULL_NULL_ANY_OF: [NULL_NULL_ANY_OF],
  NULL_NULL_ONE_OF: [NULL_NULL_ONE_OF],
  NULL_NULL_ALL_OF: [NULL_NULL_ALL_OF]
}

export default {
  title: 'Stories/Sprockets/Check Answers/Null',
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
    checkAnswers: 'NULL_NULL'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(NULL),
      mapping: NULL,
      control: {
        type: 'check',
        labels: {
          NULL_NULL: 'Null',
          NULL_NULL_ENUM: 'Null - Enum',
          NULL_NULL_ANY_OF: 'Null - Any Of',
          NULL_NULL_ONE_OF: 'Null - One Of',
          NULL_NULL_ALL_OF: 'Null - All Of'
        }
      }
    }
  }
}

export function Default ({ checkAnswers = [], ...args }) {
  return (
    <CheckAnswersSprocket
      {...args}
      checkAnswers={checkAnswers.flat()}
    />
  )
}

Default.propTypes = {
  checkAnswers: PropTypes.array
}
