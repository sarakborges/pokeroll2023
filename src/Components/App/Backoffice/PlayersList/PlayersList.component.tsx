import { ElementRef, FC, useContext, useRef, useState } from 'react'
import { PlusLg, Trash3 } from 'styled-icons/bootstrap'
import { Pencil } from 'styled-icons/heroicons-solid'

import {
  CHARACTER_ACTIONS,
  CHARACTER_FORM_MODAL_TITLE,
  CHARACTER_PHOTOPLAYER,
  CHARACTER_REGISTERED_AT,
  CHARACTER_TITLE,
  DELETE_PLAYER_ACTION,
  EDIT_PLAYER_ACTION,
  NEW_CHARACTER_ACTION,
  PLAYERS_POINTS,
  PLAYER_FORM_MODAL_TITLE
} from '@/Utils/Texts'

import { SEASONS } from '@/Utils/Constants'

import { PlayersContext } from '@/Contexts'
import { getDate } from '@/Utils/Functions'

import { CharacterForm, PlayerForm } from '@/Components/App'
import { Button, Modal, Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './PlayersList.style'

export const BackofficePlayersList: FC = () => {
  const { playersState } = useContext(PlayersContext)

  const modalRef = useRef<ElementRef<typeof Modal>>(null)

  const [playerId, setPlayerId] = useState('')
  const [modalType, setModalType] = useState('')

  const toggleModal = (playerId: string, type: string) => {
    if (!modalRef?.current) {
      return
    }

    setPlayerId(playerId)
    setModalType(type)
    modalRef?.current?.toggleModal()
  }

  if (!playersState.playersData?.length) {
    return <></>
  }

  return (
    <Styled.PlayersList>
      <Modal
        ref={modalRef}
        title={
          modalType === 'newCharacter'
            ? CHARACTER_FORM_MODAL_TITLE
            : PLAYER_FORM_MODAL_TITLE
        }
        hasCloseButton
      >
        {modalType === 'newCharacter' && <CharacterForm playerId={playerId} />}
        {modalType === 'editPlayer' && <PlayerForm playerId={playerId} />}
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
                  <>{PLAYERS_POINTS}</>
                  <>{playerItem.points | 0}</>
                </Text>
              </Styled.PlayerPoints>

              <Picture src={`/img/${SEASONS[playerItem.season]}.png`} w={40} />
            </section>

            <section>
              <Button
                onClick={() => toggleModal(playerItem.id, 'newCharacter')}
              >
                <PlusLg />
                <Text>{NEW_CHARACTER_ACTION}</Text>
              </Button>

              <Button onClick={() => toggleModal(playerItem.id, 'editPlayer')}>
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
