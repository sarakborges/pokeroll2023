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
  level: string
  name: string
}

export type PokemonProps = {
  id: string
  number: string
  sprite: string
  name: string
  types: Types[]
  abilities: string[]
  movepool: MoveProps[]
}
