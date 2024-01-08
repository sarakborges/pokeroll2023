import { FC, ReactNode } from 'react'

import { Text } from '@/Components/DesignSystem'

import * as Styled from './Header.style'

export const Header: FC<{
  children: ReactNode | string
  action?: ReactNode
}> = ({ children, action }) => {
  return (
    <Styled.Header>
      <Text light size="xl">
        {children}
      </Text>

      <>{action}</>
    </Styled.Header>
  )
}
