import { PokemonProps } from '@/Utils/Props'

      export const WOOPER_PALDEA: PokemonProps = {
        id: 'WOOPER_PALDEA',
        number: '10253',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png',
        name: 'Wooper',
        types: ['poison','ground'],
        abilities: ['Poison Point','Water Absorb','Unaware'],
        movepool: [{
          name: 'Tail Whip',
          level: '1'
        },{
          name: 'Mud Shot',
          level: '1'
        },{
          name: 'Tackle',
          level: '4'
        },{
          name: 'Poison Tail',
          level: '8'
        },{
          name: 'Toxic Spikes',
          level: '12'
        },{
          name: 'Slam',
          level: '16'
        },{
          name: 'Yawn',
          level: '21'
        },{
          name: 'Poison Jab',
          level: '24'
        },{
          name: 'Sludge Wave',
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