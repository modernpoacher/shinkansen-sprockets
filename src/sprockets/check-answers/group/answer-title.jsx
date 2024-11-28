import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
 */
export default function AnswerTitle ({ answer: { title } }) {
  return (
    <dt className='answer-title'>
      {title}
    </dt>
  )
}

AnswerTitle.propTypes = {
  answer: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}
