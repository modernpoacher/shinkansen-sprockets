/**
 * ErrorMessage component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'

import transform from 'shinkansen-sprockets/transformers/error-message'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

export default class ErrorMessage extends Component {
  state = {
    errorMessage: {}
  }

  hasTextContent () {
    const { errorMessage } = this.props

    const {
      text
    } = transform(errorMessage)

    return !!text
  }

  getTextContent () {
    const { errorMessage } = this.props
    const {
      text
    } = transform(errorMessage)

    return text
  }

  getClassName () {
    return 'error-message'
  }

  /**
   *  Merge latest `props` to `state`
   *
   *  @param {{errorMessage?: SprocketsTypes.ErrorDefinitionType}} props   Latest props
   *  @param {{errorMessage?: SprocketsTypes.ErrorDefinitionType}} state   Latest state
   *  @returns {{errorMessage: SprocketsTypes.ErrorDefinitionType | void}}
   */
  static getDerivedStateFromProps ({ errorMessage }, { errorMessage: E }) {
    return {
      errorMessage: equal(errorMessage, E) ? E : errorMessage
    }
  }

  /**
   *  Compare current and latest `state` for changes to `errorMessage`
   *
   *  @param {{errorMessage?: SprocketsTypes.ErrorDefinitionType}} props   Latest props
   *  @param {{errorMessage?: SprocketsTypes.ErrorDefinitionType}} state   Latest state
   *  @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      errorMessage: e
    } = state

    const {
      errorMessage: E
    } = this.state

    return (e !== E)
  }

  renderTextContent () {
    if (this.hasTextContent()) {
      const textContent = this.getTextContent()

      return (
        <TextContent textContent={textContent} />
      )
    }

    return null
  }

  render () {
    const { errorMessage } = this.props

    if (errorMessage) {
      return (
        <span className={this.getClassName()}>
          {this.renderTextContent()}
        </span>
      )
    }

    return null
  }
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    uri: PropTypes.string.isRequired
  })
}
