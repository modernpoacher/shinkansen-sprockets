declare module '#sprockets/sprockets/fieldset' {
  import type React from 'react'

  import Sprocket from '#sprockets/sprockets'

  export type FieldsetProps = SprocketsTypes.Sprockets.Fieldset.FieldsetProps

  export default class FieldsetSprocket<P extends FieldsetProps> extends Sprocket<P> {
    renderDescription (): React.JSX.Element | null

    renderErrorMessage (): React.JSX.Element | null
  }
}

declare module 'shinkansen-sprockets/sprockets/fieldset' {
  export { default } from '#sprockets/sprockets/fieldset'
  export * from '#sprockets/sprockets/fieldset'
}
