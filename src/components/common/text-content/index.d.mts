declare module '#sprockets/components/common/text-content' {
  import type React from 'react'

  type TextContentProps = SprocketsTypes.Components.Common.TextContent.TextContentProps

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module 'shinkansen-sprockets/components/common/text-content' {
  export type TextContentProps = SprocketsTypes.Components.Common.TextContent.TextContentProps

  export { default } from '#sprockets/components/common/text-content'
}
