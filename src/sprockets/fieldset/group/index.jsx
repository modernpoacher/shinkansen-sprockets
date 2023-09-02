/**
 * FieldsetGroup component
 */

import classnames from 'classnames'
import Group from 'shinkansen-sprockets/components/group'

export default class FieldsetGroup extends Group {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetGroup.propTypes = {
  ...Group.propTypes
}

FieldsetGroup.defaultProps = {
  ...Group.defaultProps
}
