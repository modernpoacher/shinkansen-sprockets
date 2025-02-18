/**
 *  @typedef {SprocketsTypes.ErrorDefinitionType} ErrorDefinitionType
 *  @typedef {SprocketsTypes.Components.Group.GroupProps} GroupProps
 *  @typedef {SprocketsTypes.Components.Group.GroupState} GroupState
 *  @typedef {SprocketsTypes.Components.Group.ErrorSummary.ErrorSummaryProps} ErrorSummaryProps
 *  @typedef {SprocketsTypes.Components.Group.ErrorSummary.ErrorSummaryState} ErrorSummaryState
 */

/**
 * ErrorSummaryGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'

import equal from 'fast-deep-equal'
import classnames from 'classnames'

import debug from 'debug'

import Group from '#sprockets/components/group'

import transform from '#sprockets/transformers/error-summary'
import {
  getKey
} from '#sprockets/transformers/common'

import TextContent from '#sprockets/components/common/text-content'

/**
 *  @type {ErrorDefinitionType[]}
 */
const DEFAULT_ERROR_SUMMARY = []

const log = debug('shinkansen-sprockets/sprockets/error-summary/group')

/**
 * @param {ErrorDefinitionType} error
 * @param {number} index
 * @returns {React.JSX.Element}
 */
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

/**
 *  @extends {Group<GroupProps & ErrorSummaryProps, GroupState & ErrorSummaryState>}
 */
export default class ErrorSummaryGroup extends Group {
  /**
   *  @type {ErrorSummaryState}
   */
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'errorSummary'
   *
   *  @param {ErrorSummaryProps} props   Latest props
   *  @param {ErrorSummaryState} state   Current state
   *  @returns {ErrorSummaryState}
   */
  static getDerivedStateFromProps ({ errorSummary }, { errorSummary: E }) {
    return {
      errorSummary: equal(errorSummary, E) ? E : errorSummary
    }
  }

  /**
   * Compare latest 'props' with 'state' for changes to 'errorSummary'
   *
   *  @param {ErrorSummaryProps} props   Latest props
   *  @param {ErrorSummaryState} state   Current state
   *  @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      errorSummary: e = DEFAULT_ERROR_SUMMARY
    } = state

    const {
      errorSummary: E = DEFAULT_ERROR_SUMMARY
    } = this.state

    return !equal(e, E)
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
  errorSummary: PropTypes.arrayOf(PropTypes.shape({}))
}
