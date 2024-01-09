import { FC } from 'react'

import { NonAuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'

import * as Styled from './Dies.style'

export const DiesTemplate: FC = () => {
  return (
    <NonAuthedLayout>
      <Styled.DiesTemplate>
        <Header>Rolagens de dados - Work in progress</Header>
      </Styled.DiesTemplate>
    </NonAuthedLayout>
  )
}
