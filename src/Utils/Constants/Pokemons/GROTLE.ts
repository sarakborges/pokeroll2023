import { PokemonProps } from '@/Utils/Props'

      export const GROTLE: PokemonProps = {
        id: 'GROTLE',
        number: '388',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
        name: 'Grotle',
        types: ['grass'],
        abilities: ['Overgrow','Shell Armor'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Absorb',
          level: '1'
        },{
          name: 'Withdraw',
          level: '1'
        },{
          name: 'Leafage',
          level: '6'
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
          level: '22'
        },{
          name: 'Mega Drain',
          level: '27'
        },{
          name: 'Leech Seed',
          level: '32'
        },{
          name: 'Synthesis',
          level: '37'
        },{
          name: 'Crunch',
          level: '42'
        },{
          name: 'Giga Drain',
          level: '47'
        },{
          name: 'Leaf Storm',
          level: '52'
        }],
      }