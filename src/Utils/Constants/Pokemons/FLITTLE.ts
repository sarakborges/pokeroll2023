import { PokemonProps } from '@/Utils/Props'

      export const FLITTLE: PokemonProps = {
        id: 'FLITTLE',
        number: '955',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png',
        name: 'Flittle',
        types: ['psychic'],
        abilities: ['Anticipation','Frisk','Speed Boost'],
        movepool: [{
          name: 'Growl',
          level: '1'
        },{
          name: 'Peck',
          level: '1'
        },{
          name: 'Confusion',
          level: '5'
        },{
          name: 'Baby Doll Eyes',
          level: '8'
        },{
          name: 'Disarming Voice',
          level: '11'
        },{
          name: 'Quick Attack',
          level: '15'
        },{
          name: 'Psybeam',
          level: '19'
        },{
          name: 'Pluck',
          level: '24'
        },{
          name: 'Agility',
          level: '29'
        },{
          name: 'Uproar',
          level: '34'
        }],
      }