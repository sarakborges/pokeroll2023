import { FC } from 'react'

import { NonAuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <NonAuthedLayout>
      <Styled.HomeTemplate>
        <Header>Home - Work in progress</Header>
      </Styled.HomeTemplate>
    </NonAuthedLayout>
  )
}
