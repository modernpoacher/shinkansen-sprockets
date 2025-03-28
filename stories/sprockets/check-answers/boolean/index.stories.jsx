/**
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.CheckAnswersProps} CheckAnswersProps
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

import sort from '#stories/sprockets/sort'

import {
  BOOLEAN_BOOLEAN,
  BOOLEAN_BOOLEAN_ENUM,
  BOOLEAN_BOOLEAN_ANY_OF,
  BOOLEAN_BOOLEAN_ONE_OF,
  BOOLEAN_BOOLEAN_ALL_OF
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

const BOOLEAN = {
  BOOLEAN_BOOLEAN: [BOOLEAN_BOOLEAN],
  BOOLEAN_BOOLEAN_ENUM: [BOOLEAN_BOOLEAN_ENUM],
  BOOLEAN_BOOLEAN_ANY_OF: [BOOLEAN_BOOLEAN_ANY_OF],
  BOOLEAN_BOOLEAN_ONE_OF: [BOOLEAN_BOOLEAN_ONE_OF],
  BOOLEAN_BOOLEAN_ALL_OF: [BOOLEAN_BOOLEAN_ALL_OF]
}

export default {
  title: 'Stories/Sprockets/Check Answers/Boolean',
  component: CheckAnswersSprocket,
  decorators,
  args: {
    title: 'Check Answers',
    checkAnswers: 'BOOLEAN_BOOLEAN'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(BOOLEAN),
      mapping: BOOLEAN,
      control: {
        type: 'check',
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

/**
 *  @param {CheckAnswersProps} args
 *  @returns {React.JSX.Element}
 */
export function Default ({ checkAnswers = [], ...args }) {
  return (
    <CheckAnswersSprocket
      {...args}
      checkAnswers={checkAnswers.flat().sort(sort)}
    />
  )
}

Default.propTypes = {
  checkAnswers: PropTypes.array
}
