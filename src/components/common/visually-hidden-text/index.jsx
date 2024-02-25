import React from 'react'
import PropTypes from 'prop-types'

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
