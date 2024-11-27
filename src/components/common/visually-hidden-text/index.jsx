/**
 * VisuallyHiddenText component
 *
 * @typedef {import('shinkansen-sprockets/components/common/visually-hidden-text').VisuallyHiddenTextProps} VisuallyHiddenTextProps
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {VisuallyHiddenTextProps}
 * @returns {React.JSX.Element | null}
 */
export default function VisuallyHiddenText ({ visuallyHiddenText }) {
  if (visuallyHiddenText) {
    return (
      <span className='visually-hidden-text'>
        {visuallyHiddenText}
      </span>
    )
  }

  return null
}

VisuallyHiddenText.propTypes = {
  visuallyHiddenText: PropTypes.string.isRequired
}
