declare module '#sprockets/components/common/visually-hidden-text' {
  import type React from 'react'

  type VisuallyHiddenTextProps = SprocketsTypes.Components.Common.VisuallyHiddenText.VisuallyHiddenTextProps

  export default function VisuallyHiddenText (props: VisuallyHiddenTextProps): React.JSX.Element | null
}

declare module 'shinkansen-sprockets/components/common/visually-hidden-text' {
  export type VisuallyHiddenTextProps = SprocketsTypes.Components.Common.VisuallyHiddenText.VisuallyHiddenTextProps

  export { default } from '#sprockets/components/common/visually-hidden-text'
}
