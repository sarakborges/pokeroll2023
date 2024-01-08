import { FC } from 'react'

import { BACKOFFICE_DASHBOARD_HEADER } from '@/Utils/Texts'

import { AuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'

import * as Styled from './BackofficeHome.style'

export const BackofficeHomeTemplate: FC = () => {
  return (
    <AuthedLayout>
      <Styled.BackofficeHomeTemplate>
        <Header>{BACKOFFICE_DASHBOARD_HEADER}</Header>
      </Styled.BackofficeHomeTemplate>
    </AuthedLayout>
  )
}
