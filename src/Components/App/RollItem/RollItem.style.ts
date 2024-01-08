import styled, { css } from 'styled-components'

import { Types } from '@/Utils/Props'

const types = {
  normal: '#383838',
  fighting: '#a55239',
  flying: '#9cadf7',
  poison: '#b55aa5',
  ground: '#cbab55',
  rock: '#bda55a',
  bug: '#adbd21',
  ghost: '#6363b5',
  steel: '#adadc6',
  fire: '#f75231',
  water: '#399cff',
  grass: '#7acc51',
  electric: '#f3c244',
  psychic: '#ff73a5',
  ice: '#5acee7',
  dragon: '#9784eb',
  dark: '#6b574b',
  fairy: '#f7b5f7',
  unknown: '#999'
}

export const RollItemtWrapper = styled.li`
  display: flex;
  flex-flow: column;
  gap: 32px;

  width: 280px;
  padding: 16px;

  border-radius: 24px;
  background-color: var(--backgroundDarker);

  > header {
    > p {
      text-align: center;
      line-height: 1.4;

      > span {
        font-weight: 700;
      }
    }
  }

  > main {
    display: flex;
    flex-flow: column;
    gap: 16px;
  }

  > footer {
    display: flex;
    place-content: flex-end;
  }
`

const Row = css`
  display: flex;
  flex-flow: column;
  place-items: center;
  gap: 8px;
`

export const Header = styled.section`
  ${Row}
  gap: 24px;
`

export const Picture = styled.section`
  ${Row}
`

export const TypesWrapper = styled.section`
  ${Row}

  place-content: center;
  flex-flow: row;
  gap: 8px;
`

export const Type = styled.div<{ type: Types }>`
  padding: 4px 8px;

  text-transform: uppercase;

  text-shadow: -1px -1px 3px rgba(0, 0, 0, 0.6), 1px 1px 3px rgba(0, 0, 0, 0.6),
    1px -1px 3px rgba(0, 0, 0, 0.6), -1px 1px 3px rgba(0, 0, 0, 0.6);

  background-color: ${({ type }) => types[type]};
`

export const Info = styled.section`
  ${Row}
  gap: 4px;
`

export const Moveset = styled.section`
  ${Row}

  place-items: flex-start;
`
