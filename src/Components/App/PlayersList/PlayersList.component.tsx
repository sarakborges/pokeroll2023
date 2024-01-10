import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'

import { PlayersContext } from '@/Contexts'
import { PLAYERS_POINTS } from '@/Utils/Texts'

import { Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './PlayersList.style'

export const PlayersList: FC = () => {
  const { playersState } = useContext(PlayersContext)

  if (!playersState.playersData?.length) {
    return <></>
  }

  return (
    <Styled.PlayersList>
      {playersState.playersData.map((playerItem) => (
        <li key={playerItem.name}>
          <Styled.PlayersTitle>
            <section>
              <Text size="lg">{playerItem.name}</Text>

              <Styled.PlayerPoints>
                <Text size="lg">
                  <>{playerItem.points | 0}</>
                  <>{PLAYERS_POINTS}</>
                </Text>
              </Styled.PlayerPoints>
            </section>
          </Styled.PlayersTitle>

          {!!playerItem?.characters?.length && (
            <Styled.CharactersList>
              {playerItem.characters.map((characterItem) => (
                <li key={characterItem.id}>
                  <Link to={characterItem.sheetLink}>
                    <Picture src={characterItem.picture} w={160} squared />

                    <Styled.CharacterInfo>
                      <Text>{characterItem.name}</Text>
                      <Text light>{characterItem.photoplayer}</Text>
                    </Styled.CharacterInfo>
                  </Link>
                </li>
              ))}
            </Styled.CharactersList>
          )}
        </li>
      ))}
    </Styled.PlayersList>
  )
}
