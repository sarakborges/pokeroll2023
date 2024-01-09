import { PokemonProps } from '@/Utils/Props'

      export const MILCERY: PokemonProps = {
        id: 'MILCERY',
        number: '868',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png',
        name: 'Milcery',
        types: ['fairy'],
        abilities: ['Sweet Veil','Aroma Veil'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Aromatic Mist',
          level: '1'
        },{
          name: 'Sweet Kiss',
          level: '5'
        },{
          name: 'Sweet Scent',
          level: '10'
        },{
          name: 'Draining Kiss',
          level: '15'
        },{
          name: 'Aromatherapy',
          level: '20'
        },{
          name: 'Attract',
          level: '25'
        },{
          name: 'Acid Armor',
          level: '30'
        },{
          name: 'Dazzling Gleam',
          level: '35'
        },{
          name: 'Recover',
          level: '40'
        },{
          name: 'Misty Terrain',
          level: '45'
        },{
          name: 'Entrainment',
          level: '50'
        }],
      }