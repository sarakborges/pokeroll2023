import { PokemonProps } from '@/Utils/Props'

      export const CLAMPERL: PokemonProps = {
        id: 'CLAMPERL',
        number: '366',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png',
        name: 'Clamperl',
        types: ['water'],
        abilities: ['Shell Armor','Rattled'],
        movepool: [{
          name: 'Water Gun',
          level: '1'
        },{
          name: 'Clamp',
          level: '1'
        },{
          name: 'Whirlpool',
          level: '1'
        },{
          name: 'Iron Defense',
          level: '1'
        },{
          name: 'Shell Smash',
          level: '50'
        }],
      }