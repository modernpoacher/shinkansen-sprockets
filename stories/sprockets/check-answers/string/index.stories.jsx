import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

import STRING_STRING from '#stories/definitions/check-answers/string-string'
import STRING_STRING_ENUM from '#stories/definitions/check-answers/string-string-enum'
import STRING_STRING_ANY_OF from '#stories/definitions/check-answers/string-string-any-of'
import STRING_STRING_ONE_OF from '#stories/definitions/check-answers/string-string-one-of'
import STRING_STRING_ALL_OF from '#stories/definitions/check-answers/string-string-all-of'

const STRING = {
  STRING_STRING: [STRING_STRING],
  STRING_STRING_ENUM: [STRING_STRING_ENUM],
  STRING_STRING_ANY_OF: [STRING_STRING_ANY_OF],
  STRING_STRING_ONE_OF: [STRING_STRING_ONE_OF],
  STRING_STRING_ALL_OF: [STRING_STRING_ALL_OF]
}

export default {
  title: 'Stories/Sprockets/Check Answers/String',
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
    checkAnswers: 'STRING_STRING'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(STRING),
      mapping: STRING,
      control: {
        type: 'check',
        labels: {
          STRING_STRING: 'String',
          STRING_STRING_ENUM: 'String - Enum',
          STRING_STRING_ANY_OF: 'String - Any Of',
          STRING_STRING_ONE_OF: 'String - One Of',
          STRING_STRING_ALL_OF: 'String - All Of'
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
