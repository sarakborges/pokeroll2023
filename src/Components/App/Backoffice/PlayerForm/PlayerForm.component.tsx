import { FC, useCallback, useContext, useEffect, useState } from 'react'

import { PLAYER_FORM } from '@/Utils/Forms'
import { GenericFormProps } from '@/Utils/Props'

import { PlayersContext } from '@/Contexts'

import { Form } from '@/Components/DesignSystem'

import * as Styled from './PlayerForm.style'

export const PlayerForm: FC<{ playerId?: string }> = ({ playerId }) => {
  const { playersState, setPlayersState } = useContext(PlayersContext)

  const [playerFormState, setPlayerFormState] = useState<GenericFormProps>({
    step: 0,
    form: []
  })

  const handleNewPlayerSubmit = () => {
    try {
      const playerName = playerFormState.form
        .find((formItem) => formItem.id === 'player_name')
        ?.value.trim()

      const playerAlreadyExists = playersState.playersData.find(
        (playerItem) => playerItem.name === playerName
      )

      if (!!playerAlreadyExists && playerAlreadyExists.id !== playerId) {
        return
      }

      const newInfo = {
        name: playerName,

        pronouns:
          playerFormState.form.find(
            (formItem) => formItem.id === 'player_pronouns'
          )?.value || '',

        points:
          playerFormState.form.find(
            (formItem) => formItem.id === 'player_points'
          )?.value || '',

        season:
          playerFormState.form.find(
            (formItem) => formItem.id === 'player_season'
          )?.value || ''
      }

      if (!!playerId) {
        const playersData = [
          ...playersState.playersData.map((playerItem) =>
            playerItem.id === playerId
              ? {
                  ...playerItem,
                  ...newInfo
                }
              : playerItem
          )
        ]

        setPlayersState({
          playersData: playersData
        })
      } else {
        setPlayersState({
          playersData: [
            ...playersState.playersData,

            {
              id: `${Math.random()}`,
              ...newInfo,
              registeredAt: new Date()
            }
          ]
        })

        setPlayerFormState({
          step: 0,
          form: [
            ...playerFormState.form.map((formItem) => ({
              ...formItem,
              value: ''
            }))
          ]
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getPlayerData = useCallback(async () => {
    try {
      const data = playersState.playersData.find(
        (playerItem) => playerItem.id === playerId
      )

      if (!!data) {
        setPlayerFormState({
          ...playerFormState,
          form: [
            {
              id: 'player_name',
              value: data.name,
              warning: ''
            },

            {
              id: 'player_pronouns',
              value: data.pronouns,
              warning: ''
            },

            {
              id: 'player_points',
              value: data.points.toString(),
              warning: ''
            },

            {
              id: 'player_season',
              value: data.season,
              warning: ''
            }
          ]
        })
      }
    } catch (e) {
      console.log(e)
    }
  }, [playerId])

  useEffect(() => {
    getPlayerData()
  }, [getPlayerData])

  return (
    <Styled.PlayerForm>
      {(!playerId || !!playerFormState?.form[0]?.value) && (
        <Form
          form={PLAYER_FORM}
          formState={playerFormState}
          setFormState={setPlayerFormState}
          onSubmit={handleNewPlayerSubmit}
        />
      )}
    </Styled.PlayerForm>
  )
}
