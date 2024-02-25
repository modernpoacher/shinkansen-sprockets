declare module 'shinkansen-sprockets/components/common/visually-hidden-text' {
  import type React from 'react'

  export interface VisuallyHiddenTextProps {
    visuallyHiddenText: string
  }

  export default function VisuallyHiddenText (props: VisuallyHiddenTextProps): React.JSX.Element | null
}
