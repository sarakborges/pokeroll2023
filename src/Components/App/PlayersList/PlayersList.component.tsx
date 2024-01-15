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
            <main>
              <section>
                <Text semibold size="lg">
                  {playerItem.name}
                </Text>

                <Text light>({playerItem.pronouns})</Text>
              </section>

              <section>
                <Text light>
                  <>{playerItem.points | 0}</>
                  <>{PLAYERS_POINTS}</>
                </Text>
              </section>
            </main>

            <aside>
              <Picture src={`/img/${playerItem.season}.png`} w={60} />
            </aside>
          </Styled.PlayersTitle>

          {!!playerItem?.characters?.length && (
            <Styled.CharactersList>
              {playerItem.characters.map((characterItem) => (
                <li key={characterItem.id}>
                  <Link to={characterItem.sheetLink}>
                    <Picture src={characterItem.picture} w={40} squared />

                    <section>
                      <Text>{characterItem.name}</Text>
                      <Text size="sm" light>
                        ({characterItem.pronouns})
                      </Text>
                    </section>

                    <section>
                      <Text light>{characterItem.photoplayer}</Text>
                    </section>
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
