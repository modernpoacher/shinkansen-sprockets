/**
 *  @typedef {SprocketsTypes.Components.Common.VisuallyHiddenText.VisuallyHiddenTextProps} VisuallyHiddenTextProps
 */

/**
 *  VisuallyHiddenText component
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 *  @param {VisuallyHiddenTextProps} props
 *  @returns {React.JSX.Element | null}
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
  visuallyHiddenText: PropTypes.string
}
