import { ROUTES, BACKOFFICE_ROUTES } from '@/Utils/Constants'

export type MENU_KEYS = 'HOME' | 'PLAYERS' | 'BACKOFFICE' | 'DIES' | 'POKEMON'

export const MENU = {
  HOME: {
    PATH: ROUTES.HOME.PATH,
    TITLE: 'Início'
  },

  DIES: {
    PATH: ROUTES.DIES.PATH,
    TITLE: 'Rolagens de dados'
  },

  POKEMON: {
    PATH: ROUTES.POKEMON.PATH,
    TITLE: 'Rolagens de pokémon'
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
