import { CharacterProps } from './Characeter.props'

export type PlayerProps = {
  id: string
  name: string
  characters?: CharacterProps[]
}
