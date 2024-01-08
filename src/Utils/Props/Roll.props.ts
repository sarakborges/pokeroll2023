import { PlacesNames } from './Places.props'

export type RollProps = {
  id: string
  player: string
  place: PlacesNames
  pokemon: string
  gender: 'M' | 'F' | 'G'
  level: number
  ability: number
  time: Date
}
