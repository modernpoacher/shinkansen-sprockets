/**
 *  @typedef {SprocketsTypes.Sprockets.Sprocket.SprocketProps} SprocketProps
 *  @typedef {SprocketsTypes.Sprockets.Sprocket.Fieldset.FieldsetProps} FieldsetProps
 */

/**
 * FieldsetSprocket component
 */
import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import Sprocket from '#sprockets/sprockets'

import Title from '#sprockets/sprockets/fieldset/title'
import Description from '#sprockets/sprockets/fieldset/description'
import ErrorMessage from '#sprockets/sprockets/fieldset/error-message'
import Group from '#sprockets/sprockets/fieldset/group'

/**
 *  @extends {Sprocket<SprocketProps & FieldsetProps>}
 */
export default class FieldsetSprocket extends Sprocket {
  getClassName () {
    const {
      errorMessage
    } = this.props

    return classnames(super.getClassName(), { error: !!errorMessage }, 'fieldset')
  }

  /**
   *  @param {FieldsetProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      description,
      errorMessage,
      ...superProps
    } = props

    return (
      super.shouldComponentUpdate(superProps) ||
      (description !== this.props.description) ||
      (errorMessage !== this.props.errorMessage)
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
      children
    } = this.props

    return (
      <Group>
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
    params: PropTypes.shape({}).isRequired,
    uri: PropTypes.string.isRequired
  })
}
