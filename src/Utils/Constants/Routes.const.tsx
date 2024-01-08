import { PlayersPage, RollsPage } from '@/Pages'

export type ROUTES_KEYS = 'HOME' | 'PLAYERS'

export const ROUTES = {
  HOME: {
    PATH: '/',
    ELEMENT: <RollsPage />
  },

  DIES: {
    PATH: '/dies',
    TITLE: ' - Rolagens de dados',
    ELEMENT: <RollsPage />
  },

  POKEMON: {
    PATH: '/pokemon',
    TITLE: ' - Rolagens de pokémon',
    ELEMENT: <RollsPage />
  },

  PLAYERS: {
    PATH: '/players',
    TITLE: ' - Fichário',
    ELEMENT: <PlayersPage />
  }
}
