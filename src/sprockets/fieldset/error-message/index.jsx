/**
 * FieldsetErrorMessage component
 */

import classnames from 'classnames'
import ErrorMessage from '#sprockets/components/error-message'

export default class FieldsetErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetErrorMessage.propTypes = {
  ...ErrorMessage.propTypes
}
