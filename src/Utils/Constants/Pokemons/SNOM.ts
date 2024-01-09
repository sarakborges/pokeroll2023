import { PokemonProps } from '@/Utils/Props'

      export const SNOM: PokemonProps = {
        id: 'SNOM',
        number: '872',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png',
        name: 'Snom',
        types: ['ice','bug'],
        abilities: ['Shield Dust','Ice Scales'],
        movepool: [{
          name: 'Powder Snow',
          level: '1'
        },{
          name: 'Struggle Bug',
          level: '1'
        }],
      }