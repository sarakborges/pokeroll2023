import { PokemonProps } from '@/Utils/Props'

      export const COSMOG: PokemonProps = {
        id: 'COSMOG',
        number: '789',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png',
        name: 'Cosmog',
        types: ['psychic'],
        abilities: ['Unaware'],
        movepool: [{
          name: 'Teleport',
          level: '1'
        },{
          name: 'Splash',
          level: '1'
        }],
      }