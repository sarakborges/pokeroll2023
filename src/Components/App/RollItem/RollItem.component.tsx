import { FC } from 'react'

import { PokemonProps, RollProps } from '@/Utils/Props'
import { getDate } from '@/Utils/Functions'

import { PLACES, POKEMONS, POKEMON_GENDERS } from '@/Utils/Constants'

import {
  FOUND_AT,
  LEVEL_TITLE,
  MOVESET_TITLE,
  PREPOSITION_DEFAULT,
  SEARCHED_FOR
} from '@/Utils/Texts'

import { Picture, Text } from '@/Components/DesignSystem'

import * as Styled from './RollItem.style'

export const RollItem: FC<{ rollInfo: RollProps }> = ({ rollInfo }) => {
  const { time, pokemon, player, place, gender, level, ability } = rollInfo

  const rollDate = getDate(time)

  const pokemonData: PokemonProps = POKEMONS.find(
    (pokemonItem) => pokemonItem.id.toUpperCase() === pokemon
  )

  if (!pokemonData) {
    return <></>
  }

  const { sprite, name, types, abilities, movepool } = pokemonData!

  const moveset = [...movepool.filter((moveItem) => moveItem.level <= level)]
    .slice(-4)
    .map((moveItem) => moveItem.name)

  const displayedMoveset = [
    ...moveset,
    ...new Array(4 - moveset.length).fill(null)
  ]

  return (
    <Styled.RollItemtWrapper>
      <header>
        <Text light>
          <span>{player}</span>
          <>{SEARCHED_FOR}</>
          <>{PLACES[place].PREPOSITION || PREPOSITION_DEFAULT}</>
          <> </>
          <span>{PLACES[place].NAME}</span>
          <>{FOUND_AT}</>
        </Text>
      </header>

      <main>
        <Styled.Header>
          <Text size="lg">
            <>{name}</>
            <> </>
            <>{POKEMON_GENDERS[gender]}</>
          </Text>

          <Picture src={sprite} alt={name} w={100} />

          <Styled.TypesWrapper>
            {types.map((typeItem) => (
              <Styled.Type key={typeItem} type={typeItem}>
                {typeItem}
              </Styled.Type>
            ))}
          </Styled.TypesWrapper>
        </Styled.Header>

        <Styled.Info>
          <Text light>
            <>{LEVEL_TITLE}</>
            <> </>
            <>{level}</>
          </Text>

          <Text light>{abilities[ability - 1]}</Text>
        </Styled.Info>

        <Styled.Moveset>
          <Text semibold>{MOVESET_TITLE}</Text>

          {displayedMoveset.map((moveItem, moveKey) => (
            <Text light key={moveItem || moveKey}>
              - {moveItem}
            </Text>
          ))}
        </Styled.Moveset>
      </main>

      <footer>
        <Text size="sm" light>
          {rollDate}
        </Text>
      </footer>
    </Styled.RollItemtWrapper>
  )
}
