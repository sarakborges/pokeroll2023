import { PokemonProps } from '@/Utils/Props'

      export const HATTREM: PokemonProps = {
        id: 'HATTREM',
        number: '857',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png',
        name: 'Hattrem',
        types: ['psychic'],
        abilities: ['Healer','Anticipation','Magic Bounce'],
        movepool: [{
          name: 'Brutal Swing',
          level: '0'
        },{
          name: 'Confusion',
          level: '1'
        },{
          name: 'Disarming Voice',
          level: '1'
        },{
          name: 'Play Nice',
          level: '1'
        },{
          name: 'Life Dew',
          level: '1'
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
          level: '37'
        },{
          name: 'Psychic',
          level: '44'
        },{
          name: 'Healing Wish',
          level: '51'
        }],
      }