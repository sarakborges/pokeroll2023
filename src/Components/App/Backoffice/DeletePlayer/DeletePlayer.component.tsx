import { FC, useContext } from 'react'

import { PlayersContext } from '@/Contexts'

import { DELETE_PLAYER_TEXT } from '@/Utils/Texts'

import { Button, Text } from '@/Components/DesignSystem'

import * as Styled from './DeletePlayer.style'

export const DeletePlayer: FC<{
  playerId: string
  closeModal: () => void
}> = ({ playerId, closeModal }) => {
  const { playersState, setPlayersState } = useContext(PlayersContext)

  const handleDeletePlayer = () => {
    try {
      setPlayersState({
        playersData: [
          ...playersState.playersData.filter(
            (playerItem) => playerItem.id !== playerId
          )
        ]
      })

      closeModal()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Styled.DeletePlayer>
      <Text size="lg">{DELETE_PLAYER_TEXT}</Text>

      <Button onClick={handleDeletePlayer}>Confirmar</Button>
    </Styled.DeletePlayer>
  )
}
