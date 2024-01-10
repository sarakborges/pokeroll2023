import styled from 'styled-components'

export const PlayersTitle = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;

  > section {
    display: flex;
    place-items: center;
    gap: 16px;

    > button {
      gap: 12px;

      > svg {
        width: 24px;
      }
    }
  }
`

export const PlayerPoints = styled.div`
  padding: 8px 12px;

  background-color: var(--primaryButtonBackground);
  border-radius: 12px;
`

export const PlayersList = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 48px;

  > li {
    display: flex;
    flex-flow: column;
    gap: 16px;
  }
`

export const CharactersList = styled.ul`
  display: flex;
  flex-flow: column;
  background-color: var(--backgroundDarker);
  border-radius: 24px;

  padding: 28px 12px 12px;

  > li {
    display: flex;
    place-items: center;
    gap: 40px;

    padding: 0 12px 12px;

    &:not(:nth-child(1)) {
      padding: 12px;

      border-radius: 20px;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--primaryButtonBackground);
      }
    }

    > :nth-child(1) {
      width: 80px;

      > img {
        border-radius: 100%;
      }
    }

    > :not(:nth-child(1)) {
      width: calc((100% - 200px) / 4);
      max-width: 320px;
    }
  }
`

export const CharacterActions = styled.div`
  display: flex;
  place-items: center;
  gap: 8px;

  > button {
    > svg {
      width: 20px;
    }
  }
`
