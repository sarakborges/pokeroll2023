import { FC, useCallback, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { RollsAPI } from '@/Apis'
import { RollsContext } from '@/Contexts'

import { ROUTES } from '@/Utils/Constants'
import { ROLLS_HEADER } from '@/Utils/Texts'

import { NonAuthedLayout } from '@/Layouts'

import { RollsList, Pagination, Header } from '@/Components/App'

import * as Styled from './Rolls.style'

export const RollsTemplate: FC = () => {
  const location = useLocation()

  const { rollsState, setRollsState } = useContext(RollsContext)

  const getRolls = useCallback(async () => {
    const searchParams = new URLSearchParams(location.search)
    const curPage = +(searchParams.get('page') || 1)

    const rollsData = await RollsAPI.getRolls({
      page: curPage,
      itemsPerPage: rollsState.itemsPerPage
    })

    setRollsState({
      rollsData: rollsData.data,
      totalPages: rollsData.pages,
      currentPage: curPage,
      itemsPerPage: rollsState.itemsPerPage
    })
  }, [location])

  useEffect(() => {
    getRolls()
  }, [getRolls])

  return (
    <NonAuthedLayout>
      <Styled.RollsTemplate>
        <Header>{ROLLS_HEADER}</Header>

        <RollsList />

        <Pagination
          pagesLink={ROUTES.HOME.PATH}
          totalPages={rollsState.totalPages}
          currentPage={rollsState.currentPage}
        />
      </Styled.RollsTemplate>
    </NonAuthedLayout>
  )
}
