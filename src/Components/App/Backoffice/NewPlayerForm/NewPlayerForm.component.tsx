import { FC, useContext, useState } from 'react'

import { SEASONS } from '@/Utils/Constants'
import { NEW_PLAYER_FORM } from '@/Utils/Forms'
import { GenericFormProps } from '@/Utils/Props'

import { PlayersContext } from '@/Contexts'

import { Form } from '@/Components/DesignSystem'

import * as Styled from './NewPlayerForm.style'

export const NewPlayerForm: FC = () => {
  const { playersState, setPlayersState } = useContext(PlayersContext)

  const [newPlayerFormState, setNewPlayerFormState] =
    useState<GenericFormProps>({
      step: 0,
      form: []
    })

  const handleNewPlayerSubmit = () => {
    const newPlayerName = newPlayerFormState.form
      .find((formItem) => formItem.id === 'player_name')
      ?.value.trim()

    const playerAlreadyExists = playersState.playersData.find(
      (playerItem) => playerItem.name === newPlayerName
    )

    if (!!playerAlreadyExists) {
      return
    }

    setPlayersState({
      playersData: [
        ...playersState.playersData,

        {
          id: `${Math.random()}`,
          name: newPlayerName,
          pronouns: newPlayerFormState.form[1].value,
          points: newPlayerFormState.form[2].value,
          season: SEASONS[newPlayerFormState.form[3].value]
        }
      ]
    })

    setNewPlayerFormState({
      step: 0,
      form: [
        {
          ...newPlayerFormState.form.find(
            (formItem) => formItem.id === 'player_name'
          )!,
          value: ''
        }
      ]
    })
  }

  return (
    <Styled.NewPlayerForm>
      <Form
        form={NEW_PLAYER_FORM}
        formState={newPlayerFormState}
        setFormState={setNewPlayerFormState}
        onSubmit={handleNewPlayerSubmit}
      />
    </Styled.NewPlayerForm>
  )
}
