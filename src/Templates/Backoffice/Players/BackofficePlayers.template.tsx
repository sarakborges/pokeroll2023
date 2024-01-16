import {
  ElementRef,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef
} from 'react'
import { PlusLg } from 'styled-icons/bootstrap'

import { PlayersAPI } from '@/Apis'

import { PlayersContext } from '@/Contexts'

import {
  NEW_PLAYER_ACTION,
  BACKOFFICE_PLAYERS_HEADER,
  PLAYER_FORM_MODAL_TITLE
} from '@/Utils/Texts'

import { AuthedLayout } from '@/Layouts'

import { Header, BackofficePlayersList, PlayerForm } from '@/Components/App'
import { Button, Modal, Text } from '@/Components/DesignSystem'

import * as Styled from './BackofficePlayers.style'

export const BackofficePlayersTemplate: FC = () => {
  const modalRef = useRef<ElementRef<typeof Modal>>(null)

  const { setPlayersState } = useContext(PlayersContext)

  const getPlayers = useCallback(async () => {
    const playersData = await PlayersAPI.getPlayers({})

    setPlayersState({
      playersData: playersData.data
    })
  }, [location])

  useEffect(() => {
    getPlayers()
  }, [getPlayers])

  return (
    <AuthedLayout>
      <Modal ref={modalRef} title={PLAYER_FORM_MODAL_TITLE} hasCloseButton>
        {!!modalRef?.current?.closeModal && (
          <PlayerForm closeModal={modalRef?.current?.closeModal} />
        )}
      </Modal>

      <Styled.BackofficePlayersTemplate>
        <Header
          action={
            <Button onClick={modalRef?.current?.toggleModal}>
              <PlusLg />
              <Text>{NEW_PLAYER_ACTION}</Text>
            </Button>
          }
        >
          {BACKOFFICE_PLAYERS_HEADER}
        </Header>

        <BackofficePlayersList />
      </Styled.BackofficePlayersTemplate>
    </AuthedLayout>
  )
}
