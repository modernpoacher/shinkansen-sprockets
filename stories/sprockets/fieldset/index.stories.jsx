import React from 'react'
import PropTypes from 'prop-types'

import FieldsetSprocket from '#sprockets/sprockets/fieldset'
import errors from '#stories/errors'

export default {
  title: 'Stories/Sprockets/Fieldset',
  component: FieldsetSprocket,
  args: {
    title: 'Fieldset',
    description: 'Description',
    errorMessage: 'string'
  },
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
    }
  }
}

export function Default (args) {
  return (
    <FieldsetSprocket
      {...args}
      errorMessage={undefined}
    />
  )
}

export function WithError ({ errorMessage = {}, ...args }) {
  return (
    <FieldsetSprocket
      {...args}
      errorMessage={errorMessage}
    />
  )
}

WithError.propTypes = {
  errorMessage: PropTypes.shape({})
}
