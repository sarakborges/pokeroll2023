import { PokemonProps } from '@/Utils/Props'

      export const ELECTRIKE: PokemonProps = {
        id: 'ELECTRIKE',
        number: '309',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
        name: 'Electrike',
        types: ['electric'],
        abilities: ['Static','Lightning Rod','Minus'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Thunder Wave',
          level: '1'
        },{
          name: 'Leer',
          level: '4'
        },{
          name: 'Howl',
          level: '8'
        },{
          name: 'Quick Attack',
          level: '12'
        },{
          name: 'Spark',
          level: '13'
        },{
          name: 'Odor Sleuth',
          level: '16'
        },{
          name: 'Shock Wave',
          level: '16'
        },{
          name: 'Bite',
          level: '20'
        },{
          name: 'Thunder Fang',
          level: '24'
        },{
          name: 'Roar',
          level: '28'
        },{
          name: 'Discharge',
          level: '32'
        },{
          name: 'Charge',
          level: '36'
        },{
          name: 'Wild Charge',
          level: '40'
        },{
          name: 'Thunder',
          level: '44'
        }],
      }