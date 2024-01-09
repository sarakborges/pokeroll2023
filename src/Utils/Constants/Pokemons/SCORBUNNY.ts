import { PokemonProps } from '@/Utils/Props'

      export const SCORBUNNY: PokemonProps = {
        id: 'SCORBUNNY',
        number: '813',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png',
        name: 'Scorbunny',
        types: ['fire'],
        abilities: ['Blaze','Libero'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Growl',
          level: '1'
        },{
          name: 'Ember',
          level: '6'
        },{
          name: 'Quick Attack',
          level: '8'
        },{
          name: 'Double Kick',
          level: '12'
        },{
          name: 'Flame Charge',
          level: '17'
        },{
          name: 'Agility',
          level: '20'
        },{
          name: 'Headbutt',
          level: '24'
        },{
          name: 'Counter',
          level: '28'
        },{
          name: 'Bounce',
          level: '32'
        },{
          name: 'Double Edge',
          level: '36'
        }],
      }