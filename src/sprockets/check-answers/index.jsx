/**
 * CheckAnswersSprocket component
 *
 * @typedef {import('shinkansen-sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from './title/index.jsx'
import Group from './group/index.jsx'

const DEFAULT_CHECK_ANSWERS = []

export default class CheckAnswersSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    return (
      super.shouldComponentUpdate(props, state) ||
      (props.checkAnswers !== this.props.checkAnswers)
    )
  }

  renderTitle () {
    const {
      title
    } = this.props

    return (
      <Title
        title={title}
      />
    )
  }

  renderGroup () {
    const {
      checkAnswers = DEFAULT_CHECK_ANSWERS
    } = this.props

    return (
      <Group
        checkAnswers={checkAnswers}
      />
    )
  }

  render () {
    const {
      checkAnswers = DEFAULT_CHECK_ANSWERS
    } = this.props

    if (checkAnswers.length) {
      return (
        <div className={this.getClassName()}>
          {this.renderTitle()}
          {this.renderGroup()}
        </div>
      )
    }

    return null
  }
}

CheckAnswersSprocket.propTypes = {
  ...Sprocket.propTypes,
  checkAnswers: PropTypes.arrayOf(PropTypes.shape())
}
