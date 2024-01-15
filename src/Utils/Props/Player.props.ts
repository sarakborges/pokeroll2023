import { CharacterProps } from './Characeter.props'

export type PlayerProps = {
  id: string
  name: string
  pronouns: string
  season: 'Verão' | 'Inverno' | 'Outono' | 'Primavera'
  points: number
  characters?: CharacterProps[]
}
