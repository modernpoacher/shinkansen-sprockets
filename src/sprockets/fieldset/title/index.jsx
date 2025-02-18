/**
 *  @typedef {SprocketsTypes.Components.Title.TitleProps} TitleProps
 *  @typedef {SprocketsTypes.Components.Title.Fieldset.FieldsetProps} FieldsetProps
 */

/**
 * FieldsetTitle component
 */
import classnames from 'classnames'
import Title from '#sprockets/components/title'

/**
 *  @extends {Title<TitleProps & FieldsetProps>}
 */
export default class FieldsetTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}
