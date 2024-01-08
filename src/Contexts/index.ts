export { AppContext } from './App.context'
export { RollsContext } from './Rolls.context'
export { PlayersContext } from './Players.context'

import { AppProvider } from './App.context'
import { RollsProvider } from './Rolls.context'
import { PlayersProvider } from './Players.context'

export const PROVIDERS_LIST = [AppProvider, RollsProvider, PlayersProvider]
