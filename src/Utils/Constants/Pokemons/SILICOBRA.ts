import { PokemonProps } from '@/Utils/Props'

      export const SILICOBRA: PokemonProps = {
        id: 'SILICOBRA',
        number: '843',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png',
        name: 'Silicobra',
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
          level: '5'
        },{
          name: 'Brutal Swing',
          level: '10'
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
          level: '40'
        },{
          name: 'Coil',
          level: '45'
        },{
          name: 'Sand Tomb',
          level: '50'
        }],
      }