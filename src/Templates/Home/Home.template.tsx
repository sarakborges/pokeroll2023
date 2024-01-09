import { FC } from 'react'

import { HOME_HEADER } from '@/Utils/Texts'

import { NonAuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <NonAuthedLayout>
      <Styled.HomeTemplate>
        <Header>{HOME_HEADER}</Header>
      </Styled.HomeTemplate>
    </NonAuthedLayout>
  )
}
