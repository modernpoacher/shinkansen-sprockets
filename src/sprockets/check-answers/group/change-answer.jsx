import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import {
  Link
} from 'react-router-dom'

import TextContent from '#sprockets/components/common/text-content'

import VisuallyHiddenText from '#sprockets/components/common/visually-hidden-text'

const log = debug('shinkansen-sprockets/sprockets/check-answers/group/change-answer')

function TextContentWithVisuallyHiddenText ({ textContent, visuallyHiddenText }) {
  return (
    <>
      <TextContent textContent={textContent} />
      {String.fromCharCode(32)}
      <VisuallyHiddenText visuallyHiddenText={visuallyHiddenText.toLowerCase()} />
    </>
  )
}

TextContentWithVisuallyHiddenText.propTypes = {
  textContent: PropTypes.string.isRequired,
  visuallyHiddenText: PropTypes.string.isRequired
}

function LinkText ({ textContent, visuallyHiddenText }) {
  if (textContent) {
    return (
      visuallyHiddenText
        ? <TextContentWithVisuallyHiddenText textContent={textContent} visuallyHiddenText={visuallyHiddenText} />
        : <TextContent textContent={textContent} />
    )
  }
}

LinkText.propTypes = {
  textContent: PropTypes.string.isRequired,
  visuallyHiddenText: PropTypes.string.isRequired
}

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
 */
export default function ChangeAnswer ({ changeAnswer: { href, text, visuallyHiddenText } }) {
  log('ChangeAnswer')

  return (
    <dd className='change-answer'>
      <Link to={href}>
        <LinkText textContent={text} visuallyHiddenText={visuallyHiddenText} />
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
