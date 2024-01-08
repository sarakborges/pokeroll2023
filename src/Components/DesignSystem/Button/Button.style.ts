import styled, { css } from 'styled-components'

import { ButtonProps } from './Button.props'

const PrimaryButton = css`
  background-color: var(--primaryButtonBackground);

  color: var(--primaryButtonTextColor);

  transition: background-color 0.3s;

  > svg {
    fill: var(--primaryButtonTextColor);
  }

  > p {
    color: inherit;
  }

  &:hover {
    background-color: var(--primaryButtonHoverBgColor);
  }
`

const TransparentButton = css`
  background-color: transparent;

  color: var(--transparentButtonColor);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px -2px var(--primaryButtonShadow);
  }
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  padding: ${({ nopad }) => (nopad ? '0' : '8px')};

  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '8px')};

  font-size: 12px;
  letter-spacing: inherit;

  cursor: pointer;

  ${({ primary, secondary }) => (primary || !secondary) && PrimaryButton}
  ${({ transparent }) => transparent && TransparentButton}
`
