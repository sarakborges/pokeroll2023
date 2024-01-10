import { FC } from 'react'

import {
  HOME_HEADER,
  HOME_TEXT,
  HOME_TOOLS_HEADER,
  HOME_TOOLS_TEXT
} from '@/Utils/Texts'

import { NonAuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'
import { Text } from '@/Components/DesignSystem'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <NonAuthedLayout>
      <Styled.HomeTemplate>
        <section>
          <Header>{HOME_HEADER}</Header>

          <Text size="lg" light>
            {HOME_TEXT}
          </Text>
        </section>

        <section>
          <Header>{HOME_TOOLS_HEADER}</Header>

          <Text size="lg" light>
            {HOME_TOOLS_TEXT}
          </Text>
        </section>
      </Styled.HomeTemplate>
    </NonAuthedLayout>
  )
}
