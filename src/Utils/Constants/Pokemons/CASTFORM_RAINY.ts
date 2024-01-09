import { PokemonProps } from '@/Utils/Props'

      export const CASTFORM_RAINY: PokemonProps = {
        id: 'CASTFORM_RAINY',
        number: '10014',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png',
        name: 'Castform',
        types: ['water'],
        abilities: ['Forecast'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Ember',
          level: '10'
        },{
          name: 'Water Gun',
          level: '10'
        },{
          name: 'Powder Snow',
          level: '10'
        },{
          name: 'Headbutt',
          level: '15'
        },{
          name: 'Rain Dance',
          level: '20'
        },{
          name: 'Sunny Day',
          level: '20'
        },{
          name: 'Hail',
          level: '20'
        },{
          name: 'Weather Ball',
          level: '25'
        },{
          name: 'Hydro Pump',
          level: '35'
        },{
          name: 'Blizzard',
          level: '35'
        },{
          name: 'Fire Blast',
          level: '35'
        },{
          name: 'Hurricane',
          level: '45'
        }],
      }