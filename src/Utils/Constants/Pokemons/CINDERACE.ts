import { PokemonProps } from '@/Utils/Props'

      export const CINDERACE: PokemonProps = {
        id: 'CINDERACE',
        number: '815',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png',
        name: 'Cinderace',
        types: ['fire'],
        abilities: ['Blaze','Libero'],
        movepool: [{
          name: 'Pyro Ball',
          level: '0'
        },{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Growl',
          level: '1'
        },{
          name: 'Ember',
          level: '1'
        },{
          name: 'Quick Attack',
          level: '1'
        },{
          name: 'Feint',
          level: '1'
        },{
          name: 'Double Kick',
          level: '12'
        },{
          name: 'Flame Charge',
          level: '19'
        },{
          name: 'Agility',
          level: '24'
        },{
          name: 'Headbutt',
          level: '30'
        },{
          name: 'Counter',
          level: '38'
        },{
          name: 'Bounce',
          level: '46'
        },{
          name: 'Double Edge',
          level: '54'
        },{
          name: 'Court Change',
          level: '62'
        }],
      }