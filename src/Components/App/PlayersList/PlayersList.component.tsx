import { FC } from 'react'

import { PlayerProps } from '@/Utils/Props'

import { Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './PlayersList.style'

export const PlayersList: FC<{ playersList: PlayerProps[] }> = ({
  playersList
}) => {
  return (
    <Styled.PlayersList>
      {playersList.map((playerItem) => (
        <li key={playerItem.name}>
          <Styled.PlayersTitle>
            <Text size="lg">{playerItem.name}</Text>
          </Styled.PlayersTitle>

          {!!playerItem?.characters?.length && (
            <Styled.CharactersList>
              {playerItem.characters.map((characterItem) => (
                <li key={characterItem.name}>
                  <Picture src={characterItem.picture} w={160} squared />

                  <Styled.CharacterInfo>
                    <Text>{characterItem.name}</Text>
                    <Text light>{characterItem.photoplayer}</Text>
                  </Styled.CharacterInfo>
                </li>
              ))}
            </Styled.CharactersList>
          )}
        </li>
      ))}
    </Styled.PlayersList>
  )
}
