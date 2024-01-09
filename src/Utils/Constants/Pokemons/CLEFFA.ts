import { PokemonProps } from '@/Utils/Props'

      export const CLEFFA: PokemonProps = {
        id: 'CLEFFA',
        number: '173',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
        name: 'Cleffa',
        types: ['fairy'],
        abilities: ['Cute Charm','Magic Guard','Friend Guard'],
        movepool: [{
          name: 'Pound',
          level: '1'
        },{
          name: 'Splash',
          level: '1'
        },{
          name: 'Copycat',
          level: '1'
        },{
          name: 'Sing',
          level: '4'
        },{
          name: 'Sweet Kiss',
          level: '8'
        },{
          name: 'Disarming Voice',
          level: '12'
        },{
          name: 'Encore',
          level: '16'
        },{
          name: 'Magical Leaf',
          level: '16'
        },{
          name: 'Charm',
          level: '20'
        }],
      }