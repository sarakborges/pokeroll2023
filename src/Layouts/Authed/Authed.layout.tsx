import { FC, useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { BACKOFFICE_ROUTES, BACKOFFICE_ROUTES_KEYS } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import * as Styled from './Authed.style'
import { BackofficeSidebar } from '@/Components/App'

export const AuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()

  const locationKey: BACKOFFICE_ROUTES_KEYS =
    (location.pathname
      .replace('/backoffice', '')
      .replace('/', '')
      .toUpperCase() as BACKOFFICE_ROUTES_KEYS) || 'HOME'

  useEffect(() => {
    document.title = `${SITE_TITLE}${BACKOFFICE_ROUTES[locationKey].TITLE}`
  }, [location])

  return (
    <Styled.AuthedLayout>
      <BackofficeSidebar />

      <Styled.AuthedBody>{children}</Styled.AuthedBody>
    </Styled.AuthedLayout>
  )
}
