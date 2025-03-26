/**
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.CheckAnswersProps} CheckAnswersProps
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

import {
  NULL_NULL,
  NULL_NULL_ENUM,
  NULL_NULL_ANY_OF,
  NULL_NULL_ONE_OF,
  NULL_NULL_ALL_OF
} from './definitions.mjs'

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
  decorators,
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

/**
 *  @param {CheckAnswersProps} args
 *  @returns {React.JSX.Element}
 */
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
