import {
  BackofficeHomePage,
  BackofficePlacesPage,
  BackofficePlayersPage
} from '@/Pages'

export type BACKOFFICE_ROUTES_KEYS = 'HOME' | 'PLACES' | 'PLAYERS'

export const BACKOFFICE_ROUTES = {
  HOME: {
    PATH: '',
    TITLE: ' - Backoffice',
    LINK_TEXT: 'Dashboard',
    ELEMENT: <BackofficeHomePage />
  },

  PLACES: {
    PATH: '/places',
    TITLE: ' - Backoffice - Locais',
    LINK_TEXT: 'Locais',
    ELEMENT: <BackofficePlacesPage />
  },

  PLAYERS: {
    PATH: '/players',
    TITLE: ' - Backoffice - Jogadores',
    LINK_TEXT: 'Jogadores',
    ELEMENT: <BackofficePlayersPage />
  }
}
