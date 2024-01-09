import { PokemonProps } from '@/Utils/Props'

      export const NINCADA: PokemonProps = {
        id: 'NINCADA',
        number: '290',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png',
        name: 'Nincada',
        types: ['bug','ground'],
        abilities: ['Compound Eyes','Run Away'],
        movepool: [{
          name: 'Scratch',
          level: '1'
        },{
          name: 'Sand Attack',
          level: '1'
        },{
          name: 'Harden',
          level: '5'
        },{
          name: 'Leech Life',
          level: '5'
        },{
          name: 'False Swipe',
          level: '10'
        },{
          name: 'Mud Slap',
          level: '15'
        },{
          name: 'Absorb',
          level: '21'
        },{
          name: 'Metal Claw',
          level: '25'
        },{
          name: 'Bide',
          level: '29'
        },{
          name: 'Fury Swipes',
          level: '30'
        },{
          name: 'Mind Reader',
          level: '35'
        },{
          name: 'Dig',
          level: '40'
        }],
      }