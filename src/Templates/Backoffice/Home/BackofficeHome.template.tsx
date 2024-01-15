import { FC, useCallback, useEffect, useState } from 'react'

import { RollsAPI } from '@/Apis'

import { BACKOFFICE_DASHBOARD_HEADER } from '@/Utils/Texts'

import { AuthedLayout } from '@/Layouts'

import { Header } from '@/Components/App'
import { Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './BackofficeHome.style'

export const BackofficeHomeTemplate: FC = () => {
  const [mostRolls, setMostRolls] = useState<{
    id: string
    name: string
    character: {
      name: string
      picture: string
      rolls: number
    }
  }>()

  const getRolls = useCallback(async () => {
    const rollsData = await RollsAPI.getMostRolls()
    setMostRolls(rollsData)
  }, [location])

  useEffect(() => {
    getRolls()
  }, [getRolls])

  return (
    <AuthedLayout>
      <Styled.BackofficeHomeTemplate>
        <Header>{BACKOFFICE_DASHBOARD_HEADER}</Header>

        <Styled.Dashboard>
          {!!mostRolls && (
            <li>
              <Text semibold>Personagem com mais rolagens:</Text>

              <Picture
                src={mostRolls.character.picture}
                alt={mostRolls.character.name}
                w={120}
                squared
              />

              <section>
                <Text semibold size="lg">
                  {mostRolls?.character.name}
                </Text>

                <Text light>{mostRolls?.character.rolls} rolagens</Text>

                <Text light>Jogador: {mostRolls?.name}</Text>
              </section>
            </li>
          )}
        </Styled.Dashboard>
      </Styled.BackofficeHomeTemplate>
    </AuthedLayout>
  )
}
