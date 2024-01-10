import { FC } from 'react'

import {
  HOME_HEADER,
  HOME_LINKS_HEADER,
  HOME_TEXT,
  HOME_TOOLS_HEADER,
  HOME_TOOLS_TEXT
} from '@/Utils/Texts'

import { NonAuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'
import { Text } from '@/Components/DesignSystem'

import * as Styled from './Home.style'
import { HOME_LINKS } from '@/Utils/Constants'

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

        <section>
          <Header>{HOME_LINKS_HEADER}</Header>

          <Styled.HomeLinks>
            {HOME_LINKS.map((linkItem) => (
              <li key={linkItem.TEXT}>
                <Text size="lg">
                  <a href={linkItem.LINK} target="_blank">
                    {linkItem.ICON ? linkItem.ICON : <></>}
                    <>{linkItem.TEXT}</>
                  </a>
                </Text>
              </li>
            ))}
          </Styled.HomeLinks>
        </section>
      </Styled.HomeTemplate>
    </NonAuthedLayout>
  )
}
