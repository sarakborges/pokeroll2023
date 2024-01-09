import { PokemonProps } from '@/Utils/Props'

      export const ESPURR: PokemonProps = {
        id: 'ESPURR',
        number: '677',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png',
        name: 'Espurr',
        types: ['psychic'],
        abilities: ['Keen Eye','Infiltrator','Own Tempo'],
        movepool: [{
          name: 'Scratch',
          level: '1'
        },{
          name: 'Leer',
          level: '1'
        },{
          name: 'Fake Out',
          level: '3'
        },{
          name: 'Disarming Voice',
          level: '6'
        },{
          name: 'Confusion',
          level: '9'
        },{
          name: 'Covet',
          level: '18'
        },{
          name: 'Psybeam',
          level: '21'
        },{
          name: 'Light Screen',
          level: '30'
        },{
          name: 'Reflect',
          level: '30'
        },{
          name: 'Psyshock',
          level: '33'
        }],
      }