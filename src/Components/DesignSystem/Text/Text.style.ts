import styled from 'styled-components'

import { TextProps } from './Text.props'

const fontSize = {
  xs: '12px',
  sm: '14px',
  default: '16px',
  lg: '20px',
  xl: '28px'
}

export const Text = styled.p<TextProps>`
  text-align: left;
  font-size: ${({ size }) => fontSize[size || 'default']};
  font-weight: ${({ bold, semibold, light }) =>
    !bold && !semibold && !light ? 400 : bold ? 700 : semibold ? 500 : 300};
  line-height: 1;
  color: ${({ color }) => `var(--${color || 'text'})`};

  white-space: pre-line;
`
