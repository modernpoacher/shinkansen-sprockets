/**
 * ErrorSummarySprocket component
 *
 * @typedef {import('shinkansen-sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from './title/index.jsx'
import Group from './group/index.jsx'

export default class ErrorSummarySprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.errorSummary !== this.props.errorSummary)
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
      errorSummary
    } = this.props

    return (
      <Group
        errorSummary={errorSummary}
      />
    )
  }

  render () {
    const {
      errorSummary
    } = this.props

    if (errorSummary.length) {
      const className = this.getClassName()

      return (
        <div tabIndex='-1' className={className}>
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
  errorSummary: PropTypes.arrayOf(PropTypes.shape())
}

ErrorSummarySprocket.defaultProps = {
  ...Sprocket.defaultProps,
  errorSummary: []
}
