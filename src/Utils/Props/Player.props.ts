import { CharacterProps } from './Characeter.props'

export type PlayerProps = {
  id: string
  name: string
  pronouns: string
  season: 'summer' | 'winter' | 'autumn' | 'spring'
  points: number
  characters?: CharacterProps[]
}
