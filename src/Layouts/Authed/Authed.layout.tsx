import { FC, useEffect, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  BACKOFFICE_ROUTES,
  BACKOFFICE_ROUTES_KEYS,
  ROUTES
} from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import { BackofficeSidebar } from '@/Components/App'

import * as Styled from './Authed.style'

export const AuthedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const session = localStorage.getItem('session')

  const locationKey: BACKOFFICE_ROUTES_KEYS =
    (location.pathname
      .replace('/backoffice', '')
      .replace('/', '')
      .toUpperCase() as BACKOFFICE_ROUTES_KEYS) || 'HOME'

  useEffect(() => {
    document.title = `${SITE_TITLE}${BACKOFFICE_ROUTES[locationKey].TITLE}`

    if (!session) {
      navigate(ROUTES.LOGIN.PATH)
    }
  }, [location])

  return (
    <Styled.AuthedLayout>
      <BackofficeSidebar />

      <Styled.AuthedBody>{children}</Styled.AuthedBody>
    </Styled.AuthedLayout>
  )
}
