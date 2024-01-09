import { PokemonProps } from '@/Utils/Props'

      export const WEEDLE: PokemonProps = {
        id: 'WEEDLE',
        number: '13',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
        name: 'Weedle',
        types: ['bug','poison'],
        abilities: ['Shield Dust','Run Away'],
        movepool: [{
          name: 'Poison Sting',
          level: '1'
        },{
          name: 'String Shot',
          level: '1'
        },{
          name: 'Bug Bite',
          level: '9'
        }],
      }