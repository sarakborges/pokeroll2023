import { PokemonProps } from '@/Utils/Props'

      export const SHROOMISH: PokemonProps = {
        id: 'SHROOMISH',
        number: '285',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png',
        name: 'Shroomish',
        types: ['grass'],
        abilities: ['Effect Spore','Poison Heal','Quick Feet'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Absorb',
          level: '1'
        },{
          name: 'Stun Spore',
          level: '5'
        },{
          name: 'Leech Seed',
          level: '8'
        },{
          name: 'Mega Drain',
          level: '12'
        },{
          name: 'Headbutt',
          level: '15'
        },{
          name: 'Poison Powder',
          level: '19'
        },{
          name: 'Worry Seed',
          level: '22'
        },{
          name: 'Giga Drain',
          level: '26'
        },{
          name: 'Growth',
          level: '29'
        },{
          name: 'Toxic',
          level: '33'
        },{
          name: 'Seed Bomb',
          level: '36'
        },{
          name: 'Spore',
          level: '40'
        }],
      }