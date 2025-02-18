/**
 *  @typedef {SprocketsTypes.Components.Group.GroupProps} GroupProps
 *  @typedef {SprocketsTypes.Components.Group.GroupState} GroupState
 *  @typedef {SprocketsTypes.Components.Group.Fieldset.FieldsetProps} FieldsetProps
 *  @typedef {SprocketsTypes.Components.Group.Fieldset.FieldsetState} FieldsetState
 */

/**
 * FieldsetGroup component
 */
import classnames from 'classnames'
import Group from '#sprockets/components/group'

/**
 *  @extends {Group<GroupProps & FieldsetProps, GroupState & FieldsetState>}
 */
export default class FieldsetGroup extends Group {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}
