import { ElementRef, FC, useEffect, useRef, useState } from 'react'
import { PlusLg } from 'styled-icons/bootstrap'

import {
  CHARACTER_ACTIONS,
  CHARACTER_PHOTOPLAYER,
  CHARACTER_REGISTERED_AT,
  CHARACTER_TITLE,
  NEW_CHARACTER_ACTION
} from '@/Utils/Texts'

import { PlayerProps } from '@/Utils/Props'
import { getDate } from '@/Utils/Functions'

import { NewCharacterForm } from '@/Components/App'
import { Button, Modal, Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './PlayersList.style'

export const BackofficePlayersList: FC<{ playersList: PlayerProps[] }> = ({
  playersList
}) => {
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

      {playersList.map((playerItem) => (
        <li key={playerItem.id}>
          <Styled.PlayersTitle>
            <Text size="lg">{playerItem.name}</Text>

            <Button onClick={() => toggleNewCharacter(playerItem.id)}>
              <PlusLg />
              <Text>{NEW_CHARACTER_ACTION}</Text>
            </Button>
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
                <li key={characterItem.name}>
                  <div>
                    <Picture src={characterItem.picture} w={40} squared />
                  </div>

                  <Text light>{characterItem.name}</Text>
                  <Text light>{characterItem.photoplayer}</Text>

                  <Text light>
                    {getDate(characterItem.registeredAt, 'date')}
                  </Text>

                  <div></div>
                </li>
              ))}
            </Styled.CharactersList>
          )}
        </li>
      ))}
    </Styled.PlayersList>
  )
}
