import { FC, useCallback, useContext, useEffect } from 'react'

import { PlayersAPI } from '@/Apis'
import { PlayersContext } from '@/Contexts'

import { NonAuthedLayout } from '@/Layouts'

import { Header, PlayersList } from '@/Components/App'

import * as Styled from './Players.style'

export const PlayersTemplate: FC = () => {
  const { setPlayersState } = useContext(PlayersContext)

  const getPlayers = useCallback(async () => {
    try {
      const playersData = await PlayersAPI.getPlayers({})

      setPlayersState({
        playersData: playersData.data
      })
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    getPlayers()
  }, [getPlayers])

  return (
    <NonAuthedLayout>
      <Styled.PlayersTemplate>
        <Header>Fichário</Header>

        <PlayersList />
      </Styled.PlayersTemplate>
    </NonAuthedLayout>
  )
}
