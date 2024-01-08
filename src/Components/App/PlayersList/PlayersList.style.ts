import styled from 'styled-components'

export const PlayersTitle = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;

  > button {
    gap: 12px;

    > svg {
      width: 24px;
    }
  }
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
  flex-wrap: wrap;
  gap: 24px;

  > li {
    display: flex;
    flex-flow: column;
    place-items: center;
    gap: 24px;

    padding: 24px;

    background-color: var(--backgroundDarker);
    border-radius: 24px;

    > img {
      border-radius: 16px;
    }
  }
`

export const CharacterInfo = styled.section`
  display: flex;
  flex-flow: column;
  place-items: center;
  gap: 8px;
`
