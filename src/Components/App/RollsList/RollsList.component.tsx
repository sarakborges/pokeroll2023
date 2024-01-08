import { FC, useContext } from 'react'

import { RollsContext } from '@/Contexts'

import { RollItem } from '@/Components/App'

import * as Styled from './RollsList.style'

export const RollsList: FC = () => {
  const { rollsState } = useContext(RollsContext)

  return (
    <>
      {rollsState.rollsData.length > 0 && (
        <Styled.RollsListWrapper>
          {rollsState.rollsData.map((item) => (
            <RollItem key={item.id} rollInfo={item} />
          ))}
        </Styled.RollsListWrapper>
      )}
    </>
  )
}
