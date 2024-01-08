import { FC } from 'react'

import { PictureProps } from './Picture.props'

import * as Styled from './Picture.style'

export const Picture: FC<PictureProps> = ({ src, alt, ...rest }) => {
  return <Styled.Picture {...rest} src={src} alt={alt || ''} />
}
