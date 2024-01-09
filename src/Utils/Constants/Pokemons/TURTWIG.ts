import { PokemonProps } from '@/Utils/Props'

      export const TURTWIG: PokemonProps = {
        id: 'TURTWIG',
        number: '387',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
        name: 'Turtwig',
        types: ['grass'],
        abilities: ['Overgrow','Shell Armor'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Withdraw',
          level: '5'
        },{
          name: 'Leafage',
          level: '6'
        },{
          name: 'Absorb',
          level: '9'
        },{
          name: 'Growth',
          level: '10'
        },{
          name: 'Razor Leaf',
          level: '13'
        },{
          name: 'Curse',
          level: '17'
        },{
          name: 'Bite',
          level: '21'
        },{
          name: 'Mega Drain',
          level: '25'
        },{
          name: 'Leech Seed',
          level: '29'
        },{
          name: 'Synthesis',
          level: '33'
        },{
          name: 'Crunch',
          level: '37'
        },{
          name: 'Giga Drain',
          level: '41'
        },{
          name: 'Leaf Storm',
          level: '45'
        }],
      }