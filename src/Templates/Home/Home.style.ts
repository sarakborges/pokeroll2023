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

export const HomeLinks = styled.ul`
  display: flex;
  gap: 16px;

  > li {
    > p {
      > a {
        display: flex;
        gap: 12px;

        padding: 8px 12px;

        color: var(--primaryButtonTextColor);

        background-color: var(--primaryButtonBackground);
        border-radius: 8px;

        transition: background-color 0.3s;

        &:hover {
          background-color: var(--primaryButtonHoverBgColor);
        }

        > svg {
          width: 16px;

          fill: var(--primaryButtonTextColor);
        }
      }
    }
  }
`
