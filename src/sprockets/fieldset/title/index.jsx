/**
 * FieldsetTitle component
 */
import classnames from 'classnames'
import Title from '#sprockets/components/title'

export default class FieldsetTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetTitle.propTypes = {
  ...Title.propTypes
}
