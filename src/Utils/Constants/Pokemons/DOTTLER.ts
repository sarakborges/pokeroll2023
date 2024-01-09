import { PokemonProps } from '@/Utils/Props'

      export const DOTTLER: PokemonProps = {
        id: 'DOTTLER',
        number: '825',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png',
        name: 'Dottler',
        types: ['bug','psychic'],
        abilities: ['Swarm','Compound Eyes','Telepathy'],
        movepool: [{
          name: 'Confusion',
          level: '1'
        },{
          name: 'Light Screen',
          level: '1'
        },{
          name: 'Reflect',
          level: '1'
        },{
          name: 'Struggle Bug',
          level: '1'
        }],
      }