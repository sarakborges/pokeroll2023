import { CharacterProps } from './Characeter.props'

export type PlayerProps = {
  id: string
  name: string
  points: number
  characters?: CharacterProps[]
}
