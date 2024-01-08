import styled, { css } from 'styled-components'

export const AuthedLayout = styled.div`
  --appBackground: hsl(var(--hue) 20% 15% / 100%);

  display: flex;

  min-height: 100vh;
  max-width: 100%;
`

export const AuthedBody = styled.main`
  flex: 1;
  max-height: 100vh;
  overflow: hidden auto;
`
