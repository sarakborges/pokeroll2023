import { PokemonProps } from '@/Utils/Props'

      export const TADBULB: PokemonProps = {
        id: 'TADBULB',
        number: '938',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png',
        name: 'Tadbulb',
        types: ['electric'],
        abilities: ['Own Tempo','Static','Damp'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Mud Slap',
          level: '1'
        },{
          name: 'Thunder Shock',
          level: '7'
        },{
          name: 'Water Gun',
          level: '11'
        },{
          name: 'Charge',
          level: '17'
        },{
          name: 'Spark',
          level: '21'
        },{
          name: 'Mud Shot',
          level: '24'
        },{
          name: 'Flail',
          level: '25'
        },{
          name: 'Discharge',
          level: '32'
        },{
          name: 'Weather Ball',
          level: '36'
        },{
          name: 'Electric Terrain',
          level: '40'
        },{
          name: 'Sucker Punch',
          level: '45'
        },{
          name: 'Zap Cannon',
          level: '50'
        }],
      }