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
 *  @param {FieldsetProps} args
 *  @returns {React.JSX.Element}
 */
export function Default (args) {
  return (
    <form>
      <FieldsetSprocket
        {...args}
        errorMessage={undefined}
      />
    </form>
  )
}

/**
 *  @param {FieldsetProps} args
 *  @returns {React.JSX.Element}
 */
export function WithError ({ errorMessage, ...args }) {
  return (
    <form>
      <FieldsetSprocket
        {...args}
        errorMessage={errorMessage}
      />
    </form>
  )
}

WithError.propTypes = {
  errorMessage: PropTypes.string
}
