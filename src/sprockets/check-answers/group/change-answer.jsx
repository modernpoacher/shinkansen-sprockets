import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  Link
} from 'react-router-dom'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

import VisuallyHiddenText from './visually-hidden-text.cjs'

const log = debug('shinkansen-sprockets/sprockets/check-answers/group/change-answer')

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
 */
export default function ChangeAnswer ({ changeAnswer: { href, text, visuallyHiddenText } }) {
  log('ChangeAnswer')

  return (
    <dd className='change-answer'>
      <Link to={href}>
        <TextContent textContent={text} />
        {String.fromCharCode(32)}
        <VisuallyHiddenText visuallyHiddenText={visuallyHiddenText} />
      </Link>
    </dd>
  )
}

ChangeAnswer.propTypes = {
  changeAnswer: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    visuallyHiddenText: PropTypes.string.isRequired
  }).isRequired
}
