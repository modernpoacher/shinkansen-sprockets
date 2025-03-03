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
  ARRAY_ARRAY_OBJECT_STRING,
  ARRAY_ARRAY_OBJECT_STRING_ENUM,
  ARRAY_ARRAY_OBJECT_STRING_ANY_OF,
  ARRAY_ARRAY_OBJECT_STRING_ONE_OF,
  ARRAY_ARRAY_OBJECT_STRING_ALL_OF,
  ARRAY_ARRAY_OBJECT_NUMBER,
  ARRAY_ARRAY_OBJECT_NUMBER_ENUM,
  ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF,
  ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF,
  ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF,
  ARRAY_ARRAY_OBJECT_BOOLEAN,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF,
  ARRAY_ARRAY_OBJECT_NULL,
  ARRAY_ARRAY_OBJECT_NULL_ENUM,
  ARRAY_ARRAY_OBJECT_NULL_ANY_OF,
  ARRAY_ARRAY_OBJECT_NULL_ONE_OF,
  ARRAY_ARRAY_OBJECT_NULL_ALL_OF,
  ARRAY_ARRAY_ARRAY_STRING,
  ARRAY_ARRAY_ARRAY_STRING_ENUM,
  ARRAY_ARRAY_ARRAY_STRING_ANY_OF,
  ARRAY_ARRAY_ARRAY_STRING_ONE_OF,
  ARRAY_ARRAY_ARRAY_STRING_ALL_OF,
  ARRAY_ARRAY_ARRAY_NUMBER,
  ARRAY_ARRAY_ARRAY_NUMBER_ENUM,
  ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF,
  ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF,
  ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF,
  ARRAY_ARRAY_ARRAY_BOOLEAN,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF,
  ARRAY_ARRAY_ARRAY_NULL,
  ARRAY_ARRAY_ARRAY_NULL_ENUM,
  ARRAY_ARRAY_ARRAY_NULL_ANY_OF,
  ARRAY_ARRAY_ARRAY_NULL_ONE_OF,
  ARRAY_ARRAY_ARRAY_NULL_ALL_OF
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

const ARRAY = {
  ARRAY_ARRAY_OBJECT_STRING: [ARRAY_ARRAY_OBJECT_STRING],
  ARRAY_ARRAY_OBJECT_STRING_ENUM: [ARRAY_ARRAY_OBJECT_STRING_ENUM],
  ARRAY_ARRAY_OBJECT_STRING_ANY_OF: [ARRAY_ARRAY_OBJECT_STRING_ANY_OF],
  ARRAY_ARRAY_OBJECT_STRING_ONE_OF: [ARRAY_ARRAY_OBJECT_STRING_ONE_OF],
  ARRAY_ARRAY_OBJECT_STRING_ALL_OF: [ARRAY_ARRAY_OBJECT_STRING_ALL_OF],
  ARRAY_ARRAY_OBJECT_NUMBER: [ARRAY_ARRAY_OBJECT_NUMBER],
  ARRAY_ARRAY_OBJECT_NUMBER_ENUM: [ARRAY_ARRAY_OBJECT_NUMBER_ENUM],
  ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF: [ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF],
  ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF: [ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF],
  ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF: [ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF],
  ARRAY_ARRAY_OBJECT_BOOLEAN: [ARRAY_ARRAY_OBJECT_BOOLEAN],
  ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM: [ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM],
  ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF: [ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF],
  ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF: [ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF],
  ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF: [ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF],
  ARRAY_ARRAY_OBJECT_NULL: [ARRAY_ARRAY_OBJECT_NULL],
  ARRAY_ARRAY_OBJECT_NULL_ENUM: [ARRAY_ARRAY_OBJECT_NULL_ENUM],
  ARRAY_ARRAY_OBJECT_NULL_ANY_OF: [ARRAY_ARRAY_OBJECT_NULL_ANY_OF],
  ARRAY_ARRAY_OBJECT_NULL_ONE_OF: [ARRAY_ARRAY_OBJECT_NULL_ONE_OF],
  ARRAY_ARRAY_OBJECT_NULL_ALL_OF: [ARRAY_ARRAY_OBJECT_NULL_ALL_OF],
  ARRAY_ARRAY_ARRAY_STRING: [ARRAY_ARRAY_ARRAY_STRING],
  ARRAY_ARRAY_ARRAY_STRING_ENUM: [ARRAY_ARRAY_ARRAY_STRING_ENUM],
  ARRAY_ARRAY_ARRAY_STRING_ANY_OF: [ARRAY_ARRAY_ARRAY_STRING_ANY_OF],
  ARRAY_ARRAY_ARRAY_STRING_ONE_OF: [ARRAY_ARRAY_ARRAY_STRING_ONE_OF],
  ARRAY_ARRAY_ARRAY_STRING_ALL_OF: [ARRAY_ARRAY_ARRAY_STRING_ALL_OF],
  ARRAY_ARRAY_ARRAY_NUMBER: [ARRAY_ARRAY_ARRAY_NUMBER],
  ARRAY_ARRAY_ARRAY_NUMBER_ENUM: [ARRAY_ARRAY_ARRAY_NUMBER_ENUM],
  ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF: [ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF],
  ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF: [ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF],
  ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF: [ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF],
  ARRAY_ARRAY_ARRAY_BOOLEAN: [ARRAY_ARRAY_ARRAY_BOOLEAN],
  ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM: [ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM],
  ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF: [ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF],
  ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF: [ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF],
  ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF: [ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF],
  ARRAY_ARRAY_ARRAY_NULL: [ARRAY_ARRAY_ARRAY_NULL],
  ARRAY_ARRAY_ARRAY_NULL_ENUM: [ARRAY_ARRAY_ARRAY_NULL_ENUM],
  ARRAY_ARRAY_ARRAY_NULL_ANY_OF: [ARRAY_ARRAY_ARRAY_NULL_ANY_OF],
  ARRAY_ARRAY_ARRAY_NULL_ONE_OF: [ARRAY_ARRAY_ARRAY_NULL_ONE_OF],
  ARRAY_ARRAY_ARRAY_NULL_ALL_OF: [ARRAY_ARRAY_ARRAY_NULL_ALL_OF]
}

export default {
  title: 'Stories/Sprockets/Check Answers/Array',
  component: CheckAnswersSprocket,
  decorators,
  args: {
    title: 'Check Answers',
    checkAnswers: 'ARRAY_ARRAY_OBJECT_STRING'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(ARRAY),
      mapping: ARRAY,
      control: {
        type: 'check',
        labels: {
          ARRAY_ARRAY_OBJECT_STRING: 'Array - Array (Items is an object) - String',
          ARRAY_ARRAY_OBJECT_STRING_ENUM: 'Array - Array (Items is an object) - String - Enum',
          ARRAY_ARRAY_OBJECT_STRING_ANY_OF: 'Array - Array (Items is an object) - String - Any Of',
          ARRAY_ARRAY_OBJECT_STRING_ONE_OF: 'Array - Array (Items is an object) - String - One Of',
          ARRAY_ARRAY_OBJECT_STRING_ALL_OF: 'Array - Array (Items is an object) - String - All Of',
          ARRAY_ARRAY_OBJECT_NUMBER: 'Array - Array (Items is an object) - Number',
          ARRAY_ARRAY_OBJECT_NUMBER_ENUM: 'Array - Array (Items is an object) - Number - Enum',
          ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF: 'Array - Array (Items is an object) - Number - Any Of',
          ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF: 'Array - Array (Items is an object) - Number - One Of',
          ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF: 'Array - Array (Items is an object) - Number - All Of',
          ARRAY_ARRAY_OBJECT_BOOLEAN: 'Array - Array (Items is an object) - Boolean',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM: 'Array - Array (Items is an object) - Boolean - Enum',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF: 'Array - Array (Items is an object) - Boolean - Any Of',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF: 'Array - Array (Items is an object) - Boolean - One Of',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF: 'Array - Array (Items is an object) - Boolean - All Of',
          ARRAY_ARRAY_OBJECT_NULL: 'Array - Array (Items is an object) - Null',
          ARRAY_ARRAY_OBJECT_NULL_ENUM: 'Array - Array (Items is an object) - Null - Enum',
          ARRAY_ARRAY_OBJECT_NULL_ANY_OF: 'Array - Array (Items is an object) - Null - Any Of',
          ARRAY_ARRAY_OBJECT_NULL_ONE_OF: 'Array - Array (Items is an object) - Null - One Of',
          ARRAY_ARRAY_OBJECT_NULL_ALL_OF: 'Array - Array (Items is an object) - Null - All Of',
          ARRAY_ARRAY_ARRAY_STRING: 'Array - Array (Items is an array) - String',
          ARRAY_ARRAY_ARRAY_STRING_ENUM: 'Array - Array (Items is an array) - String - Enum',
          ARRAY_ARRAY_ARRAY_STRING_ANY_OF: 'Array - Array (Items is an array) - String - Any Of',
          ARRAY_ARRAY_ARRAY_STRING_ONE_OF: 'Array - Array (Items is an array) - String - One Of',
          ARRAY_ARRAY_ARRAY_STRING_ALL_OF: 'Array - Array (Items is an array) - String - All Of',
          ARRAY_ARRAY_ARRAY_NUMBER: 'Array - Array (Items is an array) - Number',
          ARRAY_ARRAY_ARRAY_NUMBER_ENUM: 'Array - Array (Items is an array) - Number - Enum',
          ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF: 'Array - Array (Items is an array) - Number - Any Of',
          ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF: 'Array - Array (Items is an array) - Number - One Of',
          ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF: 'Array - Array (Items is an array) - Number - All Of',
          ARRAY_ARRAY_ARRAY_BOOLEAN: 'Array - Array (Items is an array) - Boolean',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM: 'Array - Array (Items is an array) - Boolean - Enum',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF: 'Array - Array (Items is an array) - Boolean - Any Of',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF: 'Array - Array (Items is an array) - Boolean - One Of',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF: 'Array - Array (Items is an array) - Boolean - All Of',
          ARRAY_ARRAY_ARRAY_NULL: 'Array - Array (Items is an array) - Null',
          ARRAY_ARRAY_ARRAY_NULL_ENUM: 'Array - Array (Items is an array) - Null - Enum',
          ARRAY_ARRAY_ARRAY_NULL_ANY_OF: 'Array - Array (Items is an array) - Null - Any Of',
          ARRAY_ARRAY_ARRAY_NULL_ONE_OF: 'Array - Array (Items is an array) - Null - One Of',
          ARRAY_ARRAY_ARRAY_NULL_ALL_OF: 'Array - Array (Items is an array) - Null - All Of'
        }
      }
    }
  }
}

/**
 * @param {CheckAnswersProps} props
 * @returns {React.JSX.Element}
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
