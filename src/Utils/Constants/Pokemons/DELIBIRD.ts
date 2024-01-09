import { PokemonProps } from '@/Utils/Props'

      export const DELIBIRD: PokemonProps = {
        id: 'DELIBIRD',
        number: '225',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
        name: 'Delibird',
        types: ['ice','flying'],
        abilities: ['Vital Spirit','Hustle','Insomnia'],
        movepool: [{
          name: 'Present',
          level: '1'
        },{
          name: 'Drill Peck',
          level: '25'
        }],
      }