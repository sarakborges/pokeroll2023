import { FC, useContext, useState } from 'react'

import { CHARACTER_FORM } from '@/Utils/Forms'
import { GenericFormProps } from '@/Utils/Props'

import { PlayersContext } from '@/Contexts'

import { Form } from '@/Components/DesignSystem'

import * as Styled from './CharacterForm.style'

export const CharacterForm: FC<{
  playerId: string
  characterId?: string
  closeModal: () => void
}> = ({ playerId, characterId, closeModal }) => {
  const { playersState, setPlayersState } = useContext(PlayersContext)

  const [characterFormState, setCharacterFormState] =
    useState<GenericFormProps>({
      step: 0,
      form: []
    })

  const handleNewCharacterSubmit = () => {
    try {
      const newInfo = {
        name: characterFormState.form[0].value,
        photoplayer: characterFormState.form[1].value,
        picture: characterFormState.form[2].value,
        sheet: characterFormState.form[3].value,
        pronouns: characterFormState.form[4].value
      }

      if (!!characterId) {
        setPlayersState({
          playersData: [
            ...playersState.playersData.map((playerItem) =>
              playerItem.id === playerId
                ? {
                    ...playerItem,
                    characters: [
                      ...(playerItem.characters || []).map((characterItem) =>
                        characterItem.id === characterId
                          ? {
                              ...characterItem,
                              ...newInfo
                            }
                          : characterItem
                      )
                    ]
                  }
                : playerItem
            )
          ]
        })
      } else {
        const characterData = {
          id: `${Math.random()}`,
          ...newInfo,
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
                      { ...characterData }
                    ]
                  }
                : playerItem
            )
          ]
        })

        setCharacterFormState({
          step: 0,
          form: [
            ...characterFormState.form.map((formItem) => ({
              ...formItem,
              value: ''
            }))
          ]
        })
      }

      closeModal()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Styled.CharacterForm>
      <Form
        form={CHARACTER_FORM}
        formState={characterFormState}
        setFormState={setCharacterFormState}
        onSubmit={handleNewCharacterSubmit}
      />
    </Styled.CharacterForm>
  )
}
