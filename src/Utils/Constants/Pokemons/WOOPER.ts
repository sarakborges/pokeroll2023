import { PokemonProps } from '@/Utils/Props'

      export const WOOPER: PokemonProps = {
        id: 'WOOPER',
        number: '194',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
        name: 'Wooper',
        types: ['water','ground'],
        abilities: ['Damp','Water Absorb','Unaware'],
        movepool: [{
          name: 'Tail Whip',
          level: '1'
        },{
          name: 'Water Gun',
          level: '1'
        },{
          name: 'Rain Dance',
          level: '4'
        },{
          name: 'Mud Sport',
          level: '5'
        },{
          name: 'Mud Shot',
          level: '8'
        },{
          name: 'Mist',
          level: '12'
        },{
          name: 'Haze',
          level: '12'
        },{
          name: 'Slam',
          level: '16'
        },{
          name: 'Mud Bomb',
          level: '19'
        },{
          name: 'Yawn',
          level: '21'
        },{
          name: 'Aqua Tail',
          level: '24'
        },{
          name: 'Muddy Water',
          level: '28'
        },{
          name: 'Amnesia',
          level: '32'
        },{
          name: 'Toxic',
          level: '36'
        },{
          name: 'Earthquake',
          level: '40'
        }],
      }