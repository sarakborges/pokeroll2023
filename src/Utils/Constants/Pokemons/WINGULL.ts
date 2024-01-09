import { PokemonProps } from '@/Utils/Props'

      export const WINGULL: PokemonProps = {
        id: 'WINGULL',
        number: '278',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
        name: 'Wingull',
        types: ['water','flying'],
        abilities: ['Keen Eye','Hydration','Rain Dish'],
        movepool: [{
          name: 'Growl',
          level: '1'
        },{
          name: 'Water Gun',
          level: '1'
        },{
          name: 'Quick Attack',
          level: '5'
        },{
          name: 'Supersonic',
          level: '10'
        },{
          name: 'Wing Attack',
          level: '15'
        },{
          name: 'Water Pulse',
          level: '20'
        },{
          name: 'Air Cutter',
          level: '22'
        },{
          name: 'Agility',
          level: '26'
        },{
          name: 'Pursuit',
          level: '26'
        },{
          name: 'Aerial Ace',
          level: '29'
        },{
          name: 'Air Slash',
          level: '30'
        },{
          name: 'Mist',
          level: '35'
        },{
          name: 'Roost',
          level: '40'
        },{
          name: 'Hurricane',
          level: '45'
        }],
      }