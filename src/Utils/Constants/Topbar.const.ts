import { ROUTES, BACKOFFICE_ROUTES } from '@/Utils/Constants'

export type MENU_KEYS = 'HOME' | 'PLAYERS' | 'BACKOFFICE'

export const MENU = {
  HOME: {
    PATH: ROUTES.HOME.PATH,
    TITLE: 'Rolagens'
  },

  PLAYERS: {
    PATH: ROUTES.PLAYERS.PATH,
    TITLE: 'Fichário'
  },

  BACKOFFICE: {
    PATH: `/backoffice/${BACKOFFICE_ROUTES.HOME.PATH}`,
    TITLE: 'Backoffice'
  }
}
