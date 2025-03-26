/**
 *  @typedef {SprocketsTypes.Sprockets.Fieldset.FieldsetProps} FieldsetProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import FieldsetSprocket from '#sprockets/sprockets/fieldset'

import definitions from './definitions.mjs'

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
      options: Object.keys(definitions),
      mapping: definitions,
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

/**
 *  @param {FieldsetProps} props
 *  @returns {React.JSX.Element}
 */
export function Default (props) {
  return (
    <form>
      <FieldsetSprocket
        {...props}
        errorMessage={undefined}
      />
    </form>
  )
}

/**
 *  @param {FieldsetProps} props
 *  @returns {React.JSX.Element}
 */
export function WithError ({ errorMessage, ...props }) {
  return (
    <form>
      <FieldsetSprocket
        {...props}
        errorMessage={errorMessage}
      />
    </form>
  )
}

WithError.propTypes = {
  errorMessage: PropTypes.string
}
