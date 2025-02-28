/**
 *  @typedef {SprocketsTypes.ErrorDefinitionType} ErrorDefinitionType
 *  @typedef {SprocketsTypes.Sprockets.Sprocket.SprocketProps} SprocketProps
 *  @typedef {SprocketsTypes.Sprockets.Sprocket.ErrorSummary.ErrorSummaryProps} ErrorSummaryProps
 */

/**
 * ErrorSummarySprocket component
 */
import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from '#sprockets/sprockets'
import Title from '#sprockets/sprockets/error-summary/title'
import Group from '#sprockets/sprockets/error-summary/group'

/**
 *  @type {ErrorDefinitionType[]}
 */
const DEFAULT_ERROR_SUMMARY = []

/**
 *  @extends {Sprocket<SprocketProps & ErrorSummaryProps>}
 */
export default class ErrorSummarySprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
  }

  /**
   *  @param {ErrorSummaryProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      errorSummary,
      ...superProps
    } = props

    return (
      super.shouldComponentUpdate(superProps) ||
      (errorSummary !== this.props.errorSummary)
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
      errorSummary = DEFAULT_ERROR_SUMMARY
    } = this.props

    return (
      <Group
        errorSummary={errorSummary}
      />
    )
  }

  render () {
    const {
      errorSummary = DEFAULT_ERROR_SUMMARY
    } = this.props

    if (errorSummary.length) {
      const className = this.getClassName()

      return (
        <div tabIndex={-1} className={className}>
          {this.renderTitle()}
          {this.renderGroup()}
        </div>
      )
    }

    return null
  }
}

ErrorSummarySprocket.propTypes = {
  ...Sprocket.propTypes,
  errorSummary: PropTypes.arrayOf(PropTypes.shape({}))
}
