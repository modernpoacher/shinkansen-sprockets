/**
 * ErrorSummaryGroup component
 *
 * @typedef {import('shinkansen-sprockets/components/group').GroupProps} GroupProps
 *
 * Group state
 *
 * @typedef {Object} GroupState
 * @property {{}} [errorSummary]
 */

import React from 'react'
import PropTypes from 'prop-types'

import debug from 'debug'

import equal from 'fast-deep-equal'
import classnames from 'classnames'

import Group from '#sprockets/components/group'

import transform from '#sprockets/transformers/error-summary'
import {
  getKey
} from '#sprockets/transformers/common'

import TextContent from '#sprockets/components/common/text-content'

const DEFAULT_ERROR_SUMMARY = []

const log = debug('shinkansen-sprockets/sprockets/error-summary/group')

/* eslint-disable-next-line react/prop-types */
function render (error, index) {
  log('render')

  const {
    href,
    text
  } = transform(error)

  return (
    <li key={getKey(href, text, index)} className='error'>
      <a href={href}>
        <TextContent textContent={text} />
      </a>
    </li>
  )
}

export default class ErrorSummaryGroup extends Group {
  /**
   * @type {GroupState}
   */
  state = {
    errorSummary: DEFAULT_ERROR_SUMMARY
  }

  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'errorSummary'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {GroupState}
   */
  static getDerivedStateFromProps ({ errorSummary }, { errorSummary: E }) {
    return {
      errorSummary: equal(errorSummary, E) ? E : errorSummary
    }
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'errorSummary'
   *
   * @param {GroupProps} props   Latest props
   * @param {GroupState} state   Current state
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      errorSummary: e = DEFAULT_ERROR_SUMMARY
    } = state

    const {
      errorSummary: E = DEFAULT_ERROR_SUMMARY
    } = this.state

    return (e !== E)
  }

  render () {
    const {
      errorSummary = DEFAULT_ERROR_SUMMARY
    } = this.props

    if (errorSummary.length) {
      const {
        groupRef
      } = this.props

      return (
        <ul
          className={this.getClassName()}
          ref={groupRef}>
          {errorSummary.map(render)}
        </ul>
      )
    }

    return null
  }
}

ErrorSummaryGroup.propTypes = {
  ...Group.propTypes,
  errorSummary: PropTypes.arrayOf(PropTypes.shape())
}
