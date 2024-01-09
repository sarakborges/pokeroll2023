import { PokemonProps } from '@/Utils/Props'

      export const COMBEE: PokemonProps = {
        id: 'COMBEE',
        number: '415',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png',
        name: 'Combee',
        types: ['bug','flying'],
        abilities: ['Honey Gather','Hustle'],
        movepool: [{
          name: 'Gust',
          level: '1'
        },{
          name: 'Sweet Scent',
          level: '1'
        },{
          name: 'Bug Bite',
          level: '1'
        },{
          name: 'Struggle Bug',
          level: '1'
        },{
          name: 'Bug Buzz',
          level: '29'
        }],
      }