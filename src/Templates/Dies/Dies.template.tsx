import { FC } from 'react'

import { DIES_HEADER } from '@/Utils/Texts'

import { NonAuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'

import * as Styled from './Dies.style'

export const DiesTemplate: FC = () => {
  return (
    <NonAuthedLayout>
      <Styled.DiesTemplate>
        <Header>{DIES_HEADER}</Header>
      </Styled.DiesTemplate>
    </NonAuthedLayout>
  )
}
