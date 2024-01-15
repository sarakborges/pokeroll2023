import { DiesPage, HomePage, LoginPage, PlayersPage, RollsPage } from '@/Pages'

export type ROUTES_KEYS = 'HOME' | 'PLAYERS' | 'DIES' | 'POKEMON'

export const ROUTES = {
  HOME: {
    PATH: '/',
    TITLE: '',
    ELEMENT: <HomePage />
  },

  DIES: {
    PATH: '/dies',
    TITLE: ' - Rolagens de dados',
    ELEMENT: <DiesPage />
  },

  POKEMON: {
    PATH: '/pokemon',
    TITLE: ' - Rolagens de pokémon',
    ELEMENT: <RollsPage />
  },

  PLAYERS: {
    PATH: '/players',
    TITLE: ' - Characterdex',
    ELEMENT: <PlayersPage />
  },

  LOGIN: {
    PATH: '/login',
    TITLE: ' - Login',
    ELEMENT: <LoginPage />
  }
}
