export type Types =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'

type MoveProps = {
  level: number
  name: string
}

export type PokemonProps = {
  id: number
  name: string
  types: Types[]
  abilities: string[]
  movepool: MoveProps[]
}
