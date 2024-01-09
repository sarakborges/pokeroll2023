import { PokemonProps } from '@/Utils/Props'

      export const PICHU: PokemonProps = {
        id: 'PICHU',
        number: '172',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
        name: 'Pichu',
        types: ['electric'],
        abilities: ['Static','Lightning Rod'],
        movepool: [{
          name: 'Tail Whip',
          level: '1'
        },{
          name: 'Thunder Shock',
          level: '1'
        },{
          name: 'Play Nice',
          level: '4'
        },{
          name: 'Sweet Kiss',
          level: '8'
        },{
          name: 'Nuzzle',
          level: '12'
        },{
          name: 'Nasty Plot',
          level: '16'
        },{
          name: 'Thunder Wave',
          level: '18'
        },{
          name: 'Charm',
          level: '20'
        }],
      }