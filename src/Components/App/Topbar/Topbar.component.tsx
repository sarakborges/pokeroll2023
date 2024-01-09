import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'styled-icons/evaicons-solid'

import { MENU, MENU_KEYS, ROUTES_KEYS } from '@/Utils/Constants'
import { SITE_TITLE } from '@/Utils/Texts'

import { Button, Text } from '@/Components/DesignSystem'

import * as Styled from './Topbar.style'

export const Topbar: FC = () => {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const locationKey: ROUTES_KEYS =
    (location.pathname.replace('/', '').toUpperCase() as ROUTES_KEYS) || 'HOME'

  const menu: Array<MENU_KEYS> = Object.keys(MENU) as Array<MENU_KEYS>

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled.Topbar isOpen={isOpen}>
      <section>
        <Text size="xl">{SITE_TITLE}</Text>

        <Button onClick={toggleOpen}>
          <Menu />
        </Button>
      </section>

      <ul>
        {menu.map((menuItem) => (
          <Styled.MenuItem
            key={MENU[menuItem].TITLE}
            active={locationKey === menuItem}
          >
            <Link to={MENU[menuItem].PATH}>{MENU[menuItem].TITLE}</Link>
          </Styled.MenuItem>
        ))}
      </ul>
    </Styled.Topbar>
  )
}
