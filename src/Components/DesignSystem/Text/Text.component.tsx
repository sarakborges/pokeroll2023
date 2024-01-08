import { FC } from 'react'

import { TextProps } from './Text.props'

import * as Styled from './Text.style'

export const Text: FC<TextProps> = ({ children, ...rest }) => {
  return <Styled.Text {...rest}>{children}</Styled.Text>
}
