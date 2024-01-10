import styled from 'styled-components'

export const HomeTemplate = styled.div`
  display: flex;
  flex-flow: column;
  gap: 96px;

  > section {
    display: flex;
    flex-flow: column;
    gap: 24px;

    > p {
      line-height: 1.5;
    }
  }
`
