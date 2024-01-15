import { ElementRef, FC, useContext, useEffect, useRef, useState } from 'react'
import { PlusLg, Trash3 } from 'styled-icons/bootstrap'
import { Pencil } from 'styled-icons/heroicons-solid'

import {
  CHARACTER_ACTIONS,
  CHARACTER_PHOTOPLAYER,
  CHARACTER_REGISTERED_AT,
  CHARACTER_TITLE,
  DELETE_PLAYER_ACTION,
  EDIT_PLAYER_ACTION,
  NEW_CHARACTER_ACTION,
  PLAYERS_POINTS
} from '@/Utils/Texts'

import { PlayersContext } from '@/Contexts'
import { getDate } from '@/Utils/Functions'

import { NewCharacterForm } from '@/Components/App'
import { Button, Modal, Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './PlayersList.style'

export const BackofficePlayersList: FC = () => {
  const { playersState } = useContext(PlayersContext)

  if (!playersState.playersData?.length) {
    return <></>
  }

  const modalRef = useRef<ElementRef<typeof Modal>>(null)

  const [currentRef, setCurrentRef] = useState<ElementRef<typeof Modal> | null>(
    null
  )
  const [playerId, setPlayerId] = useState('')

  const toggleNewCharacter = (newPlayerId: string) => {
    setPlayerId(newPlayerId)
    currentRef?.toggleModal()
  }

  useEffect(() => {
    setCurrentRef(modalRef?.current)
  }, [modalRef])

  return (
    <Styled.PlayersList>
      <Modal ref={modalRef} title="Novo jogador" hasCloseButton>
        <NewCharacterForm playerId={playerId} />
      </Modal>

      {playersState.playersData.map((playerItem) => (
        <li key={playerItem.id}>
          <Styled.PlayersTitle>
            <section>
              <Text size="lg">
                <>{playerItem.name}</>
                <> ({playerItem.pronouns})</>
              </Text>

              <Styled.PlayerPoints>
                <Text size="lg">
                  <>{playerItem.points | 0}</>
                  <>{PLAYERS_POINTS}</>
                </Text>
              </Styled.PlayerPoints>

              <Picture src={`/img/${playerItem.season}.png`} w={40} />
            </section>

            <section>
              <Button onClick={() => toggleNewCharacter(playerItem.id)}>
                <PlusLg />
                <Text>{NEW_CHARACTER_ACTION}</Text>
              </Button>

              <Button>
                <Pencil />
                <Text>{EDIT_PLAYER_ACTION}</Text>
              </Button>

              <Button>
                <Trash3 />
                <Text>{DELETE_PLAYER_ACTION}</Text>
              </Button>
            </section>
          </Styled.PlayersTitle>

          {!!playerItem.characters?.length && (
            <Styled.CharactersList>
              <li>
                <div></div>

                <Text semibold>{CHARACTER_TITLE}</Text>
                <Text semibold>{CHARACTER_PHOTOPLAYER}</Text>
                <Text semibold>{CHARACTER_REGISTERED_AT}</Text>
                <Text semibold>{CHARACTER_ACTIONS}</Text>
              </li>

              {playerItem.characters.map((characterItem) => (
                <li key={characterItem.id}>
                  <div>
                    <Picture src={characterItem.picture} w={40} squared />
                  </div>

                  <Text light>
                    <>{characterItem.name}</>
                    <> ({characterItem.pronouns})</>
                  </Text>

                  <Text light>{characterItem.photoplayer}</Text>

                  <Text light>
                    {getDate(characterItem.registeredAt, 'date')}
                  </Text>

                  <Styled.CharacterActions>
                    <Button>
                      <Pencil />
                    </Button>

                    <Button>
                      <Trash3 />
                    </Button>
                  </Styled.CharacterActions>
                </li>
              ))}
            </Styled.CharactersList>
          )}
        </li>
      ))}
    </Styled.PlayersList>
  )
}
