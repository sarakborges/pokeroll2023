import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  BACKOFFICE_ROUTES,
  BACKOFFICE_ROUTES_KEYS,
  ROUTES
} from '@/Utils/Constants'

import { SITE_TITLE, BACK_TO_ROLLS } from '@/Utils/Texts'

import { Text } from '@/Components/DesignSystem'

import * as Styled from './Sidebar.style'

export const BackofficeSidebar: FC = () => {
  const location = useLocation()

  const locationKey: BACKOFFICE_ROUTES_KEYS =
    (location.pathname
      .replace('/backoffice', '')
      .replace('/', '')
      .toUpperCase() as BACKOFFICE_ROUTES_KEYS) || 'HOME'

  const backofficeRouteKeys: Array<BACKOFFICE_ROUTES_KEYS> = Object.keys(
    BACKOFFICE_ROUTES
  ) as Array<BACKOFFICE_ROUTES_KEYS>

  const backofficeLinks = [
    ...backofficeRouteKeys.map((routeItem) => ({
      path: `/backoffice${BACKOFFICE_ROUTES[routeItem].PATH}`,
      text: BACKOFFICE_ROUTES[routeItem].LINK_TEXT,
      key: routeItem
    }))
  ]

  return (
    <Styled.AuthedSide>
      <Styled.AuthedSideMenu>
        <Text semibold size="xl">
          {SITE_TITLE}
        </Text>

        <ul>
          {backofficeLinks.map((linkItem) => (
            <Styled.AuthedSidMenuItem
              key={linkItem.key}
              active={locationKey === linkItem.key}
            >
              <Text>
                <Link to={linkItem.path}>{linkItem.text}</Link>
              </Text>
            </Styled.AuthedSidMenuItem>
          ))}
        </ul>
      </Styled.AuthedSideMenu>

      <Text>
        <Link to={ROUTES.HOME.PATH}>{BACK_TO_ROLLS}</Link>
      </Text>
    </Styled.AuthedSide>
  )
}
