import { PokemonProps } from '@/Utils/Props'

      export const SANDACONDA: PokemonProps = {
        id: 'SANDACONDA',
        number: '844',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png',
        name: 'Sandaconda',
        types: ['ground'],
        abilities: ['Sand Spit','Shed Skin','Sand Veil'],
        movepool: [{
          name: 'Sand Attack',
          level: '1'
        },{
          name: 'Wrap',
          level: '1'
        },{
          name: 'Minimize',
          level: '1'
        },{
          name: 'Skull Bash',
          level: '1'
        },{
          name: 'Brutal Swing',
          level: '1'
        },{
          name: 'Bulldoze',
          level: '15'
        },{
          name: 'Headbutt',
          level: '20'
        },{
          name: 'Glare',
          level: '25'
        },{
          name: 'Dig',
          level: '30'
        },{
          name: 'Sandstorm',
          level: '35'
        },{
          name: 'Slam',
          level: '42'
        },{
          name: 'Coil',
          level: '49'
        },{
          name: 'Sand Tomb',
          level: '51'
        }],
      }