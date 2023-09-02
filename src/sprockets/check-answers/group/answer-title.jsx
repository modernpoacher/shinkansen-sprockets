import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('shinkansen-sprockets/sprockets/check-answers/group')

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
 */
export default function AnswerTitle ({ answer: { title } }) {
  log('AnswerTitle')

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
