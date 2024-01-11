import { PlacesNames } from './Places.props'

export type RollProps = {
  id: string
  character: string
  place: PlacesNames
  pokemon: string
  gender: 'M' | 'F' | 'G'
  level: number
  ability: number
  time: Date
}
