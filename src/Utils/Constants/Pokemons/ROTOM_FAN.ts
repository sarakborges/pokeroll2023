import { PokemonProps } from '@/Utils/Props'

      export const ROTOM_FAN: PokemonProps = {
        id: 'ROTOM_FAN',
        number: '10011',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png',
        name: 'Rotom',
        types: ['electric','flying'],
        abilities: ['Levitate'],
        movepool: [{
          name: 'Double Team',
          level: '1'
        },{
          name: 'Astonish',
          level: '1'
        },{
          name: 'Thunder Shock',
          level: '5'
        },{
          name: 'Confuse Ray',
          level: '10'
        },{
          name: 'Charge',
          level: '15'
        },{
          name: 'Electro Ball',
          level: '20'
        },{
          name: 'Thunder Wave',
          level: '25'
        },{
          name: 'Ominous Wind',
          level: '29'
        },{
          name: 'Shock Wave',
          level: '30'
        },{
          name: 'Hex',
          level: '35'
        },{
          name: 'Substitute',
          level: '40'
        },{
          name: 'Trick',
          level: '45'
        },{
          name: 'Discharge',
          level: '50'
        },{
          name: 'Uproar',
          level: '55'
        }],
      }