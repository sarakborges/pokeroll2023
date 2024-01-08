import { FC, useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { ROUTES, ROUTES_KEYS } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import { Topbar } from '@/Components/App'

import * as Styled from './NonAuthed.style'

export const NonAuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()

  const locationKey: ROUTES_KEYS =
    (location.pathname.replace('/', '').toUpperCase() as ROUTES_KEYS) || 'HOME'

  useEffect(() => {
    document.title = `${SITE_TITLE}${ROUTES[locationKey].TITLE || ''}`
  }, [location])

  return (
    <Styled.NonAuthedLayout>
      <Topbar />
      <Styled.Body>{children}</Styled.Body>
    </Styled.NonAuthedLayout>
  )
}
