import { PlayerMock } from '@/Assets/Mocks/Players.mock'

import { PlayerProps } from '@/Utils/Props'

interface getPlayersProps {}

interface getPlayersReturnProps {
  data: PlayerProps[]
}

const getPlayers = async (
  props?: getPlayersProps
): Promise<getPlayersReturnProps> => {
  const rollsData = [...PlayerMock]

  return {
    data: rollsData
  }
}

export { getPlayers }
