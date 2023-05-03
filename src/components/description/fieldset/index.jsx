/**
 * FieldsetDescription component
 */
import classnames from 'classnames'
import Description from '#components/description'

export default class FieldsetDescription extends Description {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetDescription.propTypes = {
  ...Description.propTypes
}

FieldsetDescription.defaultProps = {
  ...Description.defaultProps
}
