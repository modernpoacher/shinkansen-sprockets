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

import Group from 'shinkansen-sprockets/components/group'

import transform from 'shinkansen-sprockets/transformers/error-summary'
import {
  getKey
} from 'shinkansen-sprockets/transformers/common'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

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
    errorSummary: {}
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
      errorSummary: e
    } = state

    const {
      errorSummary: E
    } = this.state

    return (e !== E)
  }

  render () {
    const {
      groupRef,
      errorSummary
    } = this.props

    if (errorSummary.length) {
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

ErrorSummaryGroup.defaultProps = {
  ...Group.defaultProps,
  errorSummary: []
}
