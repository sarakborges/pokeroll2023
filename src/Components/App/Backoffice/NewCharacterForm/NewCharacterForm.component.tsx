import { FC, useContext, useState } from 'react'

import { NEW_CHARACTER_FORM } from '@/Utils/Forms'
import { GenericFormProps } from '@/Utils/Props'

import { PlayersContext } from '@/Contexts'

import { Form } from '@/Components/DesignSystem'

import * as Styled from './NewCharacterForm.style'

export const NewCharacterForm: FC<{ playerId: string }> = ({ playerId }) => {
  const { playersState, setPlayersState } = useContext(PlayersContext)

  const [newCharacterFormState, setNewCharacterFormState] =
    useState<GenericFormProps>({
      step: 0,
      form: []
    })

  const handleNewCharacterSubmit = () => {
    const newCharacterData = {
      id: `${Math.random()}`,
      name: newCharacterFormState.form[0].value,
      photoplayer: newCharacterFormState.form[1].value,
      picture: newCharacterFormState.form[2].value,
      registeredAt: new Date()
    }

    setPlayersState({
      playersData: [
        ...playersState.playersData.map((playerItem) =>
          playerItem.id === playerId
            ? {
                ...playerItem,
                characters: [
                  ...(playerItem.characters || []),
                  { ...newCharacterData }
                ]
              }
            : playerItem
        )
      ]
    })

    setNewCharacterFormState({
      step: 0,
      form: [
        ...newCharacterFormState.form.map((formItem) => ({
          ...formItem,
          value: ''
        }))
      ]
    })
  }

  return (
    <Styled.NewCharacterForm>
      <Form
        form={NEW_CHARACTER_FORM}
        formState={newCharacterFormState}
        setFormState={setNewCharacterFormState}
        onSubmit={handleNewCharacterSubmit}
      />
    </Styled.NewCharacterForm>
  )
}
