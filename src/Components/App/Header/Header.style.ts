import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  place-items: center;
  place-content: space-between;

  padding-bottom: 24px;

  border-bottom: 1px solid var(--textWeak);

  > button {
    gap: 12px;

    > svg {
      width: 24px;
    }
  }
`
