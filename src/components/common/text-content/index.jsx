/**
 * TextContent component
 *
 * @typedef {import('shinkansen-sprockets/components/common/text-content').TextContentProps} TextContentProps
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {TextContentProps}
 * @returns {React.JSX.Element}
 */
export default function TextContent ({ textContent }) {
  return (
    <span className='text-content'>
      {textContent}
    </span>
  )
}

TextContent.propTypes = {
  textContent: PropTypes.string.isRequired
}
