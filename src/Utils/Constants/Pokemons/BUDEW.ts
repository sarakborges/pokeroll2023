import { PokemonProps } from '@/Utils/Props'

      export const BUDEW: PokemonProps = {
        id: 'BUDEW',
        number: '406',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png',
        name: 'Budew',
        types: ['grass','poison'],
        abilities: ['Natural Cure','Poison Point','Leaf Guard'],
        movepool: [{
          name: 'Absorb',
          level: '1'
        },{
          name: 'Growth',
          level: '1'
        },{
          name: 'Stun Spore',
          level: '1'
        },{
          name: 'Worry Seed',
          level: '1'
        },{
          name: 'Water Sport',
          level: '7'
        },{
          name: 'Mega Drain',
          level: '13'
        }],
      }