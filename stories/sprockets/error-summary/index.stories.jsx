/**
 *  @typedef {SprocketsTypes.Sprockets.ErrorSummary.ErrorSummaryProps} ErrorSummaryProps
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router'

import ErrorSummarySprocket from '#sprockets/sprockets/error-summary'

import {
  ERROR_MAX_ITEMS,
  ERROR_MIN_ITEMS,
  ERROR_MAX_LENGTH,
  ERROR_MIN_LENGTH,
  ERROR_MAX_PROPERTIES,
  ERROR_MIN_PROPERTIES,
  ERROR_ADDITIONAL_ITEMS,
  ERROR_MAXIMUM,
  ERROR_MINIMUM,
  ERROR_FORMAT,
  ERROR_ADDITIONAL_PROPERTIES,
  ERROR_DEPENDENCIES,
  ERROR_UNIQUE_ITEMS,
  ERROR_PROPERTY_REQUIRED,
  ERROR_PROPERTY_NAMES,
  ERROR_PATTERN_REQUIRED,
  ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING,
  ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER,
  ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT,
  ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY,
  ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN,
  ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL,
  ERROR_MULTIPLE_OF,
  ERROR_PATTERN,
  ERROR_CONST,
  ERROR_ENUM,
  ERROR_$REF,
  ERROR_ONE_OF,
  ERROR_UNKNOWN
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

const ERROR = {
  ERROR_MAX_ITEMS: [ERROR_MAX_ITEMS],
  ERROR_MIN_ITEMS: [ERROR_MIN_ITEMS],
  ERROR_MAX_LENGTH: [ERROR_MAX_LENGTH],
  ERROR_MIN_LENGTH: [ERROR_MIN_LENGTH],
  ERROR_MAX_PROPERTIES: [ERROR_MAX_PROPERTIES],
  ERROR_MIN_PROPERTIES: [ERROR_MIN_PROPERTIES],
  ERROR_ADDITIONAL_ITEMS: [ERROR_ADDITIONAL_ITEMS],
  ERROR_MAXIMUM: [ERROR_MAXIMUM],
  ERROR_MINIMUM: [ERROR_MINIMUM],
  ERROR_FORMAT: [ERROR_FORMAT],
  ERROR_ADDITIONAL_PROPERTIES: [ERROR_ADDITIONAL_PROPERTIES],
  ERROR_DEPENDENCIES: [ERROR_DEPENDENCIES],
  ERROR_UNIQUE_ITEMS: [ERROR_UNIQUE_ITEMS],
  ERROR_PROPERTY_REQUIRED: [ERROR_PROPERTY_REQUIRED],
  ERROR_PROPERTY_NAMES: [ERROR_PROPERTY_NAMES],
  ERROR_PATTERN_REQUIRED: [ERROR_PATTERN_REQUIRED],
  ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING: [ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING],
  ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER: [ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER],
  ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT: [ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT],
  ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY: [ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY],
  ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN: [ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN],
  ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL: [ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL],
  ERROR_MULTIPLE_OF: [ERROR_MULTIPLE_OF],
  ERROR_PATTERN: [ERROR_PATTERN],
  ERROR_CONST: [ERROR_CONST],
  ERROR_ENUM: [ERROR_ENUM],
  ERROR_$REF: [ERROR_$REF],
  ERROR_ONE_OF: [ERROR_ONE_OF],
  ERROR_UNKNOWN: [ERROR_UNKNOWN]
}

export default {
  title: 'Stories/Sprockets/Error Summary',
  component: ErrorSummarySprocket,
  decorators,
  args: {
    title: 'Error Summary',
    errorSummary: 'ERROR_MAX_ITEMS'
  },
  argTypes: {
    errorSummary: {
      options: Object.keys(ERROR),
      mapping: ERROR,
      control: {
        type: 'check',
        labels: {
          ERROR_MAX_ITEMS: 'Error - Max Items',
          ERROR_MIN_ITEMS: 'Error - Min Items',
          ERROR_MAX_LENGTH: 'Error - Max Length',
          ERROR_MIN_LENGTH: 'Error - Min Length',
          ERROR_MAX_PROPERTIES: 'Error - Max Properties',
          ERROR_MIN_PROPERTIES: 'Error - Min Properties',
          ERROR_ADDITIONAL_ITEMS: 'Error - Additional Items',
          ERROR_MAXIMUM: 'Error - Maximum',
          ERROR_MINIMUM: 'Error - Minimum',
          ERROR_FORMAT: 'Error - Format',
          ERROR_ADDITIONAL_PROPERTIES: 'Error - Additional Properties',
          ERROR_DEPENDENCIES: 'Error - Dependencies',
          ERROR_UNIQUE_ITEMS: 'Error - Unique Items',
          ERROR_PROPERTY_REQUIRED: 'Error - Property Required',
          ERROR_PROPERTY_NAMES: 'Error - Property Names',
          ERROR_PATTERN_REQUIRED: 'Error - Pattern Required',
          ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING: 'Error - Type Invalid (expected string)',
          ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER: 'Error - Type Invalid (expected number)',
          ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT: 'Error - Type Invalid (expected object)',
          ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY: 'Error - Type Invalid (expected array)',
          ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN: 'Error - Type Invalid (expected boolean)',
          ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL: 'Error - Type Invalid (expected null)',
          ERROR_MULTIPLE_OF: 'Error - Multiple Of',
          ERROR_PATTERN: 'Error - Pattern',
          ERROR_CONST: 'Error - Const',
          ERROR_ENUM: 'Error - Enum',
          ERROR_$REF: 'Error - $Ref',
          ERROR_ONE_OF: 'Error - One Of',
          ERROR_UNKNOWN: 'Error - Unknown'
        }
      }
    }
  }
}

/**
 * @param {ErrorSummaryProps} props
 * @returns {React.JSX.Element}
 */
export function Default ({ errorSummary = [], ...args }) {
  return (
    <ErrorSummarySprocket
      {...args}
      errorSummary={errorSummary.flat()}
    />
  )
}

Default.propTypes = {
  errorSummary: PropTypes.array
}
