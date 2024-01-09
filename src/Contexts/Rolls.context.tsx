import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { RollProps } from '@/Utils/Props'

type RollsProps = {
  rollsData: RollProps[]
  currentPage: number
  totalPages: number
  itemsPerPage: number
}

const INITIAL_STATE: RollsProps = {
  rollsData: [],
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 20
}

export const RollsContext = createContext<{
  rollsState: RollsProps
  setRollsState: Dispatch<any>
}>({
  rollsState: { ...INITIAL_STATE },
  setRollsState: () => {}
})

export const RollsProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [rollsState, setRollsState] = useState<RollsProps>({
    ...INITIAL_STATE
  })

  return (
    <RollsContext.Provider value={{ rollsState, setRollsState }}>
      <>{children}</>
    </RollsContext.Provider>
  )
}
