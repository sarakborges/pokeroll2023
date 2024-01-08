import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  BACKOFFICE_ROUTES,
  BACKOFFICE_ROUTES_KEYS,
  ROUTES,
  ROUTES_KEYS
} from '@/Utils/Constants'

import { PROVIDERS_LIST } from '@/Contexts'

import * as Styled from '@/Assets/Styles/Global'

const RenderProviders: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      {PROVIDERS_LIST.reduce(
        (prevItem, ProviderItem) => (
          <ProviderItem>{prevItem}</ProviderItem>
        ),
        children
      )}
    </>
  )
}

const routeKeys: Array<ROUTES_KEYS> = Object.keys(ROUTES) as Array<ROUTES_KEYS>

const backofficeRouteKeys: Array<BACKOFFICE_ROUTES_KEYS> = Object.keys(
  BACKOFFICE_ROUTES
) as Array<BACKOFFICE_ROUTES_KEYS>

const routes = [
  ...routeKeys.map((routeItem) => ({
    path: ROUTES[routeItem].PATH,
    element: ROUTES[routeItem].ELEMENT
  })),

  ...backofficeRouteKeys.map((routeItem) => ({
    path: `/backoffice${BACKOFFICE_ROUTES[routeItem].PATH}`,
    element: BACKOFFICE_ROUTES[routeItem].ELEMENT
  }))
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Styled.GlobalStyle />

    <RenderProviders>
      <RouterProvider router={createBrowserRouter(routes)} />
    </RenderProviders>
  </React.StrictMode>
)
