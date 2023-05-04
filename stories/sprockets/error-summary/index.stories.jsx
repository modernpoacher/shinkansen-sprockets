import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import ErrorSummarySprocket from 'shinkansen-sprockets/sprockets/error-summary'

import ERROR_MAX_ITEMS from 'stories/definitions/error-summary/error-max-items'
import ERROR_MIN_ITEMS from 'stories/definitions/error-summary/error-min-items'
import ERROR_MAX_LENGTH from 'stories/definitions/error-summary/error-max-length'
import ERROR_MIN_LENGTH from 'stories/definitions/error-summary/error-min-length'
import ERROR_MAX_PROPERTIES from 'stories/definitions/error-summary/error-max-properties'
import ERROR_MIN_PROPERTIES from 'stories/definitions/error-summary/error-min-properties'
import ERROR_ADDITIONAL_ITEMS from 'stories/definitions/error-summary/error-additional-items'
import ERROR_MAXIMUM from 'stories/definitions/error-summary/error-maximum'
import ERROR_MINIMUM from 'stories/definitions/error-summary/error-minimum'
import ERROR_FORMAT from 'stories/definitions/error-summary/error-format'
import ERROR_ADDITIONAL_PROPERTIES from 'stories/definitions/error-summary/error-additional-properties'
import ERROR_DEPENDENCIES from 'stories/definitions/error-summary/error-dependencies'
import ERROR_UNIQUE_ITEMS from 'stories/definitions/error-summary/error-unique-items'
import ERROR_PROPERTY_REQUIRED from 'stories/definitions/error-summary/error-property-required'
import ERROR_PROPERTY_NAMES from 'stories/definitions/error-summary/error-property-names'
import ERROR_PATTERN_REQUIRED from 'stories/definitions/error-summary/error-pattern-required'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING from 'stories/definitions/error-summary/error-type-invalid-expected-type-string'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER from 'stories/definitions/error-summary/error-type-invalid-expected-type-number'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT from 'stories/definitions/error-summary/error-type-invalid-expected-type-object'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY from 'stories/definitions/error-summary/error-type-invalid-expected-type-array'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN from 'stories/definitions/error-summary/error-type-invalid-expected-type-boolean'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL from 'stories/definitions/error-summary/error-type-invalid-expected-type-null'
import ERROR_MULTIPLE_OF from 'stories/definitions/error-summary/error-multiple-of'
import ERROR_PATTERN from 'stories/definitions/error-summary/error-pattern'
import ERROR_CONST from 'stories/definitions/error-summary/error-const'
import ERROR_ENUM from 'stories/definitions/error-summary/error-enum'
import ERROR_$REF from 'stories/definitions/error-summary/error-$ref'
import ERROR_ONE_OF from 'stories/definitions/error-summary/error-one-of'
import ERROR_UNKNOWN from 'stories/definitions/error-summary/error-unknown'

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
  title: 'Components/Error Summary',
  component: ErrorSummarySprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    title: 'Error Summary',
    errorSummary: 'ERROR_UNKNOWN'
  },
  argTypes: {
    errorSummary: {
      options: Object.keys(ERROR),
      mapping: ERROR,
      control: {
        type: 'radio',
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

export const Default = (args) => (
  <ErrorSummarySprocket
    {...args}
  />
)

export const AllErrors = () => (
  <ErrorSummarySprocket
    title='All Errors'
    errorSummary={Object.values(ERROR).map(([e]) => e)}
  />
)

AllErrors.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export const NoErrors = () => (
  <ErrorSummarySprocket
    title='No Errors'
    errorSummary={[]}
  />
)

NoErrors.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
