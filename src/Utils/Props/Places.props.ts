import { PokemonProps } from './Pokemon.props'

export type PlacesNames = 'CEMETERY'

export type PlaceProps = {
  NAME: string
  PREPOSITION?: string
  POKEMONS_LIST: PokemonProps[]
}
