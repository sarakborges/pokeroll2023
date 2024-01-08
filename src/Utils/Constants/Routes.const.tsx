import { PlayersPage, RollsPage } from '@/Pages'

export type ROUTES_KEYS = 'HOME' | 'PLAYERS'

export const ROUTES = {
  HOME: {
    PATH: '/',
    TITLE: ' - Rolagens',
    ELEMENT: <RollsPage />
  },

  PLAYERS: {
    PATH: '/players',
    TITLE: ' - Fichas',
    ELEMENT: <PlayersPage />
  }
}
