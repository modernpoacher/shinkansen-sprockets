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
  OBJECT_STRING,
  OBJECT_STRING_ENUM,
  OBJECT_STRING_ANY_OF,
  OBJECT_STRING_ONE_OF,
  OBJECT_STRING_ALL_OF,
  OBJECT_NUMBER,
  OBJECT_NUMBER_ENUM,
  OBJECT_NUMBER_ANY_OF,
  OBJECT_NUMBER_ONE_OF,
  OBJECT_NUMBER_ALL_OF,
  OBJECT_ARRAY_OBJECT_STRING,
  OBJECT_ARRAY_OBJECT_STRING_ENUM,
  OBJECT_ARRAY_OBJECT_STRING_ANY_OF,
  OBJECT_ARRAY_OBJECT_STRING_ONE_OF,
  OBJECT_ARRAY_OBJECT_STRING_ALL_OF,
  OBJECT_ARRAY_OBJECT_NUMBER,
  OBJECT_ARRAY_OBJECT_NUMBER_ENUM,
  OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF,
  OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF,
  OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF,
  OBJECT_ARRAY_OBJECT_BOOLEAN,
  OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM,
  OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF,
  OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF,
  OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF,
  OBJECT_ARRAY_OBJECT_NULL,
  OBJECT_ARRAY_OBJECT_NULL_ENUM,
  OBJECT_ARRAY_OBJECT_NULL_ANY_OF,
  OBJECT_ARRAY_OBJECT_NULL_ONE_OF,
  OBJECT_ARRAY_OBJECT_NULL_ALL_OF,
  OBJECT_ARRAY_ARRAY_STRING,
  OBJECT_ARRAY_ARRAY_STRING_ENUM,
  OBJECT_ARRAY_ARRAY_STRING_ANY_OF,
  OBJECT_ARRAY_ARRAY_STRING_ONE_OF,
  OBJECT_ARRAY_ARRAY_STRING_ALL_OF,
  OBJECT_ARRAY_ARRAY_NUMBER,
  OBJECT_ARRAY_ARRAY_NUMBER_ENUM,
  OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF,
  OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF,
  OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF,
  OBJECT_ARRAY_ARRAY_BOOLEAN,
  OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM,
  OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF,
  OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF,
  OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF,
  OBJECT_ARRAY_ARRAY_NULL,
  OBJECT_ARRAY_ARRAY_NULL_ENUM,
  OBJECT_ARRAY_ARRAY_NULL_ANY_OF,
  OBJECT_ARRAY_ARRAY_NULL_ONE_OF,
  OBJECT_ARRAY_ARRAY_NULL_ALL_OF,
  OBJECT_BOOLEAN,
  OBJECT_BOOLEAN_ENUM,
  OBJECT_BOOLEAN_ANY_OF,
  OBJECT_BOOLEAN_ONE_OF,
  OBJECT_BOOLEAN_ALL_OF,
  OBJECT_NULL,
  OBJECT_NULL_ENUM,
  OBJECT_NULL_ANY_OF,
  OBJECT_NULL_ONE_OF,
  OBJECT_NULL_ALL_OF
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

const OBJECT = {
  OBJECT_STRING: [OBJECT_STRING],
  OBJECT_STRING_ENUM: [OBJECT_STRING_ENUM],
  OBJECT_STRING_ANY_OF: [OBJECT_STRING_ANY_OF],
  OBJECT_STRING_ONE_OF: [OBJECT_STRING_ONE_OF],
  OBJECT_STRING_ALL_OF: [OBJECT_STRING_ALL_OF],
  OBJECT_NUMBER: [OBJECT_NUMBER],
  OBJECT_NUMBER_ENUM: [OBJECT_NUMBER_ENUM],
  OBJECT_NUMBER_ANY_OF: [OBJECT_NUMBER_ANY_OF],
  OBJECT_NUMBER_ONE_OF: [OBJECT_NUMBER_ONE_OF],
  OBJECT_NUMBER_ALL_OF: [OBJECT_NUMBER_ALL_OF],
  OBJECT_ARRAY_OBJECT_STRING: [OBJECT_ARRAY_OBJECT_STRING],
  OBJECT_ARRAY_OBJECT_STRING_ENUM: [OBJECT_ARRAY_OBJECT_STRING_ENUM],
  OBJECT_ARRAY_OBJECT_STRING_ANY_OF: [OBJECT_ARRAY_OBJECT_STRING_ANY_OF],
  OBJECT_ARRAY_OBJECT_STRING_ONE_OF: [OBJECT_ARRAY_OBJECT_STRING_ONE_OF],
  OBJECT_ARRAY_OBJECT_STRING_ALL_OF: [OBJECT_ARRAY_OBJECT_STRING_ALL_OF],
  OBJECT_ARRAY_OBJECT_NUMBER: [OBJECT_ARRAY_OBJECT_NUMBER],
  OBJECT_ARRAY_OBJECT_NUMBER_ENUM: [OBJECT_ARRAY_OBJECT_NUMBER_ENUM],
  OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF: [OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF],
  OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF: [OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF],
  OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF: [OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF],
  OBJECT_ARRAY_OBJECT_BOOLEAN: [OBJECT_ARRAY_OBJECT_BOOLEAN],
  OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM: [OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM],
  OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF: [OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF],
  OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF: [OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF],
  OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF: [OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF],
  OBJECT_ARRAY_OBJECT_NULL: [OBJECT_ARRAY_OBJECT_NULL],
  OBJECT_ARRAY_OBJECT_NULL_ENUM: [OBJECT_ARRAY_OBJECT_NULL_ENUM],
  OBJECT_ARRAY_OBJECT_NULL_ANY_OF: [OBJECT_ARRAY_OBJECT_NULL_ANY_OF],
  OBJECT_ARRAY_OBJECT_NULL_ONE_OF: [OBJECT_ARRAY_OBJECT_NULL_ONE_OF],
  OBJECT_ARRAY_OBJECT_NULL_ALL_OF: [OBJECT_ARRAY_OBJECT_NULL_ALL_OF],
  OBJECT_ARRAY_ARRAY_STRING: [OBJECT_ARRAY_ARRAY_STRING],
  OBJECT_ARRAY_ARRAY_STRING_ENUM: [OBJECT_ARRAY_ARRAY_STRING_ENUM],
  OBJECT_ARRAY_ARRAY_STRING_ANY_OF: [OBJECT_ARRAY_ARRAY_STRING_ANY_OF],
  OBJECT_ARRAY_ARRAY_STRING_ONE_OF: [OBJECT_ARRAY_ARRAY_STRING_ONE_OF],
  OBJECT_ARRAY_ARRAY_STRING_ALL_OF: [OBJECT_ARRAY_ARRAY_STRING_ALL_OF],
  OBJECT_ARRAY_ARRAY_NUMBER: [OBJECT_ARRAY_ARRAY_NUMBER],
  OBJECT_ARRAY_ARRAY_NUMBER_ENUM: [OBJECT_ARRAY_ARRAY_NUMBER_ENUM],
  OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF: [OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF],
  OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF: [OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF],
  OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF: [OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF],
  OBJECT_ARRAY_ARRAY_BOOLEAN: [OBJECT_ARRAY_ARRAY_BOOLEAN],
  OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM: [OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM],
  OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF: [OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF],
  OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF: [OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF],
  OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF: [OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF],
  OBJECT_ARRAY_ARRAY_NULL: [OBJECT_ARRAY_ARRAY_NULL],
  OBJECT_ARRAY_ARRAY_NULL_ENUM: [OBJECT_ARRAY_ARRAY_NULL_ENUM],
  OBJECT_ARRAY_ARRAY_NULL_ANY_OF: [OBJECT_ARRAY_ARRAY_NULL_ANY_OF],
  OBJECT_ARRAY_ARRAY_NULL_ONE_OF: [OBJECT_ARRAY_ARRAY_NULL_ONE_OF],
  OBJECT_ARRAY_ARRAY_NULL_ALL_OF: [OBJECT_ARRAY_ARRAY_NULL_ALL_OF],
  OBJECT_BOOLEAN: [OBJECT_BOOLEAN],
  OBJECT_BOOLEAN_ENUM: [OBJECT_BOOLEAN_ENUM],
  OBJECT_BOOLEAN_ANY_OF: [OBJECT_BOOLEAN_ANY_OF],
  OBJECT_BOOLEAN_ONE_OF: [OBJECT_BOOLEAN_ONE_OF],
  OBJECT_BOOLEAN_ALL_OF: [OBJECT_BOOLEAN_ALL_OF],
  OBJECT_NULL: [OBJECT_NULL],
  OBJECT_NULL_ENUM: [OBJECT_NULL_ENUM],
  OBJECT_NULL_ANY_OF: [OBJECT_NULL_ANY_OF],
  OBJECT_NULL_ONE_OF: [OBJECT_NULL_ONE_OF],
  OBJECT_NULL_ALL_OF: [OBJECT_NULL_ALL_OF]
}

export default {
  title: 'Stories/Sprockets/Check Answers/Object',
  component: CheckAnswersSprocket,
  decorators,
  args: {
    title: 'Check Answers',
    checkAnswers: 'OBJECT_STRING'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(OBJECT),
      mapping: OBJECT,
      control: {
        type: 'check',
        labels: {
          OBJECT_STRING: 'Object - String',
          OBJECT_STRING_ENUM: 'Object - String - Enum',
          OBJECT_STRING_ANY_OF: 'Object - String - Any Of',
          OBJECT_STRING_ONE_OF: 'Object - String - One Of',
          OBJECT_STRING_ALL_OF: 'Object - String - All Of',
          OBJECT_NUMBER: 'Object - Number',
          OBJECT_NUMBER_ENUM: 'Object - Number - Enum',
          OBJECT_NUMBER_ANY_OF: 'Object - Number - Any Of',
          OBJECT_NUMBER_ONE_OF: 'Object - Number - One Of',
          OBJECT_NUMBER_ALL_OF: 'Object - Number - All Of',
          OBJECT_ARRAY_OBJECT_STRING: 'Object - Array (Items is an object) - String',
          OBJECT_ARRAY_OBJECT_STRING_ENUM: 'Object - Array (Items is an object) - String - Enum',
          OBJECT_ARRAY_OBJECT_STRING_ANY_OF: 'Object - Array (Items is an object) - String - Any Of',
          OBJECT_ARRAY_OBJECT_STRING_ONE_OF: 'Object - Array (Items is an object) - String - One Of',
          OBJECT_ARRAY_OBJECT_STRING_ALL_OF: 'Object - Array (Items is an object) - String - All Of',
          OBJECT_ARRAY_OBJECT_NUMBER: 'Object - Array (Items is an object) - Number',
          OBJECT_ARRAY_OBJECT_NUMBER_ENUM: 'Object - Array (Items is an object) - Number - Enum',
          OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF: 'Object - Array (Items is an object) - Number - Any Of',
          OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF: 'Object - Array (Items is an object) - Number - One Of',
          OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF: 'Object - Array (Items is an object) - Number - All Of',
          OBJECT_ARRAY_OBJECT_BOOLEAN: 'Object - Array (Items is an object) - Boolean',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM: 'Object - Array (Items is an object) - Boolean - Enum',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF: 'Object - Array (Items is an object) - Boolean - Any Of',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF: 'Object - Array (Items is an object) - Boolean - One Of',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF: 'Object - Array (Items is an object) - Boolean - All Of',
          OBJECT_ARRAY_OBJECT_NULL: 'Object - Array (Items is an object) - Null',
          OBJECT_ARRAY_OBJECT_NULL_ENUM: 'Object - Array (Items is an object) - Null - Enum',
          OBJECT_ARRAY_OBJECT_NULL_ANY_OF: 'Object - Array (Items is an object) - Null - Any Of',
          OBJECT_ARRAY_OBJECT_NULL_ONE_OF: 'Object - Array (Items is an object) - Null - One Of',
          OBJECT_ARRAY_OBJECT_NULL_ALL_OF: 'Object - Array (Items is an object) - Null - All Of',
          OBJECT_ARRAY_ARRAY_STRING: 'Object - Array (Items is an array) - String',
          OBJECT_ARRAY_ARRAY_STRING_ENUM: 'Object - Array (Items is an array) - String - Enum',
          OBJECT_ARRAY_ARRAY_STRING_ANY_OF: 'Object - Array (Items is an array) - String - Any Of',
          OBJECT_ARRAY_ARRAY_STRING_ONE_OF: 'Object - Array (Items is an array) - String - One Of',
          OBJECT_ARRAY_ARRAY_STRING_ALL_OF: 'Object - Array (Items is an array) - String - All Of',
          OBJECT_ARRAY_ARRAY_NUMBER: 'Object - Array (Items is an array) - Number',
          OBJECT_ARRAY_ARRAY_NUMBER_ENUM: 'Object - Array (Items is an array) - Number - Enum',
          OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF: 'Object - Array (Items is an array) - Number - Any Of',
          OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF: 'Object - Array (Items is an array) - Number - One Of',
          OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF: 'Object - Array (Items is an array) - Number - All Of',
          OBJECT_ARRAY_ARRAY_BOOLEAN: 'Object - Array (Items is an array) - Boolean',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM: 'Object - Array (Items is an array) - Boolean - Enum',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF: 'Object - Array (Items is an array) - Boolean - Any Of',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF: 'Object - Array (Items is an array) - Boolean - One Of',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF: 'Object - Array (Items is an array) - Boolean - All Of',
          OBJECT_ARRAY_ARRAY_NULL: 'Object - Array (Items is an array) - Null',
          OBJECT_ARRAY_ARRAY_NULL_ENUM: 'Object - Array (Items is an array) - Null - Enum',
          OBJECT_ARRAY_ARRAY_NULL_ANY_OF: 'Object - Array (Items is an array) - Null - Any Of',
          OBJECT_ARRAY_ARRAY_NULL_ONE_OF: 'Object - Array (Items is an array) - Null - One Of',
          OBJECT_ARRAY_ARRAY_NULL_ALL_OF: 'Object - Array (Items is an array) - Null - All Of',
          OBJECT_BOOLEAN: 'Object - Boolean',
          OBJECT_BOOLEAN_ENUM: 'Object - Boolean - Enum',
          OBJECT_BOOLEAN_ANY_OF: 'Object - Boolean - Any Of',
          OBJECT_BOOLEAN_ONE_OF: 'Object - Boolean - One Of',
          OBJECT_BOOLEAN_ALL_OF: 'Object - Boolean - All Of',
          OBJECT_NULL: 'Object - Null',
          OBJECT_NULL_ENUM: 'Object - Null - Enum',
          OBJECT_NULL_ANY_OF: 'Object - Null - Any Of',
          OBJECT_NULL_ONE_OF: 'Object - Null - One Of',
          OBJECT_NULL_ALL_OF: 'Object - Null - All Of'
        }
      }
    }
  }
}

/**
 *  @param {CheckAnswersProps} props
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
