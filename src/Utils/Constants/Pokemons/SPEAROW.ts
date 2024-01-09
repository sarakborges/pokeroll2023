import { PokemonProps } from '@/Utils/Props'

      export const SPEAROW: PokemonProps = {
        id: 'SPEAROW',
        number: '21',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
        name: 'Spearow',
        types: ['normal','flying'],
        abilities: ['Keen Eye','Sniper'],
        movepool: [{
          name: 'Growl',
          level: '1'
        },{
          name: 'Peck',
          level: '1'
        },{
          name: 'Leer',
          level: '4'
        },{
          name: 'Pursuit',
          level: '8'
        },{
          name: 'Assurance',
          level: '8'
        },{
          name: 'Fury Attack',
          level: '11'
        },{
          name: 'Aerial Ace',
          level: '15'
        },{
          name: 'Wing Attack',
          level: '18'
        },{
          name: 'Mirror Move',
          level: '19'
        },{
          name: 'Take Down',
          level: '22'
        },{
          name: 'Agility',
          level: '25'
        },{
          name: 'Focus Energy',
          level: '29'
        },{
          name: 'Roost',
          level: '32'
        },{
          name: 'Drill Peck',
          level: '36'
        }],
      }