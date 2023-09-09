import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('shinkansen-sprockets/components/common/visually-hidden-text')

export default function VisuallyHiddenText ({ visuallyHiddenText }) {
  log('VisuallyHiddenText')

  if (visuallyHiddenText) {
    return (
      <span className='visually-hidden-text'>
        {visuallyHiddenText.toLowerCase()}
      </span>
    )
  }

  return null
}

VisuallyHiddenText.propTypes = {
  visuallyHiddenText: PropTypes.string
}

VisuallyHiddenText.defaultProps = {
  visuallyHiddenText: ''
}
