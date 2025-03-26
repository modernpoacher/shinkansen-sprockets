import React from 'react'
import PropTypes from 'prop-types'

/**
 *  @param {{ answer: { title: string } }} props
 *  @returns {React.JSX.Element}
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
