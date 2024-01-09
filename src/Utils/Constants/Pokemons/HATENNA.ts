import { PokemonProps } from '@/Utils/Props'

      export const HATENNA: PokemonProps = {
        id: 'HATENNA',
        number: '856',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png',
        name: 'Hatenna',
        types: ['psychic'],
        abilities: ['Healer','Anticipation','Magic Bounce'],
        movepool: [{
          name: 'Confusion',
          level: '1'
        },{
          name: 'Play Nice',
          level: '1'
        },{
          name: 'Life Dew',
          level: '5'
        },{
          name: 'Disarming Voice',
          level: '10'
        },{
          name: 'Aromatherapy',
          level: '15'
        },{
          name: 'Aromatic Mist',
          level: '15'
        },{
          name: 'Psybeam',
          level: '20'
        },{
          name: 'Heal Pulse',
          level: '25'
        },{
          name: 'Dazzling Gleam',
          level: '30'
        },{
          name: 'Calm Mind',
          level: '35'
        },{
          name: 'Psychic',
          level: '40'
        },{
          name: 'Healing Wish',
          level: '45'
        }],
      }