import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

import STRING_STRING from '#stories/definitions/check-answers/string-string'
import STRING_STRING_ENUM from '#stories/definitions/check-answers/string-string-enum'
import STRING_STRING_ANY_OF from '#stories/definitions/check-answers/string-string-any-of'
import STRING_STRING_ONE_OF from '#stories/definitions/check-answers/string-string-one-of'
import STRING_STRING_ALL_OF from '#stories/definitions/check-answers/string-string-all-of'

import NUMBER_NUMBER from '#stories/definitions/check-answers/number-number'
import NUMBER_NUMBER_ENUM from '#stories/definitions/check-answers/number-number-enum'
import NUMBER_NUMBER_ANY_OF from '#stories/definitions/check-answers/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from '#stories/definitions/check-answers/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from '#stories/definitions/check-answers/number-number-all-of'

import OBJECT_STRING from '#stories/definitions/check-answers/object-string'
import OBJECT_STRING_ENUM from '#stories/definitions/check-answers/object-string-enum'
import OBJECT_STRING_ANY_OF from '#stories/definitions/check-answers/object-string-any-of'
import OBJECT_STRING_ONE_OF from '#stories/definitions/check-answers/object-string-one-of'
import OBJECT_STRING_ALL_OF from '#stories/definitions/check-answers/object-string-all-of'

import OBJECT_NUMBER from '#stories/definitions/check-answers/object-number'
import OBJECT_NUMBER_ENUM from '#stories/definitions/check-answers/object-number-enum'
import OBJECT_NUMBER_ANY_OF from '#stories/definitions/check-answers/object-number-any-of'
import OBJECT_NUMBER_ONE_OF from '#stories/definitions/check-answers/object-number-one-of'
import OBJECT_NUMBER_ALL_OF from '#stories/definitions/check-answers/object-number-all-of'

import OBJECT_ARRAY_OBJECT_STRING from '#stories/definitions/check-answers/object-array-object-string'
import OBJECT_ARRAY_OBJECT_STRING_ENUM from '#stories/definitions/check-answers/object-array-object-string-enum'
import OBJECT_ARRAY_OBJECT_STRING_ANY_OF from '#stories/definitions/check-answers/object-array-object-string-any-of'
import OBJECT_ARRAY_OBJECT_STRING_ONE_OF from '#stories/definitions/check-answers/object-array-object-string-one-of'
import OBJECT_ARRAY_OBJECT_STRING_ALL_OF from '#stories/definitions/check-answers/object-array-object-string-all-of'

import OBJECT_ARRAY_OBJECT_NUMBER from '#stories/definitions/check-answers/object-array-object-number'
import OBJECT_ARRAY_OBJECT_NUMBER_ENUM from '#stories/definitions/check-answers/object-array-object-number-enum'
import OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF from '#stories/definitions/check-answers/object-array-object-number-any-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF from '#stories/definitions/check-answers/object-array-object-number-one-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF from '#stories/definitions/check-answers/object-array-object-number-all-of'

import OBJECT_ARRAY_OBJECT_BOOLEAN from '#stories/definitions/check-answers/object-array-object-boolean'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM from '#stories/definitions/check-answers/object-array-object-boolean-enum'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/object-array-object-boolean-any-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/object-array-object-boolean-one-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/object-array-object-boolean-all-of'

import OBJECT_ARRAY_OBJECT_NULL from '#stories/definitions/check-answers/object-array-object-null'
import OBJECT_ARRAY_OBJECT_NULL_ENUM from '#stories/definitions/check-answers/object-array-object-null-enum'
import OBJECT_ARRAY_OBJECT_NULL_ANY_OF from '#stories/definitions/check-answers/object-array-object-null-any-of'
import OBJECT_ARRAY_OBJECT_NULL_ONE_OF from '#stories/definitions/check-answers/object-array-object-null-one-of'
import OBJECT_ARRAY_OBJECT_NULL_ALL_OF from '#stories/definitions/check-answers/object-array-object-null-all-of'

import OBJECT_ARRAY_ARRAY_STRING from '#stories/definitions/check-answers/object-array-array-string'
import OBJECT_ARRAY_ARRAY_STRING_ENUM from '#stories/definitions/check-answers/object-array-array-string-enum'
import OBJECT_ARRAY_ARRAY_STRING_ANY_OF from '#stories/definitions/check-answers/object-array-array-string-any-of'
import OBJECT_ARRAY_ARRAY_STRING_ONE_OF from '#stories/definitions/check-answers/object-array-array-string-one-of'
import OBJECT_ARRAY_ARRAY_STRING_ALL_OF from '#stories/definitions/check-answers/object-array-array-string-all-of'

import OBJECT_ARRAY_ARRAY_NUMBER from '#stories/definitions/check-answers/object-array-array-number'
import OBJECT_ARRAY_ARRAY_NUMBER_ENUM from '#stories/definitions/check-answers/object-array-array-number-enum'
import OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF from '#stories/definitions/check-answers/object-array-array-number-any-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF from '#stories/definitions/check-answers/object-array-array-number-one-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF from '#stories/definitions/check-answers/object-array-array-number-all-of'

import OBJECT_ARRAY_ARRAY_BOOLEAN from '#stories/definitions/check-answers/object-array-array-boolean'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM from '#stories/definitions/check-answers/object-array-array-boolean-enum'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/object-array-array-boolean-any-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/object-array-array-boolean-one-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/object-array-array-boolean-all-of'

import OBJECT_ARRAY_ARRAY_NULL from '#stories/definitions/check-answers/object-array-array-null'
import OBJECT_ARRAY_ARRAY_NULL_ENUM from '#stories/definitions/check-answers/object-array-array-null-enum'
import OBJECT_ARRAY_ARRAY_NULL_ANY_OF from '#stories/definitions/check-answers/object-array-array-null-any-of'
import OBJECT_ARRAY_ARRAY_NULL_ONE_OF from '#stories/definitions/check-answers/object-array-array-null-one-of'
import OBJECT_ARRAY_ARRAY_NULL_ALL_OF from '#stories/definitions/check-answers/object-array-array-null-all-of'

import OBJECT_BOOLEAN from '#stories/definitions/check-answers/object-boolean'
import OBJECT_BOOLEAN_ENUM from '#stories/definitions/check-answers/object-boolean-enum'
import OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/object-boolean-any-of'
import OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/object-boolean-one-of'
import OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/object-boolean-all-of'

import OBJECT_NULL from '#stories/definitions/check-answers/object-null'
import OBJECT_NULL_ENUM from '#stories/definitions/check-answers/object-null-enum'
import OBJECT_NULL_ANY_OF from '#stories/definitions/check-answers/object-null-any-of'
import OBJECT_NULL_ONE_OF from '#stories/definitions/check-answers/object-null-one-of'
import OBJECT_NULL_ALL_OF from '#stories/definitions/check-answers/object-null-all-of'

import ARRAY_ARRAY_OBJECT_STRING from '#stories/definitions/check-answers/array-array-object-string'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from '#stories/definitions/check-answers/array-array-object-string-enum'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from '#stories/definitions/check-answers/array-array-object-string-any-of'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from '#stories/definitions/check-answers/array-array-object-string-one-of'
import ARRAY_ARRAY_OBJECT_STRING_ALL_OF from '#stories/definitions/check-answers/array-array-object-string-all-of'

import ARRAY_ARRAY_OBJECT_NUMBER from '#stories/definitions/check-answers/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from '#stories/definitions/check-answers/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from '#stories/definitions/check-answers/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from '#stories/definitions/check-answers/array-array-object-number-one-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF from '#stories/definitions/check-answers/array-array-object-number-all-of'

import ARRAY_ARRAY_OBJECT_BOOLEAN from '#stories/definitions/check-answers/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM from '#stories/definitions/check-answers/array-array-object-boolean-enum'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/array-array-object-boolean-any-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/array-array-object-boolean-one-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/array-array-object-boolean-all-of'

import ARRAY_ARRAY_OBJECT_NULL from '#stories/definitions/check-answers/array-array-object-null'
import ARRAY_ARRAY_OBJECT_NULL_ENUM from '#stories/definitions/check-answers/array-array-object-null-enum'
import ARRAY_ARRAY_OBJECT_NULL_ANY_OF from '#stories/definitions/check-answers/array-array-object-null-any-of'
import ARRAY_ARRAY_OBJECT_NULL_ONE_OF from '#stories/definitions/check-answers/array-array-object-null-one-of'
import ARRAY_ARRAY_OBJECT_NULL_ALL_OF from '#stories/definitions/check-answers/array-array-object-null-all-of'

import ARRAY_ARRAY_ARRAY_STRING from '#stories/definitions/check-answers/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from '#stories/definitions/check-answers/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from '#stories/definitions/check-answers/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from '#stories/definitions/check-answers/array-array-array-string-one-of'
import ARRAY_ARRAY_ARRAY_STRING_ALL_OF from '#stories/definitions/check-answers/array-array-array-string-all-of'

import ARRAY_ARRAY_ARRAY_NUMBER from '#stories/definitions/check-answers/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from '#stories/definitions/check-answers/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from '#stories/definitions/check-answers/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from '#stories/definitions/check-answers/array-array-array-number-one-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF from '#stories/definitions/check-answers/array-array-array-number-all-of'

import ARRAY_ARRAY_ARRAY_BOOLEAN from '#stories/definitions/check-answers/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM from '#stories/definitions/check-answers/array-array-array-boolean-enum'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/array-array-array-boolean-any-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/array-array-array-boolean-one-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/array-array-array-boolean-all-of'

import ARRAY_ARRAY_ARRAY_NULL from '#stories/definitions/check-answers/array-array-array-null'
import ARRAY_ARRAY_ARRAY_NULL_ENUM from '#stories/definitions/check-answers/array-array-array-null-enum'
import ARRAY_ARRAY_ARRAY_NULL_ANY_OF from '#stories/definitions/check-answers/array-array-array-null-any-of'
import ARRAY_ARRAY_ARRAY_NULL_ONE_OF from '#stories/definitions/check-answers/array-array-array-null-one-of'
import ARRAY_ARRAY_ARRAY_NULL_ALL_OF from '#stories/definitions/check-answers/array-array-array-null-all-of'

import BOOLEAN_BOOLEAN from '#stories/definitions/check-answers/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from '#stories/definitions/check-answers/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/boolean-boolean-all-of'

import NULL_NULL from '#stories/definitions/check-answers/null-null'
import NULL_NULL_ENUM from '#stories/definitions/check-answers/null-null-enum'
import NULL_NULL_ANY_OF from '#stories/definitions/check-answers/null-null-any-of'
import NULL_NULL_ONE_OF from '#stories/definitions/check-answers/null-null-one-of'
import NULL_NULL_ALL_OF from '#stories/definitions/check-answers/null-null-all-of'

export default {
  title: 'Stories/Sprockets/Check Answers',
  component: CheckAnswersSprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export function AllAnswers () {
  return (
    <CheckAnswersSprocket
      title='All Answers'
      checkAnswers={[
        STRING_STRING,
        STRING_STRING_ENUM,
        STRING_STRING_ANY_OF,
        STRING_STRING_ONE_OF,
        STRING_STRING_ALL_OF,

        NUMBER_NUMBER,
        NUMBER_NUMBER_ENUM,
        NUMBER_NUMBER_ANY_OF,
        NUMBER_NUMBER_ONE_OF,
        NUMBER_NUMBER_ALL_OF,

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
        OBJECT_NULL_ALL_OF,

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
        ARRAY_ARRAY_ARRAY_NULL_ALL_OF,

        BOOLEAN_BOOLEAN,
        BOOLEAN_BOOLEAN_ENUM,
        BOOLEAN_BOOLEAN_ANY_OF,
        BOOLEAN_BOOLEAN_ONE_OF,
        BOOLEAN_BOOLEAN_ALL_OF,

        NULL_NULL,
        NULL_NULL_ENUM,
        NULL_NULL_ANY_OF,
        NULL_NULL_ONE_OF,
        NULL_NULL_ALL_OF
      ]}
    />
  )
}

AllAnswers.parameters = {
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
