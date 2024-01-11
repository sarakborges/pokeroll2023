import { RollMock } from '@/Assets/Mocks/Roll.mock'
import { PlayerMock } from '@/Assets/Mocks/Players.mock'

import { RollProps } from '@/Utils/Props'

interface getRollsProps {
  page?: number
  itemsPerPage?: number
}

interface getRollsReturnProps {
  data: RollProps[]
  pages: number
  totalResults: number
}

const getRolls = async (
  props?: getRollsProps
): Promise<getRollsReturnProps> => {
  const page = props?.page || 1
  const itemsPerPage = props?.itemsPerPage || 20

  const rollsData = [...RollMock]

  return {
    data: rollsData
      .sort((a, b) => (a.time < b.time ? 1 : -1))
      .slice((page - 1) * itemsPerPage, itemsPerPage * page),

    pages: Math.ceil(rollsData.length / itemsPerPage),
    totalResults: rollsData.length
  }
}

const getMostRolls = async () => {
  const rollsData = [...RollMock]
  let rolls: {
    name: string
    rolls: number
  }[] = []

  for (let rollItem of rollsData) {
    const rollsFound = rolls.find((roll) => rollItem.character === roll.name)

    if (!rollsFound) {
      rolls.push({
        name: rollItem.character,
        rolls: 1
      })
    } else {
      rolls = [
        ...rolls.map((roll) =>
          roll.name !== rollItem.character
            ? roll
            : { ...roll, rolls: roll.rolls + 1 }
        )
      ]
    }
  }

  const characterData = rolls.reduce(
    (acc, roll) => {
      if (roll.rolls > acc.rolls) {
        return roll
      } else {
        return acc
      }
    },
    { name: '', rolls: 0 }
  )

  let player = undefined

  for (let playerItem of PlayerMock) {
    const character = playerItem.characters?.find(
      (characterItem) => characterItem.id === characterData.name
    )

    if (character) {
      player = {
        id: playerItem.id,
        name: playerItem.name,
        character: {
          name: character.name,
          picture: character.picture,
          rolls: characterData.rolls
        }
      }
      break
    }
  }

  return player
}

export { getRolls, getMostRolls }
