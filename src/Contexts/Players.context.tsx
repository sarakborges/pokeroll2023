import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { PlayerProps } from '@/Utils/Props'

type PlayersProps = {
  playersData: PlayerProps[]
}

const INITIAL_STATE: PlayersProps = {
  playersData: []
}

export const PlayersContext = createContext<{
  playersState: PlayersProps
  setPlayersState: Dispatch<any>
}>({
  playersState: { ...INITIAL_STATE },
  setPlayersState: () => {}
})

export const PlayersProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [playersState, setPlayersState] = useState<PlayersProps>({
    ...INITIAL_STATE
  })

  return (
    <PlayersContext.Provider value={{ playersState, setPlayersState }}>
      <>{children}</>
    </PlayersContext.Provider>
  )
}
