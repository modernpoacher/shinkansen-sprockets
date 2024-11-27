/**
 * CheckAnswersGroup component
 *
 * @typedef {import('shinkansen-sprockets/components/group').GroupProps} GroupProps
 *
 * Group state
 *
 * @typedef {Object} GroupState
 * @property {{}} [checkAnswers]
 */

import React from 'react'
import PropTypes from 'prop-types'

import debug from 'debug'

import equal from 'fast-deep-equal'
import classnames from 'classnames'

import Group from '#sprockets/components/group'

import {
  getKey
} from '#sprockets/transformers/common'

import AnswerTitle from './answer-title.cjs'
import AnswerValue from './answer-value.cjs'
import ChangeAnswer from './change-answer.cjs'

const DEFAULT_CHECK_ANSWERS = []

const log = debug('shinkansen-sprockets/components/group/check-answers')

/* eslint-disable-next-line react/prop-types */
function render ({ params: { answer, changeAnswer: { href, text, ...changeAnswer } } }, index) {
  log('render')

  return (
    <div key={getKey(href, text, index)} className='answer'>
      <AnswerTitle answer={answer} />
      <AnswerValue answer={answer} />
      <ChangeAnswer
        changeAnswer={{ ...changeAnswer, href, text }}
      />
    </div>
  )
}

export default class CheckAnswersGroup extends Group {
  /**
   * @type {GroupState}
   */
  state = {
    checkAnswers: DEFAULT_CHECK_ANSWERS
  }

  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'checkAnswers'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {{checkAnswers: {}}}
   */
  static getDerivedStateFromProps ({ checkAnswers }, { checkAnswers: C }) {
    return {
      checkAnswers: equal(checkAnswers, C) ? C : checkAnswers
    }
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'checkAnswers'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      checkAnswers: c = DEFAULT_CHECK_ANSWERS
    } = state

    const {
      checkAnswers: C = DEFAULT_CHECK_ANSWERS
    } = this.state

    return (c !== C)
  }

  render () {
    const {
      checkAnswers = DEFAULT_CHECK_ANSWERS
    } = this.props

    if (checkAnswers.length) {
      const {
        groupRef
      } = this.props

      return (
        <dl
          className={this.getClassName()}
          ref={groupRef}>
          {checkAnswers.map(render)}
        </dl>
      )
    }

    return null
  }
}

CheckAnswersGroup.propTypes = {
  ...Group.propTypes,
  checkAnswers: PropTypes.arrayOf(PropTypes.shape())
}
