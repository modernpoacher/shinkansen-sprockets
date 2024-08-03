import React from 'react'

import FieldsetSprocket from 'shinkansen-sprockets/sprockets/fieldset'
import errors from '#stories/errors'
import ERROR_UNKNOWN from '#stories/definitions/fieldset/error-unknown.json'

export default {
  title: 'Stories/Sprockets/Fieldset',
  component: FieldsetSprocket,
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'radio',
        labels: {
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          object: 'Object',
          null: 'Null'
        }
      }
    },
    children: {
      control: {
        type: null
      }
    }
  }
}

export function OneError () {
  return (
    <FieldsetSprocket
      title='Title'
      description='Description'
      errorMessage={ERROR_UNKNOWN}
    />
  )
}

export function NoErrors () {
  return (
    <FieldsetSprocket
      title='Title'
      description='Description'
    />
  )
}
