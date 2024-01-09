import { PokemonProps } from '@/Utils/Props'

      export const TYROGUE: PokemonProps = {
        id: 'TYROGUE',
        number: '236',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
        name: 'Tyrogue',
        types: ['fighting'],
        abilities: ['Guts','Steadfast','Vital Spirit'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Focus Energy',
          level: '1'
        },{
          name: 'Foresight',
          level: '1'
        },{
          name: 'Fake Out',
          level: '1'
        },{
          name: 'Helping Hand',
          level: '1'
        }],
      }