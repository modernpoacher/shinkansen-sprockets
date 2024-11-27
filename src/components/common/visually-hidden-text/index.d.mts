declare module '#sprockets/components/common/visually-hidden-text' {
  import type React from 'react'

  export interface VisuallyHiddenTextProps {
    visuallyHiddenText: string
  }

  export default function VisuallyHiddenText (props: VisuallyHiddenTextProps): React.JSX.Element | null
}

declare module 'shinkansen-sprockets/components/common/visually-hidden-text' {
  export { default } from '#sprockets/components/common/visually-hidden-text'
  export * from '#sprockets/components/common/visually-hidden-text'
}
