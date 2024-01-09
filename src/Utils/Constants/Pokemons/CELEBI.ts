import { PokemonProps } from '@/Utils/Props'

      export const CELEBI: PokemonProps = {
        id: 'CELEBI',
        number: '251',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
        name: 'Celebi',
        types: ['psychic','grass'],
        abilities: ['Natural Cure'],
        movepool: [{
          name: 'Confusion',
          level: '1'
        },{
          name: 'Heal Bell',
          level: '1'
        },{
          name: 'Safeguard',
          level: '10'
        },{
          name: 'Magical Leaf',
          level: '10'
        },{
          name: 'Baton Pass',
          level: '20'
        },{
          name: 'Ancient Power',
          level: '30'
        },{
          name: 'Life Dew',
          level: '40'
        },{
          name: 'Natural Gift',
          level: '46'
        },{
          name: 'Leech Seed',
          level: '50'
        },{
          name: 'Heal Block',
          level: '55'
        },{
          name: 'Recover',
          level: '60'
        },{
          name: 'Future Sight',
          level: '70'
        },{
          name: 'Healing Wish',
          level: '80'
        },{
          name: 'Leaf Storm',
          level: '90'
        },{
          name: 'Perish Song',
          level: '100'
        }],
      }