import { PokemonProps } from '@/Utils/Props'

      export const SEWADDLE: PokemonProps = {
        id: 'SEWADDLE',
        number: '540',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png',
        name: 'Sewaddle',
        types: ['bug','grass'],
        abilities: ['Swarm','Chlorophyll','Overcoat'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'String Shot',
          level: '1'
        },{
          name: 'Bug Bite',
          level: '8'
        },{
          name: 'Razor Leaf',
          level: '15'
        },{
          name: 'Struggle Bug',
          level: '22'
        },{
          name: 'Endure',
          level: '29'
        },{
          name: 'Sticky Web',
          level: '31'
        },{
          name: 'Bug Buzz',
          level: '36'
        },{
          name: 'Flail',
          level: '43'
        }],
      }