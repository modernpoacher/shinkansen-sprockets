/**
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupProps} GroupProps
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupState} GroupState
 *  @typedef {SprocketsTypes.Sprockets.Fieldset.Group.FieldsetProps} FieldsetProps
 *  @typedef {SprocketsTypes.Sprockets.Fieldset.Group.FieldsetState} FieldsetState
 */

/**
 *  FieldsetGroup component
 */
import classnames from 'classnames'
import Group from '#sprockets/super/components/group'

/**
 *  @extends {Group<GroupProps & FieldsetProps, GroupState & FieldsetState>}
 */
export default class FieldsetGroup extends Group {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}
