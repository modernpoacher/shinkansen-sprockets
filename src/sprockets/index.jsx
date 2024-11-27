/**
 * Sprocket component
 *
 * @typedef {import('shinkansen-sprockets/sprockets').SprocketProps} SprocketProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  DEFAULT_HANDLE_CHANGE
} from '#sprockets/common'

import Title from '#sprockets/components/title'
import Group from '#sprockets/components/group'

export default class Sprocket extends Component {
  getClassName () {
    return 'sprocket'
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    return (
      (props.children !== this.props.children) ||
      (props.title !== this.props.title) ||
      (props.onChange !== this.props.onChange)
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
      onChange = DEFAULT_HANDLE_CHANGE,
      groupRef,
      children
    } = this.props

    return (
      <Group
        onChange={onChange}
        groupRef={groupRef}>
        {this.renderTitle()}
        {children}
      </Group>
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderGroup()}
      </div>
    )
  }
}

Sprocket.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]),
  groupRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}
