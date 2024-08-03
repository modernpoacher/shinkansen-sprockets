import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from 'shinkansen-sprockets/sprockets/check-answers'

import STRING_STRING from '#stories/definitions/check-answers/string-string.json'
import STRING_STRING_ENUM from '#stories/definitions/check-answers/string-string-enum.json'
import STRING_STRING_ANY_OF from '#stories/definitions/check-answers/string-string-any-of.json'
import STRING_STRING_ONE_OF from '#stories/definitions/check-answers/string-string-one-of.json'
import STRING_STRING_ALL_OF from '#stories/definitions/check-answers/string-string-all-of.json'

import NUMBER_NUMBER from '#stories/definitions/check-answers/number-number.json'
import NUMBER_NUMBER_ENUM from '#stories/definitions/check-answers/number-number-enum.json'
import NUMBER_NUMBER_ANY_OF from '#stories/definitions/check-answers/number-number-any-of.json'
import NUMBER_NUMBER_ONE_OF from '#stories/definitions/check-answers/number-number-one-of.json'
import NUMBER_NUMBER_ALL_OF from '#stories/definitions/check-answers/number-number-all-of.json'

import OBJECT_STRING from '#stories/definitions/check-answers/object-string.json'
import OBJECT_STRING_ENUM from '#stories/definitions/check-answers/object-string-enum.json'
import OBJECT_STRING_ANY_OF from '#stories/definitions/check-answers/object-string-any-of.json'
import OBJECT_STRING_ONE_OF from '#stories/definitions/check-answers/object-string-one-of.json'
import OBJECT_STRING_ALL_OF from '#stories/definitions/check-answers/object-string-all-of.json'

import OBJECT_NUMBER from '#stories/definitions/check-answers/object-number.json'
import OBJECT_NUMBER_ENUM from '#stories/definitions/check-answers/object-number-enum.json'
import OBJECT_NUMBER_ANY_OF from '#stories/definitions/check-answers/object-number-any-of.json'
import OBJECT_NUMBER_ONE_OF from '#stories/definitions/check-answers/object-number-one-of.json'
import OBJECT_NUMBER_ALL_OF from '#stories/definitions/check-answers/object-number-all-of.json'

import OBJECT_ARRAY_OBJECT_STRING from '#stories/definitions/check-answers/object-array-object-string.json'
import OBJECT_ARRAY_OBJECT_STRING_ENUM from '#stories/definitions/check-answers/object-array-object-string-enum.json'
import OBJECT_ARRAY_OBJECT_STRING_ANY_OF from '#stories/definitions/check-answers/object-array-object-string-any-of.json'
import OBJECT_ARRAY_OBJECT_STRING_ONE_OF from '#stories/definitions/check-answers/object-array-object-string-one-of.json'
import OBJECT_ARRAY_OBJECT_STRING_ALL_OF from '#stories/definitions/check-answers/object-array-object-string-all-of.json'

import OBJECT_ARRAY_OBJECT_NUMBER from '#stories/definitions/check-answers/object-array-object-number.json'
import OBJECT_ARRAY_OBJECT_NUMBER_ENUM from '#stories/definitions/check-answers/object-array-object-number-enum.json'
import OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF from '#stories/definitions/check-answers/object-array-object-number-any-of.json'
import OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF from '#stories/definitions/check-answers/object-array-object-number-one-of.json'
import OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF from '#stories/definitions/check-answers/object-array-object-number-all-of.json'

import OBJECT_ARRAY_OBJECT_BOOLEAN from '#stories/definitions/check-answers/object-array-object-boolean.json'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM from '#stories/definitions/check-answers/object-array-object-boolean-enum.json'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/object-array-object-boolean-any-of.json'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/object-array-object-boolean-one-of.json'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/object-array-object-boolean-all-of.json'

import OBJECT_ARRAY_OBJECT_NULL from '#stories/definitions/check-answers/object-array-object-null.json'
import OBJECT_ARRAY_OBJECT_NULL_ENUM from '#stories/definitions/check-answers/object-array-object-null-enum.json'
import OBJECT_ARRAY_OBJECT_NULL_ANY_OF from '#stories/definitions/check-answers/object-array-object-null-any-of.json'
import OBJECT_ARRAY_OBJECT_NULL_ONE_OF from '#stories/definitions/check-answers/object-array-object-null-one-of.json'
import OBJECT_ARRAY_OBJECT_NULL_ALL_OF from '#stories/definitions/check-answers/object-array-object-null-all-of.json'

import OBJECT_ARRAY_ARRAY_STRING from '#stories/definitions/check-answers/object-array-array-string.json'
import OBJECT_ARRAY_ARRAY_STRING_ENUM from '#stories/definitions/check-answers/object-array-array-string-enum.json'
import OBJECT_ARRAY_ARRAY_STRING_ANY_OF from '#stories/definitions/check-answers/object-array-array-string-any-of.json'
import OBJECT_ARRAY_ARRAY_STRING_ONE_OF from '#stories/definitions/check-answers/object-array-array-string-one-of.json'
import OBJECT_ARRAY_ARRAY_STRING_ALL_OF from '#stories/definitions/check-answers/object-array-array-string-all-of.json'

import OBJECT_ARRAY_ARRAY_NUMBER from '#stories/definitions/check-answers/object-array-array-number.json'
import OBJECT_ARRAY_ARRAY_NUMBER_ENUM from '#stories/definitions/check-answers/object-array-array-number-enum.json'
import OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF from '#stories/definitions/check-answers/object-array-array-number-any-of.json'
import OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF from '#stories/definitions/check-answers/object-array-array-number-one-of.json'
import OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF from '#stories/definitions/check-answers/object-array-array-number-all-of.json'

import OBJECT_ARRAY_ARRAY_BOOLEAN from '#stories/definitions/check-answers/object-array-array-boolean.json'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM from '#stories/definitions/check-answers/object-array-array-boolean-enum.json'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/object-array-array-boolean-any-of.json'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/object-array-array-boolean-one-of.json'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/object-array-array-boolean-all-of.json'

import OBJECT_ARRAY_ARRAY_NULL from '#stories/definitions/check-answers/object-array-array-null.json'
import OBJECT_ARRAY_ARRAY_NULL_ENUM from '#stories/definitions/check-answers/object-array-array-null-enum.json'
import OBJECT_ARRAY_ARRAY_NULL_ANY_OF from '#stories/definitions/check-answers/object-array-array-null-any-of.json'
import OBJECT_ARRAY_ARRAY_NULL_ONE_OF from '#stories/definitions/check-answers/object-array-array-null-one-of.json'
import OBJECT_ARRAY_ARRAY_NULL_ALL_OF from '#stories/definitions/check-answers/object-array-array-null-all-of.json'

import OBJECT_BOOLEAN from '#stories/definitions/check-answers/object-boolean.json'
import OBJECT_BOOLEAN_ENUM from '#stories/definitions/check-answers/object-boolean-enum.json'
import OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/object-boolean-any-of.json'
import OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/object-boolean-one-of.json'
import OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/object-boolean-all-of.json'

import OBJECT_NULL from '#stories/definitions/check-answers/object-null.json'
import OBJECT_NULL_ENUM from '#stories/definitions/check-answers/object-null-enum.json'
import OBJECT_NULL_ANY_OF from '#stories/definitions/check-answers/object-null-any-of.json'
import OBJECT_NULL_ONE_OF from '#stories/definitions/check-answers/object-null-one-of.json'
import OBJECT_NULL_ALL_OF from '#stories/definitions/check-answers/object-null-all-of.json'

import ARRAY_ARRAY_OBJECT_STRING from '#stories/definitions/check-answers/array-array-object-string.json'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from '#stories/definitions/check-answers/array-array-object-string-enum.json'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from '#stories/definitions/check-answers/array-array-object-string-any-of.json'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from '#stories/definitions/check-answers/array-array-object-string-one-of.json'
import ARRAY_ARRAY_OBJECT_STRING_ALL_OF from '#stories/definitions/check-answers/array-array-object-string-all-of.json'

import ARRAY_ARRAY_OBJECT_NUMBER from '#stories/definitions/check-answers/array-array-object-number.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from '#stories/definitions/check-answers/array-array-object-number-enum.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from '#stories/definitions/check-answers/array-array-object-number-any-of.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from '#stories/definitions/check-answers/array-array-object-number-one-of.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF from '#stories/definitions/check-answers/array-array-object-number-all-of.json'

import ARRAY_ARRAY_OBJECT_BOOLEAN from '#stories/definitions/check-answers/array-array-object-boolean.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM from '#stories/definitions/check-answers/array-array-object-boolean-enum.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/array-array-object-boolean-any-of.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/array-array-object-boolean-one-of.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/array-array-object-boolean-all-of.json'

import ARRAY_ARRAY_OBJECT_NULL from '#stories/definitions/check-answers/array-array-object-null.json'
import ARRAY_ARRAY_OBJECT_NULL_ENUM from '#stories/definitions/check-answers/array-array-object-null-enum.json'
import ARRAY_ARRAY_OBJECT_NULL_ANY_OF from '#stories/definitions/check-answers/array-array-object-null-any-of.json'
import ARRAY_ARRAY_OBJECT_NULL_ONE_OF from '#stories/definitions/check-answers/array-array-object-null-one-of.json'
import ARRAY_ARRAY_OBJECT_NULL_ALL_OF from '#stories/definitions/check-answers/array-array-object-null-all-of.json'

import ARRAY_ARRAY_ARRAY_STRING from '#stories/definitions/check-answers/array-array-array-string.json'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from '#stories/definitions/check-answers/array-array-array-string-enum.json'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from '#stories/definitions/check-answers/array-array-array-string-any-of.json'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from '#stories/definitions/check-answers/array-array-array-string-one-of.json'
import ARRAY_ARRAY_ARRAY_STRING_ALL_OF from '#stories/definitions/check-answers/array-array-array-string-all-of.json'

import ARRAY_ARRAY_ARRAY_NUMBER from '#stories/definitions/check-answers/array-array-array-number.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from '#stories/definitions/check-answers/array-array-array-number-enum.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from '#stories/definitions/check-answers/array-array-array-number-any-of.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from '#stories/definitions/check-answers/array-array-array-number-one-of.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF from '#stories/definitions/check-answers/array-array-array-number-all-of.json'

import ARRAY_ARRAY_ARRAY_BOOLEAN from '#stories/definitions/check-answers/array-array-array-boolean.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM from '#stories/definitions/check-answers/array-array-array-boolean-enum.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/array-array-array-boolean-any-of.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/array-array-array-boolean-one-of.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/array-array-array-boolean-all-of.json'

import ARRAY_ARRAY_ARRAY_NULL from '#stories/definitions/check-answers/array-array-array-null.json'
import ARRAY_ARRAY_ARRAY_NULL_ENUM from '#stories/definitions/check-answers/array-array-array-null-enum.json'
import ARRAY_ARRAY_ARRAY_NULL_ANY_OF from '#stories/definitions/check-answers/array-array-array-null-any-of.json'
import ARRAY_ARRAY_ARRAY_NULL_ONE_OF from '#stories/definitions/check-answers/array-array-array-null-one-of.json'
import ARRAY_ARRAY_ARRAY_NULL_ALL_OF from '#stories/definitions/check-answers/array-array-array-null-all-of.json'

import BOOLEAN_BOOLEAN from '#stories/definitions/check-answers/boolean-boolean.json'
import BOOLEAN_BOOLEAN_ENUM from '#stories/definitions/check-answers/boolean-boolean-enum.json'
import BOOLEAN_BOOLEAN_ANY_OF from '#stories/definitions/check-answers/boolean-boolean-any-of.json'
import BOOLEAN_BOOLEAN_ONE_OF from '#stories/definitions/check-answers/boolean-boolean-one-of.json'
import BOOLEAN_BOOLEAN_ALL_OF from '#stories/definitions/check-answers/boolean-boolean-all-of.json'

import NULL_NULL from '#stories/definitions/check-answers/null-null.json'
import NULL_NULL_ENUM from '#stories/definitions/check-answers/null-null-enum.json'
import NULL_NULL_ANY_OF from '#stories/definitions/check-answers/null-null-any-of.json'
import NULL_NULL_ONE_OF from '#stories/definitions/check-answers/null-null-one-of.json'
import NULL_NULL_ALL_OF from '#stories/definitions/check-answers/null-null-all-of.json'

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
