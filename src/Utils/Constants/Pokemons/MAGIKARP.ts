import { PokemonProps } from '@/Utils/Props'

      export const MAGIKARP: PokemonProps = {
        id: 'MAGIKARP',
        number: '129',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
        name: 'Magikarp',
        types: ['water'],
        abilities: ['Swift Swim','Rattled'],
        movepool: [{
          name: 'Splash',
          level: '1'
        },{
          name: 'Tackle',
          level: '15'
        },{
          name: 'Flail',
          level: '25'
        }],
      }