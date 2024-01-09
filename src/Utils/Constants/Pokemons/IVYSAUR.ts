import { PokemonProps } from '@/Utils/Props'

      export const IVYSAUR: PokemonProps = {
        id: 'IVYSAUR',
        number: '2',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        name: 'Ivysaur',
        types: ['grass','poison'],
        abilities: ['Overgrow','Chlorophyll'],
        movepool: [{
          name: 'Vine Whip',
          level: '1'
        },{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Growl',
          level: '1'
        },{
          name: 'Growth',
          level: '1'
        },{
          name: 'Leech Seed',
          level: '9'
        },{
          name: 'Razor Leaf',
          level: '12'
        },{
          name: 'Poison Powder',
          level: '15'
        },{
          name: 'Sleep Powder',
          level: '15'
        },{
          name: 'Seed Bomb',
          level: '20'
        },{
          name: 'Take Down',
          level: '25'
        },{
          name: 'Sweet Scent',
          level: '30'
        },{
          name: 'Synthesis',
          level: '35'
        },{
          name: 'Worry Seed',
          level: '40'
        },{
          name: 'Double Edge',
          level: '45'
        },{
          name: 'Solar Beam',
          level: '50'
        }],
      }