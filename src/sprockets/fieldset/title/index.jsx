/**
 *  @typedef {SprocketsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {SprocketsTypes.Sprockets.Fieldset.Title.FieldsetProps} FieldsetProps
 */

/**
 *  FieldsetTitle component
 */
import classnames from 'classnames'

import Title from '#sprockets/super/components/title'

/**
 *  @extends {Title<TitleProps & FieldsetProps>}
 */
export default class FieldsetTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}
