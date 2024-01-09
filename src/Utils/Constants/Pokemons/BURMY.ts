import { PokemonProps } from '@/Utils/Props'

      export const BURMY: PokemonProps = {
        id: 'BURMY',
        number: '412',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png',
        name: 'Burmy',
        types: ['bug'],
        abilities: ['Shed Skin','Overcoat'],
        movepool: [{
          name: 'Protect',
          level: '1'
        },{
          name: 'Tackle',
          level: '10'
        },{
          name: 'Bug Bite',
          level: '15'
        },{
          name: 'String Shot',
          level: '20'
        },{
          name: 'Hidden Power',
          level: '20'
        }],
      }