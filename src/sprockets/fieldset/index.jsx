/**
 * FieldsetSprocket component
 *
 * @typedef {import('shinkansen-sprockets/sprockets').SprocketProps} SprocketProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'
import Title from './title/index.jsx'
import Description from './description/index.jsx'
import ErrorMessage from './error-message/index.jsx'
import Group from './group/index.jsx'

export default class FieldsetSprocket extends Sprocket {
  getClassName () {
    const {
      errorMessage
    } = this.props

    return classnames(super.getClassName(), { error: !!errorMessage }, 'fieldset')
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      super.shouldComponentUpdate(props) ||
      (props.description !== this.props.description) ||
      (props.errorMessage !== this.props.errorMessage)
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

  renderDescription () {
    const {
      description
    } = this.props

    return (
      <Description
        description={description}
      />
    )
  }

  renderErrorMessage () {
    const {
      errorMessage
    } = this.props

    return (
      <ErrorMessage
        errorMessage={errorMessage}
      />
    )
  }

  renderGroup () {
    const {
      onChange,
      children
    } = this.props

    return (
      <Group
        onChange={onChange}>
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderErrorMessage()}
        {children}
      </Group>
    )
  }
}

FieldsetSprocket.propTypes = {
  ...Sprocket.propTypes,
  description: PropTypes.string,
  errorMessage: PropTypes.shape({
    type: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    uri: PropTypes.string.isRequired
  })
}

FieldsetSprocket.defaultProps = {
  ...Sprocket.defaultProps
}
