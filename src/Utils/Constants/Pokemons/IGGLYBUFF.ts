import { PokemonProps } from '@/Utils/Props'

      export const IGGLYBUFF: PokemonProps = {
        id: 'IGGLYBUFF',
        number: '174',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
        name: 'Igglybuff',
        types: ['normal','fairy'],
        abilities: ['Cute Charm','Competitive','Friend Guard'],
        movepool: [{
          name: 'Pound',
          level: '1'
        },{
          name: 'Sing',
          level: '1'
        },{
          name: 'Copycat',
          level: '1'
        },{
          name: 'Defense Curl',
          level: '4'
        },{
          name: 'Sweet Kiss',
          level: '8'
        },{
          name: 'Disarming Voice',
          level: '12'
        },{
          name: 'Disable',
          level: '16'
        },{
          name: 'Charm',
          level: '20'
        }],
      }