import { PokemonProps } from '@/Utils/Props'

      export const SMOLIV: PokemonProps = {
        id: 'SMOLIV',
        number: '928',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png',
        name: 'Smoliv',
        types: ['grass','normal'],
        abilities: ['Early Bird','Harvest'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Sweet Scent',
          level: '1'
        },{
          name: 'Absorb',
          level: '5'
        },{
          name: 'Growth',
          level: '7'
        },{
          name: 'Razor Leaf',
          level: '10'
        },{
          name: 'Helping Hand',
          level: '13'
        },{
          name: 'Flail',
          level: '16'
        },{
          name: 'Mega Drain',
          level: '20'
        },{
          name: 'Grassy Terrain',
          level: '23'
        },{
          name: 'Seed Bomb',
          level: '27'
        },{
          name: 'Energy Ball',
          level: '30'
        },{
          name: 'Leech Seed',
          level: '34'
        },{
          name: 'Terrain Pulse',
          level: '38'
        }],
      }