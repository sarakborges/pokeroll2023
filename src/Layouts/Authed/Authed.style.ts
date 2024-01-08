import styled from 'styled-components'

export const AuthedLayout = styled.div`
  --appBackground: hsl(var(--hue) 20% 15% / 100%);

  display: flex;

  max-width: 100%;
  min-height: 100vh;
`

export const AuthedBody = styled.main`
  flex: 1;
  min-width: 1000px;
  max-height: 100vh;
  overflow: hidden auto;
`
