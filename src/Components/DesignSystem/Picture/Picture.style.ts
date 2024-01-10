import styled from 'styled-components'

import { PictureProps } from './Picture.props'

export const Picture = styled.img<PictureProps>`
  width: ${({ w }) => (w ? `${w}px` : 'auto')};
  min-width: ${({ w }) => (w ? `${w}px` : 'auto')};
  aspect-ratio: ${({ squared }) => (squared ? 1 : 'auto')};

  object-fit: cover;
  object-position: center;

  font-size: 0;
`
