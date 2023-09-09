import React from 'react'

import FieldsetSprocket from 'shinkansen-sprockets/sprockets/fieldset'
import errors from '#stories/errors'

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

export function Fieldset () {
  return (
    <FieldsetSprocket
      title='Title'
      description='Description'
    />
  )
}
