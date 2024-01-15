import styled from 'styled-components'

export const PlayersTitle = styled.header`
  display: flex;
  place-items: center;
  place-content: space-between;

  background-color: var(--backgroundDarker);

  padding: 16px 24px;

  > main {
    display: flex;
    flex-flow: column;
    gap: 24px;

    padding: 0 48px;

    > section {
      display: flex;
      flex-flow: column;
      place-items: center;
      gap: 8px;
    }
  }
`

export const PlayersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  > li {
    display: flex;
    flex-flow: column;
    gap: 16px;

    width: 420px;
    max-width: 100%;
  }
`

export const CharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  > li {
    width: 100%;

    > a {
      display: flex;
      place-items: flex-end;
      gap: 16px;

      transition: border-color 0.3s;

      > img {
        border-radius: 100%;
      }

      > section {
        display: flex;
        flex-flow: column;
        place-items: center;
        gap: 4px;

        flex: 1;
        padding: 12px;

        text-align: center;

        border-bottom: 1px solid var(--primaryButtonBackground);

        transition: border-color 0.3s;
      }

      &:hover {
        > section {
          border-color: var(--primaryButtonHoverBgColor);
        }
      }
    }
  }
`
