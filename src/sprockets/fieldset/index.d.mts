declare module '#sprockets/sprockets/fieldset' {
  import type React from 'react'

  import Sprocket from '#sprockets/sprockets'

  type FieldsetProps = SprocketsTypes.Sprockets.Sprocket.Fieldset.FieldsetProps

  export default class FieldsetSprocket<P extends FieldsetProps> extends Sprocket<P> {
    renderDescription (): React.JSX.Element | null

    renderErrorMessage (): React.JSX.Element | null
  }
}

declare module 'shinkansen-sprockets/sprockets/fieldset' {
  export type FieldsetProps = SprocketsTypes.Sprockets.Sprocket.Fieldset.FieldsetProps

  export { default } from '#sprockets/sprockets/fieldset'
}
