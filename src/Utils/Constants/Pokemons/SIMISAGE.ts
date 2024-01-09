import { PokemonProps } from '@/Utils/Props'

      export const SIMISAGE: PokemonProps = {
        id: 'SIMISAGE',
        number: '512',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png',
        name: 'Simisage',
        types: ['grass'],
        abilities: ['Gluttony','Overgrow'],
        movepool: [{
          name: 'Leer',
          level: '1'
        },{
          name: 'Lick',
          level: '1'
        },{
          name: 'Fury Swipes',
          level: '1'
        },{
          name: 'Seed Bomb',
          level: '1'
        }],
      }