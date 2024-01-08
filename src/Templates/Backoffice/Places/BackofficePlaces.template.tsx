import { FC } from 'react'

import { PLACES_HEADER } from '@/Utils/Texts'

import { AuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'

import * as Styled from './BackofficePlaces.style'

export const BackofficePlacesTemplate: FC = () => {
  return (
    <AuthedLayout>
      <Styled.BackofficePlacesTemplate>
        <Header>{PLACES_HEADER}</Header>
      </Styled.BackofficePlacesTemplate>
    </AuthedLayout>
  )
}
