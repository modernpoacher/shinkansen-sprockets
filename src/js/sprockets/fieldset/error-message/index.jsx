/**
 *  FieldsetErrorMessage component
 */
import classnames from 'classnames'
import ErrorMessage from '#sprockets/super/components/error-message'

export default class FieldsetErrorMessage extends ErrorMessage {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}
