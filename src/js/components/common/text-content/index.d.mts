declare module '#sprockets/components/common/text-content' {
  import type React from 'react'

  export type TextContentProps = SprocketsTypes.Components.Common.TextContent.TextContentProps

  export default function TextContent (props: TextContentProps): React.JSX.Element | null
}

declare module 'shinkansen-sprockets/components/common/text-content' {
  export { default } from '#sprockets/components/common/text-content'
  export * from '#sprockets/components/common/text-content'
}
